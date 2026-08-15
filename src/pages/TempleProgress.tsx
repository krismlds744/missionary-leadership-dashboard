import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarRange,
  Download,
  Filter,
  HeartHandshake,
  Users,
} from 'lucide-react'
import MetricCard from '../components/dashboard/MetricCard'
import ExecutiveInsights from '../components/temple-progress/ExecutiveInsights'
import FilterToolbar from '../components/temple-progress/FilterToolbar'
import TempleFunnel from '../components/temple-progress/TempleFunnel'
import TempleTrendChart from '../components/temple-progress/TempleTrendChart'
import WardTempleTable from '../components/temple-progress/WardTempleTable'
import { stakeOverviewData } from '../data/stakeOverview'
import { templeProgressData } from '../data/templeProgress'
import type { TempleMetricKey } from '../types/pageData'

const summaryIcons = [HeartHandshake, Users, ArrowUpRight] as const

export default function TempleProgress() {
  const [activeMetric, setActiveMetric] = useState<TempleMetricKey>('templeReady')
  const [filters, setFilters] = useState({ ward: 'All Wards', dateRange: 'Quarter 2 2026', ageGroup: 'All Ages' })

  const filteredRows = useMemo(() => {
    if (filters.ward === 'All Wards') return templeProgressData.wardTable
    return templeProgressData.wardTable.filter((row) => row.ward === filters.ward)
  }, [filters.ward])

  const totalActiveMembers = stakeOverviewData.summary.activeMembers
  const totalTempleRecommends = filteredRows.reduce((sum, row) => sum + row.recommendHolders, 0)

  const summaryCards = useMemo(
    () => [
      { label: 'Active Members', value: totalActiveMembers.toLocaleString(), change: 'Stake active members', icon: summaryIcons[0] },
      { label: 'Members with Active Temple Recommend', value: totalTempleRecommends.toLocaleString(), change: `${((totalTempleRecommends / Math.max(totalActiveMembers, 1)) * 100).toFixed(1)}% of active members`, icon: summaryIcons[1] },
    ],
    [totalActiveMembers, totalTempleRecommends],
  )

  const metricOptions: Array<{ key: TempleMetricKey; label: string }> = [
    { key: 'templeReady', label: 'Temple Ready' },
    { key: 'recommendInterviews', label: 'Recommend Interviews' },
    { key: 'recommendHolders', label: 'Recommend Holders' },
    { key: 'endowments', label: 'Endowments' },
    { key: 'sealings', label: 'Sealings' },
  ]

  const insights = useMemo(() => {
    if (filteredRows.length === 0) {
      return [{ title: 'No ward selected', description: 'Choose a ward to refresh the temple readiness analysis.' }]
    }

    const highest = [...filteredRows].sort((a, b) => b.templeReady - a.templeReady)[0]
    const lowest = [...filteredRows].sort((a, b) => a.templeReady - b.templeReady)[0]
    const overallReadiness = filteredRows.reduce((sum, row) => sum + row.readiness, 0) / filteredRows.length
    const attention = [...filteredRows].sort((a, b) => a.readiness - b.readiness)[0]

    return [
      { title: 'Highest Temple Recommend Rate', description: `${highest.ward} leads the stake with ${highest.templeReady} active temple recommends.` },
      { title: 'Lowest Temple Recommend Rate', description: `${lowest.ward} has the lowest count at ${lowest.templeReady}.` },
      { title: 'Overall Temple Readiness', description: `${overallReadiness.toFixed(1)}% average readiness across the selected wards.` },
      { title: 'Ward Requiring Attention', description: `${attention.ward} needs the most follow-up based on the lowest readiness score.` },
    ]
  }, [filteredRows])

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Temple Progress</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Temple readiness and ordinance preparation</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Monitor meaningful progress toward temple ordinances and identify members who are preparing, interviewing, or ready for final recommendations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <CalendarRange className="h-4 w-4" />
                Aug 2026
              </span>
            </div>

            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
              <Download className="h-4 w-4" />
              Export
            </button>

            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
        {summaryCards.map((card) => (
          <MetricCard key={card.label} title={card.label} value={card.value} change={card.change} icon={card.icon} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Progression</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Temple progress funnel</h3>
          </div>
          <TempleFunnel stages={templeProgressData.funnel} />
        </div>

        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Trend</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Monthly temple progress</h3>
            </div>

            <div className="inline-flex flex-wrap rounded-full border border-white/10 bg-white/5 p-1">
              {metricOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setActiveMetric(option.key)}
                  className={[
                    'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                    activeMetric === option.key ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white',
                  ].join(' ')}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <TempleTrendChart data={templeProgressData.trend} metric={activeMetric} />
        </div>
      </section>

      <FilterToolbar
        filters={templeProgressData.filters}
        values={filters}
        onChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))}
      />

      <section className="grid gap-6 xl:grid-cols-[1.9fr_1.1fr]">
        <WardTempleTable
          rows={filteredRows.map((row) => ({
            ...row,
            activeMembers: row.templeReady + Math.max(row.recommendHolders - row.templeReady, 0),
            withoutTempleRecommend: Math.max((row.templeReady ?? 0) - (row.recommendHolders ?? 0), 0),
            withTempleRecommend: row.recommendHolders,
          }))}
        />
        <ExecutiveInsights items={insights} />
      </section>
    </div>
  )
}
