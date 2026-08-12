import { CheckCircle2, Clock3 } from 'lucide-react'
import type { MinisteringTimelineEvent } from '../../types/pageData'

interface MinisteringTimelineProps {
  items: MinisteringTimelineEvent[]
}

export default function MinisteringTimeline({ items }: MinisteringTimelineProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200">
          <Clock3 className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Recent activity</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Ministering timeline</h3>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.date}`} className="relative rounded-[24px] border border-white/10 bg-white/[0.03] p-4 pl-12">
            <div className="absolute left-4 top-5 h-3 w-3 rounded-full border border-sky-300 bg-sky-400" />
            <div className="absolute left-5 top-8 bottom-4 w-px bg-white/10" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.ward}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-2 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-slate-300">
                <CheckCircle2 className="h-3 w-3 text-emerald-300" />
                {item.date}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
