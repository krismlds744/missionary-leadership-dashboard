import { Clock3 } from 'lucide-react'

interface RecentSearchesProps {
  items: Array<{ id: string; label: string; path: string }>
  onSelect: (path: string) => void
}

export default function RecentSearches({ items, onSelect }: RecentSearchesProps) {
  return (
    <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.02] p-3">
      <div className="mb-3 flex items-center gap-2 px-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
        <Clock3 className="h-3.5 w-3.5" />
        Recent searches
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.path)}
            className="flex w-full items-center justify-between gap-3 rounded-xl border border-transparent px-2 py-2 text-left text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/[0.04]"
          >
            <span>{item.label}</span>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">Open</span>
          </button>
        ))}
      </div>
    </div>
  )
}
