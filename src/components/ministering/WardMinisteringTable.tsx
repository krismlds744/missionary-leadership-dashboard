import { useMemo, useState } from 'react'
import type { WardMinisteringRow, MinisteringHealthStatus } from '../../types/pageData'

interface WardMinisteringTableProps {
  rows: WardMinisteringRow[]
}

type SortKey = 'ward' | 'coverage' | 'assignedMembers' | 'interviewsCompleted' | 'activeCompanionships' | 'membersWithoutAssignments'

const statusStyles: Record<MinisteringHealthStatus, string> = {
  Strong: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  Stable: 'border-sky-400/30 bg-sky-500/10 text-sky-300',
  Watch: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Attention: 'border-rose-400/30 bg-rose-500/10 text-rose-300',
}

export default function WardMinisteringTable({ rows }: WardMinisteringTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('coverage')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const sortedRows = useMemo(() => {
    const nextRows = [...rows]

    nextRows.sort((a, b) => {
      const left = a[sortKey] ?? a.ward
      const right = b[sortKey] ?? b.ward

      if (typeof left === 'string' && typeof right === 'string') {
        return sortDirection === 'asc' ? left.localeCompare(right) : right.localeCompare(left)
      }

      return sortDirection === 'asc' ? Number(left) - Number(right) : Number(right) - Number(left)
    })

    return nextRows
  }, [rows, sortKey, sortDirection])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))
      return
    }

    setSortKey(key)
    setSortDirection(key === 'ward' ? 'asc' : 'desc')
  }

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Coverage</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Ward ministering table</h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">Updated weekly</div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr className="bg-white/5 text-slate-300">
              {[
                ['ward', 'Ward'],
                ['coverage', 'Coverage %'],
                ['assignedMembers', 'Assigned Members'],
                ['interviewsCompleted', 'Interviews'],
                ['activeCompanionships', 'Companionships'],
                ['membersWithoutAssignments', 'Needs Assignments'],
                ['healthStatus', 'Health Status'],
              ].map(([key, label]) => (
                <th key={key} className="px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:px-6">
                  <button type="button" onClick={() => handleSort(key as SortKey)} className="inline-flex items-center gap-2 transition hover:text-white">
                    {label}
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((row) => (
              <tr key={row.ward} className="border-t border-white/10 transition-colors hover:bg-white/[0.03]">
                <td className="px-5 py-4 text-sm font-medium text-white sm:px-6">{row.ward}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-20 overflow-hidden rounded-full bg-slate-800/80">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400" style={{ width: `${row.coverage}%` }} />
                    </div>
                    <span>{row.coverage}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{row.assignedMembers}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{row.interviewsCompleted}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{row.activeCompanionships}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{row.membersWithoutAssignments}</td>
                <td className="px-5 py-4 sm:px-6">
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] ${statusStyles[row.healthStatus]}`}>
                    {row.healthStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
