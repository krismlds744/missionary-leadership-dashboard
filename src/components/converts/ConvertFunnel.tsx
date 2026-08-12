import type { ConvertFunnelStage } from '../../types/pageData'

interface ConvertFunnelProps {
  stages: ConvertFunnelStage[]
}

export default function ConvertFunnel({ stages }: ConvertFunnelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Funnel</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Conversion pathway</h3>
      </div>

      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="w-36 shrink-0 text-sm font-medium text-slate-200 sm:w-44">{stage.name}</div>

              <div className="flex-1 overflow-hidden rounded-full bg-slate-800/90">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  style={{ width: `${Math.max(stage.percent, 8)}%` }}
                />
              </div>

              <div className="w-20 text-right text-sm text-slate-300">{stage.percent}%</div>
            </div>

            <div className="flex items-center justify-between pl-1 text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">
              <span>{stage.count} converts</span>
              {index < stages.length - 1 ? <span>↓</span> : <span>Goal</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
