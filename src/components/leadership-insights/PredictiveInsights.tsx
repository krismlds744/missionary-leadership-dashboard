interface PredictiveInsightItem {
  title: string
  description: string
}

interface PredictiveInsightsProps {
  items: PredictiveInsightItem[]
}

export default function PredictiveInsights({ items }: PredictiveInsightsProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Predictive Insights</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">AI-driven outlook</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-emerald-400/20 bg-emerald-500/5 p-4">
            <p className="font-medium text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
