import type { LucideIcon } from 'lucide-react'

export type SearchCategory = 'Page' | 'Quick Action'

export type SearchItem = {
  id: string
  label: string
  page: string
  section: string
  description: string
  path: string
  shortcut: string
  icon: LucideIcon
  category: SearchCategory
  keywords: string[]
}

export type RecentSearchEntry = {
  id: string
  label: string
  path: string
}
