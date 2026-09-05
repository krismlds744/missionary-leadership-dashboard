export type Role = 'stake_presidency' | 'ward'

export type Permission =
  | 'dashboard'
  | 'stakeOverview'
  | 'stakeGoal'
  | 'converts'
  | 'retention'
  | 'templeProgress'
  | 'ministering'
  | 'missionaryCandidates'
  | 'leadershipInsights'
  | 'reports'
  | 'settings'

export type User = {
  id: string
  name: string
  email: string
  role: Role
  ward: string | null
  permissions: Permission[]
}

export type LoginCredentials = {
  username: string
  password: string
  rememberMe: boolean
}

export const allPermissions: Permission[] = [
  'dashboard',
  'stakeOverview',
  'stakeGoal',
  'converts',
  'retention',
  'templeProgress',
  'ministering',
  'missionaryCandidates',
  'leadershipInsights',
  'reports',
  'settings',
]

export const routePermissionMap: Record<string, Permission> = {
  '/': 'dashboard',
  '/stake-overview': 'stakeOverview',
  '/stake-goal': 'stakeGoal',
  '/converts': 'converts',
  '/retention': 'retention',
  '/temple-progress': 'templeProgress',
  '/ministering': 'ministering',
  '/missionary-candidates': 'missionaryCandidates',
  '/strategic-insights': 'leadershipInsights',
  '/leadership-insights': 'leadershipInsights',
  '/reports-center': 'reports',
  '/stake-performance': 'leadershipInsights',
  '/settings': 'settings',
}

export type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<User>
  logout: () => void
  hasPermission: (permission: Permission) => boolean
  canAccessRoute: (path: string) => boolean
  canAccessWard: (ward: string) => boolean
}
