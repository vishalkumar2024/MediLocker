// import { mockOrgans } from '@/data/mockData'
import { Activity, CheckCircle2, AlertTriangle, Clock, Plus, CircleCheck } from 'lucide-react'
// import { createIcons, circleCheck } from 'lucide';
import clsx from 'clsx'


const statusConfig = {
    healthy: { label: 'Healthy', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', dot: 'bg-cyan-400', icon: CheckCircle2 },
    warning: { label: 'Needs Attention', color: 'text-accent-amber', bg: 'bg-accent-amber/10', border: 'border-accent-amber/20', dot: 'bg-accent-amber', icon: AlertTriangle },
    critical: { label: 'Critical', color: 'text-accent-rose', bg: 'bg-accent-rose/10', border: 'border-accent-rose/20', dot: 'bg-accent-rose', icon: AlertTriangle },
}

const organHealth = [
    {
        status: "Healthy",
        name: "Heart",
        icon: "❤️",
        note: "Normal sinus rhythm, no anomalies",
        lastCheck: " 2024-11-10",
    },
    {
        status: "Healthy",
        name: "Lungs",
        icon: "🫁",
        note: "Clear, no congestion detected",
        lastCheck: "2024-10-22",
    },
    {
        status: "Healthy",
        name: "Liver",
        icon: "🫁",
        note: "Enzyme levels within normal range",
        lastCheck: "2024-09-15",
    },
    {
        status: "Healthy",
        name: "Kidney",
        icon: "🫁",
        note: "Creatinine normal, GFR 95",
        lastCheck: "2025-02-15",
    },
    {
        status: "Healthy",
        name: "Brain",
        icon: "🧠",
        note: "No abnormalities on MRI",
        lastCheck: "2024-02-25",
    },
    {
        status: "Need Attention",
        name: "Bones",
        icon: "🦴",
        note: "Mild vitamin D deficiency noted",
        lastCheck: "2025-08-02",
    },
]

const colorMap = {
    rose: 'from-accent-rose/20 to-accent-rose/5',
    cyan: 'from-accent-cyan/20 to-accent-cyan/5',
    amber: 'from-accent-amber/20 to-accent-amber/5',
    violet: 'from-accent-violet/20 to-accent-violet/5',
    emerald: 'from-accent-emerald/20 to-accent-emerald/5',
}

function DashboardOrganHealth() {

    // const healthyCount = mockOrgans.filter(o => o.status === 'healthy').length
    // const warningCount = mockOrgans.filter(o => o.status === 'warning').length


    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="font-display text-2xl font-bold text-white">Organ Health</h1>
                    <p className="text-white/40 text-sm mt-1">Track the health status of each organ system</p>
                </div>
                <button className=" bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Health Data
                </button>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Healthy', count: 5, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                    { label: 'Attention', count: 2, color: 'text-amber-500', bg: 'bg-amber-500/10' },
                    { label: 'Critical', count: 0, color: 'text-red-500', bg: 'bg-red-500/10' },
                ].map(s => (
                    <div key={s.label} className=" bg-[#1a222d]  backdrop-blur-md border border-white/8 rounded-2xl p-4 text-center">
                        <div className={clsx('w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center', s.bg)}>
                            <Activity className={clsx('w-5 h-5', s.color)} />
                        </div>
                        <div className={clsx('font-display text-2xl font-bold', s.color)}>{s.count}</div>
                        <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Organ cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organHealth.map(organ => {

                    const isNormal = true
                    // const cfg = statusConfig[organ.status]
                    // const StatusIcon = cfg.icon
                    return (
                        <div key={organ.name} className=' bg-[#1b2a2f] backdrop-blur-md  border-white/8 rounded-2xl p-5 border hover:scale-[1.01] transition-all duration-200 cursor-default'>
                            {/* Gradient bg based on organ color */}
                            <div />
                            <div className="relative">
                                <div className="flex items-start justify-between mb-4 ">
                                    <div className="text-3xl ">{organ.icon}</div>

                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${(isNormal) ? "border-cyan-500/90 text-cyan-500  bg-cyan-500/5" : "border-orange-500/90 text-orange-500 bg-orange-500/5"}  text-xs`}>
                                        <CircleCheck className="w-3 h-3" />
                                        {organ.status}
                                    </span>

                                </div>
                                <h3 className="font-display text-lg font-semibold text-white mb-1">{organ.name}</h3>
                                <p className="text-sm text-white/40 leading-relaxed mb-4">{organ.note}</p>
                                <div className="flex items-center gap-1.5 text-xs text-white/30">
                                    <Clock className="w-3 h-3" />
                                    Last check: {organ.lastCheck}
                                </div>

                                {/* Status bar */}
                                <div className="mt-4 h-1 rounded-full bg-white/5">
                                    <div
                                        className={clsx('h-full rounded-full', organ.status === 'Healthy' ? 'bg-cyan-500' : 'bg-amber-500')}
                                        style={{ width: organ.status === 'Healthy' ? '90%' : '55%' }}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Body diagram placeholder */}
            <div className="glass-card p-8 text-center">
                <div className="text-6xl mb-4">🫀</div>
                <h2 className="font-display text-lg font-semibold text-white mb-2">Interactive Body Map</h2>
                <p className="text-white/30 text-sm max-w-sm mx-auto">
                    An interactive 3D body diagram is coming soon. You'll be able to click on any organ to view detailed health data and history.
                </p>
                <button className="btn-ghost text-sm mt-4">Get Notified When Available</button>
            </div>
        </div>
    )
}

export default DashboardOrganHealth
