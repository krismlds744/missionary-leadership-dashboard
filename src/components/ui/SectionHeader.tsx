import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle: string
  action?: ReactNode
}

export default function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{title}</p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{subtitle}</h1>
      </div>

      {action ? <div>{action}</div> : null}
    </div>
  )
}
