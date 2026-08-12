import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarRange,
  Download,
  Filter,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'
import SummaryCard from '../components/stake-overview/SummaryCard'
import ExecutiveInsights from '../components/retention/ExecutiveInsights'
import FilterToolbar from '../components/retention/FilterToolbar'
import HeatMap from '../components/retention/HeatMap'
import InterventionPanel from '../components/retention/InterventionPanel'
import MemberTimeline from '../components/retention/MemberTimeline'
import RetentionChart from '../components/retention/RetentionChart'
import RiskDashboard from '../components/retention/RiskDashboard'
import WardRetentionTable from '../components/retention/WardRetentionTable'
import { retentionData } from '../data/retention'
import type { RetentionMetricKey } from '../types/pageData'

const summaryIcons = [TrendingUp, Users, ShieldCheck, HeartHandshake, ArrowUpRight, TrendingUp] as const

export default function Retention() {
  const [activeMetric, setActiveMetric] = useState<RetentionMetricKey>('retention')

  const summaryCards = useMemo(
    () => [
      { label: 'Overall Retention Rate', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[0] },
      { label: 'Active Members', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[1] },
      { label: 'Less Active Members', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[2] },
      { label: 'Returning Members', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[3] },
      { label: 'New Reactivations', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[4] },
      { label: 'Members Requiring Follow-up', value: 'N/A', delta: 'Not reported in PDF', icon: summaryIcons[5] },
    ],
    [],
  )

  const metricOptions: Array<{ key: RetentionMetricKey; label: string }> = [
    { key: 'attendance', label: 'Attendance' },
    { key: 'retention', label: 'Retention' },
    { key: 'reactivations', label: 'Reactivations' },
    { key: 'lessActive', label: 'Less Active' },
  ]

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Retention</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Member health and retention analytics</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Identify active members, spot emerging risk, and guide ministering support with clarity and confidence.
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

      <FilterToolbar filters={retentionData.filters} />

      <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Trend</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Retention trend</h3>
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

        <RetentionChart data={retentionData.trend} metric={activeMetric} />
      </section>

      <RiskDashboard items={retentionData.riskSummary} />

      <section className="grid gap-6 xl:grid-cols-[1.9fr_1.1fr]">
        <WardRetentionTable rows={retentionData.wardComparison} />
        <ExecutiveInsights items={retentionData.insights} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <MemberTimeline items={retentionData.timeline} />
        <InterventionPanel items={retentionData.intervention} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Predictive</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Predictive risk panel</h3>
          </div>

          <div className="space-y-4">
            {retentionData.predictiveRisk.map((member) => (
              <div key={member.member} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{member.member}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{member.ward}</p>
                  </div>
                  <span className="rounded-full border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-300">{member.score}/100</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {member.indicators.map((indicator) => (
                    <span key={`${member.member}-${indicator}`} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-slate-300">
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <HeatMap rows={retentionData.heatmap} />
      </section>
    </div>
  )
}
