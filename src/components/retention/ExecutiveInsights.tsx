import { ArrowRight, Sparkles } from 'lucide-react'

interface InsightItem {
  title: string
  description: string
}

interface ExecutiveInsightsProps {
  items: InsightItem[]
}

export default function ExecutiveInsights({ items }: ExecutiveInsightsProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">AI insights</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Executive recommendations</h3>
        </div>
        <Sparkles className="h-5 w-5 text-slate-300" />
      </div>

      <div className="space-y-4">
        {items.map((insight) => (
          <div key={insight.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-white">{insight.title}</p>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
