import { ArrowUpDown, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'

type RetentionRow = {
  ward: string
  total: number
  active: number
  inactive: number
  calling: number
  templeFamilyHistory: number
  retention: number
}

type SortKey = keyof RetentionRow
type SortDirection = 'asc' | 'desc'

const rows: RetentionRow[] = [
  { ward: 'Bagong Silangan', total: 14, active: 10, inactive: 4, calling: 1, templeFamilyHistory: 1, retention: 71.4 },
  { ward: 'Batasan Hills 1st', total: 22, active: 13, inactive: 9, calling: 1, templeFamilyHistory: 0, retention: 59.1 },
  { ward: 'Batasan Hills 2nd', total: 13, active: 10, inactive: 3, calling: 0, templeFamilyHistory: 1, retention: 76.9 },
  { ward: 'Don Antonio', total: 6, active: 6, inactive: 0, calling: 4, templeFamilyHistory: 1, retention: 100.0 },
  { ward: 'Fairview', total: 31, active: 25, inactive: 6, calling: 8, templeFamilyHistory: 12, retention: 80.6 },
  { ward: 'Kalayaan', total: 13, active: 11, inactive: 2, calling: 3, templeFamilyHistory: 0, retention: 84.6 },
  { ward: 'Mapayapa', total: 15, active: 8, inactive: 7, calling: 3, templeFamilyHistory: 1, retention: 53.3 },
]

export default function NewConvertRetentionByWard() {
  const [sortKey, setSortKey] = useState<SortKey>('retention')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedRows = useMemo(() => [...rows].sort((left, right) => {
    const direction = sortDirection === 'asc' ? 1 : -1
    const comparison = typeof left[sortKey] === 'string'
      ? String(left[sortKey]).localeCompare(String(right[sortKey]))
      : Number(left[sortKey]) - Number(right[sortKey])
    return comparison * direction
  }), [sortDirection, sortKey])

  const sortBy = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')
      return
    }
    setSortKey(key)
    setSortDirection(key === 'ward' ? 'asc' : 'desc')
  }

  const headers: Array<[string, SortKey]> = [
    ['Ward', 'ward'],
    ['Total New Converts', 'total'],
    ['Active New Converts', 'active'],
    ['Inactive New Converts', 'inactive'],
    ['New Converts with Calling', 'calling'],
    ['New Converts Who Participated in Temple and FH Work', 'templeFamilyHistory'],
    ['Retention Rate', 'retention'],
  ]

  const retentionColor = (value: number) => value < 74 ? 'bg-rose-400' : value < 79 ? 'bg-yellow-300' : 'bg-emerald-400'

  return <section className="overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/50 shadow-[0_24px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl">
    <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
      <div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Comparison</p><h2 className="mt-1 text-2xl font-semibold text-white">New Convert Retention by Ward</h2><p className="mt-2 text-sm text-slate-400">Official 2026 Key Indicators Quarterly Report</p></div>
      <div className="grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-white/[0.04] px-4 py-3"><p className="text-[0.6rem] uppercase tracking-[0.16em] text-slate-500">Total</p><p className="mt-1 text-2xl font-bold text-white">114</p></div><div className="rounded-xl bg-emerald-400/10 px-4 py-3"><p className="text-[0.6rem] uppercase tracking-[0.16em] text-emerald-300/70">Active</p><p className="mt-1 text-2xl font-bold text-emerald-200">83</p></div><div className="rounded-xl bg-rose-400/10 px-4 py-3"><p className="text-[0.6rem] uppercase tracking-[0.16em] text-rose-300/70">Inactive</p><p className="mt-1 text-2xl font-bold text-rose-200">31</p></div></div>
    </div>
    <div className="overflow-x-auto"><table className="min-w-full text-left"><thead><tr className="border-b border-white/10 bg-white/[0.03]">{headers.map(([label, key]) => <th key={key} className={`px-5 py-4 text-[0.65rem] uppercase tracking-[0.16em] text-slate-500 ${key === 'ward' ? 'text-left' : 'text-center'}`}><button type="button" onClick={() => sortBy(key)} className="inline-flex items-center gap-1.5 hover:text-white">{label}<ArrowUpDown className="h-3 w-3" /></button></th>)}</tr></thead><tbody>{sortedRows.map((row) => <tr key={row.ward} className="border-b border-white/7 text-sm hover:bg-white/[0.03]"><td className="px-5 py-5 text-base font-semibold text-white">{row.ward}</td><td className="px-5 py-5 text-center text-base font-bold text-slate-200">{row.total}</td><td className="px-5 py-5 text-center text-base font-bold text-emerald-200">{row.active}</td><td className="px-5 py-5 text-center text-base font-bold text-rose-200">{row.inactive}</td><td className="px-5 py-5 text-center text-base font-bold text-cyan-200">{row.calling}</td><td className="px-5 py-5 text-center text-base font-bold text-amber-200">{row.templeFamilyHistory}</td><td className="min-w-56 px-5 py-5"><div className="flex items-center gap-3"><div className="h-4 flex-1 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full transition-[width] duration-500 ${retentionColor(row.retention)}`} style={{ width: `${row.retention}%` }} /></div><span className={`w-14 text-right text-base font-bold ${row.retention < 74 ? 'text-rose-200' : row.retention < 79 ? 'text-yellow-200' : 'text-emerald-200'}`}>{row.retention.toFixed(1)}%</span></div></td></tr>)}</tbody><tfoot><tr className="border-t-2 border-cyan-300/20 bg-cyan-300/[0.06] text-base font-bold"><td className="px-5 py-5 text-white">Stake Total</td><td className="px-5 py-5 text-center text-slate-100">114</td><td className="px-5 py-5 text-center text-emerald-200">83</td><td className="px-5 py-5 text-center text-rose-200">31</td><td className="px-5 py-5 text-center text-cyan-200">20</td><td className="px-5 py-5 text-center text-amber-200">16</td><td className="px-5 py-5 text-center text-emerald-200">72.8%</td></tr></tfoot></table></div>
    <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-xs text-slate-500"><TrendingUp className="h-3.5 w-3.5" />Overall new convert retention: <span className="font-semibold text-emerald-300">72.8%</span></div>
  </section>
}
