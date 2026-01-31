import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import agentCampSilao from "@/assets/silao.png";

const LatestEventModule = () => {
    const { language } = useLanguage();

    const eventData = {
        title: language === "es"
            ? "Del Ideario al Agente: Transformando Guanajuato con IA"
            : "From Idea to Agent: Transforming Guanajuato with AI",
        subtitle: language === "es"
            ? "El primer gran hito del 2026 enfocado en democratizar la educación STEAM y la IA."
            : "The first major milestone of 2026 focused on democratizing STEAM education and AI.",
        date: language === "es" ? "9 de enero de 2026" : "January 9, 2026",
        location: "Silao, Guanajuato",
        path: "/eventos/agentcamp-guanajuato-2026"
    };

    return (
        <section className="py-12 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group rounded-[3rem] overflow-hidden bg-background/30 backdrop-blur-2xl border border-primary/20 shadow-glow p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Background Gradient Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700"></div>

                    <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10">
                        <img
                            src={agentCampSilao}
                            alt="Latest Event"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-6 relative z-10">
                        <div className="flex items-center gap-2">
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20 backdrop-blur-md">
                                {language === "es" ? "Último Evento" : "Last Event"}
                            </span>
                            <Sparkles className="w-4 h-4 text-[#E3B037] animate-pulse" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                            {eventData.title}
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {eventData.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm font-semibold text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>{eventData.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>{eventData.location}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to={eventData.path} className="flex-1 sm:flex-none">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full sm:px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2"
                                >
                                    {language === "es" ? "Explora el evento" : "Explore event"}
                                    <ChevronRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <Link to="/eventos" className="flex-1 sm:flex-none">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full sm:px-8 py-4 rounded-full bg-accent/50 border border-primary/20 font-bold text-lg backdrop-blur-md"
                                >
                                    {language === "es" ? "Ver todos" : "View all"}
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LatestEventModule;
