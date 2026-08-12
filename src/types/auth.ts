export type Role =
  | 'Stake President'
  | 'Stake Presidency Counselor'
  | 'Stake Clerk'
  | 'High Council'
  | 'Bishop'
  | 'Bishopric Counselor'
  | 'Ward Clerk'
  | 'Ward Mission Leader'
  | 'Read-only Viewer'

export type Permission =
  | 'dashboard'
  | 'stakeOverview'
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
  username: string
  password: string
  role: Role
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
  '/converts': 'converts',
  '/retention': 'retention',
  '/temple-progress': 'templeProgress',
  '/ministering': 'ministering',
  '/missionary-candidates': 'missionaryCandidates',
  '/leadership-insights': 'leadershipInsights',
  '/reports-center': 'reports',
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
}
