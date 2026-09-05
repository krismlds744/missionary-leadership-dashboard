import { useEffect, useMemo, useRef, useState } from 'react'
import { Command, CornerDownLeft, Pin, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { canAccessTab } from '../../lib/authorization'
import { routePermissionMap } from '../../types/auth'
import { defaultFavorites, recentSearches, searchItems } from '../../data/search'
import Favorites from './Favorites'
import RecentSearches from './RecentSearches'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const navigate = useNavigate()
  const { logout, user } = useAuth()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [favorites, setFavorites] = useState(defaultFavorites)
  const [recent, setRecent] = useState(recentSearches)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const filteredResults = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return searchItems.filter((item) => !routePermissionMap[item.path] || canAccessTab(user, routePermissionMap[item.path])).slice(0, 8)
    }

    return searchItems.filter((item) => {
      if (routePermissionMap[item.path] && !canAccessTab(user, routePermissionMap[item.path])) return false
      const haystack = `${item.label} ${item.page} ${item.section} ${item.description} ${item.keywords.join(' ')}`.toLowerCase()
      return haystack.includes(normalized)
    })
  }, [query, user])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (!['ArrowDown', 'ArrowUp', 'Enter', 'Tab'].includes(event.key)) {
        return
      }

      if (filteredResults.length === 0) {
        return
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((current) => (current + 1) % filteredResults.length)
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((current) => (current - 1 + filteredResults.length) % filteredResults.length)
      }

      if (event.key === 'Enter' || event.key === 'Tab') {
        event.preventDefault()
        const item = filteredResults[selectedIndex]
        if (item) {
          navigate(item.path)
          onClose()
          setRecent((current) => {
            const updated = [
              { id: `recent-${Date.now()}`, label: item.label, path: item.path },
              ...current.filter((entry) => entry.path !== item.path),
            ].slice(0, 10)
            return updated
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredResults, isOpen, navigate, onClose, selectedIndex])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const handleSelect = (path: string) => {
    const item = searchItems.find((entry) => entry.path === path)

    if (item?.label === 'Sign Out') {
      logout()
      navigate('/login')
      onClose()
      return
    }

    navigate(path)
    onClose()

    const label = item?.label ?? 'Navigation'
    setRecent((current) => {
      const updated = [{ id: `recent-${Date.now()}`, label, path }, ...current.filter((entry) => entry.path !== path)].slice(0, 10)
      return updated
    })
  }

  const toggleFavorite = (path: string) => {
    const label = searchItems.find((item) => item.path === path)?.label
    if (!label) {
      return
    }

    setFavorites((current) => {
      const exists = current.some((item) => item.path === path)
      if (exists) {
        return current.filter((item) => item.path !== path)
      }

      return [{ id: `favorite-${Date.now()}`, label, path }, ...current].slice(0, 5)
    })
  }

  if (!isOpen) {
    return null
  }

  const canNavigateTo = (path: string) => !routePermissionMap[path] || canAccessTab(user, routePermissionMap[path])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/70 p-4 pt-16 backdrop-blur-2xl">
      <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-slate-950/80 shadow-[0_35px_100px_rgba(15,23,42,0.6)] ring-1 ring-white/5 animate-[fadeIn_0.2s_ease-out]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100">
              <Command className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Command palette</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4">
          <SearchBar ref={inputRef} value={query} onChange={setQuery} />

          <div className="mt-4 grid gap-5 xl:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 px-2">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">Results</p>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">{filteredResults.length} matches</span>
              </div>

              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <div key={result.id} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleFavorite(result.path)}
                      className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-slate-950/80 p-1.5 text-slate-300 transition hover:text-white"
                      aria-label={`Toggle favorite for ${result.label}`}
                    >
                      <Pin className="h-3.5 w-3.5" />
                    </button>

                    <SearchResult
                      label={result.label}
                      page={result.page}
                      section={result.section}
                      description={result.description}
                      shortcut={result.shortcut}
                      icon={result.icon}
                      isActive={index === selectedIndex}
                      onSelect={() => handleSelect(result.path)}
                    />
                  </div>
                ))
              ) : (
                <div className="rounded-[24px] border border-white/10 bg-white/[0.02] px-4 py-5 text-sm text-slate-300">
                  No matches found for “{query}”. Try another keyword.
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-3">
                <div className="mb-3 flex items-center justify-between px-2 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                  <span>Quick actions</span>
                  <CornerDownLeft className="h-3.5 w-3.5" />
                </div>

                <div className="space-y-2">
                  {searchItems
                    .filter((item) => item.category === 'Quick Action' && canNavigateTo(item.path))
                    .slice(0, 6)
                    .map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelect(item.path)}
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-transparent px-2 py-2 text-left text-sm text-slate-200 transition hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <span>{item.label}</span>
                        <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">{item.shortcut}</span>
                      </button>
                    ))}
                </div>
              </div>

              <RecentSearches items={recent.filter((item) => canNavigateTo(item.path))} onSelect={handleSelect} />
              <Favorites items={favorites.filter((item) => canNavigateTo(item.path))} onSelect={handleSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
