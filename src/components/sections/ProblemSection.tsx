import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: AlertCircle,
    number: "41%",
    label: "Escuelas sin infraestructura",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: TrendingDown,
    number: "70%",
    label: "Sin educación STEAM",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Users,
    number: "15%",
    label: "Deserción por pobreza",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: GraduationCap,
    number: "25%",
    label: "Población joven sin oportunidades",
    color: "from-yellow-500 to-red-500"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-xs md:text-sm mb-4">
            El Desafío que Enfrentamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="text-gradient">La Crisis de Oportunidades</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Imagina millones de sueños de jóvenes mexicanos atrapados en ciclos de incertidumbre. 
            Esto no es solo datos; es el latido de un México que merece más.
          </p>
        </motion.div>

        {/* Grid de Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover-glow"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#4F1675] mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Narrativa Emocional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-6 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#4F1675]/10 to-[#E3B037]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#4F1675] mb-4">
                México: Cuna de Innovadores
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Nuestro país, con su rica historia y creatividad innata, enfrenta brechas 
                que frenan nuestro potencial global. La desigualdad educativa no es un 
                destino inevitable, es un desafío que podemos superar juntos.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Con <span className="font-bold text-[#E3B037]">25% de nuestra población siendo joven</span>, 
                tenemos un dividendo demográfico que nos necesita. CONEDU transforma estas 
                estadísticas en oportunidades reales de cambio.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                alt="Estudiantes mexicanos"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#4F1675]/60 to-transparent flex items-end p-4 md:p-6">
                <p className="text-white font-semibold text-base md:text-lg">
                  "Cada joven merece la oportunidad de brillar"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
