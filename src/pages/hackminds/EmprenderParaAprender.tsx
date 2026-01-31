import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Calendar, MapPin, Users, Rocket, Brain, Award,
    ExternalLink, Github, Youtube, Download, ChevronRight,
    TrendingUp, Globe, Heart, Zap, Play, Layout, Code, Briefcase,
    Sparkles, ArrowRight, BookOpen, Handshake, Star,
    Linkedin, Twitter, Instagram, Home, ScrollText, Smile, X,
    CheckCircle, MessageCircle, Clock, Mic, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

// Assets
import trepCampLogo from "@/assets/TREPCAMP.png";
import coneduLogo from "@/assets/conedulogo.png";
import innovacionLogo from "@/assets/AE-Innovacion-Guanajuato-2.png";
import expImage from "@/assets/hero-youth-innovation.jpg";

// Multi-language Text Helper
const t = (es: string, en: string, lang: string) => lang === "es" ? es : en;

// Animated Counter Component
const AnimatedCounter = ({ value, label, icon: Icon }: { value: string, label: string, icon: any }) => {
    const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    return (
        <div className="text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2D2B7A] group-hover:bg-[#2D2B7A] group-hover:text-white transition-colors duration-300">
                <Icon className="w-7 h-7" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-[#4F1675]"
            >
                {numericValue}{suffix}
            </motion.div>
            <div className="text-xs font-bold uppercase text-slate-400 mt-1">{label}</div>
        </div>
    );
};

// Interactive Globe Component (From Original)
const InteractiveGlobe = ({ language }: { language: string }) => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative z-10 p-12 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl"
            >
                <Globe className="w-48 h-48 md:w-64 md:h-64 text-blue-500 opacity-80" />
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <motion.path d="M 50 150 Q 150 50 250 150" stroke="url(#grad1)" strokeWidth="2" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
                    <motion.path d="M 100 250 Q 200 150 300 250" stroke="url(#grad1)" strokeWidth="2" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }} />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
            <div className="absolute inset-0 pointer-events-none">
                {[{ Icon: Rocket, pos: "top-10 left-10", delay: 0 }, { Icon: Zap, pos: "bottom-10 right-10", delay: 1 }, { Icon: Brain, pos: "top-20 right-0", delay: 2 }, { Icon: Users, pos: "bottom-20 left-0", delay: 3 }].map((item, i) => (
                    <motion.div key={i} animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4 + i, repeat: Infinity, delay: item.delay }} className={`absolute ${item.pos} p-4 rounded-2xl bg-blue-50/50 backdrop-blur-md border border-blue-100 text-blue-500 shadow-lg`}>
                        <item.Icon className="w-8 h-8" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const EmprenderParaAprender = () => {
    const { language } = useLanguage();
    const { scrollY } = useScroll();

    // Speakers Data (Updated)
    const speakers = [
        {
            name: "Diego Arredondo",
            role: "TrepCamp Hub Guanajuato",
            desc: language === "es" ? "Emprendedor y representante del Hub Guanajuato de TrepCamp, conecta el talento local con la comunidad global." : "Entrepreneur and representative of the TrepCamp Guanajuato Hub.",
            social: { linkedin: "#", x: "#", instagram: "#" },
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            name: "David Emiliano Castillo",
            role: "CONEDU HackMinds",
            desc: language === "es" ? "Fundador de CONEDU HackMinds, impulsa rutas de educación, emprendimiento y tecnología." : "Founder of CONEDU HackMinds, bridging educational and economic gaps.",
            social: { linkedin: "#", x: "#", instagram: "#" },
            gradient: "from-purple-500 to-blue-500"
        }
    ];

    const agendaItems = [
        { time: "09:00", title: language === "es" ? "Recepción y registro" : "Reception & Registration", desc: language === "es" ? "Bienvenida, entrega de kit y networking inicial." : "Welcome, kit distribution, and initial networking.", icon: CheckCircle },
        { time: "09:15", title: language === "es" ? "Bienvenida oficial" : "Official Welcome", desc: language === "es" ? "Por qué Irapuato apuesta por el talento joven." : "Why Irapuato is betting on young talent.", icon: Mic },
        { time: "09:25", title: language === "es" ? "Charla: Por qué estamos aquí" : "Keynote: Why We Are Here", desc: "Diego Arredondo & David Emiliano Castillo.", icon: Sparkles },
        { time: "09:35", title: language === "es" ? "Talk: Renunciar o Continuar" : "Talk: Quit or Continue", desc: language === "es" ? "El camino del emprendedor mexicano." : "The Mexican entrepreneur's journey.", icon: TrendingUp },
        { time: "09:55", title: language === "es" ? "Talk: El Fracaso" : "Talk: Failure", desc: language === "es" ? "La clave del emprendimiento." : "The key to entrepreneurship.", icon: Zap },
        { time: "10:15", title: language === "es" ? "Taller: De problema a modelo" : "Workshop: From Problem to Model", desc: "Design Thinking + Lean Canvas.", icon: Brain },
        { time: "11:05", title: language === "es" ? "Brunch & Networking" : "Brunch & Networking", desc: language === "es" ? "Conecta con mentores y sponsors." : "Connect with mentors and sponsors.", icon: Heart },
        { time: "11:25", title: language === "es" ? "Taller: El arte de vender" : "Workshop: The Art of Selling", desc: language === "es" ? "Pitching y ventas humanas." : "Pitching and human sales.", icon: Handshake },
        { time: "12:15", title: language === "es" ? "Sesión de Pitches" : "Pitch Session", desc: language === "es" ? "Feedback de evaluadores expertos." : "Feedback from expert evaluators.", icon: Play },
        { time: "12:45", title: language === "es" ? "Cierre y Siguientes Pasos" : "Closing & Next Steps", desc: language === "es" ? "Certificados y rutas HackMinds 2026." : "Certificates and HackMinds 2026 routes.", icon: Award }
    ];

    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
    const heroY = useTransform(scrollY, [0, 400], [0, 50]);
    const glassStyle = "bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl";

    return (
        <div className="min-h-screen bg-white text-[#1a1a4b] font-sans selection:bg-primary/20">
            <Header />

            {/* 1. NEW HERO SECTION */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#4F1675] to-[#2D2B7A]"></div>
                    <div className="absolute top-[-10%] right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-purple-500/30 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-blue-500/20 rounded-full blur-[80px] md:blur-[100px]"></div>
                </div>
                <motion.div className="container relative z-10 px-4 md:px-6" style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
                    <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
                        {/* 2D Soft Animations: Floating Icons - Hidden on very small screens to avoid clutter */}
                        <div className="absolute inset-0 pointer-events-none overflow-visible hidden sm:block">
                            <motion.div
                                animate={{
                                    y: [0, -30, 0],
                                    rotate: [0, 10, 0],
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 -left-10 text-white/20"
                            >
                                <Rocket className="w-20 h-20 md:w-32 md:h-32" />
                            </motion.div>
                            <motion.div
                                animate={{
                                    y: [0, 30, 0],
                                    rotate: [0, -15, 0],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-40 -right-20 text-white/10"
                            >
                                <Brain className="w-32 h-32 md:w-48 md:h-48" />
                            </motion.div>
                        </div>

                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-2 p-3 md:p-4 rounded-3xl bg-white/10 backdrop-blur-sm relative z-20">
                            <img src={coneduLogo} alt="CONEDU" className="h-8 md:h-14 object-contain brightness-0 invert drop-shadow-lg opacity-90" />
                            <img src={trepCampLogo} alt="TrepCamp" className="h-10 md:h-20 object-contain brightness-0 invert drop-shadow-lg opacity-90" />
                            <img src={innovacionLogo} alt="Innovación" className="h-10 md:h-16 object-contain brightness-0 invert drop-shadow-lg opacity-90" />
                        </motion.div>

                        <div className="space-y-4 md:space-y-6 max-w-5xl relative z-20">
                            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                Emprender para <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-purple-300">Aprender</span>
                            </motion.h1>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold tracking-widest text-xs md:text-base uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                Community Day
                            </motion.div>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed px-2">
                                {language === "es" ? "Un día intensivo para transformar tus ideas en acción y conectar con mentores de alto impacto." : "An intensive day to transform your ideas into action and connect with high-impact mentors."}
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 md:gap-4 relative z-20 w-full sm:w-auto px-4 sm:px-0">
                            {[
                                { icon: MapPin, text: t("Casa del Emprendimiento", "Entrepreneurship House", language) },
                                { icon: Clock, text: "9:00 - 13:00 h" },
                                { icon: Users, text: t("30-40 jóvenes", "30-40 youth", language) },
                                { icon: Award, text: t("Certificado Oficial", "Official Certificate", language) }
                            ].map((chip, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white">
                                    <chip.icon className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                                    <span className="font-semibold text-xs md:text-sm whitespace-nowrap">{chip.text}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 md:mt-8 relative z-20 w-full sm:w-auto px-4 sm:px-0">
                            <Button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full bg-yellow-400 hover:bg-yellow-300 text-[#2D2B7A] font-black text-lg md:text-xl shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all">
                                {language === "es" ? "Registrarme" : "Register"} <Rocket className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 rounded-full border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-bold text-lg md:text-xl backdrop-blur-sm transition-all">
                                {language === "es" ? "Ver agenda" : "View Agenda"}
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* 2. NEW POSITIONING SECTION */}
            <section className="py-12 md:py-20 bg-white border-b border-slate-100 overflow-hidden">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8"
                    >
                        <div className="inline-block p-3 rounded-xl bg-purple-50 text-purple-700 font-bold tracking-wider text-[10px] md:text-xs uppercase">Visión y Propósito</div>
                        <h2 className="text-xl md:text-3xl font-medium text-slate-700 leading-relaxed px-2">
                            "Queremos posicionar a <span className="text-[#2D2B7A] font-black">Guanajuato</span> como un referente en formación disruptiva de talento <span className="text-blue-600 font-black">STEAM</span> y emprendedor juvenil a nivel mundial..."
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 3. ORIGINAL CHALLENGE */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <div className="inline-block p-3 rounded-2xl bg-blue-50 text-blue-600 mb-2"><Sparkles className="w-6 h-6 md:w-8 md:h-8" /></div>
                            <h2 className="text-3xl md:text-6xl font-black text-[#2D2B7A] leading-tight">En Guanajuato ya existe <span className="text-blue-500 italic">talento brillante</span>.</h2>
                            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">"Pero faltan rutas claras, acompañamiento, redes y puentes hacia programas globales."</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-blue-100 to-white shadow-inner flex items-center justify-center overflow-hidden p-6 md:p-12">
                            <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10 w-full">
                                {[{ text: "Rutas Claras", icon: MapPin }, { text: "Acompañamiento", icon: Heart }, { text: "Redes", icon: Users }, { text: "Puentes Globales", icon: Globe }].map((item, i) => (
                                    <motion.div key={i} whileHover={{ y: -5, scale: 1.05 }} className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-lg border border-slate-50 flex flex-col items-center gap-2 md:gap-3">
                                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                                        <span className="text-[10px] md:text-sm font-black text-[#2D2B7A] uppercase text-center">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. ORIGINAL UNDERSTANDING */}
            <section className="py-16 md:py-24 bg-[#F8F7FF] relative overflow-hidden">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 space-y-4 md:space-y-6">
                        <motion.span className="text-purple-600 font-black text-xs md:text-sm uppercase tracking-[0.4em]">U - Entendimiento</motion.span>
                        <h2 className="text-3xl md:text-7xl font-black text-[#2D2B7A]">Emprender también es <span className="italic text-purple-600">Aprender</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                        <motion.div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white shadow-xl border border-white flex flex-col gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600"><Brain className="w-8 h-8 md:w-10 md:h-10" /></div>
                            <h3 className="text-xl md:text-2xl font-black text-[#2D2B7A]">Convicción CONEDU & TrepCamp</h3>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">"Si se crean hubs locales de comunidad, mentores y rutas claras, más jóvenes podrán convertir sus ideas en startups."</p>
                        </motion.div>
                        <motion.div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white shadow-xl border border-white flex flex-col gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600"><Award className="w-8 h-8 md:w-10 md:h-10" /></div>
                            <h3 className="text-xl md:text-2xl font-black text-[#2D2B7A]">Sin Barreras</h3>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">"Acceder a becas internacionales sin que el contexto socioeconómico sea una barrera para el mayor esfuerzo y las mejores ideas."</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. NEW WHAT IS COMMUNITY DAY */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 space-y-4 md:space-y-6">
                        <motion.span className="text-blue-600 font-black text-xs md:text-sm uppercase tracking-[0.4em]">C - Cambio</motion.span>
                        <h2 className="text-3xl md:text-6xl font-black text-[#2D2B7A]">{language === "es" ? "¿Qué es el Community Day?" : "What is Community Day?"}</h2>
                        <p className="text-lg md:text-xl text-slate-600 font-medium px-2">Un espacio para aprender lo que no se enseña en el aula.</p>
                    </div>
                    <div className="relative bg-[#F8F9FC] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl border border-white mb-10 md:mb-16 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 hidden lg:block">
                            <Users className="w-64 h-64 text-[#2D2B7A]" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
                            <div className="space-y-4 md:space-y-6">
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        { es: "Cómo pensar como emprendedor.", en: "How to think like an entrepreneur.", icon: Brain },
                                        { es: "Cómo convertir problemas en proyectos.", en: "How to turn problems into projects.", icon: Rocket },
                                        { es: "Cómo vender tus ideas.", en: "How to sell your ideas.", icon: Handshake }
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-white/50 transition-colors"
                                        >
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                            </div>
                                            <span className="text-base md:text-lg text-slate-700 font-medium leading-snug">{t(item.es, item.en, language)}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                {[
                                    { val: "+4", lbl: t("Horas", "Hours", language), icon: Clock },
                                    { val: "2", lbl: t("Speakers", "Speakers", language), icon: Mic },
                                    { val: "2", lbl: t("Talleres", "Workshops", language), icon: Brain },
                                    { val: "100%", lbl: t("Networking", "Networking", language), icon: Handshake }
                                ].map((s, i) => (
                                    <AnimatedCounter key={i} value={s.val} label={s.lbl} icon={s.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. NEW AGENDA */}
            <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
                <div className="container px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#2D2B7A]">{language === "es" ? "Agenda del Vuelo" : "Flight Agenda"}</h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
                        {agendaItems.map((item, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.01 }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all items-center text-center sm:text-left">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0 flex items-center justify-center font-black text-base md:text-lg">{item.time}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-[#2D2B7A]">{item.title}</h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-snug lg:leading-normal">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="flex justify-center mt-8">
                            <Button variant="outline" className="rounded-full border-[#2D2B7A] text-[#2D2B7A] hover:bg-slate-100 text-sm md:text-base px-6 py-3">{language === "es" ? "Descargar Agenda" : "Download Agenda"} <Download className="ml-2 w-4 h-4" /></Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. ORIGINAL TREPCAMP */}
            <section className="py-16 md:py-32 bg-[#F5F0FF] relative overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 md:space-y-10 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="p-3 md:p-4 rounded-2xl md:rounded-3xl bg-white shadow-lg"><img src={trepCampLogo} alt="TrepCamp" className="h-8 md:h-12 w-auto" /></div>
                                <h3 className="text-sm md:text-xl font-bold text-[#4F1675] uppercase tracking-widest">{language === "es" ? "Socio Global" : "Global Partner"}</h3>
                            </div>
                            <h2 className="text-3xl md:text-7xl font-black italic text-[#2D2B7A] leading-tight px-2">{language === "es" ? "Lleva tu talento al mundo" : "Take your talent to the world"}</h2>
                            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-slate-600 leading-relaxed font-medium">
                                <p>{language === "es" ? "TrepCamp es la academia internacional para formar jóvenes lideres." : "TrepCamp is the international academy for young leaders."}</p>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {["Madrid", "NY", "9 Días"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-white text-[#4F1675] font-black text-xs md:text-sm uppercase shadow-sm border border-purple-100 flex items-center gap-2">
                                        <Award className="w-3 h-3 md:w-4 md:h-4 text-[#00AEEF]" /> {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mt-8 lg:mt-0">
                            <div className="scale-75 sm:scale-90 md:scale-100">
                                <InteractiveGlobe language={language} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. ROUTES SECTION */}
            <section className="py-16 md:py-24 bg-[#0f172a] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                <div className="container px-4 relative z-10">
                    <div className="text-center mb-10 md:mb-16">
                        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-yellow-400 font-bold tracking-widest uppercase text-xs md:text-sm">{t("EL CAMINO DEL PARTICIPANTE", "PARTICIPANT JOURNEY", language)}</motion.span>
                        <h2 className="text-3xl md:text-6xl font-black mt-2 leading-tight">{t("Rutas HackMinds 2026", "2026 HackMinds Routes", language)}</h2>
                        <p className="text-lg md:text-xl text-slate-400 mt-4 max-w-3xl mx-auto px-2">
                            {t("El Community Day es solo el inicio.", "Community Day is just the beginning.", language)}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:20">
                        {[
                            { t: t("Emprendimiento", "Entrepreneurship", language), s: t("& Edu. Financiera", "& Financial Edu.", language), icon: DollarSign, color: "from-blue-500 to-cyan-500" },
                            { t: t("Tecnología", "Technology", language), s: t("& IA Impacto", "& Impact AI", language), icon: Code, color: "from-purple-500 to-pink-500" },
                            { t: t("Liderazgo", "Leadership", language), s: t("Transformador", "Transformative", language), icon: Users, color: "from-amber-500 to-orange-500" },
                            { t: t("Sostenibilidad", "Sustainability", language), s: t("& Climatech", "& Climatech", language), icon: Globe, color: "from-green-500 to-emerald-500" }
                        ].map((r, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="relative p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${r.color}`}></div>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 md:mb-6">
                                    <r.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black">{r.t}</h3>
                                <p className="text-slate-400 font-bold text-xs md:text-sm tracking-wide mt-1">{r.s}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Path Diagram - Vertical on mobile */}
                    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 relative">
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block"></div>
                            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/10 -translate-x-1/2 md:hidden"></div>

                            {[
                                { t: t("Asistes", "Attend", language), sub: "Community Day", icon: Calendar },
                                { t: t("Diseñas", "Design", language), sub: "Modelo", icon: Sparkles },
                                { t: t("Te Unes", "Join", language), sub: "Ruta", icon: ArrowRight },
                                { t: t("Aplicas", "Apply", language), sub: "Becas", icon: Rocket },
                                { t: t("Escalas", "Scale", language), sub: "Impacto", icon: Globe }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative z-10 flex flex-col items-center gap-3 md:gap-4 group"
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#4F1675] border-2 md:border-4 border-[#0f172a] flex items-center justify-center text-white shadow-xl transition-all">
                                        <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>
                                    <div className="text-center">
                                        <div className="font-black text-base md:text-lg">{step.t}</div>
                                        <div className="text-slate-400 text-[10px] md:text-xs font-bold uppercase">{step.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. ORIGINAL CONTRIBUTION */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
                        <motion.span className="text-purple-600 font-black text-xs md:text-sm uppercase tracking-[0.4em]">C - Contribución</motion.span>
                        <h2 className="text-4xl md:text-8xl font-black text-[#2D2B7A]">Puentes Concretos</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                        {[{ icon: Sparkles, title: "Inspiración", desc: "No solo teoría: cómo iniciar, validar y aplicar." }, { icon: Home, title: "Comunidad", desc: "Conecta en Casa de Emprendimiento Irapuato." }, { icon: Rocket, title: "Acompañamiento", desc: "Continuamos después del evento con mentorías." }].map((item, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-xl flex flex-col items-center text-center gap-6 md:gap-8 overflow-hidden">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white shadow-lg flex items-center justify-center text-purple-600 flex-shrink-0"><item.icon className="w-8 h-8 md:w-10 md:h-10" /></div>
                                <div className="space-y-3 md:space-y-4"><h3 className="text-xl md:text-2xl font-black text-[#2D2B7A]">{item.title}</h3><p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{item.desc}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
                <div className="container px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#2D2B7A] mb-4">{t("Mentores y Speakers", "Mentors & Speakers", language)}</h2>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto px-2">{t("Construyendo el futuro del emprendimiento.", "Building the future of entrepreneurship.", language)}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {speakers.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white border border-slate-100 shadow-xl space-y-6 md:space-y-8 text-center transition-all relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${s.gradient}`}></div>
                                <div className="relative inline-block">
                                    <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-tr ${s.gradient} p-1`}>
                                        <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                                            <Users className="w-12 h-12 md:w-16 md:h-16 text-slate-300" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-50">
                                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                                    </div>
                                </div>
                                <div className="space-y-3 md:space-y-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-[#2D2B7A] group-hover:text-purple-600 transition-colors leading-tight">{s.name}</h3>
                                        <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-black text-[9px] md:text-[10px] tracking-widest uppercase mt-2">{s.role}</div>
                                    </div>
                                    <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                                </div>
                                <div className="flex justify-center gap-4 pt-4 border-t border-slate-50">
                                    <a href={s.social.linkedin} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                                    <a href={s.social.x} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all"><X className="w-5 h-5" /></a>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }} className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-50 border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center text-slate-400 scale-95 transition-all">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 md:w-10 md:h-10 opacity-30" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">{t("Próximamente", "Coming Soon", language)}</h3>
                            <p className="text-xs mt-2">{t("Más mentores invitados.", "More guest mentors.", language)}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 11. ORIGINAL EVIDENCE & SATISFACTION */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-[#2D2B7A] text-white space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                            <div className="inline-block p-3 md:p-4 rounded-2xl md:rounded-3xl bg-white/10 text-[#00AEEF] relative z-10"><ScrollText className="w-8 h-8 md:w-10 md:h-10" /></div>
                            <h2 className="text-3xl md:text-4xl font-black relative z-10">E - Evidencia</h2>
                            <ul className="space-y-4 md:space-y-6 text-base md:text-xl opacity-90 font-medium relative z-10">
                                <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00AEEF] flex-shrink-0"></div><span>Metodologías probadas a nivel global.</span></li>
                                <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00AEEF] flex-shrink-0"></div><span>+15,000 emprendedores guiados.</span></li>
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-[#4F1675] text-white space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                            <div className="inline-block p-3 md:p-4 rounded-2xl md:rounded-3xl bg-white/10 text-yellow-400 relative z-10"><Smile className="w-8 h-8 md:w-10 md:h-10" /></div>
                            <h2 className="text-3xl md:text-4xl font-black relative z-10">S - Satisfacción</h2>
                            <ul className="space-y-4 md:space-y-6 text-base md:text-xl opacity-90 font-medium relative z-10">
                                <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></div><span>Próximos pasos claros para tu proyecto.</span></li>
                                <li className="flex items-start gap-3"><div className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></div><span>Alianzas para tu desarrollo profesional.</span></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 12. NEW IMPACT / ODS */}
            <section className="py-16 md:py-24 bg-[#F0F4FA] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 opacity-30"></div>
                <div className="container px-4">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#2D2B7A] mb-4 leading-tight">{t("Impacto y ODS", "Impact & SDG", language)}</h2>
                        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm md:text-base px-2">{t("Nuestras rutas alineadas a los Objetivos de la ONU.", "Our routes aligned with UN Goals.", language)}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                        {[
                            { n: "4", c: "bg-[#4C9F38]", t: t("Educación", "Education", language) },
                            { n: "8", c: "bg-[#A21942]", t: t("Trabajo", "Work", language) },
                            { n: "9", c: "bg-[#FD6925]", t: t("Innovación", "Innovation", language) },
                            { n: "10", c: "bg-[#DD1367]", t: t("Reducción", "Reduced", language) },
                            { n: "17", c: "bg-[#19486A]", t: t("Alianzas", "Partnerships", language) }
                        ].map((o, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className={`w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl ${o.c} text-white font-black text-2xl md:text-4xl flex items-center justify-center shadow-xl border-2 md:border-4 border-white`}>
                                    {o.n}
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest text-center max-w-[80px] md:max-w-[100px] leading-tight">{o.t}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                        <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-lg border border-slate-100 flex items-center gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                <Users className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h4 className="font-black text-[#2D2B7A] text-sm md:text-base">{t("30-40 Jóvenes", "30-40 Youth", language)}</h4>
                                <p className="text-[10px] md:text-sm text-slate-500 leading-tight">{t("Impacto directo en talento local.", "Direct impact on local talent.", language)}</p>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white shadow-lg border border-slate-100 flex items-center gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                <Award className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h4 className="font-black text-[#2D2B7A] text-sm md:text-base">{t("Certificados", "Certified", language)}</h4>
                                <p className="text-[10px] md:text-sm text-slate-500 leading-tight">{t("Reconocimiento oficial internacional.", "Official international recognition.", language)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. PRACTICAL INFO */}
            <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="space-y-8 md:space-y-10">
                            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-purple-600 font-bold tracking-widest uppercase text-xs md:text-sm">{t("DETALLES LOGÍSTICOS", "LOGISTICS DETAILS", language)}</motion.span>
                                <h2 className="text-3xl md:text-5xl font-black text-[#2D2B7A]">{t("Info Práctica", "Practical Info", language)}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                {[
                                    { icon: MapPin, title: t("Lugar", "Location", language), desc: "Irapuato", sub: "Casa Emprendimiento", color: "text-purple-600", bg: "bg-purple-50" },
                                    { icon: Clock, title: t("Horario", "Time", language), desc: "09:00 - 13:00 h", sub: t("Sáb 22 Feb (Tent)", "Sat Feb 22 (Tent)", language), color: "text-blue-600", bg: "bg-blue-50" },
                                    { icon: DollarSign, title: t("Inversión", "Investment", language), desc: t("Gratuito", "Free", language), sub: t("Previo registro", "Upon registration", language), color: "text-green-600", bg: "bg-green-50" },
                                    { icon: CheckCircle, title: t("Requisitos", "Requirements", language), desc: t("Ganas de aprender", "Willigness", language), sub: t("Traer laptop", "Bring laptop", language), color: "text-orange-600", bg: "bg-orange-50" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex gap-4 md:gap-6 items-start"
                                    >
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                            <item.icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-[#2D2B7A] text-sm md:text-lg uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-700 font-bold text-sm md:text-base">{item.desc}</p>
                                            <p className="text-slate-400 text-[10px] md:text-sm leading-tight">{item.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group mt-10 lg:mt-0">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-[2rem] md:rounded-[4rem] blur-2xl opacity-50"></div>
                            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-slate-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.36976694384!2d-101.34863332386419!3d20.674846480887162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7fdcf8923a9d%3A0xc3f34865d487928b!2sCasa%20del%20Emprendedor%20Irapuato!5e0!3m2!1ses-419!2smx!4v1706730000000!5m2!1ses-419!2smx"
                                    className="w-full h-full grayscale hover:grayscale-0 transition-opacity duration-500"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-2xl border border-slate-50 flex items-center gap-3 md:gap-4 z-20"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="pr-2 md:pr-4">
                                    <p className="text-[9px] md:text-xs font-black uppercase text-slate-400">{t("NOS VEMOS EN", "SEE YOU AT", language)}</p>
                                    <p className="font-black text-[#2D2B7A] text-xs md:text-base">Irapuato</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 14. ORIGINAL CLOSING */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-[#0f172a] to-[#2D2B7A] relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#00AEEF_0%,_transparent_100%)]"></div>
                </div>
                <div className="container px-4 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 transition-all">
                            <h2 className="text-xl md:text-5xl font-black leading-tight mb-6 md:mb-8 italic">"Creemos que las oportunidades no deben depender del código postal."</h2>
                            <p className="text-sm md:text-xl text-blue-300 font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Declaración de Compromiso</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 15. ORIGINAL/UPDATED CTA */}
            <section className="py-16 md:py-24 relative overflow-hidden text-center bg-white">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-[#2D2B7A] mb-8 leading-tight">¿Listo para empezar?</h2>
                    <div className="flex justify-center px-4">
                        <Button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 rounded-full bg-[#4F1675] text-white font-black text-lg md:text-xl hover:bg-[#3d115a] transition-all">
                            {language === "es" ? "Registrarme Ahora" : "Register Now"}
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EmprenderParaAprender;
