import type { ScheduledReport } from '../../types/reports'

interface ScheduledReportsProps {
  reports: ScheduledReport[]
}

const statusStyles: Record<ScheduledReport['status'], string> = {
  Active: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  Paused: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
  Pending: 'border-sky-400/30 bg-sky-500/10 text-sky-300',
}

export default function ScheduledReports({ reports }: ScheduledReportsProps) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 shadow-[0_30px_80px_rgba(15,23,42,0.24)] backdrop-blur-xl">
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Automation</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Scheduled reports</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left">
          <thead>
            <tr className="bg-white/5 text-slate-300">
              <th className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">Name</th>
              <th className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">Frequency</th>
              <th className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">Next Run</th>
              <th className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">Recipients</th>
              <th className="px-5 py-3 text-xs uppercase tracking-[0.2em] text-slate-400 sm:px-6">Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t border-white/10 transition-colors hover:bg-white/[0.03]">
                <td className="px-5 py-4 text-sm font-medium text-white sm:px-6">{report.name}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{report.frequency}</td>
                <td className="px-5 py-4 text-sm text-slate-200 sm:px-6">{report.nextRun}</td>
                <td className="px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap gap-2">
                    {report.recipients.map((recipient) => (
                      <span key={recipient} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-slate-300">
                        {recipient}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-4 sm:px-6">
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.7rem] font-medium ${statusStyles[report.status]}`}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
