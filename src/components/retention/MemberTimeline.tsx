import type { MemberTimelineEvent } from '../../types/pageData'

interface MemberTimelineProps {
  items: MemberTimelineEvent[]
}

export default function MemberTimeline({ items }: MemberTimelineProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Activity</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Member engagement timeline</h3>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={`${item.title}-${item.time}`} className="relative flex gap-4 pl-1">
            <div className="flex flex-col items-center">
              <div className="h-3 w-3 rounded-full border border-sky-300 bg-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.65)]" />
              <div className="mt-2 h-full w-px flex-1 bg-white/10" />
            </div>

            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-white">{item.title}</p>
                <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-300">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
