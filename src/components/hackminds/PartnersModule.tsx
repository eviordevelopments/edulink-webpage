import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

// Assets
import tecLogo from "@/assets/tec.png";
import globalAiLogo from "@/assets/logo_global_ai.png";
import instInnovacion from "@/assets/logo_instinnovacion.png";
import googleLogo from "@/assets/logo_global_ai.png"; // Placeholder
import awsLogo from "@/assets/logo_global_ai.png"; // Placeholder
import microsoftLogo from "@/assets/true_logo.png"; // Placeholder

const PartnersModule = () => {
    const { language } = useLanguage();

    const partners = [
        { name: "Tecnológico de Monterrey", logo: tecLogo, scale: 1 },
        { name: "Instituto de Innovación", logo: instInnovacion, scale: 1.2 },
        { name: "Global AI Community", logo: globalAiLogo, scale: 0.8 },
        { name: "Microsoft for Startups", logo: microsoftLogo, scale: 0.9 },
        { name: "Google", logo: googleLogo, scale: 0.8 }, // Placeholder reuse
        { name: "AWS", logo: awsLogo, scale: 0.8 }, // Placeholder reuse
    ];

    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="container px-4 text-center">
                <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mb-12">
                    {language === "es" ? "Respaldado por líderes globales" : "Backed by Global Leaders"}
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-10 md:h-12 w-auto object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <div>
                        <span className="font-bold text-primary">HackMinds 2026</span> by CONEDU
                    </div>
                    <div className="flex gap-6 font-medium">
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                        <a href="#" className="hover:text-primary transition-colors">Podcast</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersModule;
