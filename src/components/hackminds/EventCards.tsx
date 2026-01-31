import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Trophy, Users, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import nasaImg from "@/assets/nasaspaceapps.jpg";
import habitatsImg from "@/assets/torneodehabitats.jpg";
import yesImg from "@/assets/congresosabes.jpg";
import pitchImg from "@/assets/entrepreneurship.jpg";
import financeImg from "@/assets/globalaibootcmap.jpg";

const EventCards = () => {

    const events = [
        {
            id: "yes26",
            title: "YES26: Youth Entrepreneurs Summit",
            subtitle: "El encuentro de mentes brillantes más grande del año",
            date: "Septiembre 2026",
            loc: "Poliforum León, Gto.",
            image: yesImg,
            highlights: ["Conferencias Magistrales", "Shark Tank en Vivo", "Networking Global", "Feria de Startups"],
            cta: "Registrarme a la Lista de Espera",
            color: "from-blue-600 to-indigo-600"
        },
        {
            id: "nasa",
            title: "NASA Space Apps Challenge",
            subtitle: "Hackathon Global de Innovación Espacial",
            date: "Octubre 2026",
            loc: "Híbrido (León & Virtual)",
            image: nasaImg,
            highlights: ["Retos oficiales de la NASA", "Mentores Aeroespaciales", "Pase a la final global", "36 horas de hacking"],
            cta: "Formar mi Escuadrón",
            color: "from-purple-600 to-pink-600"
        },
        {
            id: "ssdt",
            title: "SSDT: Diseño de Hábitats",
            subtitle: "Space Settlement Design Tournament",
            date: "Noviembre 2026",
            loc: "Parque de Innovación",
            image: habitatsImg,
            highlights: ["Arquitectura Espacial", "Ingeniería de Sistemas", "Supervivencia Humana", "Prototipado 3D"],
            cta: "Inscribir Proyecto",
            color: "from-orange-500 to-red-600"
        },
        {
            id: "finance",
            title: "Finance Week 2026",
            subtitle: "Dominando el juego del dinero",
            date: "Diciembre 2026",
            loc: "Virtual & Workshops Presenciales",
            image: financeImg,
            highlights: ["Trading en Tiempo Real", "Cripto & Web3", "Finanzas Personales", "Reto de Inversión"],
            cta: "Acceder a la Agenda",
            color: "from-green-600 to-emerald-600"
        },
        {
            id: "demoday",
            title: "Pitch on Fire & DemoDay",
            subtitle: "Donde las ideas consiguen capital",
            date: "Q4 2026",
            loc: "Auditorio Principal",
            image: pitchImg,
            highlights: ["Inversionistas Ángeles", "Feedback Experto", "Capital Semilla", "Exposición Mediática"],
            cta: "Postular mi Startup",
            color: "from-yellow-500 to-orange-600"
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4">
                <div className="space-y-24">
                    {events.map((ev, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group relative rounded-[40px] overflow-hidden bg-black border border-white/10"
                        >
                            <div className="grid lg:grid-cols-2 min-h-[500px]">

                                {/* Image Section */}
                                <div className={`relative overflow-hidden min-h-[300px] lg:min-h-full order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <img src={ev.image} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${ev.color} mix-blend-overlay opacity-50`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"></div>
                                </div>

                                {/* Content Section */}
                                <div className={`p-8 md:p-16 flex flex-col justify-center order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>

                                    <div className="mb-6 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                            <Calendar className="w-4 h-4 text-primary" /> {ev.date}
                                        </span>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                            <MapPin className="w-4 h-4 text-primary" /> {ev.loc}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{ev.title}</h3>
                                    <p className="text-xl text-primary font-medium mb-8">{ev.subtitle}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        {ev.highlights.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                                <span className="text-gray-300 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <Button size="lg" className="rounded-full text-lg font-bold h-14 px-8 bg-white text-black hover:bg-gray-200">
                                            {ev.cta} <ArrowUpRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCards;
