import type { ReactNode } from 'react'

interface DataSectionProps {
  title: string
  children: ReactNode
}

export default function DataSection({ title, children }: DataSectionProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">Live</div>
      </div>
      {children}
    </section>
  )
}
