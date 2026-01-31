import React from "react";
import { motion } from "framer-motion";
import {
    Award, Users, Rocket, Globe, Brain, Target, Heart, Zap, BookOpen, Star, Trophy, Lightbulb,
    ChevronRight, ExternalLink, Calendar, MapPin, TrendingUp, Sparkles, ArrowRight, Play, Eye,
    Share2, Filter, Search, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import coneduLogo from '@/assets/conedu.png';
import congresosabesImg from '@/assets/congresosabes.jpg';
import globalaibootcampImg from '@/assets/globalaibootcmap.jpg';
import mentesenaccionImg from '@/assets/mentesenaccion.jpeg';
import nasaspaceappsImg from '@/assets/nasaspaceapps.jpg';
import podcastImg from '@/assets/podcast.png';
import roboticaImg from '@/assets/robotica.jpg';
import torneodehabitatsImg from '@/assets/torneodehabitats.jpg';
import agentCampSilao from "@/assets/silao.png";

const achievements = [
    {
        id: 1,
        title: "Congreso Internacional SABES 2025",
        subtitle: "Innovation Educational Forum",
        emotionalStory: "Imagina a un joven participante superando dudas iniciales para compartir su viaje en innovación educativa. Esta narrativa conectó emocionalmente con la audiencia, recordando que 'no estás solo; tu potencial es ilimitado'. Inspiró a muchos a ver la educación como un puente hacia un propósito mayor, fomentando autenticidad y alejando de riesgos juveniles.",
        description: "El Congreso Internacional SABES 2025, organizado por la Universidad SABES en Guanajuato, fue un foro para discutir innovación educativa y desarrollo juvenil. CONEDU lideró sesiones sobre STEAM y emprendimiento social, incluyendo talleres prácticos enfocados en soluciones para brechas educativas.",
        impact: "Impactó a cientos de asistentes, generando mayor interés en carreras STEAM entre jóvenes marginados. Facilitó alianzas que resultaron en proyectos piloto, contribuyendo a reducir la deserción escolar en comunidades locales.",
        involvedParties: "Universidad SABES, Secretaría de Educación de Guanajuato, jóvenes participantes y aliados internacionales como UNESCO. CONEDU coordinó con Circuito de Robótica para integrar elementos prácticos.",
        icon: Lightbulb,
        gradient: "from-purple-500 via-indigo-500 to-blue-500",
        color: "purple",
        year: "2025",
        location: "Guanajuato, México",
        attendees: "500+",
        image: congresosabesImg,
        status: "past",
        modality: "Presencial",
        tags: ["STEAM", "Educación", "Innovación"]
    },
    {
        id: 2,
        title: "Circuito de Robótica Guanajuato 2025",
        subtitle: "Robotics Competition",
        emotionalStory: "Para un participante joven, el circuito representó un punto de inflexión: de inseguridades a confianza al ver su robot competir. Esta experiencia creó lazos emocionales, mostrando que 'el talento no conoce barreras' e inspirando a otros a perseguir pasiones tech, lejos de desafíos juveniles.",
        description: "El Circuito de Robótica Guanajuato 2025 fue una competencia estatal con batallas de robots y talleres LEGO League, enfocada en habilidades STEAM para niños y jóvenes. CONEDU organizó ediciones inclusivas, promoviendo innovación local.",
        impact: "Involucró a miles de participantes, con equipos destacando en nacionales. Aumentó el acceso STEAM en áreas rurales, generando inspiración para nuevos proyectos robóticos.",
        involvedParties: "Circuito de Robótica, Gobierno de Guanajuato, escuelas como SABES y aliados como FIRST LEGO League. CONEDU proporcionó mentorías.",
        icon: Rocket,
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        color: "blue",
        year: "2025",
        location: "Guanajuato, México",
        attendees: "1000+",
        image: roboticaImg,
        status: "past",
        modality: "Presencial",
        tags: ["Robótica", "STEAM", "Competencia"]
    },
    {
        id: 3,
        title: "Hecho en México: Mentes en Acción 2025",
        subtitle: "Innovation Pitches",
        emotionalStory: "Un participante transformó su crisis en motivación durante un pitch, conectando con inversionistas al compartir su resiliencia. Esta narrativa emocional inspiró a la audiencia, recordando que 'las desafíos son combustible para el éxito', fomentando conexiones que preservan el talento juvenil.",
        description: "Esta iniciativa gubernamental reunió proyectos innovadores de México para pitches ante inversionistas. CONEDU apoyó sesiones sobre emprendimiento social, enfocadas en soluciones tech para impacto económico.",
        impact: "Atrajo inversiones para varios proyectos, impactando millones mediante innovación. Facilitó alianzas, aumentando la empleabilidad juvenil y posicionando Guanajuato como hub de talento.",
        involvedParties: "Secretaría de Economía México, IMPI, inversionistas y universidades.",
        icon: Target,
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        color: "green",
        year: "2025",
        location: "México",
        attendees: "200+",
        image: mentesenaccionImg,
        status: "past",
        modality: "Presencial",
        tags: ["Emprendimiento", "Pitches", "Innovación"]
    },
    {
        id: 4,
        title: "NASA Space Apps Challenge 2025",
        subtitle: "Space Hackathon",
        emotionalStory: "Un equipo de jóvenes marginados creó una app innovadora, celebrando una victoria que simbolizó 'del desafío al triunfo'. Esta conexión emocional mostró que el potencial juvenil puede conquistar grandes metas, inspirando a otros a soñar en grande.",
        description: "La hackathon global de NASA en Guanajuato enfocó en desafíos espaciales como apps para sostenibilidad. CONEDU organizó equipos juveniles, integrando STEAM para soluciones locales con impacto global.",
        impact: "Generó numerosas apps, con reconocimientos internacionales. Impactó a participantes, aumentando el interés en STEM y posicionando Guanajuato en innovación espacial.",
        involvedParties: "NASA, Universidad de Guadalajara (sede local), gobierno estatal. CONEDU aliada con Circuito de Robótica para preparación tech.",
        icon: Globe,
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        color: "indigo",
        year: "2025",
        location: "Guanajuato, México",
        attendees: "200+",
        image: nasaspaceappsImg,
        status: "past",
        modality: "Presencial",
        tags: ["NASA", "Espacio", "Hackathon"]
    },
    {
        id: 5,
        title: "Podcast Posibilistas - Comunidad de IA Guanajuato",
        subtitle: "AI Community Podcast",
        emotionalStory: "Un participante joven encontró inspiración en un episodio sobre IA aplicada, transformando su percepción de la tecnología de un concepto distante a una herramienta personal para superar desafíos cotidianos. Esta narrativa creó lazos emocionales, recordando que 'la IA puede ser un aliado en tu viaje personal', fomentando conexiones que preservan el potencial juvenil.",
        description: "El podcast Posibilistas, producido por EmprendeHEC y la Comunidad de IA Guanajuato, es una serie de episodios que explora el impacto de la IA en productividad, salud mental y sectores como alimentos y construcción. CONEDU participó en sesiones sobre IA ética para jóvenes, promoviendo aplicaciones locales.",
        impact: "Atrajo a cientos de oyentes, generando mayor awareness sobre IA en Guanajuato. Facilitó discusiones que inspiraron proyectos juveniles, contribuyendo a un incremento en el interés por carreras tech entre comunidades locales.",
        involvedParties: "EmprendeHEC, Comunidad de IA Guanajuato, Global AI Community y expertos como Karla María Martínez y Roberto Sánchez Mendiola. CONEDU colaboró en episodios enfocados en educación.",
        icon: Brain,
        gradient: "from-pink-500 via-rose-500 to-red-500",
        color: "pink",
        year: "2024-2025",
        location: "Guanajuato, México",
        attendees: "1000+ oyentes",
        image: podcastImg,
        status: "past",
        modality: "Virtual",
        tags: ["IA", "Podcast", "Comunidad"]
    },
    {
        id: 6,
        title: "Lo Mejor del Mes para Creadores de IA - Comunidad de IA Guanajuato",
        subtitle: "Monthly AI Podcast",
        emotionalStory: "En un episodio, un creador compartió cómo la IA lo ayudó a superar barreras creativas, conectando emocionalmente con la audiencia al enfatizar que 'la innovación nace de la resiliencia'. Esta historia inspiró a participantes a explorar su potencial, creando un sentido de comunidad que aleja de desafíos juveniles.",
        description: "Este podcast mensual, parte de la Comunidad de IA EmprendeHEC, resume avances en IA para creadores, cubriendo temas como investigación, capacitación y proyectos éticos. CONEDU contribuyó con segmentos sobre IA en educación juvenil y emprendimiento.",
        impact: "Alcanzó a audiencias estatales, fomentando 50+ colaboraciones en proyectos IA. Aumentó el engagement en tech, contribuyendo a un ecosistema más inclusivo en Guanajuato.",
        involvedParties: "Comunidad de IA Guanajuato, EmprendeHEC, expertos como David Cuellar Rueda, Paulo César Ramírez Silva y aliados globales. CONEDU integró contenido sobre democratización STEAM.",
        icon: Star,
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        color: "yellow",
        year: "2024-2025",
        location: "Guanajuato, México",
        attendees: "2000+ oyentes",
        image: podcastImg,
        status: "past",
        modality: "Virtual",
        tags: ["IA", "Podcast", "Creadores"]
    },
    {
        id: 7,
        title: "Global AI Bootcamp 2025 - Instituto de Innovación Guanajuato",
        subtitle: "AI Training Event",
        emotionalStory: "Un asistente joven descubrió el poder de la IA para resolver problemas locales, creando un momento emocional al colaborar en un equipo y ver resultados reales. Esta experiencia mostró que 'la IA une comunidades', inspirando a participantes a perseguir innovaciones con impacto personal.",
        description: "El Global AI Bootcamp 2025 en León, Guanajuato, fue un encuentro sobre IA accesible, con talleres en dashboards inteligentes, ciberseguridad y aplicaciones prácticas. CONEDU organizó sesiones para jóvenes, enfocadas en innovación al alcance de todos.",
        impact: "Con 272 participantes de México, Colombia y Ecuador, generó un NPS de 68 y proyectos colaborativos. Aumentó el conocimiento IA en la región, posicionando Guanajuato como hub de tech inclusiva.",
        involvedParties: "Instituto de Innovación Guanajuato, EmprendeHEC, Microsoft Startups Hub, Red por la Ciberseguridad y Global AI Community. CONEDU lideró actividades educativas.",
        icon: Zap,
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        color: "orange",
        year: "2025",
        location: "León, Guanajuato",
        attendees: "272",
        image: globalaibootcampImg,
        status: "past",
        modality: "Presencial",
        tags: ["IA", "Bootcamp", "Capacitación"]
    },
    {
        id: 8,
        title: "Torneo de Diseño de Hábitats en el Espacio 2025 - SpacePort MX",
        subtitle: "Space Habitat Design Competition",
        emotionalStory: "Un grupo de jóvenes de comunidades marginadas descubrió su pasión por el espacio al diseñar un hábitat viable, transformando dudas en entusiasmo colectivo. Esta experiencia creó lazos emocionales, recordando que 'el espacio no es solo para soñar, sino para construir futuros inclusivos', inspirando a participantes a superar barreras y perseguir metas globales.",
        description: "El Torneo LATAM de Diseño de Hábitats en el Espacio 2025, organizado por SpacePort MX, es una competencia donde equipos de jóvenes de 15 a 19 años diseñan hábitats viables en cuerpos celestes, considerando factores científicos y sostenibles. La convocatoria, abierta desde agosto 2025, invita a participantes con interés en inglés y espacio. CONEDU, como patrocinador oficial, apoya la inclusión de juventudes mexicanas, alineando con nuestras rutas de innovación y tecnología.",
        impact: "El torneo impacta a cientos de participantes en LATAM, fomentando habilidades STEAM y generando proyectos escalables. Como patrocinador, CONEDU facilita acceso a jóvenes guanajuatenses, contribuyendo a reducir la brecha educativa (solo 12% eligen STEAM en México) y posicionando la juventud mexicana en la vanguardia espacial, con potencial para inspirar carreras que eleven el PIB nacional mediante innovación.",
        involvedParties: "SpacePort MX (organizador principal), Gobierno de Guanajuato, aliados como NASA y clusters aeroespaciales. CONEDU patrocina con mentorías, recursos educativos y difusión, enfocándonos en embajadores juveniles para llevar talentos mexicanos al espacio.",
        icon: Trophy,
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        color: "cyan",
        year: "2025",
        location: "LATAM",
        attendees: "400+",
        image: torneodehabitatsImg,
        status: "past",
        modality: "Presencial",
        tags: ["Espacio", "Diseño", "LATAM"]
    },
    {
        id: 9,
        title: "AgentCamp Guanajuato 2026",
        subtitle: "AI Agents Workshop",
        emotionalStory: "Un joven emprendedor pasó de una idea abstracta a un agente de IA funcional en solo 4.5 horas. Esta experiencia transformó su visión de 'imposible' a 'realizable', inspirando a toda la comunidad a construir el futuro hoy mismo. Fue el primer éxito del año que demostró que el talento en Guanajuato no tiene límites.",
        description: "Primer gran evento del año co-creado con la Global AI Community y la ruta HackMinds de CONEDU. Un bootcamp 100% práctico enfocado en crear agentes de IA y MVPs adaptables para startups y PyMEs del Bajío.",
        impact: "Impactó a 30+ asistentes con un NPS de +84. Generó la guía gratuita 'De la idea al Agente' y más de 15 recursos técnicos. Consolidó una alianza estratégica entre academia, industria y comunidad global.",
        involvedParties: "Global AI Community León, EmprendeHEC, E-vior Developments, TrueData, Instituto de Innovación y CONEDU (HackMinds).",
        icon: Rocket,
        gradient: "from-[#4F1675] via-[#7C3AED] to-[#E3B037]",
        color: "amber",
        year: "2026",
        location: "Silao, Guanajuato",
        attendees: "30+",
        image: agentCampSilao,
        status: "recent",
        modality: "Presencial",
        tags: ["IA", "Agentes", "HackMinds"]
    }
];

const upcomingEvents = [
    {
        id: "community-day",
        date: "Febrero 2026",
        title: "Emprender para Aprender - Community Day",
        description: "Un día intensivo para transformar tus ideas en acción y conectar con mentores de alto impacto en la Casa del Emprendimiento.",
        location: "Irapuato, Guanajuato",
        tags: ["Emprendimiento", "Irapuato", "Mentoria"],
        gradient: "from-[#4F1675] via-[#7C3AED] to-[#E3B037]",
        icon: Rocket,
        status: "upcoming",
        modality: "Presencial",
        path: "/hackminds/emprender-para-aprender"
    },
    {
        id: "yes26",
        date: "Abril 2026",
        title: "YES26 - Youth Entrepreneurs Summit",
        description: "Cumbre internacional de jóvenes emprendedores con pitches, mentorías y conexión con inversionistas.",
        location: "Guanajuato, México",
        tags: ["Emprendimiento", "Networking", "Inversión"],
        gradient: "from-orange-500 to-red-500",
        icon: Trophy,
        status: "upcoming",
        modality: "Presencial"
    },
    {
        id: "finance-week",
        date: "Mayo 2026",
        title: "Finance Week 2026",
        description: "Semana intensiva de educación financiera, simuladores de inversión y alfabetización económica para jóvenes.",
        location: "Virtual + Presencial",
        tags: ["Finanzas", "Educación", "IMEF"],
        gradient: "from-green-500 to-emerald-500",
        icon: TrendingUp,
        status: "upcoming",
        modality: "Hibrido"
    },
    {
        id: "pitch-on-fire",
        date: "Junio 2026",
        title: "Pitch on Fire",
        description: "Competencia de pitches donde startups juveniles presentan ante inversionistas y ganan capital semilla.",
        location: "León, Guanajuato",
        tags: ["Startups", "Pitching", "Capital"],
        gradient: "from-red-500 to-pink-500",
        icon: Rocket,
        status: "upcoming",
        modality: "Presencial"
    },
    {
        id: "nasa-space-apps",
        date: "Octubre 2026",
        title: "NASA Space Apps Challenge 2026",
        description: "Hackathon global de NASA enfocado en soluciones espaciales con impacto local y global.",
        location: "Guanajuato, México",
        tags: ["NASA", "Espacio", "Hackathon"],
        gradient: "from-indigo-500 to-purple-500",
        icon: Globe,
        status: "upcoming",
        modality: "Presencial"
    },
    {
        id: "demoday26",
        date: "Diciembre 2026",
        title: "DemoDay26",
        description: "Presentación final de proyectos HackMinds 2026 con demostración de MVPs y soluciones innovadoras.",
        location: "Irapuato, Guanajuato",
        tags: ["Demo", "HackMinds", "Innovación"],
        gradient: "from-blue-500 to-cyan-500",
        icon: Star,
        status: "upcoming",
        modality: "Presencial"
    }
];

export default function Logros() {
    const { language } = useLanguage();
    const [searchQuery, setSearchQuery] = React.useState("");
    const [filterStatus, setFilterStatus] = React.useState<"all" | "upcoming" | "recent" | "past">("upcoming");
    const [filterModality, setFilterModality] = React.useState<"all" | "presencial" | "virtual" | "hibrido">("all");

    const allEvents = [...upcomingEvents, ...achievements];
    const pastEvents = achievements.filter(a => a.status === "past");
    const recentEvent = achievements.find(a => a.status === "recent");

    // Filter events based on search, status, and modality
    const filteredEvents = allEvents.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesStatus = filterStatus === "all" || event.status === filterStatus;

        const matchesModality = filterModality === "all" ||
            (event.modality && event.modality.toLowerCase() === filterModality);

        return matchesSearch && matchesStatus && matchesModality;
    });

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]"></div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 opacity-20">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Award className="w-16 h-16 text-white" />
                    </motion.div>
                </div>
                <div className="absolute bottom-20 right-10 opacity-20">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Trophy className="w-20 h-20 text-white" />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-[#E3B037]" />
                            Logros y Eventos
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Logros y Eventos
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                            Cada logro cuenta una historia de transformación. Descubre nuestros eventos pasados y únete a los próximos.
                        </p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
                        >
                            <div className="glass-effect-dark rounded-xl p-4">
                                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">9</div>
                                <div className="text-xs md:text-sm text-gray-300">Eventos Exitosos</div>
                            </div>
                            <div className="glass-effect-dark rounded-xl p-4">
                                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">5000+</div>
                                <div className="text-xs md:text-sm text-gray-300">Participantes</div>
                            </div>
                            <div className="glass-effect-dark rounded-xl p-4">
                                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">15+</div>
                                <div className="text-xs md:text-sm text-gray-300">Alianzas</div>
                            </div>
                            <div className="glass-effect-dark rounded-xl p-4">
                                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">6</div>
                                <div className="text-xs md:text-sm text-gray-300">Próximos Eventos</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-12 bg-background border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Explora nuestros Logros y Eventos
                            </h2>

                            <div className="relative w-full md:w-auto">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar eventos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-3 rounded-full bg-accent/50 border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-80"
                                />
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Status Filters */}
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm font-semibold text-muted-foreground mr-2 flex items-center">Estado:</span>
                                <button
                                    onClick={() => setFilterStatus("all")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterStatus === "all"
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilterStatus("upcoming")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterStatus === "upcoming"
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Próximos
                                </button>
                                <button
                                    onClick={() => setFilterStatus("recent")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterStatus === "recent"
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Reciente
                                </button>
                                <button
                                    onClick={() => setFilterStatus("past")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterStatus === "past"
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Pasados
                                </button>
                            </div>

                            {/* Modality Filters */}
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm font-semibold text-muted-foreground mr-2 flex items-center">Modalidad:</span>
                                <button
                                    onClick={() => setFilterModality("all")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterModality === "all"
                                        ? "bg-secondary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Todas
                                </button>
                                <button
                                    onClick={() => setFilterModality("presencial")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterModality === "presencial"
                                        ? "bg-secondary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Presencial
                                </button>
                                <button
                                    onClick={() => setFilterModality("virtual")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterModality === "virtual"
                                        ? "bg-secondary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Virtual
                                </button>
                                <button
                                    onClick={() => setFilterModality("hibrido")}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${filterModality === "hibrido"
                                        ? "bg-secondary text-white shadow-lg"
                                        : "bg-accent/50 hover:bg-accent"
                                        }`}
                                >
                                    Híbrido
                                </button>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-sm text-muted-foreground">
                            Mostrando <span className="font-bold text-primary">{filteredEvents.length}</span> evento{filteredEvents.length !== 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
            </section>

            {/* Filtered Events Display */}
            {filteredEvents.length > 0 && (
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event: any, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className="relative p-8 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                        <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                            <event.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="relative flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span className="font-semibold">{event.date || event.year}</span>
                                            </div>

                                            <h3 className="text-2xl font-black mb-4 text-foreground">{event.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{event.description || event.subtitle}</p>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-sm text-primary">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{event.location}</span>
                                                </div>

                                                {event.modality && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-bold text-secondary">
                                                            {event.modality}
                                                        </span>
                                                        {event.attendees && (
                                                            <span className="text-xs text-muted-foreground">
                                                                {event.attendees}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                {event.tags && event.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {event.tags.slice(0, 3).map((tag: string) => (
                                                            <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {event.path ? (
                                                    <Link to={event.path} className="block w-full">
                                                        <button className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${event.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4`}>
                                                            {event.status === 'upcoming' ? 'Más Información' : 'Ver Detalles'}
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <button className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${event.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4`}>
                                                        {event.status === 'upcoming' ? 'Más Información' : 'Ver Detalles'}
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Recent Event Highlight - AgentCamp */}
            {recentEvent && (
                <section className="py-20 bg-gradient-to-br from-[#4F1675]/10 via-[#7C3AED]/10 to-[#E3B037]/10">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 backdrop-blur-sm mb-6">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Evento Reciente</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#4F1675] via-[#7C3AED] to-[#E3B037] bg-clip-text text-transparent">
                                Último Gran Logro
                            </h2>
                        </motion.div>

                        <Link to="/eventos/agentcamp-guanajuato-2026">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-effect rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="aspect-video md:aspect-auto overflow-hidden">
                                        <img
                                            src={recentEvent.image}
                                            alt={recentEvent.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${recentEvent.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <recentEvent.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 mb-4 inline-block w-fit">
                                            {recentEvent.year}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">
                                            {recentEvent.title}
                                        </h3>
                                        <p className="text-xl text-[#E3B037] font-semibold mb-6">{recentEvent.subtitle}</p>
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            {recentEvent.description}
                                        </p>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{recentEvent.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Users className="w-4 h-4 text-primary" />
                                                <span>{recentEvent.attendees}</span>
                                            </div>
                                        </div>
                                        <button className={`px-8 py-4 rounded-xl bg-gradient-to-r ${recentEvent.gradient} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                                            Ver Detalles Completos
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Upcoming Events Section */}
            <section className="py-24 bg-gradient-to-b from-background via-purple-500/5 to-background relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Próximos Eventos 2026</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#4F1675] via-[#7C3AED] to-[#E3B037] bg-clip-text text-transparent">
                            Únete a la Innovación
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Eventos diseñados para transformar ideas en impacto real
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="relative p-8 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                        <event.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="relative">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <Calendar className="w-4 h-4 text-purple-500" />
                                            <span className="font-semibold">{event.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-black mb-4 text-foreground">{event.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                                        <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-4">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {event.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r ${event.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}>
                                            Más Información
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events / Achievements */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient">Nuestros Grandes Logros</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Historias reales de innovación, perseverancia y transformación que demuestran el potencial ilimitado de la juventud mexicana.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {pastEvents.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glass-effect rounded-3xl p-8 hover-glow group relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <achievement.icon className="w-16 h-16 text-current" />
                                </div>

                                <div className="mb-6 relative">
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800`;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 text-white text-sm">
                                                <MapPin className="w-4 h-4" />
                                                {achievement.location}
                                                <span className="mx-2">•</span>
                                                <Users className="w-4 h-4" />
                                                {achievement.attendees}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <achievement.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${achievement.color}-100 text-${achievement.color}-700`}>
                                            {achievement.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#4F1675] mb-2 group-hover:text-[#7C3AED] transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-[#E3B037] font-semibold mb-4">{achievement.subtitle}</p>

                                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-l-4 border-[#E3B037]">
                                        <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                            "{achievement.emotionalStory}"
                                        </p>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {achievement.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-[#4F1675] mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Impacto
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.impact}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl`}
                                        >
                                            Conoce Más
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 rounded-xl glass-effect border border-gray-200 dark:border-gray-700 hover:border-[#E3B037] transition-colors"
                                        >
                                            <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿Quieres Crear tu Próximo Logro?
                        </h2>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
                            Únete a nuestra comunidad de innovadores y emprendedores. Juntos, construiremos el futuro que México merece.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-effect-dark rounded-2xl p-6"
                        >
                            <Heart className="w-12 h-12 text-[#E3B037] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Únete como Participante</h3>
                            <p className="text-gray-200 mb-4">Forma parte de nuestros próximos eventos y programas</p>
                            <Link to="/hackminds">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
                                >
                                    Inscríbete Ahora
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-effect-dark rounded-2xl p-6"
                        >
                            <Users className="w-12 h-12 text-[#E3B037] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Conviértete en Mentor</h3>
                            <p className="text-gray-200 mb-4">Comparte tu experiencia y guía a la próxima generación</p>
                            <Link to="/contacto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
                                >
                                    Aplicar como Mentor
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-effect-dark rounded-2xl p-6"
                        >
                            <Award className="w-12 h-12 text-[#E3B037] mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Propón una Alianza</h3>
                            <p className="text-gray-200 mb-4">Únete a nuestra red de colaboradores estratégicos</p>
                            <Link to="/contacto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
                                >
                                    Contactar Equipo
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
