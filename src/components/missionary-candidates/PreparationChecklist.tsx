import type { MissionaryChecklistItem } from '../../types/missionaryCandidates'

interface PreparationChecklistProps {
  items: MissionaryChecklistItem[]
}

export default function PreparationChecklist({ items }: PreparationChecklistProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Checklist</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Preparation checklist</h3>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <label key={item.item} className="flex cursor-pointer items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-white/[0.025] p-3.5 transition hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <span className={`flex h-5 w-5 items-center justify-center rounded-md border ${item.complete ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300' : 'border-slate-600 bg-slate-900 text-slate-500'}`}>
                {item.complete ? '✓' : ''}
              </span>
              <span className="text-sm text-slate-200">{item.item}</span>
            </div>
            <span className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] ${item.complete ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
              {item.complete ? 'Done' : 'Open'}
            </span>
          </label>
        ))}
      </div>
    </section>
  )
}
