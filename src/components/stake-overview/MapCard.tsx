const wardRegions = [
  { label: 'North', value: 32, tone: 'bg-sky-500/20 border-sky-400/30 text-sky-200' },
  { label: 'South', value: 24, tone: 'bg-violet-500/20 border-violet-400/30 text-violet-200' },
  { label: 'East', value: 20, tone: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-200' },
  { label: 'West', value: 18, tone: 'bg-amber-500/20 border-amber-400/30 text-amber-200' },
  { label: 'Central', value: 16, tone: 'bg-rose-500/20 border-rose-400/30 text-rose-200' },
]

export default function MapCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Geography</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Geographic distribution</h3>
      </div>

      <div className="grid gap-4">
        <div className="relative h-52 overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.08),_rgba(15,23,42,0.88)_55%)]">
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
          <div className="absolute left-[18%] top-[28%] h-16 w-16 rounded-full border border-sky-400/30 bg-sky-500/10" />
          <div className="absolute right-[18%] top-[30%] h-20 w-20 rounded-full border border-violet-400/30 bg-violet-500/10" />
          <div className="absolute bottom-[18%] left-[30%] h-16 w-16 rounded-full border border-emerald-400/30 bg-emerald-500/10" />
          <div className="absolute bottom-[16%] right-[28%] h-14 w-14 rounded-full border border-amber-400/30 bg-amber-500/10" />
          <div className="absolute left-[46%] top-[44%] h-12 w-12 rounded-full border border-rose-400/30 bg-rose-500/10" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {wardRegions.map((region) => (
            <div key={region.label} className={`rounded-2xl border p-3 ${region.tone}`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{region.label}</span>
                <span className="text-sm font-semibold">{region.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
