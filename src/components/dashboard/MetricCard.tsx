import type { LucideIcon } from 'lucide-react'

type MetricCardProps = {
  title: string
  value: string | number
  change: string
  icon: LucideIcon
}

export default function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{value}</h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">{change}</p>
    </article>
  )
}