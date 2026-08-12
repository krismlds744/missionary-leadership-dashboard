import type { DashboardHighlight } from '../../types/dashboard'

interface ExecutiveSummaryCardProps {
  items: DashboardHighlight[]
}

export default function ExecutiveSummaryCard({ items }: ExecutiveSummaryCardProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Executive insight</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Convert integration scorecard</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
