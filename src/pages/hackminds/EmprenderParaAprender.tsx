import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Calendar, MapPin, Users, Rocket, Brain, Award,
    ExternalLink, Github, Youtube, Download, ChevronRight,
    TrendingUp, Globe, Heart, Zap, Play, Layout, Code, Briefcase,
    Sparkles, ArrowRight, BookOpen, Handshake, Star,
    Linkedin, Twitter, Instagram, Home, ScrollText, Smile, X
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

// Interactive Globe Component
const InteractiveGlobe = ({ language }: { language: string }) => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>

            {/* Rotating Globe Icon */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative z-10 p-12 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl"
            >
                <Globe className="w-48 h-48 md:w-64 md:h-64 text-blue-500 opacity-80" />

                {/* Moving Arcs (Simulated Connections) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <motion.path
                        d="M 50 150 Q 150 50 250 150"
                        stroke="url(#grad1)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.path
                        d="M 100 250 Q 200 150 300 250"
                        stroke="url(#grad1)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Floating Entrepreneurship Icons (Blue) */}
            <div className="absolute inset-0 pointer-events-none">
                {[
                    { Icon: Rocket, pos: "top-10 left-10", delay: 0 },
                    { Icon: Zap, pos: "bottom-10 right-10", delay: 1 },
                    { Icon: Brain, pos: "top-20 right-0", delay: 2 },
                    { Icon: Users, pos: "bottom-20 left-0", delay: 3 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, delay: item.delay }}
                        className={`absolute ${item.pos} p-4 rounded-2xl bg-blue-50/50 backdrop-blur-md border border-blue-100 text-blue-500 shadow-lg`}
                    >
                        <item.Icon className="w-8 h-8" />
                    </motion.div>
                ))}
            </div>

            {/* Glassmorphic Stats Overlay */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute top-1/4 -right-10 z-20 p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl max-w-[200px]"
            >
                <div className="text-3xl font-black text-[#2D2B7A]">+15,000</div>
                <div className="text-sm font-bold text-slate-600 line-clamp-2">
                    {language === "es" ? "Líderes formados globalmente" : "Leaders trained globally"}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-1/4 -left-10 z-20 p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl max-w-[200px]"
            >
                <div className="text-3xl font-black text-[#00AEEF]">9 Días</div>
                <div className="text-sm font-bold text-slate-600">
                    {language === "es" ? "Experiencia inmersiva total" : "Total immersive experience"}
                </div>
            </motion.div>
        </div>
    );
};

