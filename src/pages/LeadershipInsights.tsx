import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Download,
  Filter,
  HeartHandshake,
  Landmark,
  Users,
} from 'lucide-react'
import MetricCard from '../components/dashboard/MetricCard'
import CorrelationChart from '../components/leadership-insights/CorrelationChart'
import ExecutiveBriefing from '../components/leadership-insights/ExecutiveBriefing'
import FilterToolbar from '../components/leadership-insights/FilterToolbar'
import LeadershipScorecard from '../components/leadership-insights/LeadershipScorecard'
import LeadershipTimeline from '../components/leadership-insights/LeadershipTimeline'
import Opportunities from '../components/leadership-insights/Opportunities'
import PredictiveInsights from '../components/leadership-insights/PredictiveInsights'
import PriorityMatrix from '../components/leadership-insights/PriorityMatrix'
import Recommendations from '../components/leadership-insights/Recommendations'
import { leadershipInsightsData } from '../data/leadershipInsights'
import type { LeadershipCorrelationMetric } from '../types/pageData'

const iconMap = {
  health: Activity,
  growth: ArrowUpRight,
  temple: Landmark,
  retention: HeartHandshake,
  ministering: Users,
  activity: BriefcaseBusiness,
} as const

export default function LeadershipInsights() {
  const [activeMetric, setActiveMetric] = useState<LeadershipCorrelationMetric>('ministeringRetention')

  const metricOptions: Array<{ key: LeadershipCorrelationMetric; label: string }> = [
    { key: 'ministeringRetention', label: 'Ministering vs Retention' },
    { key: 'templeActivity', label: 'Temple vs Activity' },
    { key: 'convertsAttendance', label: 'Converts vs Attendance' },
    { key: 'missionaryCandidates', label: 'Candidates vs Baptisms' },
  ]

  const summaryCards = useMemo(
    () =>
      leadershipInsightsData.kpis.map((item) => ({
        title: item.label,
        value: item.value,
        change: item.change,
        icon: iconMap[item.icon],
      })),
    [],
  )

  return (
    <div className="space-y-8">
      <ExecutiveBriefing summary={leadershipInsightsData.executiveBriefing} />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <MetricCard key={card.title} title={card.title} value={card.value} change={card.change} icon={card.icon} />
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <LeadershipScorecard items={leadershipInsightsData.scorecard} />
        <PriorityMatrix quadrants={leadershipInsightsData.priorities} />
      </div>

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Cross-Module Correlation</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Stake health relationships</h3>
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

        <CorrelationChart data={leadershipInsightsData.correlation.data} metric={activeMetric} />
      </section>

      <FilterToolbar filters={leadershipInsightsData.filters} />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <Recommendations items={leadershipInsightsData.recommendations} />
        <Opportunities items={leadershipInsightsData.opportunities} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <PredictiveInsights items={leadershipInsightsData.predictiveInsights} />
        <LeadershipTimeline items={leadershipInsightsData.timeline} />
      </div>

      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Leadership Analytics</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Executive preparation workspace</h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Stake Council Review
              </span>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
              <Download className="h-4 w-4" />
              Export Brief
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
              <Filter className="h-4 w-4" />
              Sync Filters
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
