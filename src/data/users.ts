import { allPermissions, type User } from '../types/auth'

const authorizedUsers: Array<Omit<User, 'id' | 'permissions'>> = [
  { role: 'Bishop', name: 'Bishop', email: 'bishop@stake.org', username: 'bishop' },
  { role: 'Ward Mission Leader', name: 'Ward Mission Leader', email: 'wml@stake.org', username: 'wml' },
  { role: 'Stake President', name: 'Stake President', email: 'president@stake.org', username: 'president' },
  { role: 'Stake President', name: 'Kris', email: 'krislds744@stake.org', username: 'krislds744' },
  { role: 'Bishop', name: 'Stake Bishopric', email: 'bs@stake.org', username: 'bs' },
  { role: 'Bishop', name: 'Batasan 1st Bishop', email: 'b1@stake.org', username: 'b1' },
  { role: 'Bishop', name: 'Batasan 2nd Bishop', email: 'b2@stake.org', username: 'b2' },
  { role: 'Bishop', name: 'Kalayaan Bishop', email: 'kal@stake.org', username: 'kal' },
  { role: 'Bishop', name: 'Mapayapa Bishop', email: 'map@stake.org', username: 'map' },
  { role: 'Bishop', name: 'Don Antonio Bishop', email: 'da@stake.org', username: 'da' },
  { role: 'Bishop', name: 'Fairview Bishop', email: 'far@stake.org', username: 'far' },
]

export const mockUsers: User[] = authorizedUsers.map((user, index) => ({
  id: `${user.role.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
  ...user,
  permissions: allPermissions,
}))
