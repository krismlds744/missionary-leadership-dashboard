import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { canAccessTab, canAccessWard as userCanAccessWard } from '../lib/authorization'
import { routePermissionMap, type AuthContextValue, type LoginCredentials, type Permission, type User } from '../types/auth'
import { supabase } from '../lib/supabase'

async function loadAuthorizedUser(userId?: string): Promise<User | null> {
  if (!userId) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, email, role, ward')
    .eq('id', userId)
    .maybeSingle()

  if (error || !data || (data.role !== 'stake_presidency' && data.role !== 'ward')) return null

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    role: data.role,
    ward: data.ward,
    permissions: data.role === 'stake_presidency'
      ? ['dashboard', 'stakeOverview', 'stakeGoal', 'converts', 'retention', 'templeProgress', 'ministering', 'missionaryCandidates', 'leadershipInsights', 'reports', 'settings']
      : ['retention'],
  }
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (isMounted) {
        setUser(await loadAuthorizedUser(session?.user.id))
        setIsLoading(false)
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(await loadAuthorizedUser(session?.user.id))
      if (isMounted) setIsLoading(false)
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const login = async ({ username, password }: LoginCredentials) => {
    const identifier = username.trim().toLowerCase()
    const { data, error } = await supabase.auth.signInWithPassword({ email: identifier, password })
    if (error) throw new Error(error.message)

    const authorizedUser = await loadAuthorizedUser(data.user.id)
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

  const hasPermission = (permission: Permission) => canAccessTab(user, permission)

  const canAccessRoute = (path: string) => {
    if (!user) {
      return false
    }

    const permission = routePermissionMap[path]
    if (!permission) {
      return true
    }

    return canAccessTab(user, permission)
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
      canAccessWard: (ward) => userCanAccessWard(user, ward),
    }),
    [user, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
