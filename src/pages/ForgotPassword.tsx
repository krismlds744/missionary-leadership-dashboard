import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#040816] px-4 py-10 text-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_20%)]" />

      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-white/10 bg-slate-950/75 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Account</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Reset password</h1>
          </div>
          <Link to="/login" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/10">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
              Enter the email associated with your Mission Insights account. We will send a secure reset link.
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email address
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@stake.org"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-3 text-sm font-medium text-white shadow-[0_20px_50px_rgba(14,165,233,0.35)] transition hover:brightness-110"
            >
              Send reset link
            </button>
          </form>
        ) : (
          <div className="rounded-[24px] border border-emerald-400/20 bg-emerald-500/10 p-5 text-slate-100">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              <p className="font-medium text-white">Reset link sent</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              A secure password reset link has been sent to <span className="font-medium text-white">{email}</span>.
            </p>
            <Link to="/login" className="mt-5 inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-sky-200">
              Return to login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
