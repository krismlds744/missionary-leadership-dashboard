import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

export type ScorecardItem = {
  label: string
  score: number
  trend: number
}

interface LeadershipScorecardProps {
  items: ScorecardItem[]
}

const getTrendColor = (value: number) => (value >= 0 ? 'text-emerald-300' : 'text-amber-300')
const getTrendIcon = (value: number) => (value >= 0 ? ArrowUpRight : ArrowDownRight)

export default function LeadershipScorecard({ items }: LeadershipScorecardProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Scorecard</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Leadership health dashboard</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const TrendIcon = getTrendIcon(item.trend)

          return (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-300">{item.label}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium ${getTrendColor(item.trend)}`}>
                    <TrendIcon className="h-3.5 w-3.5" />
                    {Math.abs(item.trend)}%
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-3xl font-semibold text-white">{item.score}</span>
                <div className="h-2.5 w-32 overflow-hidden rounded-full bg-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400"
                    style={{ width: `${Math.min(item.score, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
