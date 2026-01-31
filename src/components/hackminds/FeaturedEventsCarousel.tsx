import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import nasaImg from "@/assets/nasaspaceapps.jpg";
import habitatsImg from "@/assets/torneodehabitats.jpg";
import yesImg from "@/assets/congresosabes.jpg"; // Using as placeholder for YES26
import pitchImg from "@/assets/entrepreneurship.jpg"; // Using for Pitch on Fire/DemoDay
import financeImg from "@/assets/globalaibootcmap.jpg"; // Placeholder for Finance Week

const FeaturedEventsCarousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const events = [
        {
            title: "NASA Space Apps Challenge 2026",
            date: "Oct 2026",
            tag: "Hackathon Global",
            image: nasaImg,
            desc: "El hackathon más grande del mundo. Resuelve retos reales de la NASA y agencias espaciales."
        },
        {
            title: "YES26 (Youth Entrepreneurs Summit)",
            date: "Sep 2026",
            tag: "Summit Internacional",
            image: yesImg,
            desc: "El evento cumbre para emprendedores jóvenes. Conferencias, networking y Shark Tank en vivo."
        },
        {
            title: "SSDT: Torneo de Hábitats Espaciales",
            date: "Nov 2026",
            tag: "Competencia de Diseño",
            image: habitatsImg,
            desc: "Diseña el futuro de la humanidad en el espacio. Arquitectura, ingeniería y supervivencia."
        },
        {
            title: "Finance Week 2026",
            date: "Dec 2026",
            tag: "Educación Financiera",
            image: financeImg,
            desc: "Semana intensiva de mercados capitales, fintech y libertad financiera."
        },
        {
            title: "Pitch on Fire & DemoDay",
            date: "Q4 2026",
            tag: "Competencia de Startups",
            image: pitchImg,
            desc: "Presenta tu startup ante inversionistas reales y compite por capital semilla."
        }
    ];

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">PRÓXIMOS EVENTOS</h2>
                    <p className="text-xl text-muted-foreground">Experiencias que transforman tu visión del mundo.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Desliza para explorar</span>
                    <ArrowRight className="text-primary animate-pulse" />
                </div>
            </div>

            <div className="pl-4 md:pl-[max(1rem,calc((100vw-1280px)/2+1rem))]">
                <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8 pb-10"
                    >
                        {events.map((ev, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-3xl overflow-hidden relative group"
                            >
                                <div className="absolute inset-0">
                                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                        {ev.tag}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{ev.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-300 text-sm font-bold mb-4">
                                        <Calendar className="w-4 h-4" /> {ev.date}
                                    </div>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-6 group-hover:text-gray-200 transition-colors">
                                        {ev.desc}
                                    </p>
                                    <Button variant="outline" className="w-full bg-white/10 hover:bg-white text-white hover:text-black border-white/20 backdrop-blur-sm transition-all">
                                        Ver Detalles
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEventsCarousel;
