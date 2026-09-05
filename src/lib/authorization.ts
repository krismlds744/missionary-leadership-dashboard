import type { Permission, User } from '../types/auth'

export function isStakePresidency(user: User | null): boolean {
  return user?.role === 'stake_presidency'
}

export function isWardUser(user: User | null): boolean {
  return user?.role === 'ward'
}

export function getUserWard(user: User | null): string | null {
  return user?.role === 'ward' ? user.ward : null
}

export function canAccessTab(user: User | null, permission: Permission): boolean {
  return Boolean(user?.permissions.includes(permission))
}

export function canAccessWard(user: User | null, ward: string): boolean {
  return isStakePresidency(user) || getUserWard(user) === ward
}

export function defaultAuthorizedRoute(user: User | null): string {
  return isWardUser(user) ? '/retention' : '/'
}