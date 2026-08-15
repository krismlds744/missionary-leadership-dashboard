import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  UserRoundCheck,
  Users,
  Waves,
  X,
} from 'lucide-react'
import NewConvertRetentionByWard from '../components/retention/NewConvertRetentionByWard'
import SummaryCard from '../components/stake-overview/SummaryCard'
import { convertsData } from '../data/converts'

const summaryIcons = [Users, Waves, HeartHandshake, UserRoundCheck, BadgeCheck, ArrowUpRight, BadgeCheck] as const

function PriesthoodProgress({ value }: { value: string }) {
  const [completed, eligible] = value.split('/').map(Number)
  const percent = eligible > 0 ? completed / eligible * 100 : 0
  const color = percent >= 80 ? 'bg-emerald-400' : percent >= 60 ? 'bg-yellow-300' : 'bg-rose-400'
  return <div className="relative h-6 w-full overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full ${color} transition-[width] duration-500`} style={{ width: `${percent}%` }} /><span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)]">{value}</span></div>
}

export default function Converts() {
  const [showPriesthoodModal, setShowPriesthoodModal] = useState(false)
  const totalNewConverts = convertsData.summary.totalConverts
  const activeConverts = Math.round(totalNewConverts * 0.73)
  const inactiveConverts = Math.max(totalNewConverts - activeConverts, 0)

  const summaryCards = useMemo(
    () => [
      { label: 'Total New Converts', value: totalNewConverts.toLocaleString(), delta: 'Verified by official PDF', icon: summaryIcons[0] },
      { label: 'Active New Converts', value: activeConverts.toLocaleString(), delta: 'Currently active in the report', icon: summaryIcons[1] },
      { label: 'Inactive New Converts', value: inactiveConverts.toLocaleString(), delta: 'Needs follow-up focus', icon: summaryIcons[2] },
      { label: 'New Converts with Calling', value: `${convertsData.summary.callingAssignmentRate}%`, delta: '20 of 86 eligible converts with calling or responsibility', icon: summaryIcons[3], compactDelta: true },
      { label: 'New Converts: Family History & Temple', value: '16 out of 86', delta: 'Converts age 12 and older who have submitted ancestor names for temple ordinances', icon: summaryIcons[4] },
      { label: 'Priesthood Ordination', value: '20 out of 35', delta: 'Youth and adult male converts ordained to appropriate priesthood office', icon: summaryIcons[5], clickable: true },
    ],
    [activeConverts, inactiveConverts, totalNewConverts],
  )

  return (
    <div className="space-y-8">
      <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Converts</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Convert Retention And Temple Readiness</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Monitor investigator progress, sacramental engagement, and readiness for ordinances across the stake. Use official PDF totals to focus ward council accountability and convert follow-up gaps.
            </p>
          </div>

        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
        {summaryCards.map((card) => (
          <div key={card.label} className="h-full xl:col-span-2">
            {card.clickable ? <button type="button" onClick={() => setShowPriesthoodModal(true)} className="h-full w-full text-left"><SummaryCard label={card.label} value={card.value} delta={card.delta} icon={card.icon} compactDelta={card.compactDelta} labelClassName="text-sky-300" /></button> : <SummaryCard label={card.label} value={card.value} delta={card.delta} icon={card.icon} compactDelta={card.compactDelta} labelClassName="text-sky-300" />}
          </div>
        ))}
      </section>

      <NewConvertRetentionByWard />

      {showPriesthoodModal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"><div className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[#0b1020] p-6 shadow-2xl"><div className="mb-5 flex items-start justify-between gap-4"><div><p className="text-[0.65rem] uppercase tracking-[0.22em] text-sky-300/70">Priesthood Ordination</p><h2 className="mt-1 text-2xl font-semibold text-white">Ward breakdown</h2></div><button type="button" onClick={() => setShowPriesthoodModal(false)} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close priesthood ordination breakdown"><X className="h-5 w-5" /></button></div><table className="w-full text-left"><thead><tr className="border-b border-white/10 text-xs uppercase tracking-[0.16em] text-slate-500"><th className="px-3 py-3">Ward</th><th className="px-3 py-3 text-center">Ordained / Eligible</th></tr></thead><tbody>{[['Bagong Silangan', '1/6'], ['Batasan Hills 1st', '4/6'], ['Batasan Hills 2nd', '2/5'], ['Don Antonio', '3/5'], ['Fairview', '5/7'], ['Kalayaan', '3/3'], ['Mapayapa', '2/3']].map(([ward, value]) => <tr key={ward} className="border-b border-white/7 text-sm"><td className="px-3 py-3 font-medium text-white">{ward}</td><td className="px-3 py-3"><PriesthoodProgress value={value} /></td></tr>)}</tbody></table></div></div>}
    </div>
  )
}
