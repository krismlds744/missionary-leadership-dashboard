import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Building2,
  CalendarRange,
  Download,
  Filter,
  Sparkles,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  allQuarters,
  allYears,
  getExecutiveKpis,
  getFilteredHistory,
  getForecasts,
  getNarrativeObservations,
  getRecommendations,
  getScorecardRows,
  getTimelineMilestones,
  getTrendChartData,
  historicalQuarterlyData,
  wardComparisonData,
} from '../data/strategicInsights'

const metricOptions = [
  { key: 'sacramentAttendance', label: 'Sacrament Attendance' },
  { key: 'templeRecommend', label: 'Temple Recommend' },
  { key: 'reliefSociety', label: 'Relief Society' },
  { key: 'melchizedekPriesthood', label: 'Melchizedek Priesthood' },
  { key: 'youngMen', label: 'Young Men' },
  { key: 'youngWomen', label: 'Young Women' },
  { key: 'familyHistory', label: 'Family History' },
  { key: 'templeOrdinances', label: 'Convert Temple Ordinance Participation' },
  { key: 'converts', label: 'Converts' },
] as const

type MetricKey = (typeof metricOptions)[number]['key']

type GrowthTone = 'Excellent' | 'Healthy' | 'Stable' | 'Watch' | 'Needs Attention'

const toneColors: Record<GrowthTone, string> = {
  Excellent: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  Healthy: 'bg-sky-500/15 text-sky-300 border-sky-400/30',
  Stable: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
  Watch: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
  'Needs Attention': 'bg-rose-500/15 text-rose-300 border-rose-400/30',
}

