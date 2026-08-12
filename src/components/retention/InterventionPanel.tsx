import type { InterventionItem } from '../../types/pageData'

interface InterventionPanelProps {
  items: InterventionItem[]
}

const priorityStyles: Record<string, string> = {
  High: 'border-rose-400/30 bg-rose-500/10 text-rose-300',
  Medium: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Low: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
}

export default function InterventionPanel({ items }: InterventionPanelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Support</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Intervention tracking</h3>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.member} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-white">{item.member}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.status}</p>
              </div>

              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.68rem] font-medium ${priorityStyles[item.priority]}`}>
                {item.priority}
              </span>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Assigned Leader</span>
                <span className="mt-1 block font-medium text-white">{item.assignedLeader}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Ministering</span>
                <span className="mt-1 block font-medium text-white">{item.ministering}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Recent Contact</span>
                <span className="mt-1 block font-medium text-white">{item.recentContact}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Next Follow-up</span>
                <span className="mt-1 block font-medium text-white">{item.nextFollowUp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
