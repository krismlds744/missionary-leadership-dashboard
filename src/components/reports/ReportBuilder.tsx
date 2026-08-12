import type { ReportBuilderSettings } from '../../types/reports'

interface ReportBuilderProps {
  settings: ReportBuilderSettings
}

export default function ReportBuilder({ settings }: ReportBuilderProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Builder</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Report Builder</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Report Type</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            <option>{settings.reportType}</option>
            <option>Ward Comparison</option>
            <option>Missionary Readiness</option>
            <option>Leadership Insights</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Wards</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {settings.wards.map((ward) => (
              <option key={ward} value={ward}>{ward}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Organizations</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {settings.organizations.map((org) => (
              <option key={org} value={org}>{org}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Date Range</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            <option>{settings.dateRange}</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Metrics</span>
          <div className="flex flex-wrap gap-2">
            {settings.metrics.map((metric) => (
              <span key={metric} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                {metric}
              </span>
            ))}
          </div>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Output Format</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            <option>{settings.outputFormat}</option>
            <option>PDF</option>
            <option>Excel</option>
            <option>PowerPoint</option>
          </select>
        </label>
      </div>

      <div className="mt-5 flex justify-end">
        <button type="button" className="inline-flex items-center rounded-2xl border border-sky-400/40 bg-sky-500/10 px-4 py-2.5 text-sm font-medium text-sky-100 transition hover:bg-sky-500/15">
          Build Preview
        </button>
      </div>
    </div>
  )
}
