import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { mockUsers } from '../data/users'
import type { AuthContextValue, LoginCredentials, Permission, User } from '../types/auth'
import { supabase } from '../lib/supabase'

function userForEmail(email?: string): User | null {
  if (!email) return null
  return mockUsers.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase()) ?? null
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isMounted) {
        setUser(userForEmail(session?.user.email))
        setIsLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(userForEmail(session?.user.email))
      setIsLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const login = async ({ username, password }: LoginCredentials) => {
    const identifier = username.trim().toLowerCase()
    const account = mockUsers.find((candidate) => candidate.username.toLowerCase() === identifier || candidate.email.toLowerCase() === identifier)
    if (!account) throw new Error('This account is not authorized for Mission Insights.')

    const { data, error } = await supabase.auth.signInWithPassword({ email: account.email, password })
    if (error) throw new Error(error.message)

    const authorizedUser = userForEmail(data.user.email)
    if (!authorizedUser) {
      await supabase.auth.signOut()
      throw new Error('This account is not authorized for Mission Insights.')
    }

    setUser(authorizedUser)
    return authorizedUser
  }

  const logout = () => {
    void supabase.auth.signOut()
    setUser(null)
  }

  const hasPermission = (permission: Permission) => Boolean(user?.permissions.includes(permission))

  const canAccessRoute = (path: string) => {
    if (!user) {
      return false
    }

    const permissionMap: Record<string, Permission> = {
      '/': 'stakeOverview',
      '/converts': 'converts',
      '/retention': 'retention',
      '/ministering': 'ministering',
      '/missionary-candidates': 'missionaryCandidates',
      '/reports-center': 'reports',
      '/stake-performance': 'leadershipInsights',
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
