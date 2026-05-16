import React from "react";
import { Link } from "react-router-dom";


const organs = [
    {
        name: "Heart",
        emoji: "❤️",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4CKReYVLH2lDi3dXloODeujSFpwybL7KDw&s",
        link: 'https://en.wikipedia.org/wiki/Heart',
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsot6ZMfstVZSm0v6CzNj1SpoFPO-7pZtGQ&s",
        link: "https://en.wikipedia.org/wiki/Lung",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUH1inM5onujKcsUSe5UxxFbX_LXypbqRA5A&s",
        link: "https://en.wikipedia.org/wiki/Liver",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4ky_J-TaUCWUtarqs2JzhGJTaV_qdahG3g&s",
        link: "https://en.wikipedia.org/wiki/Kidney",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJyoGn_wDVkC-zxGAlk-4IBJvC7FjXV8QFQ&s",
        link: "https://en.wikipedia.org/wiki/Brain",
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWtPaWOIkWMcJ3HcIhXVK3qc31LMILZ7jTg&s",
        link: "https://en.wikipedia.org/wiki/Bones",
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
        <section className="min-h-screen bg-[#0d1117]  py-14 px-5">
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
                            className="bg-[#141a23] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-300"
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

                                <Link to={ organ.link} className=" bg-cyan-500 hover:bg-cyan-400 text-white font-medium px-5 py-2.5 rounded-xl mt-3 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 text-sm flex items-center gap-2">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HumanOrgans;