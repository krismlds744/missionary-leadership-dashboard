import { ArrowRight, Users } from 'lucide-react'
import type { CompanionshipCard } from '../../types/pageData'

interface CompanionshipDashboardProps {
  items: CompanionshipCard[]
}

const activityStyles = {
  Active: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  'Needs Follow-up': 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Review: 'border-sky-400/30 bg-sky-500/10 text-sky-300',
} as const

export default function CompanionshipDashboard({ items }: CompanionshipDashboardProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Companionships</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Ministering companionship dashboard</h3>
        </div>
        <Users className="h-5 w-5 text-slate-300" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.companionship} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{item.companionship}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.ward}</p>
              </div>
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${activityStyles[item.activityStatus]}`}>
                {item.activityStatus}
              </span>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Assigned families</span>
                <span className="font-medium text-slate-200">{item.assignedFamilies}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Last visit</span>
                <span className="font-medium text-slate-200">{item.lastVisit}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Next visit</span>
                <span className="font-medium text-slate-200">{item.nextVisit}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Interview status</span>
                <span className="font-medium text-slate-200">{item.interviewStatus}</span>
              </div>
            </div>

            <button type="button" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-slate-200">
              View details <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
