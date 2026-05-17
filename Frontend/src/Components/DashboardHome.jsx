import { FileText, Calendar, Pill, Activity, TrendingUp, Clock, ChevronRight, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'


function DashboardHome() {

    const firstName = "Arjun"
    const hour = new Date().getHours()
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

    const statCards = [

        { label: 'Documents', value: 6, icon: FileText, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', link: '/dashboard/documents' },

        { label: 'Medications', value: 3, icon: Pill, color: 'text-accent-violet', bg: 'bg-accent-violet/10', link: '/dashboard/medications' },

        { label: 'Upcoming Visits', value: 2, icon: Calendar, color: 'text-accent-amber', bg: 'bg-accent-amber/10', link: '/dashboard/appointments' },

        { label: 'Health Score', value: `${82}%`, icon: Activity, color: 'text-cyan-400', bg: 'bg-cyan-500/10', link: '/dashboard/organs' },
    ]

    const recentDocument = [
        {
            id: 1,
            name: "Blood Test Report — Nov 2024",
            date: "2024-11-10",
            size: "2.4 MB",
            format: "PDF"
        },
        {
            id: 2,
            name: "Chest X-Ray",
            date: "2024-10-22",
            size: "5.1 MB",
            format: "DICOM"
        },
        {
            id: 3,
            name: "Prescription — Hypertension",
            date: "2024-09-30",
            size: "0.8 MB",
            format: "PDF"
        },
        {
            id: 4,
            name: "ECG Report",
            date: "2024-08-15",
            size: "1.2 MB",
            format: "PDF"
        }
    ];

    const appointments = [
        {
            id: 1,
            status: "upcoming",
            doctor: "Dr. Alok Mishra",
            specialty: "Cardiologist",
            date: "20-06-2026",
            time: "10:30 AM",
            hospital: "Apollo Clinic",
            type: "Follow-up",
        },
        {
            id: 2,
            status: "upcoming",
            doctor: "Dr. Sunita Rao",
            specialty: "Pulmonologist",
            date: "13-06-2026",
            time: "2:00 PM",
            hospital: "Max Healthcare",
            type: "Routine Checkup",
        },
        {
            id: 4,
            status: "upcoming",
            doctor: "Dr. Aditya Swarankar",
            specialty: "Immunologists",
            date: "10-07-2026",
            time: "11:00 AM",
            hospital: "Manipal Hospital",
            type: "Blood Test Review",
        }, {
            id: 3,
            status: "completed",
            doctor: "Dr. Rajesh Mehta",
            specialty: "General Physician",
            date: "22-04-2026",
            time: "11:00 AM",
            hospital: "RIIMS Ranchi",
            type: "Blood Test Review",
        },
    ]


    const Medications = [
    {
        id: 1,
        name: "Amlodipine ",
        dose: "5mg",
        for: "Hypertension",
        time: "Morning",
    },
    {
        id: 2,
        name: "Vitamin D3 ",
        dose: "60000 IU",
        for: "Vitamin D deficiency",
        time: "Sunday",
    },
    {
        id: 3,
        name: "Aspirin",
        dose: "75mg",
        for: "Prevention",
        time: "Night",
    },
    {
        id: 4,
        name: "Levocetirizine",
        dose: "5mg",
        for: "Allergy",
        time: "Afternoon",
    },
    {
        id: 5,
        name: "Pantoprazole",
        dose: "40mg",
        for: "Acidity",
        time: "Morning",
    },

]

    return (
        <div className="space-y-7">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-white/40 text-sm mb-1">{greeting} 👋</p>
                    <h1 className="font-display text-3xl font-bold text-white">{firstName}</h1>
                </div>
                <div className=" bg-[#181f2a] backdrop-blur-md border border-white/8 rounded-2xl px-4 py-2.5 flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span className="text-white/60">Records are <span className="text-cyan-400 font-medium">secure</span></span>
                </div>
            </div>

            {/* Health Score Banner */}
            <div className=" bg-[#141a23] backdrop-blur-md border rounded-2xl p-5  border-cyan-500/20 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-cyan-500/5" />
                <div className="absolute -right-2 top-4 w-20 h-20 rounded-full bg-accent-teal/5" />
                <div className="relative flex items-center justify-between">
                    <div>
                        <p className="text-white/50 text-sm mb-1">Overall Health Score</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-cyan-500 text-5xl font-bold gradient-text">82</span>
                            <span className="text-white/40 text-lg">/100</span>
                        </div>
                        <p className="text-white/40 text-xs mt-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-cyan-400" />
                            +3 points from last month
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="w-20 h-20 rounded-full border-4 border-cyan-500/30 flex items-center justify-center relative">
                            <div
                                className="absolute inset-0 rounded-full border-4 border-cyan-500"
                            />
                            <span className="font-display text-xl font-bold text-cyan-400">B+</span>
                        </div>
                        <p className="text-white/30 text-xs mt-2">Blood Group</p>
                    </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full  bg-cyan-500  rounded-full transition-all duration-1000" style={{ width: `${82}%` }} />
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map(card => (
                    <Link key={card.label} to={card.link} className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5  hover:border-white/30 transition-all duration-300  cursor-default">
                        <div className={'w-10 h-10 bg-[#142f69] rounded-xl flex items-center justify-center mb-3'}>
                            <card.icon className=' text-cyan-500 rounded-2xl p0' />
                        </div>
                        <div className="font-display text-2xl font-bold text-white mb-0.5">{card.value}</div>
                        <div className="text-xs text-white/40">{card.label}</div>
                        <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 mt-2 transition-colors" />
                    </Link>
                ))}
            </div>

            {/* Recent docs + medications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Recent Documents */}
                <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-white">Recent Documents</h2>
                        <Link to="/dashboard/documents" className="text-cyan-400 text-xs hover:text-cyan-300">View all</Link>
                    </div>
                    <div className="space-y-2 ">
                        {recentDocument.map(doc => (
                            <div key={doc.id} className=" bg-white/3 border border-white/5 hover:border-white/30 transition-colors flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 mb-4  cursor-pointer group">
                                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                                    <FileText className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-white truncate">{doc.name}</p>
                                    <p className="text-xs text-white/30">{doc.date} · {doc.size}</p>
                                </div>
                                <span className="p-2 rounded-xl bg-white/5 text-white/40 text-xs shrink-0">{doc.format}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Medications */}
                <div className="bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-white">Active Medications</h2>
                        <Link to="/dashboard/medications" className="text-cyan-400 text-xs hover:text-cyan-300">View all</Link>
                    </div>
                    <div className="space-y-2">
                        {Medications.filter(a => a.id <= 4).map(med => (
                            <div key={med.id} className=" bg-white/3 border border-white/5 hover:border-white/30  mb-4 flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors cursor-pointer">
                                <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                                    <Pill className="w-4 h-4 text-violet-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-white font-medium">{med.name} <span className="text-white/40 font-normal">{med.dose}</span></p>
                                    <p className="text-xs text-white/30">{med.frequency} · {med.time}</p>
                                </div>
                                <span className="p-2 rounded-xl bg-white/5 text-white/40 text-xs shrink-0">Active</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                {/* Upcoming appointments */}
                <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5 lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className=" text-xl font-semibold text-white">Upcoming</h2>
                        <Link to="/dashboard/appointments" className="text-cyan-400 text-xs hover:text-cyan-300">View all</Link>
                    </div>
                    <div className="space-y-3">
                        {appointments.filter(a => a.status === 'upcoming').map(apt => (
                            <div key={apt.id} className="p-3.5 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                        <Calendar className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-white truncate">{apt.doctor}</p>
                                        <p className="text-xs text-white/40">{apt.specialty}</p>
                                        <div className="flex items-center gap-1 mt-1.5 text-xs text-white/30">
                                            <Clock className="w-3 h-3" />
                                            {apt.date} · {apt.time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome