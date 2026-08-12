const currentMonth = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
}).format(new Date())

export default function DashboardHeader() {
  return (
    <header className="mb-8 rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Executive overview</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Mission Leadership Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Guiding priesthood leaders with clear visibility into member progress, ministering health, and readiness indicators.
          </p>
        </div>

        <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
          <span className="text-slate-400">Reporting period:</span>
          <span className="ml-2 font-medium text-white">{currentMonth}</span>
        </div>
      </div>
    </header>
  )
}