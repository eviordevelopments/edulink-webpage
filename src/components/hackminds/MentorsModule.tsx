import React from "react";
import { motion } from "framer-motion";
import { Users, Award, BookOpen, Share2, Star, Clock } from "lucide-react";

const MentorsModule = () => {

    const stats = [
        { label: "Docentes y Colaboradores", value: "80+", icon: Users },
        { label: "Horas de Impacto", value: "500+", icon: Clock },
        { label: "Instituciones Replicando", value: "10+", icon: Share2 },
    ];

    const benefits = [
        "Certificados reconocidos en sistemas educativos.",
        "Oportunidades de liderazgo educativo.",
        "Red nacional de maestros experimentadores.",
        "Intercambio de buenas prácticas.",
        "Publicación de recursos educativos abiertos.",
        "Reconocimiento y certificación ESR.",
        "Modelo de lealtad y fidelidad con patrocinadores."
    ];

    return (
        <section className="py-24 bg-black/40 border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Left Column: Narrative & Stats */}
                    <div className="md:w-1/2 space-y-10">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-5xl font-black mb-6"
                            >
                                MENTORES Y FORMADORES
                            </motion.h2>
                            <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Estas iniciativas están respaldadas por colaboradores y voluntarios de alto nivel, académicos, profesores y líderes en industria e instituciones públicas y privadas clave en nuestro país que suman talentos por un mejor México.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                                    <div className="text-3xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs text-gray-400 uppercase font-bold mt-1 leading-tight">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Benefits Grid */}
                    <div className="md:w-1/2">
                        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-3xl relative backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Award className="text-yellow-400" /> Beneficios para Mentores
                            </h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                    >
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500/20 shrink-0 mt-0.5" />
                                        <span className="text-gray-300 font-medium">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MentorsModule;
