import { useEffect, useState } from 'react'
import { editableFields, readOnlyTotals, stakeGoalsData, type StakeGoalRecord } from '../data/stakeGoals'
import { supabase } from '../lib/supabase'

const sharedGoalsId = 'stake-2026-goals'

type EditableField = (typeof editableFields)[number]

function mergeRecords(saved: StakeGoalRecord[]): StakeGoalRecord[] {
  // Merge saved values onto the base ward list in case columns were added/removed since last save
  return stakeGoalsData.map((base) => {
    const match = saved.find((row) => row.ward === base.ward)
    return match ? { ...base, ...match } : base
  })
}

function EditableCell({
  value,
  onChange,
}: {
  value: number
  onChange: (next: number) => void
}) {
  return (
    <input
      type="number"
      value={value}
      onChange={(event) => onChange(Number(event.target.value) || 0)}
      className="w-16 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-right text-sm text-white focus:border-sky-400/60 focus:outline-none focus:ring-1 focus:ring-sky-400/40"
    />
  )
}

export default function StakeGoal() {
  const [records, setRecords] = useState<StakeGoalRecord[]>(stakeGoalsData)
  const [syncStatus, setSyncStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let isMounted = true
    const loadSharedGoals = async () => {
      const { data, error } = await supabase.from('stake_goals').select('records').eq('id', sharedGoalsId).maybeSingle()
      if (!isMounted) return
      if (error) {
        setSyncStatus('error')
        return
      }
      if (Array.isArray(data?.records)) setRecords(mergeRecords(data.records as StakeGoalRecord[]))
      setSyncStatus('ready')
    }
    void loadSharedGoals()

    const channel = supabase
      .channel('shared-stake-goals')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'stake_goals', filter: `id=eq.${sharedGoalsId}` }, (payload) => {
        const nextRecords = (payload.new as { records?: unknown }).records
        if (Array.isArray(nextRecords)) setRecords(mergeRecords(nextRecords as StakeGoalRecord[]))
      })
      .subscribe()

    return () => {
      isMounted = false
      void supabase.removeChannel(channel)
    }
  }, [])

  const persistRecords = async (nextRecords: StakeGoalRecord[]) => {
    const { error } = await supabase.from('stake_goals').upsert({ id: sharedGoalsId, records: nextRecords, updated_at: new Date().toISOString() })
    if (error) setSyncStatus('error')
  }

  const updateField = (ward: string, field: EditableField, value: number) => {
    setRecords((prev) => {
      const next = prev.map((row) => (row.ward === ward ? { ...row, [field]: value } : row))
      void persistRecords(next)
      return next
    })
  }

  const editableTotals = editableFields.reduce<Record<EditableField, number>>((totals, field) => {
    totals[field] = records.reduce((sum, row) => sum + (Number(row[field]) || 0), 0)
    return totals
  }, {} as Record<EditableField, number>)

  return (
    <div className="space-y-6 pb-10">
      <header className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_24px_70px_rgba(2,8,23,0.25)] backdrop-blur-xl sm:p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">2026 Goals Summary</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Stake Goal Dashboard</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Ward performance across three pillar areas: coming unto Christ, temple covenants, and rising generation. Editable cells sync live to every signed-in user.</p>
        {syncStatus === 'error' && <p className="mt-2 text-xs font-medium text-rose-400">Unable to sync goals right now. Changes will only apply locally until connection is restored.</p>}
      </header>

      <div className="rounded-[26px] border border-white/10 bg-slate-950/50 p-4 shadow-[0_24px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl sm:p-5 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th rowSpan={2} className="px-4 py-3 text-left text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-300 bg-slate-900/40 sticky left-0 z-10 w-[200px]">Ward</th>

              <th colSpan={2} className="px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white bg-green-600/60">Come Unto Christ</th>

              <th colSpan={3} className="px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white bg-orange-600/60">Make and Keep Temple Covenants</th>

              <th colSpan={3} className="px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white bg-blue-600/60">Strengthening the Rising Generation</th>

              <th colSpan={6} className="px-3 py-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white bg-purple-600/60">2026 Focus Goals</th>
            </tr>
            <tr className="border-b border-white/10">
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-green-500/20 border-r border-white/5">Sacrament Attendance</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-green-500/20">Convert Baptism (Monthly Goal)</th>

              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-orange-500/20 border-r border-white/5">Total Endowed</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-orange-500/20 border-r border-white/5">Endowed with Temple Recommend</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-orange-500/20">%</th>

              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-blue-500/20 border-r border-white/5">Current Missionary Candidates</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-blue-500/20 border-r border-white/5">Goal</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-blue-500/20">To Go</th>

              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20 border-r border-white/5">Reactivation</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20 border-r border-white/5">New Convert Callings</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20 border-r border-white/5">Temple &amp; Family History</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20 border-r border-white/5">Priesthood Ordination</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20 border-r border-white/5">Ministering Interviews (RS)</th>
              <th className="px-3 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-300 bg-purple-500/20">Ministering Interviews (EQ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {records.map((record) => (
              <tr key={record.ward} className="hover:bg-white/[0.02] transition">
                <td className="px-4 py-3 text-sm font-medium text-white bg-slate-900/30 sticky left-0 z-10 whitespace-nowrap">{record.ward}</td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">{record.sacramentAttendance}</td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.convertBaptismGoal} onChange={(v) => updateField(record.ward, 'convertBaptismGoal', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">{record.totalEndowed}</td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">{record.endowedWithTempleRecommend}</td>
                <td className="px-3 py-3 text-right text-sm font-medium text-slate-200">{(record.templeRecommendPercent * 100).toFixed(0)}%</td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.currentMissionaryCandidates} onChange={(v) => updateField(record.ward, 'currentMissionaryCandidates', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.goal} onChange={(v) => updateField(record.ward, 'goal', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.toGo} onChange={(v) => updateField(record.ward, 'toGo', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.reactivation} onChange={(v) => updateField(record.ward, 'reactivation', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.newConvertCalling} onChange={(v) => updateField(record.ward, 'newConvertCalling', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.templeFamilyHistory} onChange={(v) => updateField(record.ward, 'templeFamilyHistory', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.priesthoodOrdination} onChange={(v) => updateField(record.ward, 'priesthoodOrdination', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.ministeringRS} onChange={(v) => updateField(record.ward, 'ministeringRS', v)} />
                </td>
                <td className="px-3 py-3 text-right text-sm text-slate-200">
                  <EditableCell value={record.ministeringEQ} onChange={(v) => updateField(record.ward, 'ministeringEQ', v)} />
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-white/20 bg-slate-900/60">
              <td className="px-4 py-3 text-sm font-bold text-white bg-slate-800/60 sticky left-0 z-10">TOTAL</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{readOnlyTotals.sacramentAttendance}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.convertBaptismGoal}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{readOnlyTotals.totalEndowed}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{readOnlyTotals.endowedWithTempleRecommend}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{(readOnlyTotals.templeRecommendPercent * 100).toFixed(0)}%</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.currentMissionaryCandidates}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.goal}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.toGo}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.reactivation}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.newConvertCalling}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.templeFamilyHistory}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.priesthoodOrdination}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.ministeringRS}</td>
              <td className="px-3 py-3 text-right text-sm font-bold text-white">{editableTotals.ministeringEQ}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="rounded-[26px] border border-white/10 bg-slate-950/50 p-5 shadow-[0_24px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl sm:p-6">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Legend</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <p className="text-xs font-semibold text-white">Come Unto Christ</p>
            <p className="mt-1 text-xs text-slate-400">Sacrament attendance and monthly baptism goals</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <p className="text-xs font-semibold text-white">Temple Covenants</p>
            <p className="mt-1 text-xs text-slate-400">Endowed members and temple recommend holders</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <p className="text-xs font-semibold text-white">Rising Generation</p>
            <p className="mt-1 text-xs text-slate-400">Missionary candidates and progress to goal</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
            <p className="text-xs font-semibold text-white">2026 Focus Goals</p>
            <p className="mt-1 text-xs text-slate-400">Reactivation, callings, temple/family history, priesthood, and ministering interviews</p>
          </div>
        </div>
      </section>
    </div>
  )
}

