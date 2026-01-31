import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Plane, Users, Award, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentBoard = () => {

    const roles = [
        "Coordinador Ejecutivo",
        "Coordinadores de Rutas",
        "Coordinador Relaciones Institucionales",
        "Coordinador Financiero",
        "Coordinador Operaciones",
        "Coordinador Comunicación",
        "Coordinador RRHH",
        "Mentores Dedicados"
    ];

    const benefits = [
        { icon: Plane, title: "Viajes y Eventos", desc: "Acceso a eventos nacionales e internacionales en equipo." },
        { icon: Building, title: "Internships", desc: "Oportunidades laborales y prácticas en empresas aliadas." },
        { icon: Award, title: "Liderazgo Top", desc: "Forjar un perfil de liderazgo sobresaliente para universidades." },
        { icon: Users, title: "Networking", desc: "Conexiones directas con empresarios y líderes de industria." },
        { icon: Zap, title: "Capacitación", desc: "Formación de primer nivel en metodologías ágiles y tech." }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-black to-blue-950/20 text-white border-t border-white/5">
            <div className="container px-4">

                <div className="text-center mb-16">
                    <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase mb-4 block">Liderazgo Joven</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">MESA ESTUDIANTIL</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Únete a un equipo nacional de alto impacto, forjando tu camino hacia universidades internacionales y el mundo corporativo.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Roles List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:w-1/3 p-8 rounded-3xl bg-white/5 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Briefcase className="text-cyan-400" /> Roles Clave
                        </h3>
                        <div className="space-y-4">
                            {roles.map((role, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{role}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 rounded-full text-lg">
                                Aplicar a la Mesa
                            </Button>
                        </div>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {benefits.map((ben, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ben.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{ben.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {ben.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudentBoard;
