import React from "react";
import { motion } from "framer-motion";

const ClosingSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-black text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

            <div className="container px-4 relative z-10 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-black mb-8 leading-tight"
                >
                    EL FUTURO DE MÉXICO <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">SE CONSTRUYE HOY.</span>
                </motion.h2>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                    HackMinds representa una inversión inteligente en capital humano mexicano. Una estrategia de desarrollo sostenible para liderar el cambio en el panorama educativo, social y tecnológico.
                </p>

                <div className="h-2 w-32 bg-cyan-500 mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default ClosingSection;
