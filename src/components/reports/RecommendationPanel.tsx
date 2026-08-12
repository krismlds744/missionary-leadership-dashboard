import type { RecommendationItem } from '../../types/reports'

interface RecommendationPanelProps {
  recommendations: RecommendationItem[]
}

const toneStyles: Record<RecommendationItem['tone'], string> = {
  positive: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  warning: 'border-amber-400/30 bg-amber-500/10 text-amber-200',
  neutral: 'border-sky-400/30 bg-sky-500/10 text-sky-200',
}

export default function RecommendationPanel({ recommendations }: RecommendationPanelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">AI guidance</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">AI report recommendations</h3>
      </div>

      <div className="space-y-4">
        {recommendations.map((item) => (
          <div key={item.id} className={`rounded-[22px] border p-4 ${toneStyles[item.tone]}`}>
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
