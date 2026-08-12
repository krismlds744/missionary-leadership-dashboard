import type { Permission, Role, User } from '../types/auth'

const leadershipPermissions: Permission[] = [
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

const viewOnlyPermissions: Permission[] = [
  'dashboard',
  'stakeOverview',
  'converts',
  'retention',
  'templeProgress',
  'ministering',
  'missionaryCandidates',
  'leadershipInsights',
  'reports',
]

const roleBasedUsers: Array<{ role: Role; name: string; email: string; username: string; password: string }> = [
  { role: 'Stake President', name: 'President Anderson', email: 'president@stake.org', username: 'president', password: 'password123' },
  { role: 'Stake Presidency Counselor', name: 'Counselor Ramirez', email: 'counselor@stake.org', username: 'counselor', password: 'password123' },
  { role: 'Stake Clerk', name: 'Clerk Thompson', email: 'clerk@stake.org', username: 'clerk', password: 'password123' },
  { role: 'High Council', name: 'Councilor Lewis', email: 'highcouncil@stake.org', username: 'highcouncil', password: 'password123' },
  { role: 'Bishop', name: 'Bishop Walker', email: 'bishop@ward.org', username: 'bishop', password: 'password123' },
  { role: 'Bishopric Counselor', name: 'Counselor Nguyen', email: 'bishopric@ward.org', username: 'bishopric', password: 'password123' },
  { role: 'Ward Clerk', name: 'Ward Clerk Scott', email: 'wardclerk@ward.org', username: 'wardclerk', password: 'password123' },
  { role: 'Ward Mission Leader', name: 'Mission Leader Chen', email: 'missionleader@ward.org', username: 'missionleader', password: 'password123' },
  { role: 'Read-only Viewer', name: 'Viewer Perez', email: 'viewer@stake.org', username: 'viewer', password: 'password123' },
]

export const mockUsers: User[] = roleBasedUsers.map((user, index) => ({
  id: `${user.role.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
  ...user,
  permissions: user.role === 'Read-only Viewer' ? viewOnlyPermissions : leadershipPermissions,
}))
