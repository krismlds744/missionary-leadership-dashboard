import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Search, UserRound, X } from 'lucide-react'
import { convertRoster, createDefaultProgress, milestoneTemplate, type ConvertRecord, type MilestoneProgress } from '../data/convertRetention'
import { supabase } from '../lib/supabase'

type ProgressStore = Record<string, MilestoneProgress[]>
type Category = 'Covenants' | 'Personal Growth' | 'Commandments' | 'Activity'
const sharedProgressId = 'stake-convert-progress'

const wards = ['All Wards', ...new Set(convertRoster.map((convert) => convert.ward))]
const categories: Category[] = ['Covenants', 'Personal Growth', 'Commandments', 'Activity']
const colors: Record<Category, { text: string; fill: string; track: string; panel: string }> = {
  Covenants: { text: 'text-rose-300', fill: '#fb4b4b', track: 'bg-rose-400/15', panel: 'border-rose-400/20' },
  'Personal Growth': { text: 'text-orange-300', fill: '#fb923c', track: 'bg-orange-400/15', panel: 'border-orange-400/20' },
  Commandments: { text: 'text-yellow-200', fill: '#fde047', track: 'bg-yellow-300/15', panel: 'border-yellow-300/20' },
  Activity: { text: 'text-emerald-300', fill: '#34d399', track: 'bg-emerald-400/15', panel: 'border-emerald-400/20' },
}
const itemIds: Record<Category, string[]> = {
  Covenants: ['confirmation', 'temple-recommend', 'aaronic', 'ancestor-ordinances', 'patriarchal', 'melchizedek-learn', 'melchizedek', 'temple-prep', 'endowment', 'sealing'],
  'Personal Growth': ['daily-scripture-study', 'daily-prayer', 'seminary-institute', 'mission-preparation', 'self-reliance', 'emotional-resiliency', 'receive-calling'],
  Commandments: ['sabbath', 'word-of-wisdom', 'law-of-chastity', 'tithing-fast-offering'],
  Activity: ['attend-ward-activity', 'stake-activity', 'family-history-activity', 'temple-activity', 'missionary-work-activity', 'community-service', 'family-home-evening'],
}

function loadProgress(): ProgressStore { try { const value = localStorage.getItem('mission-insights-convert-progress'); return value ? JSON.parse(value) as ProgressStore : {} } catch { return {} } }
function progressFor(convert: ConvertRecord, store: ProgressStore) {
  const saved = new Map((store[convert.id] ?? []).map((item) => [item.id, item]))
  return createDefaultProgress().map((item) => saved.get(item.id) ?? (item.id === 'confirmation' ? { ...item, status: 'completed' as const } : item))
}
function isComplete(status: MilestoneProgress['status']) { return status === 'completed' || status === 'not-applicable' }
function percentFor(convert: ConvertRecord, category: Category, store: ProgressStore) {
  const progress = progressFor(convert, store)
  const ids = itemIds[category]
  const completed = ids.filter((id) => isComplete(progress.find((item) => item.id === id)?.status ?? 'not-started')).length
  return completed / ids.length * 100
}
function initials(name: string) { return name.split(' ').map((part) => part[0]).slice(0, 2).join('') }

function Meter({ convert, category, store, large = false }: { convert: ConvertRecord; category: Category; store: ProgressStore; large?: boolean }) {
  const value = percentFor(convert, category, store)
  const style = colors[category]
  return <div className="space-y-1.5"><div className={`text-xs font-medium ${style.text}`}>{category}</div><div className={`${large ? 'h-4' : 'h-3'} w-full overflow-hidden rounded-full border border-white/10 ${style.track}`}><div className="h-full rounded-full shadow-[0_0_12px_rgba(255,255,255,0.18)] transition-[width] duration-500 ease-out" style={{ width: `${value}%`, backgroundColor: style.fill }} /></div><div className="text-right text-[0.68rem] font-semibold text-slate-400">{value}%</div></div>
}

function CompactMeter({ convert, category, store }: { convert: ConvertRecord; category: Category; store: ProgressStore }) {
  const value = percentFor(convert, category, store)
  const style = colors[category]
  return <div className="w-full" title={`${category}: ${value}%`}><div className={`h-3.5 w-full overflow-hidden rounded-full border border-white/10 ${style.track}`}><div className="h-full min-w-px rounded-full shadow-[0_0_8px_currentColor] transition-[width] duration-500" style={{ width: `${value}%`, backgroundColor: style.fill, color: style.fill }} /></div></div>
}

function OverviewRing({ category, value, size, thickness }: { category: Category; value: number; size: number; thickness: number }) {
  const style = colors[category]
  const radius = (size - thickness) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius
  const availableArc = circumference * 0.76
  const progressArc = availableArc * Math.min(value, 100) / 100
  return <div className="absolute inset-0 flex items-center justify-center"><svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`${category}: ${value}%`}><g transform={`rotate(-90 ${center} ${center})`}><circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={thickness} strokeDasharray={`${availableArc} ${circumference - availableArc}`} /><circle cx={center} cy={center} r={radius} fill="none" stroke={style.fill} strokeWidth={thickness} strokeDasharray={`${progressArc} ${circumference - progressArc}`} className="transition-[stroke-dasharray] duration-700" /></g></svg></div>
}

