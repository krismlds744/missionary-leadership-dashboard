import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarRange,
  Download,
  Filter,
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'
import MetricCard from '../components/dashboard/MetricCard'
import CompanionshipDashboard from '../components/ministering/CompanionshipDashboard'
import CoverageHeatMap from '../components/ministering/CoverageHeatMap'
import ExecutiveInsights from '../components/ministering/ExecutiveInsights'
import FilterToolbar from '../components/ministering/FilterToolbar'
import MembersAttentionPanel from '../components/ministering/MembersAttentionPanel'
import MinisteringTimeline from '../components/ministering/MinisteringTimeline'
import MinisteringTrendChart from '../components/ministering/MinisteringTrendChart'
import WardMinisteringTable from '../components/ministering/WardMinisteringTable'
import { ministeringData } from '../data/ministering'
import type { MinisteringMetricKey } from '../types/pageData'

const summaryIcons = [HeartHandshake, Users, ShieldCheck, MessageSquareText, ArrowUpRight, TrendingUp] as const

export default function Ministering() {
  const [activeMetric, setActiveMetric] = useState<MinisteringMetricKey>('coverage')

  const summaryCards = useMemo(
    () => [
      { label: 'Ministering Coverage', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[0] },
      { label: 'Active Companionships', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[1] },
      { label: 'Members Assigned', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[2] },
      { label: 'Monthly Interviews Completed', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[3] },
      { label: 'Members Without Assignments', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[4] },
      { label: 'Members Requiring Immediate Attention', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[5] },
    ],
    [],
  )

  const metricOptions: Array<{ key: MinisteringMetricKey; label: string }> = [
    { key: 'coverage', label: 'Coverage %' },
    { key: 'interviews', label: 'Interviews Completed' },
    { key: 'companionships', label: 'Active Companionships' },
    { key: 'visits', label: 'Monthly Visits' },
  ]

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Ministering</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ministering coverage and companionship health</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Monitor companionship effectiveness, confirm follow-up coverage, and identify members who need additional support from leadership and ministry teams.
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
          <MetricCard key={card.label} title={card.label} value={card.value} change={card.change} icon={card.icon} />
        ))}
      </section>

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Trend</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Ministering coverage trend</h3>
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

        <MinisteringTrendChart data={ministeringData.trend} metric={activeMetric} />
      </section>

      <FilterToolbar filters={ministeringData.filters} />

      <section className="grid gap-6 xl:grid-cols-[1.9fr_1.1fr]">
        <WardMinisteringTable rows={ministeringData.wardTable} />
        <ExecutiveInsights items={ministeringData.insights} />
      </section>

      <CompanionshipDashboard items={ministeringData.companionships} />

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <MinisteringTimeline items={ministeringData.timeline} />
        <MembersAttentionPanel members={ministeringData.membersNeedingAttention} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Coverage snapshot</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Ward coverage summary</h3>
          </div>

          <div className="space-y-4">
            {ministeringData.wardTable.map((ward) => (
              <div key={ward.ward} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{ward.ward}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{ward.healthStatus}</p>
                  </div>
                  <span className="text-lg font-semibold text-white">{ward.coverage}%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400" style={{ width: `${ward.coverage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <CoverageHeatMap rows={ministeringData.heatmap} />
      </section>
    </div>
  )
}
