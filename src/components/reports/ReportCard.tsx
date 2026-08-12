import type { ReportCategory } from '../../types/reports'

interface ReportCardProps {
  report: ReportCategory
}

export default function ReportCard({ report }: ReportCardProps) {
  const Icon = report.icon

  return (
    <article className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/70">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200">
          <Icon className="h-5 w-5" />
        </div>

        <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-sky-200">
          {report.category}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{report.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{report.description}</p>

      <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-slate-300">
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-400">Last generated</span>
          <span className="font-medium text-slate-100">{report.lastGenerated}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-400">Est. time</span>
          <span className="font-medium text-slate-100">{report.estimatedTime}</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]"
      >
        Generate
      </button>
    </article>
  )
}
