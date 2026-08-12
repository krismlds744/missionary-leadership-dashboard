import { Component, type ErrorInfo, type ReactNode } from 'react'

interface AppErrorBoundaryProps {
  children: ReactNode
}

interface AppErrorBoundaryState {
  hasError: boolean
}

export default class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#05070f] px-4 text-slate-50">
          <div className="max-w-lg rounded-[30px] border border-rose-400/20 bg-slate-950/80 p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-rose-300">Application error</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">Something went wrong</h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The Mission Insights dashboard hit a runtime issue. Refresh the page or return to the dashboard.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/15 hover:bg-white/[0.09]"
            >
              Reload app
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
