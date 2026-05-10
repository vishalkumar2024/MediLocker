import { useState } from 'react'
import { User, Phone, MapPin, Calendar, Droplets, Edit3, Save, X, AlertTriangle, Heart } from 'lucide-react'


function DashboardProfile() {

    const user ={
        name:"Arjun Sharma",
        email:"arjun@gmail.com",
        bloodGroup:"B+",
        gender:"Male",
        height:"172cm",
        weight:"72kg",
        phone:"+91 9876543210",
        dob:"29-02-1998",
        address:"Ratu Road, Ranchi",
        allergies:["Penicillin","dust"],
        conditions:["Mild Hypertension"],
    }
    const [form, setForm] = useState({ ...user })

    const fields = [
        { label: 'Full Name', key: 'name', icon: User },
        { label: 'Email', key: 'email', icon: User },
        { label: 'Phone', key: 'phone', icon: Phone },
        { label: 'Date of Birth', key: 'dob', icon: Calendar, type: 'date' },
        { label: 'Address', key: 'address', icon: MapPin },
        { label: 'Emergency Contact', key: 'emergencyContact', icon: Phone },
    ]

    const initials = user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()



    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="font-display text-2xl font-bold text-white">My Profile</h1>
                    <p className="text-white/40 text-sm mt-1">Manage your personal and health information</p>
                </div>
            </div>

            {/* Avatar + summary */}
            <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-6 flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl  bg-cyan-500  flex items-center justify-center text-3xl font-bold font-display text-white shrink-0">
                    {initials}
                </div>
                <div>
                    <h2 className="font-display text-xl font-bold text-white">{user?.name}</h2>
                    <p className="text-white/40 text-sm mt-1">{user?.email}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            <Droplets className="w-3 h-3" /> {user?.bloodGroup}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50">{user?.gender}</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50">{user?.height}</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50">{user?.weight}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Personal Info */}
                <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                    <h2 className="text-xl font-semibold text-white mb-4">Personal Information</h2>
                    <div className="space-y-4">
                        {fields.map(f => (
                            <div key={f.key}>
                                <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wide">{f.label}</label>
                                    <div className="flex items-center gap-2.5 text-sm text-white">
                                        <f.icon className="w-4 h-4 text-white/30 shrink-0" />
                                        <span>{user?.[f.key] || '—'}</span>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Health Info */}
                <div className="space-y-5">
                    {/* Vitals */}
                    <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                        <h2 className="text-xl font-semibold text-white mb-4">Health Vitals</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Height', value: user?.height, color: 'text-cyan-500' },
                                { label: 'Weight', value: user?.weight, color: 'text-violet-500' },
                                { label: 'Blood Group', value: user?.bloodGroup, color: 'text-rose-500' },
                                { label: 'Gender', value: user?.gender, color: 'text-amber-500' },
                            ].map(v => (
                                <div key={v.label} className="bg-white/3 rounded-xl p-3.5 border border-white/5">
                                    <p className="text-xs text-white/40 mb-1">{v.label}</p>
                                    <p className={`font-display font-bold text-lg ${v.color}`}>{v.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Allergies */}
                    <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <h2 className="text-xl font-semibold text-white">Allergies</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {user?.allergies?.map(a => (
                                <span key={a} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-accent-amber/20 px-3 py-1.5">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Conditions */}
                    <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-4 h-4 text-rose-500" />
                            <h2 className="text-xl font-semibold text-white">Chronic Conditions</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {user?.conditions?.map(c => (
                                <span key={c} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-500 border border-accent-rose/20 px-3 py-1.5">
                                    {c}
                                </span>
                            ))}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfile
