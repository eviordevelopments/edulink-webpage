import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Briefcase, Leaf, DollarSign, Globe } from "lucide-react";

const pilares = [
  {
    icon: Globe,
    title: "Impacto Social",
    description: "Proyectos alineados con ODS para transformar comunidades",
    color: "from-blue-500 to-cyan-500",
    hover: "group-hover:shadow-blue-500/50"
  },
  {
    icon: Lightbulb,
    title: "Educación STEAM",
    description: "Ciencia, tecnología, ingeniería, arte y matemáticas prácticas",
    color: "from-purple-500 to-pink-500",
    hover: "group-hover:shadow-purple-500/50"
  },
  {
    icon: Users,
    title: "Desarrollo Profesional",
    description: "Habilidades para empleabilidad y liderazgo",
    color: "from-amber-500 to-orange-500",
    hover: "group-hover:shadow-amber-500/50"
  },
  {
    icon: Briefcase,
    title: "Emprendimiento",
    description: "De ideas a negocios reales con mentoría experta",
    color: "from-green-500 to-emerald-500",
    hover: "group-hover:shadow-green-500/50"
  },
  {
    icon: Leaf,
    title: "Sustentabilidad",
    description: "Innovación verde local con impacto global",
    color: "from-teal-500 to-green-500",
    hover: "group-hover:shadow-teal-500/50"
  },
  {
    icon: DollarSign,
    title: "Educación Financiera",
    description: "Independencia económica y gestión inteligente",
    color: "from-indigo-500 to-purple-500",
    hover: "group-hover:shadow-indigo-500/50"
  }
];

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(79, 22, 117, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(227, 176, 55, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#4F1675]/10 to-[#E3B037]/10 text-[#4F1675] font-semibold text-xs md:text-sm mb-4">
            Nuestra Solución Integral
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="text-gradient">6 Pilares de Transformación</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            CONEDU es tu herramienta para el cambio. Rutas personalizadas que empoderan
            desde lo local hacia el impacto global.
          </p>
        </motion.div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {pilares.map((pilar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-effect rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pilar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${pilar.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${pilar.hover} shadow-lg`}>
                  <pilar.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#4F1675] mb-3 group-hover:text-[#E3B037] transition-colors">
                  {pilar.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {pilar.description}
                </p>
              </div>

              {/* Borde animado */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#E3B037]/30 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* MVP Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-6 md:p-12 relative overflow-hidden hover-glow"
        >
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#4F1675]/10 to-[#E3B037]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white text-xs md:text-sm font-semibold mb-4">
                <Lightbulb className="w-3 h-3 md:w-4 md:h-4" />
                Tecnología de Vanguardia
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4F1675] mb-4">
                CONEDU Connect App
              </h3>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Nuestra plataforma MVP CONEDU Connect, una plataforma con sentido humano que conecta con el futuro, integra inteligencia artificial para personalizar
                el aprendizaje, funcionalidad offline para comunidades rurales, redes de mentores, formación de ideas y mentoría 
                en tiempo real.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#4F1675] to-[#E3B037] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">AI personalizada para cada estudiante</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#4F1675] to-[#E3B037] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Hackathons, eventos, conferencias, talleres y proyectos en un solo lugar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#4F1675] to-[#E3B037] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">Acceso a certificaciones, empresas, universidades, oportunidades y retos que transforman.</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative glass-effect rounded-2xl p-1 hover-glow">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
                  alt="Tecnología educativa"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#4F1675]/60 to-transparent"></div>
              </div>

              {/* Elementos decorativos flotantes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E3B037] to-[#F59E0B] rounded-full blur-2xl opacity-60"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
