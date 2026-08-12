const stages = [
  { title: 'Preparing', value: 12, color: 'from-sky-400 to-cyan-500' },
  { title: 'Interviewing', value: 5, color: 'from-amber-400 to-yellow-500' },
  { title: 'Mission Call', value: 3, color: 'from-violet-400 to-purple-500' },
  { title: 'Serving', value: 18, color: 'from-emerald-400 to-teal-500' },
]

export default function MissionaryPipelineCard() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Pipeline</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Missionary pipeline</h3>
      </div>

      <div className="space-y-5">
        {stages.map((stage) => (
          <div key={stage.title}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-200">{stage.title}</span>
              <span className="text-sm font-semibold text-white">{stage.value}</span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <div className={`h-full rounded-full bg-gradient-to-r ${stage.color}`} style={{ width: `${stage.value * 5}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}