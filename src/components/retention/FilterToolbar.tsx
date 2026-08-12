import { SlidersHorizontal } from 'lucide-react'
import type { RetentionFilters } from '../../types/pageData'

interface FilterToolbarProps {
  filters: RetentionFilters
}

export default function FilterToolbar({ filters }: FilterToolbarProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Filters</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Retention analysis</h3>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Ward</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.ward.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Date Range</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.dateRange.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Age Group</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.ageGroup.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Organization</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.organization.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Activity Level</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.activityLevel.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Risk Level</span>
          <select className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50">
            {filters.riskLevel.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
