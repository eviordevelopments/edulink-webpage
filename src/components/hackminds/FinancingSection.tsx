import React from "react";
import { motion } from "framer-motion";

const FinancingSection = () => {

    // Financing source data
    const sources = [
        { label: "Sector Público", pct: 40, color: "bg-blue-500", barColor: "bg-blue-500" },
        { label: "Sector Privado", pct: 33.3, color: "bg-purple-500", barColor: "bg-purple-500" },
        { label: "Donación/Filantropía", pct: 20, color: "bg-green-500", barColor: "bg-green-500" },
        { label: "Ingresos Propios", pct: 6.7, color: "bg-orange-500", barColor: "bg-orange-500" },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black">FUENTES DE FINANCIAMIENTO</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Estas iniciativas buscan sostenerse mediante un modelo híbrido multisectorial, garantizando la viabilidad trimestral y la transparencia en la gestión de recursos sin fines de lucro.
                        </p>

                        <div className="space-y-6 pt-4">
                            {sources.map((src, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2 font-bold">
                                        <span>{src.label}</span>
                                        <span>{src.pct}%</span>
                                    </div>
                                    <div className="h-4 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${src.pct}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                                            className={`h-full ${src.barColor} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Graphic / Illustration */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                            {/* Simple CSS Pie Chart approximation using conics or SVG. Let's use SVG for animation control */}
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                {/* Calculate stroke-dasharray based on percentages. C = 2*pi*r. r=40 => C ~ 251 */}
                                {/* 40% = 100.4, 33.3% = 83.6, 20% = 50.2, 6.7% = 16.8 */}

                                <motion.circle
                                    cx="50" cy="50" r="40"
                                    stroke="currentColor" strokeWidth="20" fill="transparent"
                                    className="text-blue-500"
                                    initial={{ strokeDasharray: "0 251" }}
                                    whileInView={{ strokeDasharray: "100.4 251" }}
                                    transition={{ duration: 1, delay: 0 }}
                                />
                                <motion.circle
                                    cx="50" cy="50" r="40"
                                    stroke="currentColor" strokeWidth="20" fill="transparent"
                                    className="text-purple-500"
                                    strokeDashoffset="-100.4"
                                    initial={{ strokeDasharray: "0 251" }}
                                    whileInView={{ strokeDasharray: "83.6 251" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                                <motion.circle
                                    cx="50" cy="50" r="40"
                                    stroke="currentColor" strokeWidth="20" fill="transparent"
                                    className="text-green-500"
                                    strokeDashoffset="-184"
                                    initial={{ strokeDasharray: "0 251" }}
                                    whileInView={{ strokeDasharray: "50.2 251" }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                                <motion.circle
                                    cx="50" cy="50" r="40"
                                    stroke="currentColor" strokeWidth="20" fill="transparent"
                                    className="text-orange-500"
                                    strokeDashoffset="-234.2"
                                    initial={{ strokeDasharray: "0 251" }}
                                    whileInView={{ strokeDasharray: "16.8 251" }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                />
                            </svg>
                            {/* Center Hole for Donut effect */}
                            <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                                <div className=" bg-background rounded-full w-3/5 h-3/5 flex items-center justify-center shadow-xl">
                                    <span className="text-2xl font-black">2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinancingSection;
