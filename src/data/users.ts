import { allPermissions, type User } from '../types/auth'

const authorizedUsers: Array<Omit<User, 'id' | 'permissions'>> = [
  { role: 'Bishop', name: 'Bishop', email: 'bishop@stake.org', username: 'bishop' },
  { role: 'Ward Mission Leader', name: 'Ward Mission Leader', email: 'wml@stake.org', username: 'wml' },
  { role: 'Stake President', name: 'Stake President', email: 'president@stake.org', username: 'president' },
  { role: 'Stake President', name: 'Kris', email: 'krislds744@stake.org', username: 'krislds744' },
]

export const mockUsers: User[] = authorizedUsers.map((user, index) => ({
  id: `${user.role.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
  ...user,
  permissions: allPermissions,
}))
