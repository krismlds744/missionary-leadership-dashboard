interface PagePlaceholderProps {
  title: string
  description: string
}

export default function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="space-y-6 rounded-[36px] border border-white/10 bg-slate-950/60 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{description}</h1>
        <p className="mt-4 text-slate-300">A polished placeholder for page content and future analytics components.</p>
      </div>
    </div>
  )
}
