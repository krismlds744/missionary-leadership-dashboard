import { ArrowUpDown, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { WardPerformanceRow } from '../../types/pageData'

interface WardTableProps {
  rows: WardPerformanceRow[]
}

type SortKey = 'ward' | 'attendance' | 'converts' | 'templeReady' | 'missionaryCandidates' | 'ministering' | 'status'

type SortDirection = 'asc' | 'desc'

function AttendanceProgress({ value }: { value: string }) {
  const [actual, potential] = value.split('/').map(Number)
  const percent = potential > 0 ? actual / potential * 100 : 0
  const color = percent >= 50 ? 'bg-emerald-400' : percent >= 35 ? 'bg-yellow-300' : 'bg-rose-400'
  return <div className="mx-auto min-w-56"><div className="relative h-8 w-full overflow-hidden rounded-full border border-white/10 bg-white/10"><div className={`h-full rounded-full ${color} transition-[width] duration-500`} style={{ width: `${percent}%` }} /><span className="absolute inset-0 flex items-center justify-center text-base font-bold tracking-wide text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">{value}</span></div></div>
}


export default function WardTable({ rows }: WardTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('attendance')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedRows = useMemo(() => {
    const items = [...rows]

    items.sort((a, b) => {
      const direction = sortDirection === 'asc' ? 1 : -1

      if (sortKey === 'ward') {
        return a.ward.localeCompare(b.ward) * direction
      }

      const left = sortKey === 'attendance' ? Number(a.attendance.split('/')[0]) : Number(a[sortKey])
      const right = sortKey === 'attendance' ? Number(b.attendance.split('/')[0]) : Number(b[sortKey])

      if (Number.isNaN(left) || Number.isNaN(right)) {
        return 0
      }

      return (left - right) * direction
    })

    return items
  }, [rows, sortKey, sortDirection])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))
      return
    }

    setSortKey(key)
    setSortDirection('desc')
  }

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Performance</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Ward performance</h3>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
          <TrendingUp className="h-3.5 w-3.5" />
          Updated weekly
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr className="bg-white/5 text-slate-300">
              {[
                ['Ward', 'ward'],
                ['Attendance', 'attendance'],
                ['Converts', 'converts'],
                ['Temple Ready', 'templeReady'],
              ].map(([label, key]) => (
                <th key={key} className="px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">
                  <button
                    type="button"
                    onClick={() => handleSort(key as SortKey)}
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    {label}
                    <ArrowUpDown className="h-3 w-3 opacity-70" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((row) => (
              <tr key={row.ward} className="border-t border-white/10 transition-colors hover:bg-white/[0.03]">
                <td className="px-5 py-4 text-center text-sm font-medium text-white sm:px-6">{row.ward}</td>

                <td className="px-5 py-4 sm:px-6"><AttendanceProgress value={row.attendance} /></td>

                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.converts}</td>
                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.templeReady}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
