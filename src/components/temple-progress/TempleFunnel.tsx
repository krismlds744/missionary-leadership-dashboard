import type { TempleFunnelStage } from '../../types/pageData'

interface TempleFunnelProps {
  stages: TempleFunnelStage[]
}

export default function TempleFunnel({ stages }: TempleFunnelProps) {
  return (
    <div className="space-y-4">
      {stages.map((stage, index) => (
        <div key={stage.stage} className="space-y-2">
          <div className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-[0.62rem] font-medium text-slate-300">
                {index + 1}
              </span>
              <span className="font-medium text-slate-200">{stage.stage}</span>
            </div>
            <div className="text-right text-slate-300">
              <span className="font-semibold text-white">{stage.count}</span>
              <span className="ml-2 text-slate-400">{stage.percent}%</span>
            </div>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-slate-800/80">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 transition-all duration-500"
              style={{ width: `${Math.max(stage.percent, 8)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
