import { ArrowRight, type LucideIcon } from 'lucide-react'

interface SearchResultProps {
  label: string
  page: string
  section: string
  description: string
  shortcut: string
  icon: LucideIcon
  isActive?: boolean
  onSelect: () => void
}

export default function SearchResult({
  label,
  page,
  section,
  description,
  shortcut,
  icon: Icon,
  isActive = false,
  onSelect,
}: SearchResultProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        'flex w-full items-center justify-between gap-4 rounded-2xl border px-3 py-3 text-left transition-all duration-200',
        isActive
          ? 'border-sky-400/35 bg-sky-500/10 shadow-[0_12px_30px_rgba(14,165,233,0.12)]'
          : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]',
      ].join(' ')}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-100">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 text-sm text-white">
            <span className="truncate font-medium">{label}</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
            <span>{page}</span>
            <span>•</span>
            <span>{section}</span>
          </div>
          <p className="mt-1 truncate text-sm text-slate-300">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-slate-300">
        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-slate-200">
          {shortcut}
        </span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  )
}
