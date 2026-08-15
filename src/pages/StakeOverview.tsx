import { useMemo, useState } from 'react'
import {
  Building2,
  ChartColumn,
  UserCheck,
  Users,
  UserRoundCheck,
} from 'lucide-react'
import ExecutiveSummary from '../components/stake-overview/ExecutiveSummary'
import InsightsPanel from '../components/stake-overview/InsightsPanel'
import SummaryCard from '../components/stake-overview/SummaryCard'
import WardTable from '../components/stake-overview/WardTable'
import { stakeOverviewData } from '../data/stakeOverview'
import { dashboardData } from '../data/dashboard'

const summaryIcons = [
  Building2,
  Users,
  ChartColumn,
  UserRoundCheck,
  Users,
  Users,
  UserCheck,
] as const

const wardNames = [
  'Kalayaan',
  'Bagong Silangan',
  'Don Antonio',
  'Mapayapa',
  'Fairview',
  'Batasan 1st',
  'Batasan 2nd',
]

export default function StakeOverview() {
  const [activeWardModal, setActiveWardModal] = useState<'wards' | 'youth' | null>(null)

  const totalMembers = stakeOverviewData.summary.totalMembers
  const activeMembers = stakeOverviewData.summary.activeMembers
  const youngMenTotal = stakeOverviewData.summary.youngMenTotal
  const youngMenAttending = stakeOverviewData.summary.youngMenAttending
  const youngMenNotAttending = Math.max(0, youngMenTotal - youngMenAttending)
  const youngMenAttendancePct = youngMenTotal > 0 ? (youngMenAttending / youngMenTotal) * 100 : 0
  const youngMenNotAttendingPct = 100 - youngMenAttendancePct

  const youngWomenTotal = stakeOverviewData.summary.youngWomenTotal
  const youngWomenAttending = stakeOverviewData.summary.youngWomenAttending
  const youngWomenNotAttending = Math.max(0, youngWomenTotal - youngWomenAttending)
  const youngWomenAttendancePct = youngWomenTotal > 0 ? (youngWomenAttending / youngWomenTotal) * 100 : 0
  const youngWomenNotAttendingPct = 100 - youngWomenAttendancePct
  const totalYouthAttending = youngMenAttending + youngWomenAttending
  const totalYouthNotAttending = youngMenNotAttending + youngWomenNotAttending

  const summaryCards = useMemo(
    () => [
      {
        label: 'Total Wards',
        value: stakeOverviewData.summary.totalWards.toString(),
        delta: 'B1, B2, BS, DA, FAR, MAP, KAL',
        icon: summaryIcons[0],
        clickable: true,
        modalKey: 'wards' as const,
      },
      { label: 'Total Members', value: totalMembers.toLocaleString(), delta: 'Households and individuals', icon: summaryIcons[1] },
      { label: 'Sacrament Attendance', value: dashboardData.metrics.sacramentAttendance.value, delta: dashboardData.metrics.sacramentAttendance.change, deltaClassName: 'font-medium text-emerald-300', icon: summaryIcons[2] },
      { label: 'Total Priesthood Holders', value: stakeOverviewData.summary.totalPriesthoodHolders.toString(), delta: 'Steady participation', icon: summaryIcons[3] },
      {
        label: 'Total Youth',
        value: `${stakeOverviewData.summary.totalYouth.toString()} Total Youth`,
        delta: `Attending: ${totalYouthAttending.toLocaleString()}\nNot Attending: ${totalYouthNotAttending.toLocaleString()}`,
        icon: summaryIcons[4],
        clickable: true,
        modalKey: 'youth' as const,
      },
      { label: 'New Converts', value: dashboardData.metrics.newConverts.value.toString(), delta: dashboardData.metrics.newConverts.change, icon: summaryIcons[5] },
      { label: 'New Converts with Calling Rate', value: dashboardData.metrics.callingRate.value, delta: dashboardData.metrics.callingRate.change, icon: summaryIcons[6] },
    ],
    [activeMembers, totalMembers, totalYouthAttending, totalYouthNotAttending, youngMenAttendancePct, youngMenNotAttending, youngMenNotAttendingPct, youngMenTotal, youngMenAttending, youngWomenAttendancePct, youngWomenNotAttending, youngWomenNotAttendingPct, youngWomenTotal, youngWomenAttending],
  )

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Stake Overview</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Executive Leadership Snapshot</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              A unified view of ward performance, convert growth, sacrament attendance, temple and family history participation, ministering interviews, and leadership priorities across the stake.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            2026 Reporting Period: <span className="font-medium text-white">Quarter 2</span>
          </div>
        </div>
      </header>

      <ExecutiveSummary summary={stakeOverviewData.executiveSummary} />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => {
          const cardBody = <SummaryCard key={card.label} label={card.label} value={card.value} delta={card.delta} deltaClassName={card.deltaClassName ?? 'font-medium text-emerald-300'} icon={card.icon} />

          if (card.clickable) {
            return (
              <button
                key={card.label}
                type="button"
                onClick={() => setActiveWardModal(card.modalKey ?? 'wards')}
                className="text-left"
              >
                {cardBody}
              </button>
            )
          }

          return cardBody
        })}
      </section>

      <section className="grid gap-6">
        <WardTable rows={stakeOverviewData.wardPerformance} />
      </section>

      <section className="grid gap-6">
        <InsightsPanel insights={stakeOverviewData.insights} />
      </section>

      {activeWardModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-slate-950/95 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.5)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
                  {activeWardModal === 'wards' ? 'Wards' : 'Youth'}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {activeWardModal === 'wards' ? 'Stake wards' : 'Youth attendance breakdown'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWardModal(null)}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-slate-200"
              >
                Close
              </button>
            </div>

            {activeWardModal === 'youth' ? (
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Young Men</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{youngMenTotal.toLocaleString()}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Attending Priesthood & Sunday School: {youngMenAttending.toLocaleString()} ({Math.round(youngMenAttendancePct)}%)
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Not Attending: {youngMenNotAttending.toLocaleString()} ({Math.round(youngMenNotAttendingPct)}%)
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Young Women</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{youngWomenTotal.toLocaleString()}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Attending Young Women & Sunday School: {youngWomenAttending.toLocaleString()} ({Math.round(youngWomenAttendancePct)}%)
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Not Attending: {youngWomenNotAttending.toLocaleString()} ({Math.round(youngWomenNotAttendingPct)}%)
                  </p>
                </div>
              </div>
            ) : (
              <ul className="space-y-3">
                {wardNames.map((ward) => (
                  <li key={ward} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                    {ward}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