export default function StrategicInsights() {
  const [yearFilter, setYearFilter] = useState<'All' | number>('All')
  const [quarterFilter, setQuarterFilter] = useState<'All' | (typeof allQuarters)[number]>('All')
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>('sacramentAttendance')

  const filteredHistory = useMemo(
    () => getFilteredHistory({ year: yearFilter, quarter: quarterFilter }),
    [quarterFilter, yearFilter],
  )

  const sourceData = filteredHistory.length > 0 ? filteredHistory : historicalQuarterlyData
  const firstEntry = sourceData[0]
  const latestEntry = sourceData[sourceData.length - 1]

  const kpis = useMemo(
    () =>
      getExecutiveKpis().map((card) => {
        if (!firstEntry || !latestEntry) {
          return card
        }

        const keyMap: Record<string, number> = {
          'Overall Stake Growth': ((latestEntry.totalMembers - firstEntry.totalMembers) / firstEntry.totalMembers) * 100,
          'Average Sacrament Attendance': ((latestEntry.sacramentAttendance - firstEntry.sacramentAttendance) / firstEntry.sacramentAttendance) * 100,
          'Temple Recommend Growth': ((latestEntry.templeRecommend - firstEntry.templeRecommend) / firstEntry.templeRecommend) * 100,
          'Convert Retention': ((latestEntry.converts - firstEntry.converts) / firstEntry.converts) * 100,
        }

        const numeric = keyMap[card.label] ?? 0
        return {
          ...card,
          value: `${Number.isFinite(numeric) ? numeric.toFixed(0) : 0}%`,
        }
      }),
    [firstEntry, latestEntry],
  )

  const scorecardRows = useMemo(() => getScorecardRows(), [])
  const narrative = useMemo(() => getNarrativeObservations(), [])
  const timeline = useMemo(() => getTimelineMilestones(), [])
  const forecasts = useMemo(() => getForecasts(), [])
  const recommendations = useMemo(() => getRecommendations(), [])
  const trendChartData = useMemo(() => getTrendChartData(), [])

  const chartSeries = useMemo(
    () =>
      trendChartData.map((point) => ({
        label: point.label,
        sacramentAttendance: point.sacramentAttendance,
        templeRecommend: point.templeRecommend,
        reliefSociety: point.reliefSociety,
        melchizedekPriesthood: point.melchizedekPriesthood,
        youngMen: point.youngMen,
        youngWomen: point.youngWomen,
        familyHistory: point.familyHistory,
        templeOrdinances: point.templeOrdinances,
        converts: point.converts,
      })),
    [trendChartData],
  )

  const metricConfig: Record<MetricKey, { label: string; color: string }> = {
    sacramentAttendance: { label: 'Sacrament Attendance', color: '#38bdf8' },
    templeRecommend: { label: 'Temple Recommend', color: '#34d399' },
    reliefSociety: { label: 'Relief Society', color: '#a78bfa' },
    melchizedekPriesthood: { label: 'Melchizedek Priesthood', color: '#fbbf24' },
    youngMen: { label: 'Young Men', color: '#f97316' },
    youngWomen: { label: 'Young Women', color: '#f472b6' },
    familyHistory: { label: 'Family History', color: '#6ee7b7' },
    templeOrdinances: { label: 'Temple Ordinances', color: '#22d3ee' },
    converts: { label: 'Converts', color: '#c084fc' },
  }

  const selectedMetricConfig = metricConfig[selectedMetric]
  const wardHighGrowth = [...wardComparisonData].sort((a, b) => b.growth - a.growth)[0]
  const wardLargestDecline = [...wardComparisonData].sort((a, b) => a.growth - b.growth)[0]
  const mostConsistentWard = [...wardComparisonData].sort((a, b) => Number(b.current - a.base) - Number(a.current - b.base))[0]

  return (
    <div className="space-y-8">
      <header className="rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Executive intelligence</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Stake Performance Analytics</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Analyze long-term stake performance, identify trends, measure progress over multiple years, and highlight opportunities for future growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <CalendarRange className="h-4 w-4" />
              <select value={yearFilter} onChange={(event) => setYearFilter(event.target.value === 'All' ? 'All' : Number(event.target.value))} className="bg-transparent text-sm text-white outline-none">
                <option value="All" className="bg-slate-900">All years</option>
                {allYears.map((year) => (
                  <option key={year} value={year} className="bg-slate-900">
                    {year}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <Filter className="h-4 w-4" />
              <select value={quarterFilter} onChange={(event) => setQuarterFilter(event.target.value as 'All' | (typeof allQuarters)[number])} className="bg-transparent text-sm text-white outline-none">
                <option value="All" className="bg-slate-900">All quarters</option>
                {allQuarters.map((quarter) => (
                  <option key={quarter} value={quarter} className="bg-slate-900">
                    {quarter}
                  </option>
                ))}
              </select>
            </label>

            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {kpis.map((card) => (
          <article key={card.label} className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">{card.label}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{card.value}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-slate-200">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">{card.context}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Growth scorecard</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Indicator ranking</h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-left">
              <thead>
                <tr className="bg-white/5 text-slate-300">
                  <th className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">Indicator</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">Growth</th>
                  <th className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {scorecardRows.map((row) => (
                  <tr key={row.indicator} className="border-t border-white/10 hover:bg-white/[0.03]">
                    <td className="px-4 py-3 text-sm font-medium text-white">{row.indicator}</td>
                    <td className="px-4 py-3 text-sm text-slate-200">{row.growth > 0 ? '+' : ''}{row.growth}%</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${toneColors[row.status as GrowthTone]}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Executive narrative</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Key observations</h3>
            </div>
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>

          <ul className="mt-5 space-y-4">
            {narrative.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-200">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Long-term trend</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Historical benchmark view</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {metricOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setSelectedMetric(option.key)}
                className={[
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                  selectedMetric === option.key ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white',
                ].join(' ')}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartSeries} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="trendGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={selectedMetricConfig.color} stopOpacity={0.45} />
                  <stop offset="100%" stopColor={selectedMetricConfig.color} stopOpacity={0.06} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
              <XAxis dataKey="label" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(148,163,184,0.2)', borderRadius: '16px', color: '#e2e8f0' }}
                formatter={(value) => [`${value ?? 0}`, selectedMetricConfig.label]}
              />
              <Legend />
              <Area type="monotone" dataKey={selectedMetric} stroke={selectedMetricConfig.color} strokeWidth={3} fill="url(#trendGradient)" name={selectedMetricConfig.label} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Ward comparison</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Performance matrix</h3>

          <div className="mt-5 space-y-3">
            {wardComparisonData.map((ward) => (
              <div key={ward.ward} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-white">{ward.ward}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] ${toneColors[ward.status as GrowthTone]}`}>
                    {ward.status}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-300">
                  <div>
                    <div className="text-slate-500">2019</div>
                    <div className="mt-1 text-white">{ward.base}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Current</div>
                    <div className="mt-1 text-white">{ward.current}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Growth</div>
                    <div className="mt-1 text-emerald-300">+{ward.growth}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Timeline</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Major historical milestone</h3>

          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <div key={item.headline} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-sky-400">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.year}</p>
                <p className="mt-1 text-base font-medium text-white">{item.headline}</p>
                <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Forecast</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Projected 2027</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {forecasts.map((item) => (
              <div key={item.indicator} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{item.indicator}</p>
                  <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">Projection</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">{item.projected}</p>
                <p className="mt-2 text-sm text-slate-300">Confidence: {item.confidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Strategic recommendations</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Leadership actions</h3>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Operational snapshot</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Stake leadership summary</h3>
          </div>
          <Building2 className="h-5 w-5 text-sky-300" />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Strongest ward</p>
            <p className="mt-2 text-xl font-semibold text-white">{wardHighGrowth.ward}</p>
            <p className="mt-1 text-sm text-emerald-300">+{wardHighGrowth.growth}% improvement</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Largest decline</p>
            <p className="mt-2 text-xl font-semibold text-white">{wardLargestDecline.ward}</p>
            <p className="mt-1 text-sm text-rose-300">{wardLargestDecline.growth}% growth</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Most consistent</p>
            <p className="mt-2 text-xl font-semibold text-white">{mostConsistentWard.ward}</p>
            <p className="mt-1 text-sm text-sky-300">Stable performance trend</p>
          </div>
        </div>
      </div>
    </div>
  )
}
