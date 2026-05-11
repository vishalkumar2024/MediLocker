// import { mockBloodReport, mockVitals } from '@/data/mockData'
import { Droplets, TrendingUp, TrendingDown, Minus, Info } from 'lucide-react'
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from 'recharts'
import clsx from 'clsx'
import { useState, useEffect } from 'react'

const statusConfig = {
    normal: { label: 'Normal', color: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20' },
    warning: { label: 'Watch', color: 'text-accent-amber', bg: 'bg-accent-amber/10', border: 'border-accent-amber/20' },
    high: { label: 'High', color: 'text-accent-rose', bg: 'bg-accent-rose/10', border: 'border-accent-rose/20' },
    low: { label: 'Low', color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
}

const labels = {
    hemoglobin: 'Hemoglobin', rbc: 'RBC', wbc: 'WBC', platelets: 'Platelets',
    hematocrit: 'Hematocrit', glucose: 'Glucose', cholesterol: 'Cholesterol', triglycerides: 'Triglycerides',
}

const bloodComponents = [
    {
        name: "Hemoglobin",
        value: "140.2",
        min: 13.8,
        max: 17.2,
        unit: "g/dL"
    },
    {
        name: "RBC",
        value: 4.0,
        min: 4.7,
        max: 6.1,
        unit: "million/µL",
    },
    {
        name: "WBC",
        value: 8200,
        min: 4500,
        max: 11000,
        unit: "cells/µL",
    },
    {
        name: "Platelets",
        value: 245000,
        min: 150000,
        max: 450000,
        unit: "platelets/µL",
    },
    {
        name: "Hematocrit",
        value: 42,
        min: 41,
        max: 50,
        unit: "%",
    },
    {
        name: "Glucose",
        value: 89,
        min: 70,
        max: 99,
        unit: "mg/dL",
    },
    {
        name: "Cholesterol",
        value: 198,
        min: 0,
        max: 200,
        unit: "mg/µL",
    },
    {
        name: "Triglycerides",
        value: 145,
        min: 0,
        max: 150,
        unit: "mg/µL",
    },
];

// const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload?.length) {
//         return (
//             <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-3 text-xs">
//                 <p className="text-white/60 mb-1">{label}</p>
//                 {payload.map(p => <p key={p.dataKey} className="text-primary-400 font-medium">{p.value} {p.name}</p>)}
//             </div>
//         )
//     }
//     return null
// }


function DashboardBloodReport() {

    const [countNormal, setCountNormal] = useState(0);
    const [countWarning, setCountWarning] = useState(0);

    useEffect(() => {

        let normalCount = 0;
        let warningCount = 0;
        console.log("use effect is working")
        bloodComponents.forEach((item) => {

            if (item.value >= item.min && item.value <= item.max) {
                normalCount++;
            } else {
                warningCount++;
            }

        });

        setCountNormal(normalCount);
        setCountWarning(warningCount);

    }, [bloodComponents]);

    // const entries = Object.entries(mockBloodReport)
    // const chartData = entries.map(([key, val]) => ({ name: labels[key]?.split(' ')[0] || key, value: typeof val.value === 'number' ? val.value : parseFloat(val.value) }))

    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-display text-2xl font-bold text-white">Blood Report</h1>
                <p className="text-white/40 text-sm mt-1">Know all About your Blood</p>
            </div>

            {/* Summary banner */}
            <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5 ">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                        <h2 className="font-display font-semibold text-white">Blood Analysis Summary</h2>
                        <p className="text-white/40 text-xs">{countNormal} normal · {countWarning} needs attention</p>
                    </div>
                </div>
                <div className="flex  gap-4">
                    {[
                        { label: 'Normal', count: countNormal, color: 'bg-cyan-500' },
                        { label: 'Warning', count: countWarning, color: 'bg-amber-500' },
                        { label: 'Critical', count: countCritical, color: 'bg-rose-500' },
                    ].map(s => (
                        <div key={s.label} className="flex items-center gap-2 text-sm">
                            <div className={clsx('w-2.5 h-2.5 rounded-full', s.color)} />
                            <span className="text-white/50">{s.count} {s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {bloodComponents.map(item => {

                    const isNormal =
                        item.value >= item.min &&
                        item.value <= item.max;

                    return (
                        <div key={item.name} className=' bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-4 hover:scale-[1.01] transition-transform'>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-white/40 font-medium">{item.name}</span>
                                <span className={` px-2 py-1 rounded-2xl  border ${(isNormal) ? "border-cyan-500/90 text-cyan-500  bg-cyan-500/5" : "border-amber-500/90 text-amber-500 bg-amber-500/5"}  text-xs`}>{(isNormal) ? "Normal" : "Warning"}</span>
                            </div>
                            <div className="flex items-baseline gap-1.5 mb-2">
                                <span className='text-cyan-500/80 text-2xl font-bold'>
                                    {item.value}
                                </span>
                                <span className="text-xs text-white/30">{item.unit}</span>
                            </div>
                            <p className="text-xs text-white/25">Normal: {item.min}-{item.max}</p>
                        </div>
                    )
                })}

            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                    <h2 className="section-title mb-4">Blood Parameters</h2>
                    {/* <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={chartData.slice(0, 5)} barSize={28}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="value" name="Value" fill="#259978" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer> */}
                </div>

                <div className=" bg-[#1a222d] backdrop-blur-md border border-white/8 rounded-2xl p-5">
                    <h2 className="section-title mb-4">Blood Sugar Trend</h2>
                    {/* <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={mockVitals}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                            <XAxis dataKey="date" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="sugar" name="mg/dL" stroke="#f59e0b" strokeWidth={2.5} dot={{ fill: '#f59e0b', r: 3 }} />
                        </LineChart>
                    </ResponsiveContainer> */}
                </div>
            </div>

            {/* Note */}
            <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-amber-500/5 border border-amber-500/10 text-sm">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-white/50">Triglycerides are slightly elevated (145 mg/dL vs recommended &lt;150 mg/dL). Consider reducing saturated fats. Consult your doctor at next visit.</p>
            </div>
        </div>
    )
}

export default DashboardBloodReport
