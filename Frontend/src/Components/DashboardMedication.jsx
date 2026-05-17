import { useState } from 'react'
import { Pill, Clock, Plus, CheckCircle2, Calendar, X, ToggleLeft, ToggleRight } from 'lucide-react'
import clsx from 'clsx'

const timeColors = {
    Morning: 'text-amber-500 bg-amber-500/10',
    Night: 'text-violet-500 bg-violet-500/10',
    Sunday: 'text-cyan-500 bg-cyan-500/10',
    Afternoon: 'text-emerald-500 bg-emerald-500/10',
}

const Medications = [
    {
        id:1,
        name:"Amlodipine ",
        dose:"5mg",
        for:"Hypertension",
        time:"Morning",
    },
    {
        id:2,
        name:"Amlodipine ",
        dose:"5mg",
        for:"Hypertension",
        time:"Morning",
    },

]

function DashboardMedication() {

    const [meds, setMeds] = useState(Medications)
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState({ name: '', dose: '', frequency: '', time: '', for: '', startDate: '' })
    const [todayChecked, setTodayChecked] = useState({})

    const toggleActive = (id) => {
        setMeds(prev => prev.map(m => m.id === id ? { ...m, active: !m.active } : m))
    }

    const toggleToday = (id) => {
        setTodayChecked(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const addMed = (e) => {
        e.preventDefault()
        setMeds(prev => [{ id: `med_${Date.now()}`, ...form, active: true }, ...prev])
        setShowForm(false)
        setForm({ name: '', dose: '', frequency: '', time: '', for: '', startDate: '' })
    }

    const activeMeds = meds.filter(m => m.active)
    const inactiveMeds = meds.filter(m => !m.active)


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className=" text-2xl font-bold text-white">Medications</h1>
                    <p className="text-white/40 text-sm mt-1">{activeMeds.length} active · {inactiveMeds.length} inactive</p>
                </div>
                <button onClick={() => setShowForm(true)} className=" bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Medication
                </button>
            </div>

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="glass-card p-5 hover:border-cyan-500/30 transition-all duration-300 hover:glow-teal-sm cursor-default p-7 w-full max-w-md animate-in">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-display text-lg font-bold text-white">Add Medication</h2>
                            <button onClick={() => setShowForm(false)} className="text-white/30 hover:text-white"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={addMed} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-white/40 mb-1.5">Medication Name</label>
                                    <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="input-field text-sm py-2.5" placeholder="Amlodipine" required />
                                </div>
                                <div>
                                    <label className="block text-xs text-white/40 mb-1.5">Dosage</label>
                                    <input value={form.dose} onChange={e => setForm(p => ({ ...p, dose: e.target.value }))} className="input-field text-sm py-2.5" placeholder="5mg" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-white/40 mb-1.5">Frequency</label>
                                    <input value={form.frequency} onChange={e => setForm(p => ({ ...p, frequency: e.target.value }))} className="input-field text-sm py-2.5" placeholder="Once daily" />
                                </div>
                                <div>
                                    <label className="block text-xs text-white/40 mb-1.5">Time</label>
                                    <input value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} className="input-field text-sm py-2.5" placeholder="Morning" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs text-white/40 mb-1.5">Prescribed For</label>
                                <input value={form.for} onChange={e => setForm(p => ({ ...p, for: e.target.value }))} className="input-field text-sm py-2.5" placeholder="Hypertension" />
                            </div>
                            <div>
                                <label className="block text-xs text-white/40 mb-1.5">Start Date</label>
                                <input type="date" value={form.startDate} onChange={e => setForm(p => ({ ...p, startDate: e.target.value }))} className="input-field text-sm py-2.5" />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setShowForm(false)} className="flex-1 btn-ghost text-sm py-3">Cancel</button>
                                <button type="submit" className="flex-1 btn-cyan text-sm py-3">Add Medication</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Today's doses */}
            <div className=" hover:border-cyan-500/30 transition-all duration-300 hover:glow-teal-sm cursor-default p-5">
                <h2 className="text-xl font-semibold text-white mb-4">Today's Doses</h2>
                <div className="space-y-2">
                    {meds.map(med => (
                        <div key={med.id} className=
                            {`flex items-center gap-4 p-3.5 rounded-xl border transition-all' ${(todayChecked[med.id])?"bg-cyan-500/5 border-cyan-500/20":"bg-white/3 border-white/5"}`}
                         >
                            <button onClick={() => toggleToday(med.id)} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0' ${todayChecked[med.id] ?"border-cyan-500 bg-cyan-500":"border-white/20 hover:border-cyan-500"}`}>
                                {todayChecked[med.id] && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </button>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium transition-all ${todayChecked[med.id] ? 'text-white/40 line-through' :"text-white " } `}>
                                    {med.name} · {med.dose}
                                </p>
                                <p className="text-xs text-white/30">{med.for}</p>
                            </div>
                            <span className={clsx(' inline-flex items-center gap-1.5  py-1 rounded-full text-xs font-medium  px-2.5', timeColors[med.time] || 'text-white/40 bg-white/5')}>
                                <Clock className="w-3 h-3" />{med.time}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 text-xs text-white/30 text-right">
                    {Object.values(todayChecked).filter(Boolean).length} / {activeMeds.length} taken today
                </div>
            </div>

            {/* Active medications */}
           {/*  <div>
                <h2 className="section-title mb-3">All Medications</h2>
                <div className="space-y-3">
                    {meds.map(med => (
                        <div key={med.id} className="glass-card p-5 hover:border-cyan-500/30 transition-all duration-300 hover:glow-teal-sm cursor-default p-5 flex items-center gap-4 flex-wrap">
                            <div className={clsx('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', med.active ? 'bg-accent-violet/10' : 'bg-white/5')}>
                                <Pill className={clsx('w-5 h-5', med.active ? 'text-accent-violet' : 'text-white/20')} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-medium text-white">{med.name}</span>
                                    <span className="font-mono text-sm text-white/40">{med.dose}</span>
                                    {!med.active && <span className="badge bg-white/5 text-white/30 text-xs">Inactive</span>}
                                </div>
                                <p className="text-xs text-white/40 mt-0.5">{med.frequency} · {med.time} · For: {med.for}</p>
                                <p className="text-xs text-white/25 mt-0.5 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> Since {med.startDate}
                                </p>
                            </div>
                            <button onClick={() => toggleActive(med.id)} className="text-white/30 hover:text-white transition-colors shrink-0">
                                {med.active ? <ToggleRight className="w-7 h-7 text-cyan-400" /> : <ToggleLeft className="w-7 h-7" />}
                            </button>
                        </div>
                    ))}
                </div> 
            </div>*/}
        </div>
    )
}

export default DashboardMedication
