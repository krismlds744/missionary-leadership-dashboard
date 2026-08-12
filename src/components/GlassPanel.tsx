import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
  return (
    <div className={`rounded-[36px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  )
}
