import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import CommandPalette from '../components/search/CommandPalette'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

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

  useEffect(() => {
    if (!isMobileNavOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileNavOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileNavOpen])

  return (
    <>
      <div className="min-h-screen bg-[#05070f] text-slate-50">
        <div className="relative flex min-h-screen min-w-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.10),transparent_22%)]" />

          <aside className="relative z-10 hidden w-[280px] shrink-0 border-r border-white/10 bg-slate-950/70 backdrop-blur-xl md:block">
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

          {isMobileNavOpen && (
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsMobileNavOpen(false)}
              className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm md:hidden"
            />
          )}

          <aside className={`fixed inset-y-0 left-0 z-40 flex w-[min(86vw,320px)] flex-col border-r border-white/10 bg-slate-950/95 shadow-[20px_0_70px_rgba(2,8,23,0.45)] backdrop-blur-xl transition-transform duration-300 md:hidden ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Mission Insights</span>
              <button type="button" onClick={() => setIsMobileNavOpen(false)} className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300" aria-label="Close navigation">
                <X className="h-4 w-4" />
              </button>
            </div>
            <Sidebar onNavigate={() => setIsMobileNavOpen(false)} />
          </aside>

          <main className="relative z-10 min-w-0 flex-1 p-3 pt-20 sm:p-6 sm:pt-6 lg:p-8">
            <div className="fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/85 px-3 py-3 backdrop-blur-xl sm:px-5 md:hidden">
              <button type="button" onClick={() => setIsMobileNavOpen(true)} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200" aria-label="Open navigation">
                <Menu className="h-4 w-4" />
                Menu
              </button>
              <button type="button" onClick={() => setIsPaletteOpen(true)} className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300" aria-label="Open search">
                <Search className="h-4 w-4" />
              </button>
            </div>
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