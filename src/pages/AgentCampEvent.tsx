import React from "react";
import { motion } from "framer-motion";
import {
    Calendar, MapPin, Users, Rocket, Brain, Award,
    ExternalLink, Github, Youtube, Download, ChevronRight,
    TrendingUp, Globe, Heart, Zap, Play, Layout, Code, Briefcase,
    Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

// Assets
import silaoHero from "@/assets/silao.png";
import agentCampLogo from "@/assets/agentcamp_logo.png";
import coneduColab from "@/assets/colaboracion_conedu.png";
import eviorColab from "@/assets/colaboracion_evior.png";
import globalAiLeon from "@/assets/global_ai_leon.png";
import logoEmprendhec from "@/assets/logo_emprendhec.png";
import logoGlobalAi from "@/assets/logo_global_ai.png";
import logoInstInnovacion from "@/assets/logo_instinnovacion.png";
import logoTutorAi from "@/assets/logo_tutor_ia.png";
import trueLogo from "@/assets/true_logo.png";

import speakerDiego from "@/assets/speaker_diego.jpg";
import speakerEmiliano from "@/assets/speaker_emiliano.jpg";
import speakerLuis from "@/assets/speaker_luis.jpg";
import speakerPaulo from "@/assets/speaker_paulo.jpg";

import photoGallery1 from "@/assets/001a0380-634e-439e-8d93-63855e1bf8e9.JPG";
import photoGallery2 from "@/assets/2ba6cf63-b61d-41ef-a6be-fb2883e63c0c.JPG";
import photoGallery3 from "@/assets/3ff57c1b-665f-466a-80e1-c5597c671afa.JPG";
import photoGallery4 from "@/assets/5cac7ef2-ee1b-4fee-9415-5181f0febb11.JPG";
import photoGallery5 from "@/assets/6a5b0a78-a699-4268-a569-711725580825.JPG";
import photoGallery6 from "@/assets/07f7d9ed-e268-4905-aa83-a371aa87d0d2.JPG";
import photoGallery7 from "@/assets/8b3aba3e-f773-4326-ba59-0b8f4a0a7e2d.JPG";
import photoGallery8 from "@/assets/011ba8b1-32fb-4879-953e-329a9568b1af.JPG";
import photoGallery9 from "@/assets/060f7cb5-ca75-47d7-b084-3d0b985216d7.JPG";
import photoGallery10 from "@/assets/96d82c07-2902-494b-9118-f620fde3bd4e.JPG";
import photoGallery11 from "@/assets/6675c640-07db-45b3-abb6-adb6df68f2f3.JPG";
import photoGallery12 from "@/assets/9487de19-1cfa-43cc-86dd-9c0709c9e040.JPG";
import photoGallery13 from "@/assets/9702ee9a-a4bd-49cb-9765-f28d08f044a8.JPG";
import photoGallery14 from "@/assets/85971c6d-72cf-47d8-b6b0-3323017b8149.JPG";
import photoGallery15 from "@/assets/84949363-b365-4f3b-a9db-9dff08233c25.JPG";
import photoGallery16 from "@/assets/f0c1e968-12de-4c99-84c7-a03a84cb01d8.JPG";

const AgentCampEvent = () => {
    const { language } = useLanguage();
    const [showIntro, setShowIntro] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (showIntro) {
        return (
            <motion.div
                className="fixed inset-0 z-[100] bg-[#4F1675] flex items-center justify-center overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
                        AGENT <span className="text-[#E3B037]">CAMP</span>
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-2 bg-gradient-to-r from-[#E3B037] to-white mt-4 rounded-full"
                    />
                </motion.div>
            </motion.div>
        );
    }

    const collaborators = [
        { name: "CONEDU", logo: coneduColab },
        { name: "E-vior", logo: eviorColab },
        { name: "Global AI León", logo: globalAiLeon },
        { name: "EmprendHEC", logo: logoEmprendhec },
        { name: "Global AI", logo: logoGlobalAi },
        { name: "Instituto de Innovación", logo: logoInstInnovacion },
        { name: "Tutor-IA", logo: logoTutorAi },
        { name: "TrueData", logo: trueLogo },
    ];

    const metrics = [
        {
            label: language === "es" ? "Asistentes Totales" : "Total Attendees",
            value: "30+",
            desc: language === "es" ? "Estudiantes, profesionales y emprendedores." : "Students, professionals & entrepreneurs.",
            icon: Users
        },
        {
            label: language === "es" ? "Formadores Expertos" : "Expert Facilitators",
            value: "6",
            desc: language === "es" ? "Microsoft MVPs, emprendedores, líderes." : "Microsoft MVPs, entrepreneurs, leaders.",
            icon: Briefcase
        },
        {
            label: language === "es" ? "Horas Prácticas" : "Hands-on Hours",
            value: "4.5",
            desc: language === "es" ? "Talleres simultáneos intensivos." : "Intensive simultaneous workshops.",
            icon: Zap
        },
        {
            label: language === "es" ? "NPS" : "NPS",
            value: "+84",
            desc: language === "es" ? "Más del 80% recomienda el evento." : "Over 80% recommend the event.",
            icon: TrendingUp
        }
    ];

    const speakers = [
        {
            name: "Paulo César Ramírez Silva",
            role: language === "es" ? "Organizador Global AI Community León" : "Organizer Global AI Community León",
            org: "EmprendHEC / Tutor-IA",
            img: speakerPaulo,
            tags: ["Global AI", language === "es" ? "Mentor HackMinds" : "HackMinds Mentor"]
        },
        {
            name: "Luis Antonio Beltrán Prieto",
            role: "Microsoft MVP en IA",
            org: "Independent Expert",
            img: speakerLuis,
            tags: ["Microsoft MVP", "Technical Expert"]
        },
        {
            name: "David Emiliano Castillo",
            role: "CEO NeuralHack",
            org: "E-vior Developments",
            img: speakerEmiliano,
            tags: [language === "es" ? "Mentor HackMinds" : "HackMinds Mentor", "AI Entrepreneur"]
        },
        {
            name: "Diego Pérez Hernández",
            role: "Data Scientist",
            org: "TrueData",
            img: speakerDiego,
            tags: [language === "es" ? "Mentor HackMinds" : "HackMinds Mentor", "Scientific Rigor"]
        }
    ];

    const pathways = [
        {
            title: language === "es" ? "Creadores de IA" : "AI Creators",
            subtitle: language === "es" ? "Perfil Técnico" : "Technical Profile",
            desc: language === "es"
                ? "Enfoque en construcción, prototipado y mejores prácticas con herramientas modernas."
                : "Focus on building, prototyping and best practices with modern tools.",
            items: ["Azure AI Foundry", "GitHub Copilot", "Antigravity", "Semantic Kernel"],
            cta: language === "es" ? "Ver Ruta Técnica" : "View Technical Path",
            icon: Code,
            color: "from-blue-500 to-indigo-600"
        },
        {
            title: language === "es" ? "Aceleradores de IA" : "AI Accelerators",
            subtitle: language === "es" ? "Perfil Ejecutivo" : "Executive Profile",
            desc: language === "es"
                ? "Estrategias de adopción, retorno de inversión y toma de decisiones para PyMEs."
                : "Adoption strategies, ROI, and decision-making for SMEs.",
            items: ["Estrategia IA", "Casos de Éxito", "Adopción Responsable", "ROI de Agentes"],
            cta: language === "es" ? "Ver Ruta Ejecutiva" : "View Executive Path",
            icon: Rocket,
            color: "from-amber-500 to-orange-600"
        }
    ];

    const resources = [
        {
            title: language === "es" ? "Guía: De la Idea al Agente" : "Guide: From Idea to Agent",
            type: "PDF",
            link: "https://lnkd.in/epYuzyKQ",
            icon: Download
        },
        {
            title: language === "es" ? "Diapositivas del Taller" : "Workshop Slides",
            type: "Link",
            link: "https://lnkd.in/eKB9r8r4",
            icon: Layout
        },
        {
            title: language === "es" ? "Repo: AgentCamp Practices" : "Repo: AgentCamp Practices",
            type: "GitHub",
            link: "https://lnkd.in/eHE96iaG",
            icon: Github
        },
        {
            title: language === "es" ? "Lo mejor del mes (Podcast)" : "Best of the Month (Podcast)",
            type: "YouTube",
            link: "https://www.youtube.com/playlist?list=PLBld54uQEsi6KMiIXD8WqvAKSq0RFf7vA",
            icon: Youtube
        }
    ];

    const gallery = [
        photoGallery1, photoGallery2, photoGallery3,
        photoGallery4, photoGallery5, photoGallery6,
        photoGallery7, photoGallery8, photoGallery9,
        photoGallery10, photoGallery11, photoGallery12,
        photoGallery13, photoGallery14, photoGallery15,
        photoGallery16
    ];

    const testimonials = [
        {
            name: "María Fernández",
            role: language === "es" ? "Estudiante de Ingeniería" : "Engineering Student",
            text: language === "es"
                ? "El AgentCamp cambió mi perspectiva sobre la IA. No es solo teoría, salí con un agente funcional que puedo usar hoy mismo."
                : "AgentCamp changed my perspective on AI. It's not just theory, I left with a functional agent I can use today.",
            avatar: "MF"
        },
        {
            name: "Juan Rodríguez",
            role: language === "es" ? "Emprendedor Tecnológico" : "Tech Entrepreneur",
            text: language === "es"
                ? "Una experiencia increíble. La calidad de los mentores y la profundidad de los talleres prácticos son de primer nivel."
                : "An incredible experience. The quality of the mentors and the depth of the hands-on workshops are top-notch.",
            avatar: "JR"
        },
        {
            name: "Sofía García",
            role: language === "es" ? "Desarrolladora de Software" : "Software Developer",
            text: language === "es"
                ? "Participar en HackMinds me dio las herramientas para integrar IA en mis proyectos de forma ética y eficiente."
                : "Participating in HackMinds gave me the tools to integrate AI into my projects ethically and efficiently.",
            avatar: "SG"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={silaoHero}
                        alt="AgentCamp Hero"
                        className="w-full h-full object-cover scale-105 blur-sm brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
                </div>

                <div className="container relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl mx-auto text-center space-y-8"
                    >
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3B037] font-bold text-sm tracking-widest uppercase"
                            >
                                <Sparkles className="w-4 h-4" />
                                {language === "es" ? "Primer Éxito del Año" : "First Success of the Year"}
                            </motion.div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none text-white drop-shadow-2xl">
                            {language === "es" ? "Del Ideario al Agente" : "From Idea to Agent"}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E3B037] to-[#F59E0B] mt-2">
                                AgentCamp 2026
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                            {language === "es"
                                ? "Transformando Guanajuato con IA. Un evento práctico co-creado con la Global AI Community y HackMinds para democratizar la tecnología."
                                : "Transforming Guanajuato with AI. A hands-on event co-created with the Global AI Community and HackMinds to democratize technology."}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <Button size="lg" className="h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all hover:scale-105">
                                {language === "es" ? "Únete a HackMinds" : "Join HackMinds"}
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-bold text-lg transition-all hover:scale-105">
                                {language === "es" ? "Descargar Recursos" : "Download Resources"}
                            </Button>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 pt-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            {collaborators.map(colab => (
                                <img key={colab.name} src={colab.logo} alt={colab.name} className="h-10 md:h-12 w-auto object-contain" />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Floating Icons Background */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4"><Brain className="w-24 h-24 text-white" /></motion.div>
                    <motion.div animate={{ y: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 right-1/4"><Rocket className="w-32 h-32 text-white" /></motion.div>
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-1/4 left-1/3"><Globe className="w-20 h-20 text-white" /></motion.div>
                </div>
            </section>

            {/* Impact Metrics Section */}
            <section className="py-32 relative overflow-hidden bg-background">
                <div className="container relative z-10 px-4">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary">
                            {language === "es" ? "Conectando talento, transformando ideas" : "Connecting talent, transforming ideas"}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {language === "es" ? "El impacto real medido en el primer gran hito del 2026." : "Real impact measured in our first major milestone of 2026."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-accent/30 border border-primary/10 backdrop-blur-xl hover:bg-accent/50 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <metric.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-5xl font-black text-primary mb-2">{metric.value}</div>
                                <div className="text-lg font-bold mb-2">{metric.label}</div>
                                <div className="text-muted-foreground text-sm leading-relaxed">{metric.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 bg-primary/5 relative">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-primary">
                                {language === "es" ? "Nuestra misión: democratizar la educación STEAM e IA" : "Our mission: democratizing STEAM & AI education"}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {language === "es"
                                    ? "HackMinds es la ruta de CONEDU que impulsa a estudiantes y jóvenes en contextos vulnerables a aprender, crear y liderar soluciones con tecnología, emprendimiento e IA, conectando talento mexicano con oportunidades reales."
                                    : "HackMinds is CONEDU's track that empowers students and young people in underserved contexts to learn, build and lead solutions with technology, entrepreneurship and AI, connecting Mexican talent with real opportunities."}
                            </p>
                            <ul className="space-y-4">
                                {(language === "es"
                                    ? ["Creatividad sin límites", "Impacto Local, Visión Global", "Mentoría de Expertos", "Gratuito y Accesible"]
                                    : ["Unlimited Creativity", "Local Impact, Global Vision", "Expert Mentorship", "Free & Accessible"]
                                ).map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-lg font-bold">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold">
                                {language === "es" ? "Explora las rutas HackMinds" : "Explore HackMinds Paths"}
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] -rotate-6 animate-pulse"></div>
                            <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-primary/20 rounded-[3rem] overflow-hidden flex flex-col p-12 space-y-8">
                                <div className="text-sm font-bold tracking-widest text-primary uppercase">
                                    {language === "es" ? "Desde la idea hasta el sistema desplegado" : "From idea to deployed system"}
                                </div>
                                <div className="space-y-12 relative">
                                    <div className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-primary/20"></div>
                                    {[
                                        { title: language === "es" ? "Idea" : "Idea", icon: Brain },
                                        { title: language === "es" ? "Prototipo" : "Prototype", icon: Layout },
                                        { title: language === "es" ? "Piloto" : "Pilot", icon: Play },
                                        { title: language === "es" ? "Impacto" : "Impact", icon: Heart }
                                    ].map((step, i) => (
                                        <div key={step.title} className="flex items-center gap-8 relative z-10 transition-all hover:translate-x-4">
                                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                                                <step.icon className="w-5 h-5" />
                                            </div>
                                            <div className="text-2xl font-black">{step.title}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section className="py-32 bg-background">
                <div className="container px-4">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary">
                            {language === "es" ? "Líderes que inspiran" : "Leaders who inspire"}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {language === "es" ? "Expertos de clase mundial democratizando la ciencia y tecnología." : "World-class experts democratizing science and technology."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {speakers.map((speaker, i) => (
                            <motion.div
                                key={speaker.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-accent/30 border border-primary/10 rounded-[2.5rem] overflow-hidden hover:bg-accent/50 transition-all duration-500"
                            >
                                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent">
                                    <h3 className="text-2xl font-black text-primary mb-1">{speaker.name}</h3>
                                    <div className="text-sm font-bold text-muted-foreground mb-4">{speaker.role} @ {speaker.org}</div>
                                    <div className="flex flex-wrap gap-2">
                                        {speaker.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-[10px] uppercase font-bold text-primary">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Pathways Section */}
            <section className="py-32 bg-accent/20">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {pathways.map((path, i) => (
                            <motion.div
                                key={path.title}
                                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative p-12 rounded-[3.5rem] bg-background border border-primary/10 shadow-2xl space-y-8 group overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}></div>
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${path.color} flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                                    <path.icon className="w-10 h-10 " />
                                </div>
                                <div className="space-y-4">
                                    <div className="text-sm font-bold tracking-widest text-primary uppercase">{path.subtitle}</div>
                                    <h3 className="text-5xl font-black">{path.title}</h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed">{path.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {path.items.map(item => (
                                        <span key={item} className="px-5 py-2 rounded-full bg-accent text-[12px] font-bold uppercase border border-primary/10">{item}</span>
                                    ))}
                                </div>
                                <Button size="lg" className="h-14 px-10 rounded-full font-bold text-lg w-full md:w-auto transition-transform group-hover:scale-105">
                                    {path.cta}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="container px-4">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary">
                            {language === "es" ? "Lo que dicen los participantes" : "What participants are saying"}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {language === "es" ? "Experiencias reales de la comunidad HackMinds." : "Real experiences from the HackMinds community."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-accent/30 border border-primary/10 backdrop-blur-xl space-y-6 hover:bg-accent/50 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{t.name}</div>
                                        <div className="text-sm text-muted-foreground">{t.role}</div>
                                    </div>
                                </div>
                                <p className="text-lg italic text-muted-foreground leading-relaxed">
                                    "{t.text}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-32 bg-background">
                <div className="container px-4">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-primary">
                            {language === "es" ? "Recursos gratuitos" : "Free resources"}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {language === "es" ? "Accede a todo el material oficial del evento para empezar a construir hoy mismo." : "Access all official event material to start building today."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {resources.map((res, i) => (
                            <motion.a
                                key={res.title}
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-accent/30 border border-primary/10 backdrop-blur-xl hover:bg-accent/50 transition-all duration-500 group flex flex-col justify-between"
                            >
                                <div className="space-y-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <res.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-2">{res.title}</h4>
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold uppercase text-primary">{res.type}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-8 font-bold text-primary group-hover:translate-x-2 transition-transform">
                                    {language === "es" ? "Acceder" : "Access"}
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 bg-accent/10">
                <div className="container px-4">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                        {gallery.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative group rounded-[2.5rem] overflow-hidden break-inside-avoid shadow-xl"
                            >
                                <img src={img} alt={`Gallery ${i}`} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="container px-4 relative z-10 text-center space-y-12">
                    <h2 className="text-5xl md:text-8xl font-black text-primary drop-shadow-2xl">
                        {language === "es" ? "Súmate a los próximos eventos gratuitos HackMinds" : "Join upcoming free HackMinds events"}
                    </h2>
                    <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {language === "es"
                            ? "No dejes pasar la oportunidad de ser parte de la próxima generación de líderes STEAM en México."
                            : "Don't miss the chance to be part of the next generation of STEAM leaders in Mexico."}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Button size="xl" className="h-20 px-12 rounded-full font-black text-2xl shadow-glow hover:scale-105 transition-all">
                            {language === "es" ? "Quiero unirme a la comunidad" : "I want to join the community"}
                        </Button>
                        <Link to="/eventos" className="text-2xl font-black hover:text-primary transition-colors flex items-center gap-2">
                            {language === "es" ? "Ver próximos eventos" : "View upcoming events"}
                            <ChevronRight className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AgentCampEvent;
