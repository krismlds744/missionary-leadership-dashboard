export default function Settings() {
  return (
    <div className="space-y-6 rounded-[36px] border border-white/10 bg-slate-950/60 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Settings</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Workspace preferences</h1>
        <p className="mt-4 text-slate-300">Use the settings pages to configure notifications, privacy, and display preferences for Mission Insights.</p>
      </div>
      <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
        <p className="text-sm text-slate-400">This placeholder will be replaced with user options and workspace controls.</p>
      </div>
    </div>
  )
}
