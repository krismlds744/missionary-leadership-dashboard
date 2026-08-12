import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { dashboardData } from '../../data/dashboard'

export default function ChartCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Trend</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Stake trend</h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">Baptisms</span>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dashboardData.baptisms} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="baptismFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(148,163,184,0.15)" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: '16px',
                color: '#e2e8f0',
              }}
            />
            <Area type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} fill="url(#baptismFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}