const EmprenderParaAprender = () => {
    const { language } = useLanguage();
    const { scrollY } = useScroll();

    // Speakers Data
    const speakers = [
        {
            name: "Luis Antonio Beltrán",
            role: language === "es" ? "Microsoft MVP & IA Expert" : "Microsoft MVP & AI Expert",
            desc: language === "es"
                ? "Especialista en desarrollo e integración de inteligencia artificial con más de 10 años en el ecosistema tech."
                : "Specialist in AI development and integration with over 10 years in the tech ecosystem.",
            social: { linkedin: "#", x: "#", instagram: "#" },
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            name: "David Emiliano Castillo",
            role: language === "es" ? "CEO NeuralHack & Emprendedor" : "CEO NeuralHack & Entrepreneur",
            desc: language === "es"
                ? "Líder en innovación educativa y desarrollo de agentes de IA, impulsando el talento joven en México."
                : "Leader in educational innovation and AI agent development, boosting young talent in Mexico.",
            social: { linkedin: "#", x: "#", instagram: "#" },
            gradient: "from-purple-500 to-blue-500"
        },
        {
            name: "Paulo César Ramírez",
            role: language === "es" ? "Global AI Community Lead" : "Global AI Community Lead",
            desc: language === "es"
                ? "Promotor apasionado de la democratización del aprendizaje y el emprendimiento tecnológico."
                : "Passionate promoter of the democratization of learning and technological entrepreneurship.",
            social: { linkedin: "#", x: "#", instagram: "#" },
            gradient: "from-amber-500 to-orange-500"
        }
    ];

    // Scroll-based animations for Hero
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
    const heroY = useTransform(scrollY, [0, 400], [0, 50]);

    const stats = [
        { label: language === "es" ? "Asistentes" : "Attendees", value: "60-100", icon: Users },
        { label: language === "es" ? "Speakers" : "Speakers", value: "3", icon: Brain },
        { label: language === "es" ? "Becas" : "Scholarships", value: language === "es" ? "Madrid/NY" : "Madrid/NY", icon: Globe },
        { label: language === "es" ? "Costo" : "Cost", value: language === "es" ? "Gratuito" : "Free", icon: Zap }
    ];

    const glassStyle = "bg-white/60 backdrop-blur-xl border border-white shadow-2xl shadow-indigo-100/50";

    return (
        <div className="min-h-screen bg-white text-[#1a1a4b] font-sans selection:bg-primary/20">
            <Header />

            {/* Premium Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
                {/* Background Gradients: Darker to Clearer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a] via-[#4F1675]/80 to-white"></div>
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" style={{ animationDelay: "1s" }}></div>
                </div>

                <motion.div
                    className="container relative z-10 px-4"
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                >
                    <div className="flex flex-col items-center text-center space-y-12">

                        {/* Logos Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-8"
                        >
                            <img src={coneduLogo} alt="CONEDU" className="h-12 md:h-16 object-contain drop-shadow-xl hover:scale-105 transition-transform" />
                            <img src={trepCampLogo} alt="TrepCamp" className="h-16 md:h-24 object-contain drop-shadow-xl hover:scale-105 transition-transform" />
                            <img src={innovacionLogo} alt="Innovación" className="h-14 md:h-20 object-contain drop-shadow-xl hover:scale-105 transition-transform" />
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-md shadow-lg"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping"></span>
                            {language === "es" ? "Comunity Day - Guanajuato" : "Community Day - Guanajuato"}
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    opacity: { duration: 1, delay: 0.3 },
                                    scale: { duration: 1, delay: 0.3 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="text-6xl md:text-9xl font-black tracking-tight leading-[1] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            >
                                Emprender para
                                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-yellow-200 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                                    Aprender
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md"
                            >
                                {language === "es"
                                    ? "Descubre tu camino emprendedor, conecta con la comunidad y abre puertas internacionales a Madrid y Nueva York."
                                    : "Discover your entrepreneurial path, connect with the community and open international doors to Madrid and New York."}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Button size="lg" className="h-20 px-12 rounded-full bg-[#4F1675] hover:bg-[#3d115a] text-white font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] group transition-all hover:scale-105 active:scale-95">
                                {language === "es" ? "Quiero registrarme" : "Register now"}
                                <ArrowRight className="ml-2 w-7 h-7 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-20 px-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-[#2D2B7A] font-black text-2xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                                {language === "es" ? "Ver ruta" : "View path"}
                            </Button>
                        </motion.div>

                        {/* Interactive Hero Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
                            {[
                                { icon: MapPin, text: "Irapuato", color: "text-purple-500", bg: "bg-purple-50" },
                                { icon: Calendar, text: "Community Day", color: "text-blue-500", bg: "bg-blue-50" },
                                { icon: Globe, text: "Madrid / NY", color: "text-indigo-500", bg: "bg-indigo-50" },
                                { icon: Zap, text: "100% Gratis", color: "text-yellow-600", bg: "bg-yellow-50" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                    whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                                    className={`p-8 rounded-[2rem] ${glassStyle} flex flex-col items-center gap-4 group cursor-pointer`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#2D2B7A] transition-colors">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Floating Interactive Elements */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <motion.div animate={{ rotate: 360, y: [0, 30, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute top-[20%] left-[10%]"><Star className="w-12 h-12 text-yellow-400 fill-yellow-400/20" /></motion.div>
                    <motion.div animate={{ y: [0, -40, 0], x: [0, 30, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-[30%] left-[5%]"><Rocket className="w-16 h-16 text-blue-300" /></motion.div>
                    <motion.div animate={{ scale: [1, 1.3, 1], rotate: -20 }} transition={{ duration: 22, repeat: Infinity }} className="absolute top-[30%] right-[10%]"><Brain className="w-14 h-14 text-purple-300" /></motion.div>
                    <motion.div animate={{ rotate: -360, y: [0, -50, 0] }} transition={{ duration: 30, repeat: Infinity }} className="absolute bottom-[20%] right-[5%]"><Zap className="w-16 h-16 text-indigo-300" /></motion.div>
                </div>
            </section>

            {/* Narrative - The Challenge (En Guanajuato ya existe talento brillante) */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-block p-3 rounded-2xl bg-blue-50 text-blue-600 mb-4">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-[#2D2B7A] leading-tight">
                                En Guanajuato ya existe <span className="text-blue-500 italic">talento brillante</span>.
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                                "Pero faltan rutas claras, acompañamiento, redes y puentes hacia programas globales. Es momento de transformar el potencial en acción."
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-video rounded-[3rem] bg-gradient-to-br from-blue-100 to-white shadow-inner flex items-center justify-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)] opacity-50"></div>
                            <div className="grid grid-cols-2 gap-8 p-12 relative z-10 w-full">
                                {[
                                    { text: "Rutas Claras", icon: MapPin },
                                    { text: "Acompañamiento", icon: Heart },
                                    { text: "Redes", icon: Users },
                                    { text: "Puentes Globales", icon: Globe }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="p-6 rounded-[2rem] bg-white shadow-lg border border-slate-50 flex flex-col items-center gap-3"
                                    >
                                        <item.icon className="w-8 h-8 text-blue-500" />
                                        <span className="text-sm font-black text-[#2D2B7A] uppercase text-center">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Narrative - U - Entendimiento (Emprender es Aprender) */}
            <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                        <motion.span className="text-purple-600 font-black text-sm uppercase tracking-[0.4em]">U - Entendimiento</motion.span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#2D2B7A]">
                            Emprender también es <span className="italic text-purple-600">Aprender</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[3rem] bg-white shadow-xl border border-white flex flex-col gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                                <Brain className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-[#2D2B7A]">Convicción CONEDU & TrepCamp</h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                "Si se crean hubs locales de comunidad, mentores y rutas claras, más jóvenes podrán convertir sus ideas en startups."
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[3rem] bg-white shadow-xl border border-white flex flex-col gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                <Award className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-[#2D2B7A]">Sin Barreras</h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                "Acceder a becas internacionales sin que el contexto socioeconómico sea una barrera para el mayor esfuerzo y las mejores ideas."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Narrative - C - Cambio (Community Day details) */}
            <section className="py-24 bg-white relative">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <motion.span className="text-blue-600 font-black text-sm uppercase tracking-[0.4em]">C - Cambio</motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#2D2B7A]"> ¿Qué es Emprender para Aprender – Community Day?</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Rutas Locales",
                                desc: "Presentación de programas HackMinds y aliados (Yes, Ideathons, Casas de Emprendimiento)."
                            },
                            {
                                icon: Globe,
                                title: "Becas Globales",
                                desc: "El Hub Guanajuato de TrepCamp explica cómo aplicar a experiencias en Madrid y Nueva York."
                            },
                            {
                                icon: Play,
                                title: "Historias Reales",
                                desc: "Tres speakers comparten retos, miedos y aprendizajes de emprender desde el contexto mexicano."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-[#F1F5F9] hover:bg-white border border-transparent hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-[#2D2B7A] group-hover:text-white transition-all">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-[#2D2B7A] mb-4">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TrepCamp Experience - Alternative Background */}
            <section className="py-32 bg-[#F5F0FF] relative overflow-hidden">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-3xl bg-white shadow-lg">
                                    <img src={trepCampLogo} alt="TrepCamp" className="h-12 w-auto" />
                                </div>
                                <h3 className="text-xl font-bold text-[#4F1675] uppercase tracking-widest">{language === "es" ? "Socio Global" : "Global Partner"}</h3>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black italic text-[#2D2B7A] leading-tight">
                                {language === "es" ? "Lleva tu talento al mundo" : "Take your talent to the world"}
                            </h2>

                            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                                <p>
                                    {language === "es"
                                        ? "TrepCamp es la academia internacional número uno que forma a jóvenes líderes para crear startups de alto impacto."
                                        : "TrepCamp is the number one international academy that trains young leaders to create high-impact startups."}
                                </p>
                                <p>
                                    {language === "es"
                                        ? "En el Community Day, descubrirás cómo aplicar a becas completas para vivir experiencias inmersivas en los ecosistemas más innovadores del planeta."
                                        : "At Community Day, you'll discover how to apply for full scholarships to live immersive experiences in the planet's most innovative ecosystems."}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {["Madrid", "Nueva York", "9 Días", "15k+ Egresados"].map((tag, i) => (
                                    <span key={i} className="px-6 py-3 rounded-2xl bg-white text-[#4F1675] font-black text-sm uppercase shadow-sm border border-purple-100 flex items-center gap-2">
                                        <Award className="w-4 h-4 text-[#00AEEF]" /> {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <InteractiveGlobe language={language} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Narrative - C - Contribución (Tools & Bridges) */}
            <section className="py-24 bg-white relative">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <motion.span className="text-purple-600 font-black text-sm uppercase tracking-[0.4em]">C - Contribución</motion.span>
                        <h2 className="text-5xl md:text-8xl font-black text-[#2D2B7A]">Puentes Concretos</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Sparkles,
                                title: "Inspiración Práctica",
                                desc: "No solo teoría: cómo iniciar, validar y aplicar a convocatorias como TrepCamp."
                            },
                            {
                                icon: Home,
                                title: "Comunidad Local",
                                desc: "Conecta en Casa de Emprendimiento Irapuato, articulada con gobierno y universidades."
                            },
                            {
                                icon: Rocket,
                                title: "Ruta de Acompañamiento",
                                desc: "Continuamos después del evento con talleres, mentorías e ideathons constantes."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-12 rounded-[3.5rem] bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-xl flex flex-col items-center text-center gap-8"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-lg flex items-center justify-center text-purple-600">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-[#2D2B7A]">{item.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speakers Section - Innovative Modules */}
            <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <motion.span className="text-purple-600 font-black text-sm uppercase tracking-[0.4em]">Expertos & Mentores</motion.span>
                        <h2 className="text-5xl md:text-8xl font-black text-[#2D2B7A]">
                            {language === "es" ? "Historias Reales" : "True Stories"}
                        </h2>
                        <p className="text-xl text-slate-500 font-medium">
                            {language === "es"
                                ? "Conoce a quienes comparten su historia: retos, miedos, fracasos y aprendizajes desde el contexto mexicano."
                                : "Meet those who share their story: challenges, fears, failures and learning from the Mexican context."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {speakers.map((speaker, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative"
                            >
                                <div className={`absolute -inset-2 bg-gradient-to-r ${speaker.gradient} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <div className="relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-8 h-full">
                                    <div className="relative">
                                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${speaker.gradient} p-1`}>
                                            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                                <Users className="w-16 h-16 text-slate-300" />
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100">
                                            <Sparkles className="w-5 h-5 text-purple-600" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-black text-[#2D2B7A] group-hover:text-purple-600 transition-colors">
                                            {speaker.name}
                                        </h3>
                                        <div className="px-4 py-1 rounded-full bg-purple-50 text-purple-600 font-black text-xs uppercase tracking-wider inline-block">
                                            {speaker.role}
                                        </div>
                                    </div>

                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        {speaker.desc}
                                    </p>

                                    {/* Social Links Updated to X */}
                                    <div className="flex gap-4 pt-4">
                                        <a href={speaker.social.linkedin} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white hover:scale-110 transition-all shadow-sm">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={speaker.social.x} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white hover:scale-110 transition-all shadow-sm">
                                            <X className="w-5 h-5" />
                                        </a>
                                        <a href={speaker.social.instagram} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#E4405F] hover:text-white hover:scale-110 transition-all shadow-sm">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative - E - Evidencia & S - Satisfacción */}
            <section className="py-24 bg-white relative">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3.5rem] bg-[#2D2B7A] text-white space-y-8 shadow-2xl"
                        >
                            <div className="inline-block p-4 rounded-3xl bg-white/10 text-[#00AEEF]">
                                <ScrollText className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black">E - Evidencia</h2>
                            <ul className="space-y-6 text-xl opacity-90 font-medium">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#00AEEF] flex-shrink-0"></div>
                                    <span>Metodologías probadas: design thinking, lean startup y liderazgo.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#00AEEF] flex-shrink-0"></div>
                                    <span>Más de 15,000 emprendedores guiados por TrepCamp hacia ecosistemas globales.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3.5rem] bg-[#4F1675] text-white space-y-8 shadow-2xl"
                        >
                            <div className="inline-block p-4 rounded-3xl bg-white/10 text-yellow-400">
                                <Smile className="w-10 h-10" />
                            </div>
                            <h2 className="text-4xl font-black">S - Satisfacción</h2>
                            <ul className="space-y-6 text-xl opacity-90 font-medium">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
                                    <span>Jóvenes con próximos pasos claros.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></div>
                                    <span>Instituciones aliadas para el desarrollo económico y social.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Objectives Section - Quantitative Goals */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container px-4 text-center">
                    <h2 className="text-5xl font-black text-[#2D2B7A] mb-20 italic underline decoration-yellow-400 decoration-8">Forma parte de un Caso de Éxito</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: "60-100", label: "Asistentes", icon: Users },
                            { value: "3", label: "Speakers Mentores", icon: Play },
                            { value: "20-30", label: "Registros HackMinds", icon: ExternalLink },
                            { value: "10-15", label: "Candidatos Becas", icon: Rocket }
                        ].map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white shadow-xl flex flex-col items-center gap-4"
                            >
                                <div className="p-4 rounded-2xl bg-[#2D2B7A] text-white">
                                    <obj.icon className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-black text-[#4F1675]">{obj.value}</div>
                                <div className="text-sm font-black uppercase text-slate-500 tracking-widest">{obj.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative - S - Siguiente paso (Target Audience) */}
            <section className="py-24 bg-white relative">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <motion.span className="text-blue-600 font-black text-sm uppercase tracking-[0.4em]">S - Siguiente Paso</motion.span>
                        <h2 className="text-4xl md:text-7xl font-black text-[#2D2B7A]"> ¿Quién debería asistir? </h2>
                        <p className="text-xl text-slate-600">El Community Day abre oficialmente la ruta HackMinds en Irapuato.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Con Ideas",
                                desc: "Jóvenes que tienen ideas y aún no han dado el primer paso.",
                                icon: Brain
                            },
                            {
                                title: "Emprendedores",
                                desc: "Quienes ya iniciaron y buscan redes, mentores y programas avanzados.",
                                icon: Rocket
                            },
                            {
                                title: "Visionarios",
                                desc: "Quienes quieren aplicar a becas de emprendimiento en ecosistemas globales.",
                                icon: Globe
                            }
                        ].map((target, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-10 rounded-[3rem] bg-white border-2 border-slate-100 shadow-2xl flex flex-col items-center text-center gap-6"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#00AEEF] text-white flex items-center justify-center">
                                    <target.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-[#2D2B7A]">{target.title}</h3>
                                <p className="text-slate-500 font-medium">{target.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container px-4 text-center">
                    <h2 className="text-4xl font-black text-[#2D2B7A] mb-16 uppercase tracking-wider">Unidos por la Innovación</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
                        <img src={coneduLogo} alt="CONEDU" className="h-16 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        <img src={trepCampLogo} alt="TrepCamp" className="h-16 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        <img src={innovacionLogo} alt="Innovación" className="h-14 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        <div className="text-xl font-black text-slate-400">Universidades Locales</div>
                    </div>
                </div>
            </section>

            {/* Closing - The Declaration */}
            <section className="py-32 bg-gradient-to-br from-[#0f172a] to-[#2D2B7A] relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#00AEEF_0%,_transparent_100%)]"></div>
                </div>
                <div className="container px-4 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-white/10 backdrop-blur-md p-12 rounded-[4rem] border border-white/10"
                        >
                            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 italic">
                                "Creemos que las oportunidades para aprender, emprender y viajar a ecosistemas globales no deben depender del código postal ni del ingreso familiar."
                            </h2>
                            <p className="text-xl text-blue-300 font-black uppercase tracking-[0.4em]">Declaración de Compromiso</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Redesigned CTA - Based on Reference Image */}
            <section className="py-24 relative overflow-hidden">
                <div className="container px-4">
                    <div className="relative rounded-[4rem] bg-gradient-to-br from-[#4F1675] via-[#2D2B7A] to-[#00AEEF] p-12 md:p-24 text-center overflow-hidden shadow-2xl">

                        {/* Decorative Circle from Ref */}
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/20"></div>

                        <div className="relative z-10 space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight uppercase">
                                    {language === "es" ? "¿Listo para empezar?" : "Ready to start?"}
                                </h2>
                                <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto font-medium">
                                    {language === "es"
                                        ? "Hay muchas formas de ser parte de la transformación educativa en México."
                                        : "There are many ways to be part of the educational transformation in Mexico."}
                                </p>
                            </div>

                            {/* Triple CTA Grid - Inspired by Ref */}
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Heart,
                                        title: language === "es" ? "Registrarme Ahora" : "Register Now",
                                        desc: language === "es" ? "Asegura tu lugar en el Community Day y conoce a la comunidad." : "Secure your place at Community Day and meet the community.",
                                        btn: language === "es" ? "Hacer Registro" : "Register",
                                        link: "#"
                                    },
                                    {
                                        icon: Handshake,
                                        title: language === "es" ? "Propón Alianza" : "Propose Alliance",
                                        desc: language === "es" ? "Forma parte de nuestra red de colaboradores estratégicos." : "Be part of our network of strategic collaborators.",
                                        btn: language === "es" ? "Colaborar" : "Collaborate",
                                        link: "/alianzas"
                                    },
                                    {
                                        icon: Users,
                                        title: language === "es" ? "Únete a la Ruta" : "Join the Path",
                                        desc: language === "es" ? "Sé parte del cambio y ayuda a empoderar a la juventud." : "Be part of the change and help empower youth.",
                                        btn: language === "es" ? "Inscribirse" : "Enroll",
                                        link: "/hackminds/rutas"
                                    }
                                ].map((cta, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        className="p-10 rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center text-center space-y-6 group hover:bg-white/15 transition-all"
                                    >
                                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                                            <cta.icon className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black text-white">{cta.title}</h3>
                                            <p className="text-white/70 text-lg leading-snug">{cta.desc}</p>
                                        </div>
                                        <Button className="w-full h-14 rounded-2xl bg-[#E3B037] hover:bg-[#F59E0B] text-[#4F1675] font-black text-lg group/btn shadow-lg">
                                            {cta.btn}
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Sparkle Effect Background */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                        x: [0, Math.random() * 50, 0],
                                        y: [0, Math.random() * 50, 0]
                                    }}
                                    transition={{ duration: 5 + i, repeat: Infinity }}
                                    className="absolute"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`
                                    }}
                                >
                                    <Sparkles className="text-white w-8 h-8" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EmprenderParaAprender;
