import { ArrowUpDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { WardMinisteringRow } from '../../types/pageData'

interface WardMinisteringTableProps {
  rows: WardMinisteringRow[]
}

type SortKey = 'ward' | 'interviewsCompleted' | 'brotherInterviews' | 'sisterInterviews'
type SortDirection = 'asc' | 'desc'

function InterviewProgress({ value }: { value: string }) {
  const [completed, total] = value.split('/').map(Number)
  const percent = total > 0 ? completed / total * 100 : 0
  const color = percent >= 85 ? 'bg-emerald-400' : percent >= 75 ? 'bg-yellow-300' : 'bg-rose-400'
  return <div className="min-w-44"><div className="relative h-5 w-full overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full ${color} transition-[width] duration-500`} style={{ width: `${percent}%` }} /><span className="absolute inset-0 flex items-center justify-center text-[0.68rem] font-semibold text-white drop-shadow">{value}</span></div></div>
}

export default function WardMinisteringTable({ rows }: WardMinisteringTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('interviewsCompleted')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedRows = useMemo(() => [...rows].sort((left, right) => {
    const direction = sortDirection === 'asc' ? 1 : -1
    if (sortKey === 'ward') return left.ward.localeCompare(right.ward) * direction
    const leftValue = Number(left[sortKey].split('/')[0])
    const rightValue = Number(right[sortKey].split('/')[0])
    return (leftValue - rightValue) * direction
  }), [rows, sortDirection, sortKey])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')
      return
    }
    setSortKey(key)
    setSortDirection(key === 'ward' ? 'asc' : 'desc')
  }

  return <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
    <div className="border-b border-white/10 px-5 py-4 sm:px-6"><p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Coverage</p><h3 className="mt-2 text-2xl font-semibold text-white">Ward ministering table</h3></div>
    <div className="overflow-x-auto"><table className="min-w-full border-separate border-spacing-0 text-left"><thead><tr className="bg-white/5 text-slate-300"><th className="px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:px-6"><button type="button" onClick={() => handleSort('ward')} className="inline-flex items-center gap-2 transition hover:text-white">Ward<ArrowUpDown className="h-3 w-3" /></button></th>{[['interviewsCompleted', 'Total Interviews Completed'], ['brotherInterviews', 'Ministering Brother Companionships Interviewed'], ['sisterInterviews', 'Ministering Sister Companionships Interviewed']].map(([key, label]) => <th key={key} className="px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:px-6"><button type="button" onClick={() => handleSort(key as SortKey)} className="inline-flex items-center gap-2 transition hover:text-white">{label}<ArrowUpDown className="h-3 w-3" /></button></th>)}</tr></thead><tbody>{sortedRows.map((row) => <tr key={row.ward} className="border-t border-white/10 transition-colors hover:bg-white/[0.03]"><td className="px-5 py-4 text-sm font-medium text-white sm:px-6">{row.ward}</td><td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6"><InterviewProgress value={row.interviewsCompleted} /></td><td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6"><InterviewProgress value={row.brotherInterviews} /></td><td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6"><InterviewProgress value={row.sisterInterviews} /></td></tr>)}</tbody></table></div>
  </div>
}
