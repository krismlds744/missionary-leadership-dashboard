import type { MissionaryDeadline } from '../../types/missionaryCandidates'

interface DeadlinePanelProps {
  deadlines: MissionaryDeadline[]
}

export default function DeadlinePanel({ deadlines }: DeadlinePanelProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Deadlines</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Upcoming deadlines</h3>
      </div>

      <div className="space-y-4">
        {deadlines.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3 rounded-[20px] border border-white/10 bg-white/[0.025] p-4">
            <div>
              <p className="font-medium text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.date}</p>
            </div>

            <span className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] ${
              item.priority === 'High'
                ? 'bg-rose-500/10 text-rose-300'
                : item.priority === 'Medium'
                  ? 'bg-amber-500/10 text-amber-300'
                  : 'bg-emerald-500/10 text-emerald-300'
            }`}>
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
