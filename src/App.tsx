import { lazy, Suspense, type ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const StakeOverview = lazy(() => import('./pages/StakeOverview'))
const StakeGoal = lazy(() => import('./pages/StakeGoal'))
const Converts = lazy(() => import('./pages/Converts'))
const Retention = lazy(() => import('./pages/Retention'))
const Ministering = lazy(() => import('./pages/Ministering'))
const MissionaryCandidates = lazy(() => import('./pages/MissionaryCandidates'))
const StakePerformanceAnalytics = lazy(() => import('./pages/StrategicInsights'))
const Settings = lazy(() => import('./pages/Settings'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#040816] text-slate-50" role="status" aria-live="polite">
      <div className="rounded-[28px] border border-white/10 bg-slate-950/70 px-6 py-5 text-sm text-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.4)]">
        Loading Mission Insights...
      </div>
    </div>
  )
}

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, canAccessRoute } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <RouteFallback />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (!canAccessRoute(location.pathname)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StakeOverview />} />
          <Route path="stake-overview" element={<Navigate to="/" replace />} />
          <Route path="stake-goal" element={<StakeGoal />} />
          <Route path="converts" element={<Converts />} />
          <Route path="retention" element={<Retention />} />
          <Route path="ministering" element={<Ministering />} />
          <Route path="missionary-candidates" element={<MissionaryCandidates />} />
          <Route path="stake-performance" element={<StakePerformanceAnalytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
