interface ExecutiveBriefingProps {
  summary: string
}

export default function ExecutiveBriefing({ summary }: ExecutiveBriefingProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Executive Briefing</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Leadership intelligence</h1>
        </div>

        <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
          Stake Council Ready
        </div>
      </div>

      <div className="mt-6 rounded-[28px] border border-sky-400/20 bg-gradient-to-r from-sky-500/10 via-slate-900/50 to-emerald-500/10 p-5 sm:p-6">
        <p className="text-lg leading-8 text-slate-100 sm:text-xl">{summary}</p>
      </div>
    </div>
  )
}
