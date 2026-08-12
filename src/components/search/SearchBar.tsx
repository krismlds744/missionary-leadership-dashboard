import { forwardRef } from 'react'
import { Search, Sparkles } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { value, onChange, placeholder = 'Search pages and actions…' },
  ref,
) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200">
        <Search className="h-4 w-4" />
      </div>

      <input
        ref={ref}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoFocus
        placeholder={placeholder}
        className="flex-1 border-0 bg-transparent text-base text-white placeholder:text-slate-500 focus:outline-none"
      />

      <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-300 sm:flex">
        <Sparkles className="h-3 w-3" />
        Search
      </div>
    </div>
  )
})

export default SearchBar
