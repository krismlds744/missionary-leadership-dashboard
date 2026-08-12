import { X } from 'lucide-react'
import type { MissionaryCandidate } from '../../types/missionaryCandidates'

interface CandidateDrawerProps {
  candidate: MissionaryCandidate | null
  onClose: () => void
}

export default function CandidateDrawer({ candidate, onClose }: CandidateDrawerProps) {
  if (!candidate) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
      <aside className="h-full w-full max-w-2xl overflow-y-auto border-l border-white/10 bg-slate-950/95 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.6)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold text-white">
              {candidate.photo}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Candidate profile</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{candidate.fullName}</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/[0.08]"
            aria-label="Close candidate details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Personal Information</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Ward</p>
                <p className="mt-2 text-white">{candidate.ward}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Mission Type</p>
                <p className="mt-2 text-white">{candidate.missionType}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Age</p>
                <p className="mt-2 text-white">{candidate.age}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Gender</p>
                <p className="mt-2 text-white">{candidate.gender}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</p>
                <p className="mt-2 text-white">{candidate.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                <p className="mt-2 text-white">{candidate.email}</p>
              </div>
            </div>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Mission Timeline</p>
            <div className="mt-4 space-y-3">
              {candidate.timeline.map((item) => (
                <div key={`${candidate.id}-${item.label}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                  <div className={`h-3 w-3 rounded-full ${item.complete ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                  <div className="flex-1">
                    <p className="text-sm text-white">{item.label}</p>
                  </div>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Checklist</p>
            <div className="mt-4 grid gap-3">
              {candidate.checklist.map((item) => (
                <div key={`${candidate.id}-${item.item}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                  <span className="text-sm text-slate-200">{item.item}</span>
                  <span className={`rounded-full px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${item.complete ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                    {item.complete ? 'Complete' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Documents</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {candidate.documents.map((document) => (
                <div key={`${candidate.id}-${document.name}`} className="rounded-2xl border border-white/10 bg-slate-900/60 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{document.name}</p>
                    <span className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.18em] ${
                      document.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : document.status === 'Pending'
                          ? 'bg-amber-500/10 text-amber-300'
                          : document.status === 'Expired'
                            ? 'bg-rose-500/10 text-rose-300'
                            : 'bg-sky-500/10 text-sky-300'
                    }`}>
                      {document.status}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">Updated {document.lastUpdated}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Progress</p>
            <div className="mt-4 space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                  <span>Overall completion</span>
                  <span className="font-medium text-white">{candidate.progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" style={{ width: `${candidate.progress}%` }} />
                </div>
              </div>

              {candidate.progressBreakdown.map((item) => (
                <div key={`${candidate.id}-${item.label}`}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Notes</p>
            <p className="mt-4 text-sm leading-7 text-slate-200">{candidate.personalNotes}</p>
          </section>
        </div>
      </aside>
    </div>
  )
}
