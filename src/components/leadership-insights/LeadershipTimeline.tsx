interface TimelineEntry {
  title: string
  date: string
  type: string
}

interface LeadershipTimelineProps {
  items: TimelineEntry[]
}

export default function LeadershipTimeline({ items }: LeadershipTimelineProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Leadership Timeline</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Upcoming leadership moments</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="relative pl-6">
            <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-white">{item.title}</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-slate-300">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
