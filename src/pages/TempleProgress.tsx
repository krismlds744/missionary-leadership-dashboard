import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  CalendarRange,
  Crown,
  Download,
  Filter,
  HeartHandshake,
  ScrollText,
  ShieldCheck,
  Users,
} from 'lucide-react'
import MetricCard from '../components/dashboard/MetricCard'
import ExecutiveInsights from '../components/temple-progress/ExecutiveInsights'
import FilterToolbar from '../components/temple-progress/FilterToolbar'
import HeatMap from '../components/temple-progress/HeatMap'
import OrdinanceTimeline from '../components/temple-progress/OrdinanceTimeline'
import PreparationPipeline from '../components/temple-progress/PreparationPipeline'
import TempleFunnel from '../components/temple-progress/TempleFunnel'
import TempleTrendChart from '../components/temple-progress/TempleTrendChart'
import WardTempleTable from '../components/temple-progress/WardTempleTable'
import { templeProgressData } from '../data/templeProgress'
import type { TempleMetricKey } from '../types/pageData'

const summaryIcons = [HeartHandshake, Users, ScrollText, ShieldCheck, Crown, ArrowUpRight] as const

export default function TempleProgress() {
  const [activeMetric, setActiveMetric] = useState<TempleMetricKey>('templeReady')

  const summaryCards = useMemo(
    () => [
      { label: 'Temple Ready Members', value: '421', change: 'Official PDF total', icon: summaryIcons[0] },
      { label: 'Members Preparing', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[1] },
      { label: 'Recommend Interviews Scheduled', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[2] },
      { label: 'Recommend Holders', value: '421', change: 'Official PDF total', icon: summaryIcons[3] },
      { label: 'Endowments This Year', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[4] },
      { label: 'Sealings This Year', value: 'N/A', change: 'Not reported in PDF', icon: summaryIcons[5] },
    ],
    [],
  )

  const metricOptions: Array<{ key: TempleMetricKey; label: string }> = [
    { key: 'templeReady', label: 'Temple Ready' },
    { key: 'recommendInterviews', label: 'Recommend Interviews' },
    { key: 'recommendHolders', label: 'Recommend Holders' },
    { key: 'endowments', label: 'Endowments' },
    { key: 'sealings', label: 'Sealings' },
  ]

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

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

      <FilterToolbar filters={templeProgressData.filters} />

      <section className="grid gap-6 xl:grid-cols-[1.9fr_1.1fr]">
        <WardTempleTable rows={templeProgressData.wardTable} />
        <ExecutiveInsights items={templeProgressData.insights} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
        <OrdinanceTimeline items={templeProgressData.timeline} />
        <PreparationPipeline members={templeProgressData.pipeline} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1.8fr]">
        <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
          <div className="mb-6">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Readiness snapshot</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Ward readiness summary</h3>
          </div>

          <div className="space-y-4">
            {templeProgressData.wardTable.map((ward) => (
              <div key={ward.ward} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-white">{ward.ward}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{ward.status}</p>
                  </div>
                  <span className="text-lg font-semibold text-white">{ward.readiness}%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400" style={{ width: `${ward.readiness}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <HeatMap rows={templeProgressData.heatmap} />
      </section>
    </div>
  )
}
