import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Flag, Rocket, Repeat } from "lucide-react";

const ObjectivesModule = () => {
    const { language } = useLanguage();

    const objectives = [
        {
            title: "CORTO PLAZO (Q1-Q2 2026)",
            subtitle: "CONSOLIDACIÓN Y LANZAMIENTO",
            icon: Flag,
            color: "text-cyan-400",
            bg: "from-cyan-500/10 to-blue-500/10",
            border: "border-cyan-500/20",
            items: [
                "Registrar HackMinds como iniciativa formal.",
                "Estructurar equipo multidisciplinario (30+ personas).",
                "Lanzar CONEDU Connect (plataforma digital).",
                "Ejecutar rutas mensuales en 5 Casas de Emprendimiento.",
                "1 Hackathon de gran escala (100+ participantes)."
            ]
        },
        {
            title: "MEDIANO PLAZO (Q3-Q4 2026)",
            subtitle: "EXPANSIÓN Y PROFUNDIZACIÓN",
            icon: Rocket,
            color: "text-purple-400",
            bg: "from-purple-500/10 to-pink-500/10",
            border: "border-purple-500/20",
            items: [
                "Lanzar 8 Rutas Temáticas Especializadas.",
                "Consolidar comunidad: 500+ miembros activos.",
                "Red de 50+ mentores y aliados.",
                "Bolsa de trabajo con 20+ oportunidades verificadas.",
                "Ideathons Tech (YES26) y Startup Nights."
            ]
        },
        {
            title: "LARGO PLAZO (2026-2030)",
            subtitle: "SOSTENIBILIDAD Y AUTO-REPLICACIÓN",
            icon: Repeat,
            color: "text-emerald-400",
            bg: "from-emerald-500/10 to-green-500/10",
            border: "border-emerald-500/20",
            items: [
                "100% de iniciativas con modelo financiero viable.",
                "Replicabilidad en otros estados/países.",
                "10,000+ beneficiarios acumulados en LATAM.",
                "100+ microempresas sostenibles creadas.",
                "Reducción de 20% en deserción escolar en comunidades."
            ]
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">OBJETIVOS ESTRATÉGICOS 2026</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                        Una hoja de ruta clara para impactar a 10,000+ jóvenes y generar 500+ historias de éxito.
                    </p>

                    {/* Animated Phrase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-8"
                    >
                        <span className="inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-light-flow">
                            Impacto Local con Visión Global
                        </span>
                    </motion.div>
                </div>

                <style>{`
                    @keyframes light-flow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-light-flow {
                        animation: light-flow 3s ease-in-out infinite;
                    }
                `}</style>

                <div className="grid lg:grid-cols-3 gap-8">
                    {objectives.map((obj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative p-8 rounded-3xl bg-gradient-to-b ${obj.bg} border ${obj.border} hover:border-opacity-50 transition-all group`}
                        >
                            <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity ${obj.color}`}>
                                <obj.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10">
                                <span className={`inline-block px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-xs font-bold tracking-widest mb-6 ${obj.color} border border-white/10`}>
                                    {obj.title}
                                </span>

                                <h3 className="text-2xl font-black text-white mb-2">{obj.subtitle}</h3>
                                <div className={`h-1 w-12 ${obj.color.replace('text-', 'bg-')} rounded-full mb-8`}></div>

                                <ul className="space-y-4">
                                    {obj.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${obj.color.replace('text-', 'bg-')}`}></div>
                                            <span className="text-gray-300 text-sm font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ObjectivesModule;
