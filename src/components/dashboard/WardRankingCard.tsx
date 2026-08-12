import { dashboardData } from '../../data/dashboard'

export default function WardRankingCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Leadership</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Ward ranking</h3>
      </div>

      <div className="space-y-4">
        {dashboardData.wardRanking.map((ward) => (
          <div key={ward.ward} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-slate-200">{ward.ward}</span>
              <span className="text-sm font-semibold text-white">{ward.score}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400" style={{ width: `${ward.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}