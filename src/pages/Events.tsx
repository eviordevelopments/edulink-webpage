import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, Sparkles, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import agentCampSilao from "@/assets/silao.png";

const Events = () => {
    const { language } = useLanguage();

    const events = [
        {
            id: "agentcamp-guanajuato-2026",
            date: language === "es" ? "9 de enero, 2026" : "January 9, 2026",
            title: language === "es"
                ? "Del Ideario al Agente: Transformando Guanajuato con IA"
                : "From Idea to Agent: Transforming Guanajuato with AI",
            description: language === "es"
                ? "Primer gran evento del año enfocado en democratizar la IA en el Bajío para creadores y aceleradores."
                : "First major event of the year focused on democratizing AI in the Bajío for creators and accelerators.",
            location: "Silao, Guanajuato",
            tags: ["HackMinds", "STEAM", "Guanajuato", "Youth"],
            image: agentCampSilao,
            path: "/eventos/agentcamp-guanajuato-2026"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full glass-effect-dark border border-white/20 font-semibold text-sm mb-6">
                            <Sparkles className="inline-block w-4 h-4 mr-2 text-[#E3B037]" />
                            {language === "es" ? "Próximos Eventos & Noticias" : "Upcoming Events & News"}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {language === "es" ? "Conectando con la Innovación" : "Connecting with Innovation"}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                            {language === "es"
                                ? "Explora nuestras últimas iniciativas, hackathons y talleres diseñados para democratizar la tecnología en México."
                                : "Explore our latest initiatives, hackathons, and workshops designed to democratize technology in Mexico."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {language === "es" ? "Lanzamientos Recientes" : "Recent Launches"}
                        </h2>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder={language === "es" ? "Buscar eventos..." : "Search events..."}
                                    className="pl-10 pr-4 py-2 rounded-full bg-accent/50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 hover:bg-accent transition-colors">
                                <Filter className="w-4 h-4" />
                                <span>{language === "es" ? "Filtrar" : "Filter"}</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                whileHover={{ y: -10 }}
                                className="group relative bg-background/50 backdrop-blur-xl border border-primary/10 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                            {language === "es" ? "Nuevo" : "New"}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{event.date}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-primary mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span>{event.location}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase text-primary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-primary/5">
                                        <Link
                                            to={event.path}
                                            className="flex items-center justify-between group/link"
                                        >
                                            <span className="font-bold text-lg">{language === "es" ? "Ver Evento" : "View Event"}</span>
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                                                <ChevronRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Glassmorphic border glow effect */}
                                <div className="absolute inset-0 border-[3px] border-primary/0 group-hover:border-primary/20 rounded-[2rem] pointer-events-none transition-all duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Events;
