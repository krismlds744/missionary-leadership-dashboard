interface RiskDashboardItem {
  level: 'Low Risk' | 'Medium Risk' | 'High Risk' | 'Critical Risk'
  count: number
  percentage: number
  trend: string
}

interface RiskDashboardProps {
  items: RiskDashboardItem[]
}

const riskStyles: Record<string, string> = {
  'Low Risk': 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  'Medium Risk': 'border-sky-400/30 bg-sky-500/10 text-sky-300',
  'High Risk': 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  'Critical Risk': 'border-rose-400/30 bg-rose-500/10 text-rose-300',
}

export default function RiskDashboard({ items }: RiskDashboardProps) {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.level} className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/70">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">{item.level}</p>
            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-medium ${riskStyles[item.level]}`}>
              {item.trend}
            </span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-3">
            <p className="text-3xl font-semibold tracking-tight text-white">{item.count}</p>
            <p className="text-sm text-slate-300">{item.percentage}%</p>
          </div>

          <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 via-amber-400 to-rose-400"
              style={{ width: `${Math.min(item.percentage, 100)}%` }}
            />
          </div>
        </article>
      ))}
    </section>
  )
}
