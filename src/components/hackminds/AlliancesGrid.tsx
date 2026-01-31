import React from "react";
import { motion } from "framer-motion";

// Assets
import globalAiLeon from "@/assets/global_ai_leon.png";
import logoTutorIa from "@/assets/logo_tutor_ia.png";
import logoInstInnovacion from "@/assets/logo_instinnovacion.png";
import logoEmprendhec from "@/assets/logo_emprendhec.png";
import spaceport from "@/assets/spaceportlogo.png";
import coneduLogo from "@/assets/conedu.png"; // Fallback reuse
import tecLogo from "@/assets/tec.png";

const AlliancesGrid = () => {

    const categories = [
        {
            title: "Tecnología & Startups",
            color: "border-blue-500/30 bg-blue-500/5",
            partners: [
                { name: "Microsoft for Startups", logo: null }, // Text fallback if no logo
                { name: "Global AI Community", logo: globalAiLeon },
                { name: "Google", logo: null },
                { name: "AWS", logo: null },
                { name: "Tutor AI", logo: logoTutorIa },
                { name: "EmprendHEC", logo: logoEmprendhec }
            ]
        },
        {
            title: "Financiero & Fintech",
            color: "border-green-500/30 bg-green-500/5",
            partners: [
                { name: "Banamex", logo: null },
                { name: "Santander", logo: null },
                { name: "CNBV", logo: null },
                { name: "BIVA", logo: null },
                { name: "IMEF Universitario", logo: null }
            ]
        },
        {
            title: "Gobierno & Cámaras",
            color: "border-orange-500/30 bg-orange-500/5",
            partners: [
                { name: "Gobierno de Guanajuato", logo: null },
                { name: "Instituto de Innovación", logo: logoInstInnovacion },
                { name: "CANACINTRA", logo: null },
                { name: "COPARMEX", logo: null },
                { name: "Spaceport", logo: spaceport }
            ]
        },
        {
            title: "Academia & Investigación",
            color: "border-purple-500/30 bg-purple-500/5",
            partners: [
                { name: "Tecnológico de Monterrey", logo: tecLogo },
                { name: "IPN", logo: null },
                { name: "UNAM", logo: null },
                { name: "MIT Solve", logo: null },
                { name: "UNESCO", logo: null }
            ]
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">ALIANZAS ESTRATÉGICAS</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Un ecosistema multisectorial que impulsa nuestra misión.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border ${cat.color} backdrop-blur-sm`}
                        >
                            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider opacity-90">{cat.title}</h3>
                            <div className="flex flex-wrap gap-6 items-center justify-start">
                                {cat.partners.map((partner, pIndex) => (
                                    <div key={pIndex} className="group relative">
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                            />
                                        ) : (
                                            <span className="text-lg font-bold text-gray-500 group-hover:text-white transition-colors cursor-default">
                                                {partner.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Colaboración Internacional</p>
                    <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for major global logos if available or text */}
                        <span className="font-bold text-xl">MIT Solve</span>
                        <span className="font-bold text-xl">UNESCO</span>
                        <span className="font-bold text-xl">WEF</span>
                        <span className="font-bold text-xl">UNICEF</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlliancesGrid;
