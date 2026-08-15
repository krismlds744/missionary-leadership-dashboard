import type { LucideIcon } from 'lucide-react'

interface SummaryCardProps {
  label: string
  value: string
  delta: string
  icon: LucideIcon
  deltaClassName?: string
  compactDelta?: boolean
  labelClassName?: string
}

export default function SummaryCard({ label, value, delta, icon: Icon, deltaClassName = 'text-slate-300', compactDelta = false, labelClassName = 'text-slate-400' }: SummaryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/70">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-[0.7rem] uppercase tracking-[0.24em] ${labelClassName}`}>{label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className={`${compactDelta ? 'mt-2 pt-0' : 'mt-auto pt-4'} text-sm ${deltaClassName}`}>{delta}</p>
    </article>
  )
}
