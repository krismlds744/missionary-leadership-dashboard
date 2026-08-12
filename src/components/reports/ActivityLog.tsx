import type { ActivityLogItem } from '../../types/reports'

interface ActivityLogProps {
  items: ActivityLogItem[]
}

const typeStyles: Record<ActivityLogItem['type'], string> = {
  Info: 'border-sky-400/30 bg-sky-500/10 text-sky-200',
  Success: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  Warning: 'border-amber-400/30 bg-amber-500/10 text-amber-200',
}

export default function ActivityLog({ items }: ActivityLogProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">History</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Activity log</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4">
            <div className={`mt-1 h-2.5 w-2.5 rounded-full ${item.type === 'Success' ? 'bg-emerald-400' : item.type === 'Warning' ? 'bg-amber-400' : 'bg-sky-400'}`} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-white">{item.title}</p>
                <span className={`rounded-full border px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] ${typeStyles[item.type]}`}>
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
