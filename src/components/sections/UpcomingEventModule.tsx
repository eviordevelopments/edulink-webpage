import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, Rocket, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const UpcomingEventModule = () => {
    const { language } = useLanguage();

    const eventData = {
        title: language === "es"
            ? "Emprender para Aprender – Community Day"
            : "Emprender para Aprender – Community Day",
        subtitle: language === "es"
            ? "Un día intensivo para transformar tus ideas en acción y conectar con mentores de alto impacto en Irapuato."
            : "An intensive day to transform your ideas into action and connect with high-impact mentors in Irapuato.",
        date: language === "es" ? "Febrero 22, 2026 (Tentativo)" : "February 22, 2026 (Tentative)",
        location: "Casa del Emprendimiento, Irapuato",
        path: "/hackminds/emprender-para-aprender"
    };

    return (
        <section className="py-12 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#4F1675]/10 to-[#E3B037]/10 backdrop-blur-3xl border border-[#E3B037]/20 shadow-xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center"
                >
                    {/* Background Decorative Rings */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#4F1675]/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E3B037]/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>

                    <div className="w-full lg:w-1/2 space-y-8 relative z-10">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 rounded-full bg-[#E3B037] text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-[#E3B037]/20">
                                {language === "es" ? "Próximo Evento" : "Upcoming Event"}
                            </span>
                            <div className="flex gap-1">
                                <Rocket className="w-4 h-4 text-[#E3B037]" />
                                <Users className="w-4 h-4 text-purple-500" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-[#1a1a4b]">
                                {eventData.title}
                            </h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                {eventData.subtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                            <div className="flex items-center gap-3 group/item">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-purple-600 group-hover/item:scale-110 transition-transform">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-black text-slate-400 uppercase tracking-tighter text-[10px]">{language === "es" ? "CUÁNDO" : "WHEN"}</p>
                                    <p className="font-bold text-slate-700">{eventData.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group/item">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-blue-500 group-hover/item:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-black text-slate-400 uppercase tracking-tighter text-[10px]">{language === "es" ? "DÓNDE" : "WHERE"}</p>
                                    <p className="font-bold text-slate-700">{eventData.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to={eventData.path} className="flex-1 sm:flex-none">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:px-10 py-4 rounded-full bg-[#4F1675] text-white font-black text-lg shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 hover:bg-[#3d115a] transition-all"
                                >
                                    {language === "es" ? "¡Quiero participar!" : "I want to participate!"}
                                    <ChevronRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <Link to="/eventos" className="flex-1 sm:flex-none">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:px-10 py-4 rounded-full bg-white border border-slate-200 font-bold text-lg text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    {language === "es" ? "Explorar otros" : "Explore others"}
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#4F1675]/40 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1000&auto=format&fit=crop"
                                alt="Community Event"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                                <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm">
                                    #CommunityDay
                                </div>
                                <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm">
                                    #Irapuato
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Micro-Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-6 rounded-3xl bg-white shadow-2xl border border-slate-100 z-30 hidden md:flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#2D2B7A] shadow-inner">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-400">CERTIFICACIÓN</p>
                                <p className="font-black text-[#2D2B7A]">Oficial CONEDU</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingEventModule;
