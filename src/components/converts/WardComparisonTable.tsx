import { ArrowUpDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { WardComparisonRow } from '../../types/pageData'

interface WardComparisonTableProps {
  rows: WardComparisonRow[]
}

type SortKey = 'ward' | 'baptisms' | 'confirmations' | 'templeReady' | 'calling' | 'retention'
type SortDirection = 'asc' | 'desc'

export default function WardComparisonTable({ rows }: WardComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('retention')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const sortedRows = useMemo(() => {
    const items = [...rows]

    items.sort((a, b) => {
      const direction = sortDirection === 'asc' ? 1 : -1

      if (sortKey === 'ward') {
        return a.ward.localeCompare(b.ward) * direction
      }

      const left = typeof a[sortKey] === 'number' ? a[sortKey] : Number(a[sortKey])
      const right = typeof b[sortKey] === 'number' ? b[sortKey] : Number(b[sortKey])

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
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Comparison</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Ward performance</h3>
        </div>

      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr className="bg-white/5 text-slate-300">
              {[
                ['Ward', 'ward'],
                ['Baptisms', 'baptisms'],
                ['Confirmations', 'confirmations'],
                ['New Converts Who Participated in Temple and FH Work', 'templeReady'],
                ['New Converts with Calling', 'calling'],
                ['Retention %', 'retention'],
              ].map(([label, key]) => (
                <th key={key} className={`px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6 ${key === 'ward' ? 'text-left' : 'text-center'}`}>
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
                <td className="px-5 py-4 text-sm font-medium text-white sm:px-6">{row.ward}</td>
                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.baptisms}</td>
                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.confirmations}</td>
                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.templeReady}</td>
                <td className="px-5 py-4 text-center text-sm text-slate-200 sm:px-6">{row.calling}</td>

                <td className="px-5 py-4 text-center sm:px-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-2.5 w-24 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400" style={{ width: `${row.retention}%` }} />
                    </div>
                    <span className="text-sm text-slate-200">{row.retention}%</span>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
