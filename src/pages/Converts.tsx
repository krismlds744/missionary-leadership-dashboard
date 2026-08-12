import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarRange,
  Download,
  Filter,
  HeartHandshake,
  UserRoundCheck,
  Users,
  Waves,
} from 'lucide-react'
import BaptismChart from '../components/converts/BaptismChart'
import ConvertFunnel from '../components/converts/ConvertFunnel'
import ExecutiveInsights from '../components/converts/ExecutiveInsights'
import FilterToolbar from '../components/converts/FilterToolbar'
import JourneyTimeline from '../components/converts/JourneyTimeline'
import RiskPanel from '../components/converts/RiskPanel'
import WardComparisonTable from '../components/converts/WardComparisonTable'
import SummaryCard from '../components/stake-overview/SummaryCard'
import { convertsData } from '../data/converts'
import type { ConvertTrendMetricKey } from '../types/pageData'

const summaryIcons = [Users, Waves, HeartHandshake, UserRoundCheck, BadgeCheck, ArrowUpRight, BadgeCheck] as const

export default function Converts() {
  const [activeMetric, setActiveMetric] = useState<ConvertTrendMetricKey>('baptisms')

  const formatSummaryValue = (value: number, fallback = 'N/A') => (value > 0 ? value.toLocaleString() : fallback)

  const summaryCards = useMemo(
    () => [
      { label: 'Total Converts', value: formatSummaryValue(convertsData.summary.totalConverts), delta: 'Verified by official PDF', icon: summaryIcons[0] },
      { label: 'Baptisms This Month', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[1] },
      { label: 'Active Converts', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[2] },
      { label: 'Less Active Converts', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[3] },
      { label: 'Temple Recommend Interviews', value: 'N/A', delta: 'Stake-level PDF data only', icon: summaryIcons[4] },
      { label: 'Temple Ready Converts', value: 'N/A', delta: 'Convert-level readiness not disclosed', icon: summaryIcons[5] },
      { label: 'Calling assignment rate', value: `${convertsData.summary.callingAssignmentRate}%`, delta: 'Only 23% of converts have a ward calling', icon: summaryIcons[6] },
    ],
    [],
  )

  const metricOptions: Array<{ key: ConvertTrendMetricKey; label: string }> = [
    { key: 'baptisms', label: 'Baptisms' },
    { key: 'confirmations', label: 'Confirmations' },
    { key: 'templeReadiness', label: 'Temple Readiness' },
  ]

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Converts</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Convert retention and temple readiness</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Monitor investigator progress, sacramental engagement, and readiness for ordinances across the stake. Use official PDF totals to focus ward council accountability and convert follow-up gaps.
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

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => (
          <SummaryCard key={card.label} label={card.label} value={card.value} delta={card.delta} icon={card.icon} />
        ))}
      </section>

      <FilterToolbar filters={convertsData.filters} />

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <ConvertFunnel stages={convertsData.funnel} />
        <ExecutiveInsights items={convertsData.insights} />
      </section>

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Trend</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Monthly baptism trend</h3>
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

        <BaptismChart data={convertsData.monthlyTrend} metric={activeMetric} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.9fr_1.1fr]">
        <WardComparisonTable rows={convertsData.wardComparison} />
        <RiskPanel items={convertsData.riskItems} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_1.85fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Leadership</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Mission follow-up priorities</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">1. Align ward follow-up actions with the official PDF total for every convert cohort.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">2. Prioritize sacrament attendance recovery: 83 of 114 converts are reported as attending, leaving a 27% participation gap.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">3. Address the participation gap: only 23% of converts have a calling, so many are attending without meaningful responsibility.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">4. Confirm ward council responsibility for ministering interviews, calling assignments, and attendance support.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">5. Treat temple progression as a separate leadership workstream; convert-specific recommend status is not disclosed in the PDF.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">6. Family history and YSA participation are not separately itemized in the report; monitor those gaps locally.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">7. Flag Fairview and Don Antonio for focused review based on the reported convert totals and ward context.</div>
          </div>
        </div>

        <JourneyTimeline journey={convertsData.journey} />
      </section>
    </div>
  )
}
