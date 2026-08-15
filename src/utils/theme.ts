export type Theme = 'dark' | 'light'

const themeStorageKey = 'mission-insights-theme'

export function getTheme(): Theme {
  return localStorage.getItem(themeStorageKey) === 'light' ? 'light' : 'dark'
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  localStorage.setItem(themeStorageKey, theme)
}
