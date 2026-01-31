import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Lightbulb } from "lucide-react";

const ChallengeVision = () => {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.5, 1, 1, 0.8]);

    const content = {
        es: {
            header: "De la Crisis a la Oportunidad.",
            challenge: {
                title: "El Desafío Inmediato",
                items: [
                    { label: "Desconexión", text: "448 millones de jóvenes globalmente están económicamente desvinculados." },
                    { label: "La Brecha", text: "En México, el 93% de negocios jóvenes son informales." },
                    { label: "El Riesgo", text: "Solo el 12% elige carreras STEAM, aunque el 75% de los empleos futuros las requieren." }
                ]
            },
            vision: {
                title: "Nuestra Visión (HackMinds)",
                items: [
                    { label: "Sin Código Postal", text: "Un México donde el talento no tiene código postal." },
                    { label: "Empoderamiento", text: "Educación disruptiva y tecnología accesible." },
                    { label: "Impacto Real", text: "Empleabilidad real y emprendimiento de alto impacto." }
                ]
            }
        },
        en: {
            header: "From Crisis to Opportunity.",
            challenge: {
                title: "The Immediate Challenge",
                items: [
                    { label: "Disconnection", text: "448 million youth globally are economically disengaged." },
                    { label: "The Gap", text: "In Mexico, 93% of youth-led businesses operate informally." },
                    { label: "The Risk", text: "Only 12% choose STEAM careers, yet 75% of future jobs require them." }
                ]
            },
            vision: {
                title: "Our Vision (HackMinds)",
                items: [
                    { label: "No Zip Code", text: "A Mexico where talent has no zip code." },
                    { label: "Empowerment", text: "Disruptive education and accessible technology." },
                    { label: "Real Impact", text: "Real employability and high-impact entrepreneurship." }
                ]
            }
        }
    };

    const t = language === "es" ? content.es : content.en;

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-background">
            <motion.div
                style={{ filter: useTransform(grayscale, v => `grayscale(${v})`) }}
                className="container px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900 dark:from-gray-100 dark:to-gray-500"
                >
                    {t.header}
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* The Challenge (Left) */}
                    <div className="space-y-8 p-8 rounded-3xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-3xl font-bold">{t.challenge.title}</h3>
                        </div>
                        <div className="space-y-6">
                            {t.challenge.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 rounded-xl bg-white dark:bg-black/40 shadow-sm"
                                >
                                    <span className="block text-sm font-bold text-red-500 uppercase tracking-widest mb-1">{item.label}</span>
                                    <p className="text-lg font-medium leading-snug">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* The Vision (Right) */}
                    <motion.div
                        style={{ opacity }}
                        className="space-y-8 p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-500">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white shadow-none">{t.vision.title}</h3>
                        </div>
                        <div className="space-y-6">
                            {t.vision.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 rounded-xl bg-white/10 border border-white/10 shadow-lg backdrop-blur-md"
                                >
                                    <span className="block text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">{item.label}</span>
                                    <p className="text-lg font-medium text-white leading-snug">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ChallengeVision;
