interface ExecutiveSummaryProps {
  summary: string
}

export default function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Summary</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Executive summary</h3>
        </div>
      </div>

      <p className="text-base leading-7 text-slate-200">{summary}</p>
    </div>
  )
}