export default function Retention() {
  const [ward, setWard] = useState('All Wards')
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [openCategory, setOpenCategory] = useState<Category | null>('Covenants')
  const [store, setStore] = useState<ProgressStore>(loadProgress)
  const [syncStatus, setSyncStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let isMounted = true
    const loadSharedProgress = async () => {
      const { data, error } = await supabase.from('convert_progress').select('progress').eq('id', sharedProgressId).maybeSingle()
      if (!isMounted) return
      if (error) {
        setSyncStatus('error')
        return
      }
      if (data?.progress && typeof data.progress === 'object') setStore(data.progress as ProgressStore)
      setSyncStatus('ready')
    }
    void loadSharedProgress()

    const channel = supabase.channel('shared-convert-progress').on('postgres_changes', { event: '*', schema: 'public', table: 'convert_progress', filter: `id=eq.${sharedProgressId}` }, (payload) => {
      const nextProgress = (payload.new as { progress?: unknown }).progress
      if (nextProgress && typeof nextProgress === 'object') setStore(nextProgress as ProgressStore)
    }).subscribe()

    return () => {
      isMounted = false
      void supabase.removeChannel(channel)
    }
  }, [])

  const persistProgress = async (nextStore: ProgressStore) => {
    const { error } = await supabase.from('convert_progress').upsert({ id: sharedProgressId, progress: nextStore, updated_at: new Date().toISOString() })
    if (error) setSyncStatus('error')
  }

  const converts = useMemo(() => convertRoster.filter((convert) => (ward === 'All Wards' || convert.ward === ward) && convert.name.toLowerCase().includes(search.toLowerCase())), [search, ward])
  const selected = convertRoster.find((convert) => convert.id === selectedId) ?? null
  const selectedProgress = selected ? progressFor(selected, store) : []
  const overviewConverts = ward === 'All Wards' ? convertRoster : convertRoster.filter((convert) => convert.ward === ward)
  const stakeOverview = categories.map((category) => ({ category, value: overviewConverts.length ? Math.round(overviewConverts.reduce((sum, convert) => sum + percentFor(convert, category, store), 0) / overviewConverts.length * 10) / 10 : 0 }))

  const updateStatus = (milestoneId: string, status: MilestoneProgress['status']) => {
    if (!selected) return
    setStore((current) => {
      const latestProgress = progressFor(selected, current)
      const nextStore = { ...current, [selected.id]: latestProgress.map((item) => item.id === milestoneId ? { ...item, status } : item) }
      void persistProgress(nextStore)
      return nextStore
    })
  }
  const toggleItem = (milestoneId: string) => {
    if (!selected) return
    setStore((current) => {
      const latestProgress = progressFor(selected, current)
      const nextStore = { ...current, [selected.id]: latestProgress.map((item) => item.id === milestoneId ? { ...item, status: item.status === 'completed' ? 'not-started' as const : 'completed' as const } : item) }
      void persistProgress(nextStore)
      return nextStore
    })
  }

  return <div className="space-y-6 pb-10">
    <header className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.25)] backdrop-blur-xl sm:p-8"><p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">New Convert Retention</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Covenant Path</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Click a convert to open their checklist. Mark milestones completed or Not Applicable.</p>{syncStatus === 'loading' && <p className="mt-3 text-xs text-sky-200">Loading shared progress...</p>}{syncStatus === 'error' && <p className="mt-3 text-xs text-rose-300">Shared progress is unavailable. Complete the Supabase database setup to sync updates across devices.</p>}</header>
    <section className="grid gap-3 rounded-[22px] border border-white/10 bg-slate-950/50 p-4 backdrop-blur-xl sm:grid-cols-[1fr_1.5fr]"><label className="space-y-2"><span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Ward</span><select value={ward} onChange={(event) => { setWard(event.target.value); setSelectedId(null) }} className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50">{wards.map((option) => <option key={option}>{option}</option>)}</select></label><label className="space-y-2"><span className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-slate-500"><Search className="h-3.5 w-3.5" />Search recent converts</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name" className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50" /></label></section>
    <section className="rounded-[26px] border border-white/10 bg-slate-950/50 p-5 shadow-[0_24px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl sm:p-7"><div className="flex flex-col gap-8 lg:flex-row lg:items-center"><div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">{ward === 'All Wards' ? 'Stake overview' : 'Ward overview'}</p><h2 className="mt-1 text-2xl font-semibold text-white">{ward === 'All Wards' ? 'Recent convert progress' : `${ward} progress`}</h2><div className="mt-5 grid grid-cols-2 gap-3">{stakeOverview.map(({ category, value }) => <div key={category} className="rounded-xl border border-white/7 bg-white/[0.03] p-3"><p className={`text-xs font-medium ${colors[category].text}`}>{category}</p><p className="mt-1 text-xl font-semibold text-white">{value.toFixed(1)}%</p></div>)}</div></div><div className="relative mx-auto h-[280px] w-[280px] shrink-0"><div className="absolute inset-[35%] flex items-center justify-center rounded-full bg-slate-950 text-center"><div><p className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">{ward === 'All Wards' ? 'Stake' : 'Ward'}</p><p className="text-2xl font-semibold text-white">{(stakeOverview.reduce((sum, item) => sum + item.value, 0) / categories.length).toFixed(1)}%</p></div></div><div className="absolute inset-0"><OverviewRing category="Activity" value={stakeOverview.find((item) => item.category === 'Activity')?.value ?? 0} size={280} thickness={13} /><OverviewRing category="Commandments" value={stakeOverview.find((item) => item.category === 'Commandments')?.value ?? 0} size={228} thickness={13} /><OverviewRing category="Personal Growth" value={stakeOverview.find((item) => item.category === 'Personal Growth')?.value ?? 0} size={176} thickness={13} /><OverviewRing category="Covenants" value={stakeOverview.find((item) => item.category === 'Covenants')?.value ?? 0} size={124} thickness={13} /></div></div></div></section>
    <section className="rounded-[26px] border border-white/10 bg-slate-950/50 p-4 shadow-[0_24px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl sm:p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Directory</p><h2 className="mt-1 text-xl font-semibold text-white">Recent converts</h2></div><span className="text-xs text-slate-500">{converts.length} people</span></div><div className="grid gap-2">{converts.map((convert) => <button key={convert.id} type="button" onClick={() => { setSelectedId(convert.id); setOpenCategory('Covenants') }} className="flex min-h-14 flex-col items-stretch gap-3 rounded-xl border border-white/7 bg-white/[0.025] px-3 py-3 text-left transition hover:border-white/20 hover:bg-white/[0.06] sm:flex-row sm:items-center sm:py-2"><div className="flex min-w-0 items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[0.65rem] font-semibold text-slate-300">{initials(convert.name)}</div><div className="min-w-0"><p className="truncate text-sm font-medium text-white">{convert.name}</p><p className="truncate text-xs text-slate-500">{convert.ward} · {convert.age} years old</p></div></div><div className="grid w-full grid-cols-2 gap-2.5 sm:w-[360px] sm:shrink-0 sm:grid-cols-4">{categories.map((category) => <CompactMeter key={category} convert={convert} category={category} store={store} />)}</div></button>)}</div></section>
    {selected && <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"><div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#0b1020] p-5 shadow-2xl sm:p-7"><div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5"><div className="flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-slate-200"><UserRound className="h-7 w-7" /></div><div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Covenant path</p><h2 className="mt-1 text-2xl font-semibold text-white">{selected.name}</h2><p className="mt-1 text-sm text-slate-400">{selected.ward} · {selected.gender === 'M' ? 'Male' : 'Female'} · {selected.age} years old</p></div></div><button type="button" onClick={() => setSelectedId(null)} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"><X className="h-5 w-5" /></button></div><div className="mt-6 grid gap-4 sm:grid-cols-2">{categories.map((category) => <div key={category} className={`rounded-2xl border ${colors[category].panel} bg-white/[0.025] p-4`}><Meter convert={selected} category={category} store={store} large /></div>)}</div><div className="mt-6 space-y-3">{categories.map((category) => { const isOpen = openCategory === category; const style = colors[category]; return <div key={category} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"><button type="button" onClick={() => setOpenCategory(isOpen ? null : category)} className="flex w-full items-center justify-between px-4 py-4 text-left"><span className={`font-semibold ${style.text}`}>{category}</span><div className="flex items-center gap-3"><span className="text-xs text-slate-500">{percentFor(selected, category, store)}% complete</span><ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} /></div></button>{isOpen && <div className="border-t border-white/10 px-4 pb-2">{itemIds[category].map((id) => { const template = milestoneTemplate.find((item) => item.id === id); const progress = selectedProgress.find((item) => item.id === id); if (!template || !progress) return null; const checked = progress.status === 'completed'; const notApplicable = progress.status === 'not-applicable'; return <div key={id} className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0"><label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3"><input type="checkbox" checked={checked} onChange={() => toggleItem(id)} className="h-5 w-5 rounded border-white/20 bg-slate-900 accent-cyan-300" /><span className={`text-sm ${checked || notApplicable ? 'text-slate-500 line-through' : 'text-slate-200'}`}>{template.label}{id === 'aaronic' ? ' (if applicable)' : ''}</span></label><button type="button" onClick={() => updateStatus(id, notApplicable ? 'not-started' : 'not-applicable')} className={`rounded-lg border px-2 py-1 text-[0.62rem] font-semibold ${notApplicable ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200' : 'border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300'}`}>NA</button></div> })}</div>}</div> })}</div></div></div>}
  </div>
}
