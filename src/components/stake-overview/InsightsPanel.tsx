import { ArrowRight, Sparkles } from 'lucide-react'

interface InsightItem {
  title: string
  description: string
}

interface InsightsPanelProps {
  insights: InsightItem[]
}

export default function InsightsPanel({ insights }: InsightsPanelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Insights</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Quick insights</h3>
        </div>
        <Sparkles className="h-5 w-5 text-slate-300" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => (
          <div key={insight.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-200">{insight.title}</p>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </div>
            <p className="text-sm leading-6 text-slate-300">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
