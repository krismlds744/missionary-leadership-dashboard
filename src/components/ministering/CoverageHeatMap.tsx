interface CoverageHeatMapProps {
  rows: Array<{ ward: string; values: number[] }>
}

const getColor = (value: number) => {
  if (value >= 90) return 'bg-emerald-500/25 text-emerald-100 ring-1 ring-emerald-400/30'
  if (value >= 80) return 'bg-emerald-400/20 text-emerald-100 ring-1 ring-emerald-400/25'
  if (value >= 70) return 'bg-amber-400/20 text-amber-100 ring-1 ring-amber-400/25'
  if (value >= 60) return 'bg-orange-400/20 text-orange-100 ring-1 ring-orange-400/25'
  return 'bg-rose-500/20 text-rose-100 ring-1 ring-rose-400/25'
}

export default function CoverageHeatMap({ rows }: CoverageHeatMapProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Coverage map</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Assignment heatmap</h3>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/50">
        <div className="grid grid-cols-[140px_repeat(5,minmax(60px,1fr))] gap-2 p-4">
          <div className="px-2 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Ward</div>
          {['Q1', 'Q2', 'Q3', 'Q4', 'FY'].map((label) => (
            <div key={label} className="px-2 py-3 text-center text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
              {label}
            </div>
          ))}

          {rows.map((row) => (
            <>
              <div key={`${row.ward}-label`} className="flex items-center px-2 py-3 text-sm font-medium text-slate-200">
                {row.ward}
              </div>
              {row.values.map((value, index) => (
                <div key={`${row.ward}-${value}-${index}`} className={`flex items-center justify-center rounded-xl px-2 py-3 text-sm font-medium ${getColor(value)}`}>
                  {value}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
