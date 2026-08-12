import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import CommandPalette from '../components/search/CommandPalette'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isSearchShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'
      if (isSearchShortcut) {
        event.preventDefault()
        setIsPaletteOpen((current) => !current)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#05070f] text-slate-50">
        <div className="relative flex min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.10),transparent_22%)]" />

          <aside className="relative z-10 w-[280px] shrink-0 border-r border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="p-5 pb-0">
              <button
                type="button"
                onClick={() => setIsPaletteOpen(true)}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left text-sm text-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.18)] transition hover:border-white/15 hover:bg-white/[0.07]"
              >
                <span className="inline-flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </span>
                <span className="rounded-lg border border-white/10 bg-slate-900/80 px-1.5 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-slate-300">
                  ⌘K
                </span>
              </button>
            </div>
            <Sidebar />
          </aside>

          <main className="relative z-10 flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-[1480px]">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
    </>
  )
}