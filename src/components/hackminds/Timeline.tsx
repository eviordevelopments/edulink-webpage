import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Timeline = () => {
    const { language } = useLanguage();

    const timelineData = [
        {
            period: "Q1-Q2 2026",
            titleEs: "Lanzamiento y Conexión",
            titleEn: "Launch & Connection",
            events: [
                { titleEs: "Lanzamiento de CONEDU Connect", titleEn: "Launch of CONEDU Connect", date: "Jan 2026", type: "Platform" },
                { titleEs: "Rutas Mensuales", titleEn: "Monthly Routes", date: "Feb-Jun 2026", type: "Activity", loc: "Guanajuato Hubs" },
                { titleEs: "1er Hackathon a Gran Escala", titleEn: "1st Large-Scale Hackathon", date: "May 2026", type: "Milestone" }
            ]
        },
        {
            period: "Q3-Q4 2026",
            titleEs: "Expansión y Profundización",
            titleEn: "Expansion & Deep Dive",
            events: [
                { titleEs: "Lanzamiento 8 Rutas Temáticas", titleEn: "Deployment of 8 Specialized Routes", date: "Jul 2026", type: "Launch" },
                { titleEs: "Ideathons Tech (YES26)", titleEn: "Ideathons Tech (YES26)", date: "Sep 2026", type: "Event", highlight: true },
                { titleEs: "Startup Nights y Pitch on Fire", titleEn: "Startup Nights & Pitch on Fire", date: "Oct-Nov 2026", type: "Event" },
                { titleEs: "Finance Week 2026", titleEn: "Finance Week 2026", date: "Dec 2026", type: "Event" }
            ]
        }
    ];

    return (
        <section className="py-20 bg-black/90 text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-purple-600 to-orange-500 opacity-50 blur-sm"></div>
            </div>

            <div className="container relative z-10 px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-4">Roadmap 2026</h2>
                    <p className="text-xl text-gray-400">
                        {language === "es" ? "Nuestra ruta hacia el futuro" : "Our path to the future"}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 relative">
                    {timelineData.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute -top-6 left-8 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20"></div>

                            <div className="border-l-2 border-white/20 pl-8 pb-12 space-y-8">
                                <div>
                                    <span className="text-cyan-400 font-bold tracking-widest text-sm">{phase.period}</span>
                                    <h3 className="text-3xl font-bold mt-2">{language === "es" ? phase.titleEs : phase.titleEn}</h3>
                                </div>

                                <div className="space-y-4">
                                    {phase.events.map((event, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-6 rounded-2xl border ${event.highlight ? 'bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/50 shadow-lg shadow-purple-900/20' : 'bg-white/5 border-white/10'} hover:bg-white/10 transition-colors`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{event.date}</span>
                                                <span className={`text-xs px-2 py-1 rounded full ${event.highlight ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-300'}`}>
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h4 className={`text-xl font-bold ${event.highlight ? 'text-white' : 'text-gray-200'}`}>
                                                {language === "es" ? event.titleEs : event.titleEn}
                                            </h4>
                                            {event.loc && (
                                                <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                                                    <MapPin className="w-4 h-4" />
                                                    {event.loc}
                                                </div>
                                            )}
                                            {event.highlight && (
                                                <Button variant="link" className="mt-4 p-0 text-cyan-400 hover:text-cyan-300">
                                                    {language === "es" ? "Ver detalles" : "View Details"} <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
