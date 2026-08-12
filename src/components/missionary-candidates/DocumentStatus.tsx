import type { MissionaryDocumentCard } from '../../types/missionaryCandidates'

interface DocumentStatusProps {
  documents: MissionaryDocumentCard[]
}

export default function DocumentStatus({ documents }: DocumentStatusProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Documents</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Document status</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((item) => (
          <div key={item.name} className="rounded-[24px] border border-white/10 bg-white/[0.025] p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-medium text-white">{item.name}</p>
              <span className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] ${
                item.status === 'Completed'
                  ? 'bg-emerald-500/10 text-emerald-300'
                  : item.status === 'Pending'
                    ? 'bg-amber-500/10 text-amber-300'
                    : item.status === 'Expired'
                      ? 'bg-rose-500/10 text-rose-300'
                      : 'bg-sky-500/10 text-sky-300'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-400">Updated {item.lastUpdated}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
