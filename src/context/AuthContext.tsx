import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { mockUsers } from '../data/users'
import type { AuthContextValue, LoginCredentials, Permission, User } from '../types/auth'

const AUTH_STORAGE_KEY = 'mission-insights-auth-user'

const readStoredUser = (): User | null => {
  try {
    const localUser = localStorage.getItem(AUTH_STORAGE_KEY)
    if (localUser) {
      return JSON.parse(localUser) as User
    }

    const sessionUser = sessionStorage.getItem(AUTH_STORAGE_KEY)
    if (sessionUser) {
      return JSON.parse(sessionUser) as User
    }
  } catch {
    return null
  }

  return null
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = readStoredUser()
    setUser(storedUser)
    setIsLoading(false)
  }, [])

  const login = async ({ username, password, rememberMe }: LoginCredentials) => {
    await new Promise((resolve) => setTimeout(resolve, 700))

    const foundUser = mockUsers.find(
      (candidate) => candidate.username.toLowerCase() === username.trim().toLowerCase() && candidate.password === password,
    )

    if (!foundUser) {
      throw new Error('Invalid username or password.')
    }

    const storedUser = { ...foundUser }
    const storage = rememberMe ? localStorage : sessionStorage
    storage.setItem(AUTH_STORAGE_KEY, JSON.stringify(storedUser))

    setUser(storedUser)
    return storedUser
  }

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    setUser(null)
  }

  const hasPermission = (permission: Permission) => Boolean(user?.permissions.includes(permission))

  const canAccessRoute = (path: string) => {
    if (!user) {
      return false
    }

    const permissionMap: Record<string, Permission> = {
      '/': 'dashboard',
      '/stake-overview': 'stakeOverview',
      '/converts': 'converts',
      '/retention': 'retention',
      '/temple-progress': 'templeProgress',
      '/ministering': 'ministering',
      '/missionary-candidates': 'missionaryCandidates',
      '/leadership-insights': 'leadershipInsights',
      '/reports-center': 'reports',
      '/settings': 'settings',
    }

    const permission = permissionMap[path]
    if (!permission) {
      return true
    }

    return hasPermission(permission)
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      hasPermission,
      canAccessRoute,
    }),
    [user, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
