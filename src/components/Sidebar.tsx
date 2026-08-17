import { Link, useLocation } from 'react-router-dom'
import {
  ChartPie,
  Grid,
  Heart,
  LogOut,
  Settings,
  Sparkles,
  UserRound,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const navItems: Array<{ label: string; path: string; icon: LucideIcon; permission: string }> = [
  { label: 'Stake Overview', path: '/', icon: Grid, permission: 'stakeOverview' },
  { label: 'Converts', path: '/converts', icon: Users, permission: 'converts' },
  { label: 'Retention', path: '/retention', icon: Heart, permission: 'retention' },
  { label: 'Ministering', path: '/ministering', icon: Sparkles, permission: 'ministering' },
  { label: 'Missionary Candidates', path: '/missionary-candidates', icon: UserRound, permission: 'missionaryCandidates' },
  { label: 'Stake Goal', path: '/stake-goal', icon: ChartPie, permission: 'stakeGoal' },
  { label: 'Stake Performance Analytics', path: '/stake-performance', icon: ChartPie, permission: 'leadershipInsights' },
  { label: 'Settings', path: '/settings', icon: Settings, permission: 'settings' },
]

function SidebarItem({ label, path, icon: Icon, onNavigate }: { label: string; path: string; icon: LucideIcon; onNavigate?: () => void }) {
  const location = useLocation()
  const isActive = location.pathname === path

  return (
    <Link
      to={path}
      onClick={onNavigate}
      className={[
        'group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[0.92rem] font-medium transition-all duration-300 ease-out',
        isActive
          ? 'bg-white/10 text-white shadow-[0_12px_30px_rgba(255,255,255,0.08)]'
          : 'text-slate-300 hover:bg-white/5 hover:text-white',
      ].join(' ')}
    >
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
      <span>{label}</span>
    </Link>
  )
}

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { user, logout } = useAuth()
  const visibleItems = navItems.filter((item) => user?.permissions.includes(item.permission as never))
  const accountLabel = user?.username === 'krislds744'
    ? 'Admin'
    : user?.role === 'Stake President'
      ? 'President'
      : user?.role

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto p-5">
      <div>
        <div className="mb-7 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            <ChartPie className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-400">Mission</p>
            <p className="text-sm font-semibold text-white">Mission Insights</p>
          </div>
        </div>

        <nav className="space-y-1.5">
          {visibleItems.map((item) => (
            <SidebarItem key={item.path} label={item.label} path={item.path} icon={item.icon} onNavigate={onNavigate} />
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        {user && (
          <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Signed in</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">{accountLabel}</p>
            <button
              type="button"
              onClick={logout}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-200 transition hover:border-white/15 hover:bg-slate-800"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        )}

        <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-slate-500">Executive Summary</p>
          <p className="leading-6 text-slate-300">
            Leadership visibility across ministry, conversion, readiness, and retention trends.
          </p>
        </div>
      </div>
    </div>
  )
}