import React from "react";

const organs = [
    {
        name: "Heart",
        emoji: "🫀",
        image:
            "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Pumps blood throughout the body",
            "Supplies oxygen and nutrients",
            "Beats around 100,000 times daily",
            "Works with arteries and veins",
        ],
    },
    {
        name: "Lungs",
        emoji: "🫁",
        image:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Help in breathing process",
            "Exchange oxygen and carbon dioxide",
            "Located inside chest cavity",
            "Essential for respiration",
        ],
    },
    {
        name: "Liver",
        emoji: "🧬",
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Detoxifies harmful substances",
            "Produces bile for digestion",
            "Stores vitamins and minerals",
            "Supports metabolism",
        ],
    },
    {
        name: "Kidney",
        emoji: "🫘",
        image:
            "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Filters waste from blood",
            "Maintains water balance",
            "Controls blood pressure",
            "Produces urine",
        ],
    },
    {
        name: "Brain",
        emoji: "🧠",
        image:
            "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Controls body functions",
            "Processes thoughts and memory",
            "Manages emotions and movement",
            "Central organ of nervous system",
        ],
    },
    {
        name: "Bones",
        emoji: "🦴",
        image:
            "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1200&auto=format&fit=crop",
        info: [
            "Provide body structure",
            "Protect internal organs",
            "Store minerals like calcium",
            "Help in movement",
        ],
    },
];

const HumanOrgans = () => {
    return (
        <section className="min-h-screen bg-[#0f172a] py-14 px-5">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Know About Human Body Organs
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Learn about important human body organs and understand their
                        functions in maintaining a healthy life.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {organs.map((organ, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={organ.image}
                                    alt={organ.name}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                                    <span>{organ.emoji}</span>
                                    {organ.name}
                                </h2>

                                <ul className="space-y-3">
                                    {organ.info.map((point, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-300 text-sm flex items-start gap-2"
                                        >
                                            <span className="text-cyan-400 mt-1">➜</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HumanOrgans;