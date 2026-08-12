type PriorityQuadrant = {
  title: string
  items: string[]
}

interface PriorityMatrixProps {
  quadrants: PriorityQuadrant[]
}

export default function PriorityMatrix({ quadrants }: PriorityMatrixProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Leadership Priorities</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Priority matrix</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((quadrant) => (
          <div key={quadrant.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-white">{quadrant.title}</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-slate-300">
                {quadrant.items.length} items
              </span>
            </div>

            <ul className="space-y-3 text-sm text-slate-300">
              {quadrant.items.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
