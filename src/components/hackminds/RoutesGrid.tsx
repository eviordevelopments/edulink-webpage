import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    TrendingUp, Brain, Leaf, Code2, Users, HeartHandshake, Globe2,
    Rocket, DollarSign, Target, Award, Network, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const RoutesGrid = () => {
    const { language } = useLanguage();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const routes = [
        {
            id: "entrepreneurship",
            icon: Rocket,
            color: "from-orange-500 to-red-600",
            title: "Emprendimiento e Innovación",
            summary: "Transformar ideas en realidad mediante metodologías Lean y Design Thinking.",
            details: {
                activities: ["Mentoría 1:1", "Validación Lean Startup", "Startup Nights", "Ideathons Tech (YES26)", "Pitch on Fire"],
                beneficiaries: "200 jóvenes con formación, 50 startups en pipeline, 10 emprendimientos sostenibles.",
                metrics: "50 startups activas, 20+ empleos creados, Tasa supervivencia 60%.",
                alliances: "Instituto de Innovación, Instituto Eugenio Garza Lagüera, Alianzas CONEDU."
            }
        },
        {
            id: "tech_science",
            icon: Brain,
            color: "from-purple-600 to-indigo-700",
            title: "Tecnología de Impacto (Tech & Science)",
            summary: "IA, Machine Learning y Desarrollo de Software para problemas globales.",
            details: {
                activities: ["Workshops IA/ML", "Bootcamps Full Stack", "Hackathons (NASA, MIT Solve)", "Laboratorios Virtuales"],
                beneficiaries: "500 jóvenes iniciación STEAM, 100 con certificaciones, 50 docentes capacitados.",
                metrics: "80% completación cursos, 50+ proyectos publicados, 50+ certificaciones.",
                alliances: "EmprendHEC, Comunidad IA GTO, Microsoft for Startups, AWS."
            }
        },
        {
            id: "financial",
            icon: DollarSign,
            color: "from-green-500 to-emerald-700",
            title: "Educación Financiera",
            summary: "Independencia económica y gestión de capital para jóvenes.",
            details: {
                activities: ["Finanzas Personales Básicas", "Simuladores de Inversión", "Emprendimiento Financiero", "Finance Week 2026"],
                beneficiaries: "400 jóvenes formados, 50 cuentas bancarias abiertas.",
                metrics: "70% mejora alfabetización financiera, $5M USD movilizados.",
                alliances: "IMEF Universitario, BBVA, Santander, CNBV."
            }
        },
        {
            id: "climatech",
            icon: Leaf,
            color: "from-emerald-400 to-teal-600",
            title: "Sostenibilidad y Climatech",
            summary: "Soluciones de impacto ambiental y economía circular.",
            details: {
                activities: ["Challenges Climatech", "Agritech & Foodtech", "Gestión de Residuos", "Energías Renovables"],
                beneficiaries: "150 jóvenes sensibilizados, 10 startups verdes incubadas.",
                metrics: "10,000 ton CO2 evitadas, 100 hectáreas impactadas.",
                alliances: "Empresas Agritech, Organizaciones Ambientales."
            }
        },
        {
            id: "leadership",
            icon: Users,
            color: "from-blue-500 to-cyan-600",
            title: "Liderazgo y Habilidades Blandas",
            summary: "Comunicación, inteligencia emocional y liderazgo transformador.",
            details: {
                activities: ["Talleres de Liderazgo", "Comunicación Integral (Storytelling)", "Inteligencia Emocional", "Resolución de Conflictos"],
                beneficiaries: "300 jóvenes formados, 50 líderes comunitarios emergentes.",
                metrics: "80% mejora confianza, 50 jóvenes en toma de decisiones.",
                alliances: "Organizaciones Civiles, Coaches Certificados."
            }
        },
        {
            id: "social",
            icon: HeartHandshake,
            color: "from-pink-500 to-rose-600",
            title: "Impacto Comunitario",
            summary: "Soluciones reales para problemas locales y bienestar social.",
            details: {
                activities: ["Diagnósticos Participativos", "Proyectos de Salud Digital", "Seguridad Alimentaria", "Voluntariado Corporativo"],
                beneficiaries: "1,000+ personas impactadas indirectamente, 5 comunidades activas.",
                metrics: "10 proyectos completados, 90% satisfacción comunitaria.",
                alliances: "Impacto Irapuato, ONGs Locales, Empresas ESR."
            }
        },
        {
            id: "inclusion",
            icon: Globe2,
            color: "from-violet-500 to-fuchsia-600",
            title: "Género e Inclusión Digital",
            summary: "Cerrando la brecha tecnológica para mujeres y grupos vulnerables.",
            details: {
                activities: ["Becas STEAM para Mujeres", "Mentoras en Tech", "Programas de Liderazgo Femenino"],
                beneficiaries: "Enfoque en 50% participación femenina en todas las rutas.",
                metrics: "Paridad de género en graduados, Reducción brecha salarial en empleos obtenidos.",
                alliances: "Women in Tech, ONU Mujeres."
            }
        },
        {
            id: "bigdata",
            icon: Code2,
            color: "from-indigo-500 to-blue-800",
            title: "Big Data y Analítica",
            summary: "El poder de los datos para la toma de decisiones estratégicas.",
            details: {
                activities: ["Visualización de Datos", "Análisis Predictivo", "Datathons"],
                beneficiaries: "Integrado transversalmente en Tech & Science.",
                metrics: "Proyectos basados en datos reales.",
                alliances: "Tableau, PowerBI communities."
            }
        }
    ];

    // English translations map (simplified for brevity, can be expanded)
    const enContent = {
        entrepreneurship: { title: "Entrepreneurship & Innovation", summary: "Transform ideas into reality." },
        // ... add others if needed, for now logic defaults to ES mostly as prompt was heavy on ES content
    };

    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        RUTAS DE ALTO IMPACTO
                    </motion.h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Un ecosistema educativo disruptivo diseñado para transformar pasiones en proyectos de vida y soluciones globales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {routes.map((route, index) => (
                        <motion.div
                            key={route.id}
                            layoutId={route.id}
                            onClick={() => setSelectedId(route.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-white/5"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${route.color} opacity-90 group-hover:opacity-100 transition-all duration-500`}></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-start">
                                    <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner">
                                        <route.icon className="w-7 h-7" />
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold leading-tight mb-3 tracking-tight">{route.title}</h3>
                                    <p className="text-sm font-medium text-white/80 line-clamp-3 group-hover:text-white transition-colors">
                                        {route.summary}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={selectedId}
                                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl relative scrollbar-hide"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {routes.map((route) => {
                                    if (route.id !== selectedId) return null;
                                    return (
                                        <div key={route.id} className="flex flex-col md:flex-row min-h-[500px]">
                                            {/* Sidebar / Header Area */}
                                            <div className={`md:w-1/3 p-8 bg-gradient-to-br ${route.color} text-white flex flex-col justify-between relative`}>
                                                <div>
                                                    <div className="bg-black/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                                        <route.icon className="w-8 h-8" />
                                                    </div>
                                                    <h3 className="text-3xl md:text-4xl font-black mb-4 leading-none">{route.title}</h3>
                                                    <p className="text-lg opacity-90 font-medium">{route.summary}</p>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedId(null)}
                                                    className="absolute top-4 right-4 md:hidden bg-black/20 p-2 rounded-full"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            {/* Content Area */}
                                            <div className="md:w-2/3 p-8 md:p-12 space-y-8 bg-background">
                                                <button
                                                    onClick={() => setSelectedId(null)}
                                                    className="hidden md:block absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    ✕
                                                </button>

                                                <div className="grid gap-8">
                                                    {/* Activities */}
                                                    <div>
                                                        <h4 className="flex items-center gap-2 text-lg font-bold text-primary mb-4 uppercase tracking-wider">
                                                            <Target className="w-5 h-5" /> Actividades Clave
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {route.details.activities.map((act, i) => (
                                                                <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                                                                    {act}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-8">
                                                        {/* Metrics */}
                                                        <div className="p-5 rounded-2xl bg-secondary/50 border border-border/50">
                                                            <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-3 uppercase">
                                                                <Award className="w-4 h-4" /> Métricas 2026
                                                            </h4>
                                                            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                                                                {route.details.metrics}
                                                            </p>
                                                        </div>

                                                        {/* Beneficiaries */}
                                                        <div className="p-5 rounded-2xl bg-secondary/50 border border-border/50">
                                                            <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-3 uppercase">
                                                                <Users className="w-4 h-4" /> Beneficiarios
                                                            </h4>
                                                            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                                                                {route.details.beneficiaries}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Alliances */}
                                                    <div>
                                                        <h4 className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-2 uppercase">
                                                            <Network className="w-4 h-4" /> Alianzas Estratégicas
                                                        </h4>
                                                        <p className="text-sm text-foreground/60">
                                                            {route.details.alliances}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="pt-8 border-t border-border">
                                                    <Button size="lg" className="w-full text-lg font-bold rounded-full h-14 shadow-xl shadow-primary/20">
                                                        Aplicar a {route.title}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default RoutesGrid;
