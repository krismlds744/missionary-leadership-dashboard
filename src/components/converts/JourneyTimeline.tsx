import type { ConvertJourneyItem } from '../../types/pageData'

interface JourneyTimelineProps {
  journey: ConvertJourneyItem[]
}

export default function JourneyTimeline({ journey }: JourneyTimelineProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Journey</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Convert journey milestones</h3>
      </div>

      <div className="space-y-5">
        {journey.map((item) => (
          <div key={item.name} className="relative rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{item.status}</p>
              </div>
              <span className="text-xs text-slate-400">{item.lastUpdated}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.stages.map((stage) => (
                <span key={`${item.name}-${stage}`} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-slate-200">
                  {stage}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
