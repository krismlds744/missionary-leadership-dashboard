import type { ExportFormat } from '../../types/reports'

interface ExportFormatsProps {
  formats: ExportFormat[]
}

export default function ExportFormats({ formats }: ExportFormatsProps) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Exports</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Export formats</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {formats.map((format) => {
          const Icon = format.icon

          return (
            <div key={format.id} className="rounded-[24px] border border-white/10 bg-white/5 p-4 transition hover:border-white/15 hover:bg-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-slate-200">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-lg font-semibold text-white">{format.name}</h4>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{format.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
