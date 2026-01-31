import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, Sparkles, Zap, Target, Users } from "lucide-react";

// Assets
import coneduLogo from "@/assets/colaboracion_conedu.png";
import tecLogo from "@/assets/tec-removebg-preview.png";
import innovacionLogo from "@/assets/AE-Innovacion-Guanajuato-2.png";
import emprendimientoLogo from "@/assets/emprendimiento_logo.png";

const HeroSection = () => {
    const { language } = useLanguage();
    const { scrollY } = useScroll();

    // Scroll-based blur and opacity
    const blur = useTransform(scrollY, [0, 300], [0, 10]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

    // Floating icon animation variants
    const floatingVariants = {
        animate: (i: number) => ({
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
            }
        })
    };

    const floatingIcons = [
        { Icon: Sparkles, position: "top-1/4 left-[10%]", delay: 0 },
        { Icon: Zap, position: "top-1/3 right-[15%]", delay: 1 },
        { Icon: Target, position: "bottom-1/3 left-[20%]", delay: 2 },
        { Icon: Users, position: "bottom-1/4 right-[10%]", delay: 3 }
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a8e] via-[#2d2b7a] to-[#4a3d8f] text-white pt-24 pb-12">

            {/* Purple Curved Top Section for Logos */}
            <div className="absolute top-0 left-0 w-full h-[280px] md:h-[320px] bg-gradient-to-br from-[#4F1675] via-[#5a1a85] to-[#6b2394] z-5">
                {/* Curved Bottom Border */}
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: '80px' }}>
                    <path d="M0,64 C240,120 480,120 720,80 C960,40 1200,40 1440,80 L1440,0 L0,0 Z" fill="url(#purpleGradient)" />
                    <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4F1675" />
                            <stop offset="50%" stopColor="#5a1a85" />
                            <stop offset="100%" stopColor="#6b2394" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Animated Background */}
            <div className="absolute inset-0 z-0 opacity-30 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-pulse"></div>
                <div className="absolute bottom-0 w-full h-1/2 border-t border-white/10 rounded-[50%] scale-x-150 translate-y-1/3"></div>
                <div className="absolute bottom-10 w-full h-1/2 border-t border-white/10 rounded-[50%] scale-x-150 translate-y-1/3"></div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, position, delay }, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    variants={floatingVariants}
                    animate="animate"
                    className={`absolute ${position} text-white/20 z-5 hidden md:block`}
                >
                    <Icon className="w-12 h-12" />
                </motion.div>
            ))}

            <motion.div
                className="container relative z-10 px-4 flex flex-col items-center h-full"
                style={{ opacity, filter: `blur(${blur}px)` }}
            >

                {/* Partner Logos Header - Moved Higher */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 px-4 -mt-8 md:-mt-6"
                >
                    <img src={coneduLogo} alt="CONEDU" className="h-14 md:h-20 lg:h-24 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                    <img src={tecLogo} alt="Tec de Monterrey" className="h-12 md:h-16 lg:h-18 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                    <img src={innovacionLogo} alt="Innovación Guanajuato" className="h-12 md:h-16 lg:h-18 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                    <img src={emprendimientoLogo} alt="Emprendimiento" className="h-12 md:h-16 lg:h-18 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </motion.div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 max-w-6xl mx-auto">

                    {/* Rocket Icon with Animated Halo */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative mb-6"
                    >
                        <motion.div
                            className="absolute inset-0 bg-blue-400 blur-3xl opacity-40 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <Rocket className="w-24 h-24 md:w-32 md:h-32 text-white fill-white/10 relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl"
                    >
                        HACKMINDS
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-full max-w-2xl mx-auto"
                    ></motion.div>

                    {/* Animated "The Future of Education" with Light Flow */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase relative"
                    >
                        <span className="relative inline-block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-light-flow">
                            THE FUTURE OF EDUCATION
                        </span>
                    </motion.h2>

                </div>
            </motion.div>

            {/* CSS for light flow animation */}
            <style>{`
                @keyframes light-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-light-flow {
                    animation: light-flow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
