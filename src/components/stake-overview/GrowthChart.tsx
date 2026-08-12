import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface GrowthChartProps {
  data: Array<{ month: string; converts: number; attendance: number; templeGrowth: number }>
  metric: 'converts' | 'attendance' | 'templeGrowth'
}

const metricConfig = {
  converts: {
    label: 'New Converts',
    color: '#38bdf8',
  },
  attendance: {
    label: 'Attendance',
    color: '#a78bfa',
  },
  templeGrowth: {
    label: 'Temple Recommend Growth',
    color: '#34d399',
  },
} as const

export default function GrowthChart({ data, metric }: GrowthChartProps) {
  const config = metricConfig[metric]

  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Growth</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Monthly stake growth</h3>
        </div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${metric}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={config.color} stopOpacity={0.5} />
                <stop offset="100%" stopColor={config.color} stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
            <Tooltip
              formatter={(value) => [String(value ?? 0), config.label]}
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: '16px',
                color: '#e2e8f0',
              }}
            />
            <Area type="monotone" dataKey={metric} stroke={config.color} strokeWidth={3} fill={`url(#gradient-${metric})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
