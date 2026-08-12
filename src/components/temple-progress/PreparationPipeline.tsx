import { AlertCircle, ArrowRight } from 'lucide-react'
import type { PreparationMember } from '../../types/pageData'

interface PreparationPipelineProps {
  members: PreparationMember[]
}

const priorityStyles = {
  High: 'border-rose-400/30 bg-rose-500/10 text-rose-300',
  Medium: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Low: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
} as const

export default function PreparationPipeline({ members }: PreparationPipelineProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Preparation pipeline</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Active preparation path</h3>
        </div>
        <AlertCircle className="h-5 w-5 text-slate-300" />
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.member} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{member.member}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{member.currentStage}</p>
              </div>
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${priorityStyles[member.priority]}`}>
                {member.priority}
              </span>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Assigned leader</p>
                <p className="mt-1 font-medium text-slate-200">{member.assignedLeader}</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Next milestone</p>
                <p className="mt-1 font-medium text-slate-200">{member.nextMilestone}</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Estimated completion</p>
                <p className="mt-1 font-medium text-slate-200">{member.estimatedCompletion}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Action</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
