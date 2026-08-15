import { useMemo } from 'react'
import {
  ArrowUpRight,
  CalendarRange,
  Download,
  Filter,
  HeartHandshake,
  MessageSquareText,
} from 'lucide-react'
import MetricCard from '../components/dashboard/MetricCard'
import ExecutiveInsights from '../components/ministering/ExecutiveInsights'
import WardMinisteringTable from '../components/ministering/WardMinisteringTable'
import { ministeringData } from '../data/ministering'

const summaryIcons = [HeartHandshake, MessageSquareText, ArrowUpRight, CalendarRange] as const

export default function Ministering() {
  const filteredRows = useMemo(() => ministeringData.wardTable, [])

  const brothersCompleted = 42
  const brothersTotal = 84
  const sistersCompleted = 58
  const sistersTotal = 102

  const brothersRemaining = brothersTotal - brothersCompleted
  const sistersRemaining = sistersTotal - sistersCompleted

  const summaryCards = useMemo(
    () => [
      {
        label: 'Ministering Brothers',
        value: `${brothersCompleted.toLocaleString()} / ${brothersTotal.toLocaleString()}`,
        change: `${Math.round((brothersCompleted / brothersTotal) * 100)}% complete • ${brothersRemaining.toLocaleString()} remaining`,
        icon: summaryIcons[0],
      },
      {
        label: 'Ministering Sisters',
        value: `${sistersCompleted.toLocaleString()} / ${sistersTotal.toLocaleString()}`,
        change: `${Math.round((sistersCompleted / sistersTotal) * 100)}% complete • ${sistersRemaining.toLocaleString()} remaining`,
        icon: summaryIcons[1],
      },
    ],
    [brothersCompleted, brothersRemaining, brothersTotal, sistersCompleted, sistersRemaining, sistersTotal],
  )

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Ministering</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ministering Progress</h1>
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

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
        {summaryCards.map((card) => (
          <MetricCard key={card.label} title={card.label} value={card.value} change={card.change} icon={card.icon} />
        ))}
      </section>

      <section className="grid gap-6">
        <WardMinisteringTable rows={filteredRows} />
      </section>

      <section className="grid gap-6">
        <ExecutiveInsights items={ministeringData.insights} />
      </section>
    </div>
  )
}
