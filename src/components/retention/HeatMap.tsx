import type { HeatMapRow } from '../../types/pageData'

interface HeatMapProps {
  rows: HeatMapRow[]
}

const colorMap = [
  'bg-emerald-500/25 border-emerald-400/30 text-emerald-100',
  'bg-emerald-500/20 border-emerald-400/30 text-emerald-100',
  'bg-yellow-500/20 border-yellow-400/30 text-yellow-100',
  'bg-orange-500/20 border-orange-400/30 text-orange-100',
  'bg-rose-500/20 border-rose-400/30 text-rose-100',
]

export default function HeatMap({ rows }: HeatMapProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Heatmap</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Ward retention health</h3>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[420px]">
          <div className="mb-3 grid grid-cols-[120px_repeat(5,minmax(60px,1fr))] gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-slate-400">
            <span />
            <span>Uplift</span>
            <span>Haptics</span>
            <span>Fellowship</span>
            <span>Temple</span>
            <span>Overall</span>
          </div>

          {rows.map((row) => (
            <div key={row.ward} className="mb-3 grid grid-cols-[120px_repeat(5,minmax(60px,1fr))] gap-2">
              <div className="flex items-center text-sm font-medium text-white">{row.ward}</div>
              {row.values.map((value, index) => (
                <div
                  key={`${row.ward}-${index}`}
                  className={`flex h-12 items-center justify-center rounded-xl border text-xs font-medium ${colorMap[Math.min(Math.max(value - 65, 0) / 7, 4)]}`}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
