import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { TempleMetricKey, TempleTrendPoint } from '../../types/pageData'

interface TempleTrendChartProps {
  data: TempleTrendPoint[]
  metric: TempleMetricKey
}

const metricConfig = {
  templeReady: { label: 'Temple Ready', color: '#34d399' },
  recommendInterviews: { label: 'Recommend Interviews', color: '#38bdf8' },
  recommendHolders: { label: 'Recommend Holders', color: '#a78bfa' },
  endowments: { label: 'Endowments', color: '#fbbf24' },
  sealings: { label: 'Sealings', color: '#f87171' },
} as const

export default function TempleTrendChart({ data, metric }: TempleTrendChartProps) {
  const config = metricConfig[metric]

  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={`temple-gradient-${metric}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={config.color} stopOpacity={0.45} />
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
          <Area type="monotone" dataKey={metric} stroke={config.color} strokeWidth={3} fill={`url(#temple-gradient-${metric})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
