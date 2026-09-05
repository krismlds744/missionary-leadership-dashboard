import { useState } from 'react'
import { X } from 'lucide-react'

type FormValues = { firstName: string; lastName: string; age: string; gender: 'M' | 'F'; ward: string }

type Props = {
  wards: string[]
  assignedWard: string | null
  isStakePresidency: boolean
  isSaving: boolean
  error: string
  onClose: () => void
  onSave: (values: FormValues) => void
}

export default function AddRecentConvertDialog({ wards, assignedWard, isStakePresidency, isSaving, error, onClose, onSave }: Props) {
  const [values, setValues] = useState<FormValues>({ firstName: '', lastName: '', age: '', gender: 'M', ward: assignedWard ?? '' })
  const [validationError, setValidationError] = useState('')

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const age = Number(values.age)
    if (!values.firstName.trim() || !values.lastName.trim() || !Number.isInteger(age) || age < 0 || age > 120 || !values.ward) {
      setValidationError('Complete all fields with a valid age and ward.')
      return
    }
    onSave({ ...values, firstName: values.firstName.trim(), lastName: values.lastName.trim(), age: String(age) })
  }

  return <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="add-convert-title"><form onSubmit={submit} className="w-full max-w-lg rounded-[24px] border border-white/10 bg-[#0b1020] p-5 shadow-2xl sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Retention directory</p><h2 id="add-convert-title" className="mt-1 text-2xl font-semibold text-white">Add new recent convert</h2></div><button type="button" onClick={onClose} disabled={isSaving} className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white" aria-label="Close add recent convert form"><X className="h-5 w-5" /></button></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="space-y-2"><span className="text-xs uppercase tracking-[0.16em] text-slate-400">Last name</span><input value={values.lastName} onChange={(event) => setValues({ ...values, lastName: event.target.value })} className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50" /></label><label className="space-y-2"><span className="text-xs uppercase tracking-[0.16em] text-slate-400">First name</span><input value={values.firstName} onChange={(event) => setValues({ ...values, firstName: event.target.value })} className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50" /></label><label className="space-y-2"><span className="text-xs uppercase tracking-[0.16em] text-slate-400">Age</span><input value={values.age} onChange={(event) => setValues({ ...values, age: event.target.value })} type="number" min="0" max="120" className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50" /></label><label className="space-y-2"><span className="text-xs uppercase tracking-[0.16em] text-slate-400">Gender</span><select value={values.gender} onChange={(event) => setValues({ ...values, gender: event.target.value as 'M' | 'F' })} className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50"><option value="M">Male</option><option value="F">Female</option></select></label>{isStakePresidency ? <label className="space-y-2 sm:col-span-2"><span className="text-xs uppercase tracking-[0.16em] text-slate-400">Ward</span><select value={values.ward} onChange={(event) => setValues({ ...values, ward: event.target.value })} className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-300/50"><option value="">Select a ward</option>{wards.map((ward) => <option key={ward}>{ward}</option>)}</select></label> : <p className="text-sm text-slate-300 sm:col-span-2">Ward: <span className="font-medium text-white">{assignedWard}</span></p>}</div>{(validationError || error) && <p className="mt-4 text-sm text-rose-300">{validationError || error}</p>}<div className="mt-6 flex justify-end gap-3"><button type="button" disabled={isSaving} onClick={onClose} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5">Cancel</button><button type="submit" disabled={isSaving} className="rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-cyan-400 disabled:opacity-60">{isSaving ? 'Saving...' : 'Save recent convert'}</button></div></form></div>
}