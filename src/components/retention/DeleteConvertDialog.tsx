import { Trash2, X } from 'lucide-react'

type Props = {
  convertName: string
  ward: string
  isDeleting: boolean
  error: string
  onClose: () => void
  onConfirm: () => void
}

export default function DeleteConvertDialog({ convertName, ward, isDeleting, error, onClose, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="delete-convert-title">
      <div className="w-full max-w-md rounded-[24px] border border-rose-400/20 bg-[#0b1020] p-5 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-rose-300">Retention directory</p>
            <h2 id="delete-convert-title" className="mt-1 text-2xl font-semibold text-white">Remove recent convert</h2>
          </div>
          <button type="button" onClick={onClose} disabled={isDeleting} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close delete convert dialog"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-5 rounded-2xl border border-rose-400/15 bg-rose-400/[0.06] p-4">
          <p className="text-sm leading-6 text-slate-300">
            This will permanently remove <span className="font-semibold text-white">{convertName}</span> ({ward}) and all of their milestone progress. This action cannot be undone.
          </p>
        </div>
        {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} disabled={isDeleting} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10">Cancel</button>
          <button type="button" onClick={onConfirm} disabled={isDeleting} className="inline-flex items-center gap-2 rounded-xl border border-rose-400/40 bg-rose-500/20 px-4 py-2.5 text-sm font-semibold text-rose-100 transition hover:bg-rose-500/30 disabled:cursor-not-allowed disabled:opacity-50">
            <Trash2 className="h-4 w-4" />{isDeleting ? 'Removing…' : 'Remove convert'}
          </button>
        </div>
      </div>
    </div>
  )
}
