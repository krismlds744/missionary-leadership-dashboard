import type { ExecutivePreviewItem } from '../../types/reports'

interface ExecutivePreviewProps {
  preview: ExecutivePreviewItem
}

export default function ExecutivePreview({ preview }: ExecutivePreviewProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Preview</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Executive summary preview</h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {preview.keyMetrics.map((metric) => (
          <div key={metric.label} className="rounded-[20px] border border-white/10 bg-white/5 p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Highlights</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-200">
            {preview.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Risks</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-200">
            {preview.risks.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-slate-900/70 p-4">
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Recommendations</h4>
        <ul className="mt-3 space-y-3 text-sm text-slate-200">
          {preview.recommendations.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
