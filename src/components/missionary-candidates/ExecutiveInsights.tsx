import type { MissionaryInsight } from '../../types/missionaryCandidates'

interface ExecutiveInsightsProps {
  insights: MissionaryInsight[]
}

export default function ExecutiveInsights({ insights }: ExecutiveInsightsProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">AI executive insights</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Recommended focus</h3>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => (
          <article key={insight.title} className="rounded-[22px] border border-white/10 bg-white/[0.025] p-4">
            <p className="text-sm font-medium text-white">{insight.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{insight.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
