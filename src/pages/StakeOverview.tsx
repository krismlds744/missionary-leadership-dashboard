import { useMemo, useState } from 'react'
import {
  Building2,
  ChartColumn,
  Users,
  UserRoundCheck,
  UserRoundSearch,
} from 'lucide-react'
import GrowthChart from '../components/stake-overview/GrowthChart'
import ExecutiveSummary from '../components/stake-overview/ExecutiveSummary'
import InsightsPanel from '../components/stake-overview/InsightsPanel'
import SummaryCard from '../components/stake-overview/SummaryCard'
import Timeline from '../components/stake-overview/Timeline'
import WardTable from '../components/stake-overview/WardTable'
import { stakeOverviewData } from '../data/stakeOverview'
import type { GrowthMetricKey } from '../types/pageData'

const summaryIcons = [
  Building2,
  Users,
  UserRoundSearch,
  ChartColumn,
  UserRoundCheck,
  Users,
] as const

export default function StakeOverview() {
  const [activeMetric, setActiveMetric] = useState<GrowthMetricKey>('converts')

  const summaryCards = useMemo(
    () => [
      { label: 'Total Wards', value: stakeOverviewData.summary.totalWards.toString(), delta: 'Across all units', icon: summaryIcons[0] },
      { label: 'Total Members', value: stakeOverviewData.summary.totalMembers.toLocaleString(), delta: 'Households and individuals', icon: summaryIcons[1] },
      { label: 'Active Members', value: stakeOverviewData.summary.activeMembers.toLocaleString(), delta: 'Currently engaged', icon: summaryIcons[2] },
      { label: 'Average Sacrament Attendance', value: stakeOverviewData.summary.averageSacramentAttendance, delta: '+4.2% MoM', icon: summaryIcons[3] },
      { label: 'Total Priesthood Holders', value: stakeOverviewData.summary.totalPriesthoodHolders.toString(), delta: 'Steady participation', icon: summaryIcons[4] },
      { label: 'Total Youth', value: stakeOverviewData.summary.totalYouth.toString(), delta: 'High engagement', icon: summaryIcons[5] },
    ],
    [],
  )

  const metricOptions: Array<{ key: GrowthMetricKey; label: string }> = [
    { key: 'converts', label: 'New Converts' },
    { key: 'attendance', label: 'Attendance' },
    { key: 'templeGrowth', label: 'Temple Recommend Growth' },
  ]

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Stake Overview</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Executive leadership snapshot</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              A high-level view of ward vitality, missions, attendance, and member readiness across the stake.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            Reporting period: <span className="font-medium text-white">August 2026</span>
          </div>
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} label={card.label} value={card.value} delta={card.delta} icon={card.icon} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-1">
        <WardTable rows={stakeOverviewData.wardPerformance} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Growth</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Monthly stake growth</h3>
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
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

          <GrowthChart data={stakeOverviewData.monthlyGrowth} metric={activeMetric} />
        </div>

        <ExecutiveSummary summary={stakeOverviewData.executiveSummary} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_1.85fr]">
        <InsightsPanel insights={stakeOverviewData.insights} />
        <Timeline items={stakeOverviewData.timeline} />
      </section>
    </div>
  )
}
