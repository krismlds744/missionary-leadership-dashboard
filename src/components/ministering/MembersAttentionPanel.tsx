import { AlertTriangle } from 'lucide-react'
import type { AttentionMember } from '../../types/pageData'

interface MembersAttentionPanelProps {
  members: AttentionMember[]
}

const riskStyles = {
  High: 'border-rose-400/30 bg-rose-500/10 text-rose-300',
  Medium: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Low: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
} as const

export default function MembersAttentionPanel({ members }: MembersAttentionPanelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Support</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Members needing attention</h3>
        </div>
        <AlertTriangle className="h-5 w-5 text-slate-300" />
      </div>

      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.member} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-white">{member.member}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{member.ward}</p>
              </div>
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${riskStyles[member.riskLevel]}`}>
                {member.riskLevel}
              </span>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Last contact</p>
                <p className="mt-1 font-medium text-slate-200">{member.lastContact}</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Ministering assignment</p>
                <p className="mt-1 font-medium text-slate-200">{member.assignment}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">Suggested action</p>
                <p className="mt-1 font-medium text-slate-200">{member.suggestedAction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
