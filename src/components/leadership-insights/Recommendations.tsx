import { ArrowRight } from 'lucide-react'

interface RecommendationItem {
  title: string
  description: string
}

interface RecommendationsProps {
  items: RecommendationItem[]
}

export default function Recommendations({ items }: RecommendationsProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Recommendations</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Leadership recommendations</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
