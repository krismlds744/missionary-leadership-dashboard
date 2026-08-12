import { ChevronLeft, ChevronRight, Search, Star } from 'lucide-react'
import type { MissionaryCandidate } from '../../types/missionaryCandidates'

interface CandidateTableProps {
  candidates: MissionaryCandidate[]
  onSelectCandidate: (candidate: MissionaryCandidate) => void
}

const statusStyles: Record<string, string> = {
  'Ready for Submission': 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  'Awaiting Interview': 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  'Medical Pending': 'border-sky-400/30 bg-sky-500/10 text-sky-300',
  'Dental Pending': 'border-violet-400/30 bg-violet-500/10 text-violet-300',
  'Mission Call Received': 'border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300',
  'On Hold': 'border-rose-400/30 bg-rose-500/10 text-rose-300',
  Preparing: 'border-slate-400/30 bg-slate-500/10 text-slate-300',
}

export default function CandidateTable({ candidates, onSelectCandidate }: CandidateTableProps) {
  return (
    <section className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Candidates</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Missionary pipeline</h3>
        </div>

        <label className="relative block min-w-[260px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search candidates"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-3 text-sm text-slate-100 outline-none transition focus:border-sky-400/50"
          />
        </label>
      </div>

      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/50">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-white/10 bg-white/[0.02] text-slate-400">
              <tr>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Photo</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Full Name</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Ward</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Age</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Gender</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Status</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Progress %</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Expected Submission</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Assigned Bishop</th>
                <th className="px-4 py-3 text-xs uppercase tracking-[0.2em]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="cursor-pointer border-b border-white/10 transition hover:bg-white/[0.03]" onClick={() => onSelectCandidate(candidate)}>
                  <td className="px-4 py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white">
                      {candidate.photo}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-white">{candidate.fullName}</p>
                      <p className="mt-1 text-xs text-slate-400">{candidate.missionType}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-200">{candidate.ward}</td>
                  <td className="px-4 py-4 text-sm text-slate-200">{candidate.age}</td>
                  <td className="px-4 py-4 text-sm text-slate-200">{candidate.gender}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] ${statusStyles[candidate.status]}`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="min-w-[120px]">
                      <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                        <span>{candidate.progress}%</span>
                        <Star className="h-3.5 w-3.5 text-amber-300" />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" style={{ width: `${candidate.progress}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-200">{candidate.expectedSubmission}</td>
                  <td className="px-4 py-4 text-sm text-slate-200">{candidate.assignedBishop}</td>
                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        onSelectCandidate(candidate)
                      }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-300">
        <p>Showing 1–5 of 128 candidates</p>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/[0.08]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full border border-sky-400/50 bg-sky-500/10 px-3 py-1.5 text-sky-200">1</button>
          <button type="button" className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">2</button>
          <button type="button" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/[0.08]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
