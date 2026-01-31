import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Globe, School, TrendingDown } from "lucide-react";

const NarrativeContext = () => {
    const { language } = useLanguage();

    const stats = [
        {
            id: "01",
            title: "EL DESAFÍO INMEDIATO",
            desc: "448 millones de jóvenes de 15-24 años a nivel mundial están económicamente desvinculados o en empleos de baja calidad. 70% de los jóvenes en América Latina carecen de acceso a oportunidades económicas significativas.",
            icon: Globe,
            color: "text-red-500",
            bg: "bg-red-500/10"
        },
        {
            id: "02",
            title: "OPORTUNIDADES",
            desc: "En México, el 93% de negocios liderados por jóvenes son microempresas informales (41.8% formales). Solo el 12% elige carreras STEAM, frente a un 75% de empleos futuros que las requerirán.",
            icon: TrendingDown,
            color: "text-yellow-500",
            bg: "bg-yellow-500/10"
        },
        {
            id: "03",
            title: "BRECHAS",
            desc: "El 35% de escuelas primarias rurales en México carecen de computadoras; el 50% sin internet. Solo el 20% de docentes en zonas marginadas están capacitados en metodologías STEAM.",
            icon: School,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4">

                {/* Intro Block */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-tight"
                    >
                        TRANSFORMANDO FUTUROS A TRAVÉS DE LA EDUCACIÓN, INNOVACIÓN Y EMPRENDIMIENTO
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    >
                        CONEDU, a través del programa HackMinds, representa una iniciativa transformadora para mentes brillantes mexicanas de alto impacto social y tecnológico que busca cerrar las brechas educativas, digitales y de emprendimiento que perpetúan ciclos de pobreza e inequidad en México y América Latina.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors ${stat.bg} dark:bg-opacity-5`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-5xl font-black text-white/10">{stat.id}</span>
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{stat.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Context - "Crisis Global" */}
                <div className="mt-24 p-8 md:p-12 rounded-3xl bg-black/5 dark:bg-white/5 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-4xl font-black mb-4">CRISIS GLOBAL QUE DEVIENE OPORTUNIDAD</h3>
                            <p className="text-lg text-muted-foreground">
                                Ahora es el Momento con Alianzas de clase mundial disponibles (MIT Solve, Tec de Monterrey, UNESCO). ODS 4 y ODS 8 exigen cumplimiento acelerado antes de 2030.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm">Mercado de educación STEAM proyectado en USD 1.2 billones para 2030 (OCDE, 2023)</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm">Invertir en educación y habilidades puede incrementar PIB per cápita en 10%</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                    <p className="text-sm">El 79% de la fuerza laboral en LATAM será impactada por IA</p>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <p className="text-6xl font-black mb-2">66%</p>
                                <p className="text-xl opacity-80">de jóvenes desvinculados económicamente viven en México y región</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NarrativeContext;
