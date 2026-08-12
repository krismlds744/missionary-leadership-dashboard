interface ProgressTrackerProps {
  value: number
}

export default function ProgressTracker({ value }: ProgressTrackerProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Progress</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Completion dashboard</h3>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 rounded-[28px] border border-white/10 bg-white/[0.02] p-6">
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-slate-900/80">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#38bdf8 0 ${value}%, rgba(148,163,184,0.18) ${value}% 100%)` }} />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-2xl font-semibold text-white">
            {value}%
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-300">Overall mission readiness</p>
          <p className="mt-2 text-3xl font-semibold text-white">{value}%</p>
        </div>
      </div>
    </section>
  )
}
