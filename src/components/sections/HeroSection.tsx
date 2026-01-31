import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Rocket, Globe, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import EarthRocket3D from "../EarthRocket3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0MGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Rocket className="w-16 h-16 text-white" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Globe className="w-20 h-20 text-white" />
        </motion.div>
      </div>
      <div className="absolute top-1/2 right-20 opacity-15">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star className="w-12 h-12 text-white" />
        </motion.div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-15">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Zap className="w-14 h-14 text-white" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contenido de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-effect-dark border border-[#E3B037]/30"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#E3B037]" />
              <span className="text-xs md:text-sm font-semibold">#SomosCONEDUxMéxico</span>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4"
              >
                Conéctate al
                <span className="block text-[#E3B037]">Futuro</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed"
              >
                Empoderando los sueños de niñas, niños y jóvenes mexicanos para transformar
                ideas en realidad, forjando líderes globales desde lo local con impacto global.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link to={createPageUrl("Contacto")} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#E3B037] to-[#F59E0B] text-white font-bold text-base md:text-lg shadow-2xl hover-glow flex items-center gap-2 justify-center"
                >
                  Únete al Cambio
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </Link>

              <Link to={createPageUrl("SobreNosotros")} className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full glass-effect-dark border border-white/20 text-white font-bold text-base md:text-lg hover:border-[#E3B037]/50 transition-colors"
                >
                  Conoce Más
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">25%</div>
                <div className="text-xs md:text-sm text-gray-300">Población Joven</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">80%</div>
                <div className="text-xs md:text-sm text-gray-300">Retención</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">50%</div>
                <div className="text-xs md:text-sm text-gray-300">Empleabilidad</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Render 3D de Tierra y Cohete */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative glass-effect-dark rounded-3xl p-1 hover-glow">
              <EarthRocket3D />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#4F1675]/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Elemento decorativo flotante */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#E3B037] to-[#F59E0B] rounded-full blur-3xl opacity-50"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-[#7C3AED] to-[#4F1675] rounded-full blur-3xl opacity-40"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
