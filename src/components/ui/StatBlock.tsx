import type { ReactNode } from 'react'

interface StatBlockProps {
  label: string
  value: string
  delta: string
  badge?: ReactNode
}

export default function StatBlock({ label, value, delta, badge }: StatBlockProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_50px_rgba(15,23,42,0.25)] backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        {badge ? <div>{badge}</div> : null}
      </div>
      <p className="mt-4 text-sm text-slate-300">{delta}</p>
    </div>
  )
}
