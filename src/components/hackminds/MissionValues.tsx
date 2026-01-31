import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, ShieldCheck, Leaf, Award, UserCheck, Cpu } from "lucide-react";

const MissionValues = () => {
    const { language } = useLanguage();

    const pillars = [
        {
            title: "PROPÓSITO",
            icon: Target,
            text: "Transformar el futuro de México mediante jóvenes capaces de convertir sus ideas en realidad, rompiendo ciclos de pobreza e inequidad a través de educación disruptiva, tecnología e innovación."
        },
        {
            title: "MISIÓN",
            icon: Users,
            text: "Empoderar a jóvenes en contextos de desigualdad mediante educación integral en emprendimiento, tecnología, habilidades blandas y responsabilidad social, creando un impacto económico y social sostenible que trascienda las aulas."
        },
        {
            title: "VISIÓN",
            icon: Eye,
            text: "Un México donde el talento no tenga fronteras geográficas, socioeconómicas o de género; donde cada joven acceda a educación de clase mundial en STEAM, y donde el emprendimiento sea motor de desarrollo sostenible regional."
        }
    ];

    const values = [
        { id: "01", title: "LIDERAZGO COLECTIVO", desc: "Empoderamiento de jóvenes como protagonistas del cambio.", icon: Users },
        { id: "02", title: "SOSTENIBILIDAD INTEGRAL", desc: "Viabilidad económica, ambiental y social; compromiso ODS.", icon: Leaf },
        { id: "03", title: "EXCELENCIA CON PERTINENCIA", desc: "Calidad educativa adaptada a contextos locales.", icon: Award },
        { id: "04", title: "COMPROMISO Y RESPONSABILIDAD", desc: "Dedicación genuina a generar resultados medibles.", icon: ShieldCheck },
        { id: "05", title: "HUMANISMO E INCLUSIÓN", desc: "Educación centrada en la dignidad humana para todos.", icon: Heart },
        { id: "06", title: "AUTENTICIDAD Y TRANSPARENCIA", desc: "Acciones coherentes y comunicación clara.", icon: UserCheck },
        { id: "07", title: "INNOVACIÓN RESPONSABLE", desc: "Adopción crítica y ética de nuevas tecnologías (IA).", icon: Cpu }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 to-black text-white">
            <div className="container px-4">

                {/* Pillars (Purpose, Mission, Vision) */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {pillars.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-widest uppercase">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section */}
                <div>
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl md:text-5xl font-black mb-4"
                        >
                            VALORES FUNDACIONALES
                        </motion.h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors ${index === 0 ? 'lg:col-span-1' : ''}`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-3xl font-black text-blue-500/50">{val.id}</span>
                                    <h4 className="font-bold uppercase text-blue-200">{val.title}</h4>
                                </div>
                                <p className="text-sm text-gray-400 pl-12">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionValues;
