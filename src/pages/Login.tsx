import { useEffect, useState } from 'react'
import { Eye, EyeOff, KeyRound, Lock, ShieldCheck } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { defaultAuthorizedRoute } from '../lib/authorization'

export default function Login() {
  const { login, isAuthenticated, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ username: '', password: '', rememberMe: true })
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('')

  const redirectPath = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(user?.role === 'ward' ? defaultAuthorizedRoute(user) : redirectPath, { replace: true })
    }
  }, [isAuthenticated, navigate, redirectPath, user])

  const validate = () => {
    const nextErrors: { username?: string; password?: string } = {}

    if (!form.username.trim()) {
      nextErrors.username = 'Username is required.'
    }

    if (!form.password) {
      nextErrors.password = 'Password is required.'
    } else if (form.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('')

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      const authorizedUser = await login({
        username: form.username,
        password: form.password,
        rememberMe: form.rememberMe,
      })

      navigate(authorizedUser.role === 'ward' ? defaultAuthorizedRoute(authorizedUser) : redirectPath, { replace: true })
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to sign in.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#040816] px-4 py-10 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.14),transparent_22%)]" />

      <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-400">Mission</p>
              <p className="text-lg font-semibold text-white">Fairview Stake Missionary Work Insights</p>
            </div>
          </div>

          <div className="mt-12 max-w-xl">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-sky-300">Executive analytics</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Lead with clarity across every ward and ministry.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300">
              A unified operating view for stake leadership, ward teams, and ministry performance across member health, conversion, retention, and temple readiness.
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 bg-slate-900/70 p-6 sm:p-10 lg:border-l lg:border-t-0">
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Sign in</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Welcome back</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <label htmlFor="username" className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Email
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                  <KeyRound className="h-4 w-4 text-slate-400" />
                  <input
                    id="username"
                    type="text"
                    value={form.username}
                    onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))}
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="Enter email"
                  />
                </div>
                {errors.username && <p className="text-xs text-rose-300">{errors.username}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                  <Lock className="h-4 w-4 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                    className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="text-slate-400 transition hover:text-slate-200"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-rose-300">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={(event) => setForm((current) => ({ ...current, rememberMe: event.target.checked }))}
                    className="h-4 w-4 rounded border-white/10 bg-slate-900 text-sky-400 focus:ring-sky-500"
                  />
                  Remember me
                </label>

                <Link to="/forgot-password" className="text-sky-300 transition hover:text-sky-200">
                  Forgot password?
                </Link>
              </div>

              {status && (
                <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
                  {status}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(14,165,233,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-slate-400">Authorized access</p>
              <p className="mt-3 text-slate-200">Use the account credentials provided by stake leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
