import { X } from 'lucide-react'

type InactiveConvert = { id: string; name: string; ward: string }

export default function InactiveConvertsDialog({ converts, onClose }: { converts: InactiveConvert[]; onClose: () => void }) {
  const groupedByWard = converts.reduce<Record<string, InactiveConvert[]>>((groups, convert) => {
    groups[convert.ward] ??= []
    groups[convert.ward].push(convert)
    return groups
  }, {})
  const groups = Object.entries(groupedByWard).sort(([left], [right]) => left.localeCompare(right))
  return <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-labelledby="inactive-converts-title"><div className="mx-auto w-full max-w-2xl rounded-[24px] border border-white/10 bg-[#0b1020] p-5 shadow-2xl sm:p-7"><div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5"><div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-rose-300/70">Recent converts</p><h2 id="inactive-converts-title" className="mt-1 text-2xl font-semibold text-white">Inactive new converts</h2><p className="mt-1 text-sm text-slate-400">Total: {converts.length}</p></div><button type="button" onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close inactive new converts"><X className="h-5 w-5" /></button></div><div className="mt-5 space-y-5">{groups.length ? groups.map(([ward, members]) => <section key={ward}><h3 className="text-sm font-semibold text-white">{ward} Ward <span className="text-slate-400">- {members.length}</span></h3><ul className="mt-2 grid gap-1.5">{members.map((member) => <li key={member.id} className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-slate-200">{member.name}</li>)}</ul></section>) : <p className="text-sm text-slate-400">No inactive recent converts.</p>}</div></div></div>
}