import type { ConvertRiskItem } from '../../types/pageData'

interface RiskPanelProps {
  items: ConvertRiskItem[]
}

const riskStyles: Record<string, string> = {
  High: 'border-rose-400/30 bg-rose-500/10 text-rose-300',
  Medium: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Low: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
}

export default function RiskPanel({ items }: RiskPanelProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Retention Risk</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Needs attention</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.ward}</p>
              </div>

              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.68rem] font-medium ${riskStyles[item.riskLevel]}`}>
                {item.riskLevel}
              </span>
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Last attendance</span>
                <span className="mt-1 block font-medium text-white">{item.daysSinceAttendance} days</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Ministering</span>
                <span className="mt-1 block font-medium text-white">{item.ministeringAssigned ? 'Assigned' : 'Unassigned'}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Lessons</span>
                <span className="mt-1 block font-medium text-white">{item.lessonsCompleted}/{item.lessonsTotal}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Status</span>
                <span className="mt-1 block font-medium text-white">{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
