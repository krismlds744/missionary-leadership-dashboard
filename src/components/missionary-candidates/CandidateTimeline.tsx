import type { MissionaryTimelineMilestone } from '../../types/missionaryCandidates'

interface CandidateTimelineProps {
  items: MissionaryTimelineMilestone[]
}

export default function CandidateTimeline({ items }: CandidateTimelineProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Timeline</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Missionary preparation timeline</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4 rounded-[20px] border border-white/10 bg-white/[0.025] p-4">
            <div className={`mt-1 h-3 w-3 rounded-full ${item.complete ? 'bg-emerald-400' : 'bg-slate-600'}`} />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-white">{item.label}</p>
                <span className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] ${item.complete ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                  {item.complete ? 'Complete' : 'Pending'}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
