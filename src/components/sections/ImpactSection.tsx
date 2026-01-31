import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Target } from "lucide-react";
import LogoCarousel from "../shared/LogoCarousel";

const logros = [
  {
    icon: Award,
    title: "Mesas Estudiantiles",
    description: "Anáhuac Puebla y Tec Campus Irapuato",
    stat: "2 Instituciones",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: TrendingUp,
    title: "Retención Estudiantil",
    description: "Estudiantes que continúan su educación",
    stat: "80%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Empleabilidad",
    description: "Mejora en oportunidades laborales",
    stat: "50%",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Target,
    title: "Proyectos Completados",
    description: "Prototipos e iniciativas sociales",
    stat: "60%",
    color: "from-amber-500 to-orange-500"
  }
];

export default function ImpactSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold text-sm mb-4">
            Nuestro Impacto Real
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Logros que Inspiran</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Con alianzas estratégicas y compromiso genuino, estamos generando 
            cambio real en comunidades mexicanas.
          </p>
        </motion.div>

        {/* Grid de Logros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {logros.map((logro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center hover-glow"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${logro.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <logro.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#4F1675] mb-2">{logro.stat}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{logro.title}</h3>
              <p className="text-sm text-gray-600">{logro.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sección de Aliados con Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#4F1675] mb-4">
              Construyendo el Futuro Juntos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestras alianzas con instituciones de prestigio, empresas innovadoras 
              y organizaciones sociales fortalecen nuestro impacto.
            </p>
          </div>

          {/* Carrusel de Logos */}
          <LogoCarousel />

          {/* Call to Action para Alianzas */}
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-semibold shadow-lg hover-glow"
            >
              Conviértete en Aliado
            </motion.button>
          </div>
        </motion.div>

        {/* Alineaciones Globales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Alineados con estándares globales:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["MIT PKG/Solve", "ODS ONU", "UNESCO", "UNICEF"].map((org, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4F1675]/10 to-[#E3B037]/10 text-[#4F1675] font-semibold text-sm"
              >
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}