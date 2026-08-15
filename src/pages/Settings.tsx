import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { applyTheme, getTheme, type Theme } from '../utils/theme'

const options: Array<{ theme: Theme; title: string; description: string; Icon: typeof Moon }> = [
  { theme: 'dark', title: 'Dark Theme', description: 'The original Mission Insights appearance.', Icon: Moon },
  { theme: 'light', title: 'Light Theme', description: 'A bright workspace for daytime use.', Icon: Sun },
]

export default function Settings() {
  const [theme, setTheme] = useState<Theme>(getTheme)
  const selectTheme = (nextTheme: Theme) => {
    setTheme(nextTheme)
    applyTheme(nextTheme)
  }

  return <div className="space-y-6">
    <header className="rounded-[30px] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8"><p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">Preferences</p><h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Settings</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Choose the appearance that is most comfortable for your work.</p></header>
    <section className="rounded-[26px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_24px_70px_rgba(2,8,23,0.22)] backdrop-blur-xl sm:p-6"><div><p className="text-[0.66rem] uppercase tracking-[0.24em] text-slate-500">Appearance</p><h2 className="mt-2 text-xl font-semibold text-white">Color Theme</h2></div><div className="mt-5 grid gap-4 md:grid-cols-2">{options.map(({ theme: optionTheme, title, description, Icon }) => <button key={optionTheme} type="button" onClick={() => selectTheme(optionTheme)} className={`rounded-2xl border p-5 text-left transition ${theme === optionTheme ? 'border-sky-400/60 bg-sky-400/10 shadow-[0_14px_34px_rgba(14,165,233,0.16)]' : 'border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.06]'}`}><div className="flex items-start justify-between"><div className={`rounded-xl border p-2.5 ${optionTheme === 'dark' ? 'border-slate-500/30 bg-slate-900 text-slate-100' : 'border-amber-300/40 bg-amber-100 text-amber-700'}`}><Icon className="h-5 w-5" /></div>{theme === optionTheme && <span className="rounded-full border border-sky-300/30 bg-sky-300/10 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.15em] text-sky-200">Active</span>}</div><p className="mt-5 text-base font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{description}</p></button>)}</div></section>
  </div>
}
