const activities = [
  {
    title: 'Quarter 2 report reviewed',
    ward: 'Stake-wide summary',
    time: 'Source: PDF',
  },
  {
    title: 'Temple recommend totals verified',
    ward: 'Stake report',
    time: 'Source: PDF',
  },
  {
    title: 'Convert totals audited',
    ward: 'Stake report',
    time: 'Source: PDF',
  },
  {
    title: 'Missing metrics marked N/A',
    ward: 'Data quality check',
    time: 'Source: PDF',
  },
]

export default function ActivityCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Activity</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Recent activity</h3>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-white">{activity.title}</p>
                <p className="mt-1 text-sm text-slate-400">{activity.ward}</p>
              </div>
              <span className="mt-1 inline-flex rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-300">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}