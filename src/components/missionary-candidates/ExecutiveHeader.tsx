import { CalendarRange, Download, Filter, Plus } from 'lucide-react'

interface ExecutiveHeaderProps {
  title: string
  description: string
}

export default function ExecutiveHeader({ title, description }: ExecutiveHeaderProps) {
  return (
    <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-8">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Missionary candidates</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <CalendarRange className="h-4 w-4" />
            Aug 2026
          </div>

          <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
            <Plus className="h-4 w-4" />
            Add Candidate
          </button>

          <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
            <Download className="h-4 w-4" />
            Export
          </button>

          <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition hover:border-white/15 hover:bg-white/[0.08]">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>
    </header>
  )
}
