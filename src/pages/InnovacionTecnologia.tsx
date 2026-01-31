import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Users, Target, Award, Rocket, Zap, Globe, Code, Brain, Heart, Clock, Cpu, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const problemStats = [
  {
    icon: AlertTriangle,
    number: "12%",
    label: "Elección de carreras STEAM",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Zap,
    number: "75%",
    label: "Empleos requerirán STEAM en 2030",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Users,
    number: "4.8%",
    label: "Desempleo juvenil en Guanajuato",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Globe,
    number: "50%",
    label: "Comunidades rurales sin internet",
    color: "from-yellow-500 to-red-500"
  }
];

const solutionPillars = [
  {
    icon: Lightbulb,
    title: "STEAM Híbrido",
    description: "Ciencia, Tecnología, Ingeniería, Artes y Matemáticas con enfoque práctico",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Mentoría Experta",
    description: "Modelo inspirado en Tecnológico de Monterrey para desarrollo profesional",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "IA Ética",
    description: "Formación en inteligencia artificial responsable y prototipado",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Innovación Social",
    description: "Proyectos que transforman comunidades locales",
    color: "from-amber-500 to-orange-500"
  }
];

const keyPrograms = [
  {
    icon: Code,
    title: "InnoYouth Labs",
    description: "Laboratorios de innovación donde jóvenes desarrollan prototipos tecnológicos para resolver problemas locales",
    features: ["Prototipado rápido", "Mentoría técnica", "Validación de mercado"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Brain,
    title: "AI for Good Challenge",
    description: "Reto anual de inteligencia artificial ética, donde equipos crean soluciones para desafíos sociales",
    features: ["IA responsable", "Impacto comunitario", "Premios y reconocimiento"],
    color: "from-teal-500 to-green-500"
  }
];

const impactMetrics = [
  {
    icon: Target,
    number: "5,000",
    label: "Jóvenes capacitados en 2030",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    number: "500",
    label: "Participantes en piloto 2026",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    number: "80%",
    label: "Retención en programas",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    number: "60",
    label: "Proyectos completados",
    color: "from-amber-500 to-orange-500"
  }
];

const successStories = [
  {
    title: "PrepaTec Hackathon",
    description: "Estudiantes de preparatoria crearon una app móvil para conectar agricultores rurales con mercados digitales, impactando a 200 familias.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    quote: "Aprendí que la tecnología puede cambiar vidas reales."
  },
  {
    title: "TUTOR-IA Workshops",
    description: "Talleres de IA donde jóvenes desarrollaron chatbots educativos para comunidades sin acceso a internet, llegando a 1,000 estudiantes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    quote: "La mentoría me dio confianza para soñar en grande."
  }
];

const partners = [
  { name: "Kamdata", logo: "https://via.placeholder.com/150x80?text=Kamdata" },
  { name: "SpacePort MX", logo: "/src/assets/spaceportlogo.png" },
  { name: "UNICEF México", logo: "https://via.placeholder.com/150x80?text=UNICEF" },
  { name: "CINVESTAV Irapuato", logo: "https://via.placeholder.com/150x80?text=CINVESTAV" }
];

export default function InnovacionTecnologia() {
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
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Rocket className="w-20 h-20 text-white" />
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-20 opacity-15">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <Brain className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-15">
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            <Sparkles className="w-14 h-14 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6">
              Innovación Tecnológica
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transformando el Futuro con STEAM
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Un modelo híbrido de educación STEAM más mentoría, inspirado en el Tecnológico de Monterrey,
              para cerrar la brecha entre la demanda laboral y la formación de jóvenes talentosos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem/Justification Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-4">
              La Brecha que Debemos Cerrar
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">La Crisis del Talento STEAM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              México enfrenta una disparidad crítica: solo el 12% de los jóvenes eligen carreras STEAM,
              mientras que el 75% de los empleos en 2030 requerirán estas habilidades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {problemStats.map((stat, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#4F1675] mb-4">
                  Guanajuato: Oportunidad y Desafío
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Con un desempleo juvenil del 4.8% y el 50% de comunidades rurales sin acceso a internet,
                  Guanajuato necesita soluciones innovadoras que combinen educación de calidad con tecnología accesible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro objetivo: capacitar a 5,000 jóvenes en IA ética y prototipado para 2030,
                  comenzando con un piloto en 2026 con 500 participantes en Irapuato.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                  alt="Jóvenes innovadores"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#4F1675]/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">
                    "La innovación es el puente hacia un futuro mejor"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution/Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#4F1675]/10 to-[#E3B037]/10 text-[#4F1675] font-semibold text-sm mb-4">
              Nuestro Modelo Revolucionario
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">STEAM Híbrido + Mentoría</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Inspirado en el Tecnológico de Monterrey, combinamos educación STEAM práctica con mentoría experta
              para desarrollar talento innovador y emprendedor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {solutionPillars.map((pilar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl p-6 hover-glow group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pilar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <pilar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#4F1675] mb-2">{pilar.title}</h3>
                <p className="text-gray-600 text-sm">{pilar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Proposals Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Programas Clave</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dos iniciativas transformadoras que empoderan a la juventud mexicana
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {keyPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-3xl p-8 hover-glow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F1675] mb-4">{program.title}</h3>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4F1675] to-[#E3B037] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
              Impacto Medible
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Resultados que Marcan la Diferencia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso con la transformación se refleja en métricas concretas y crecimiento sostenible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center hover-glow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#4F1675] mb-2">{metric.number}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Historias de Éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Narrativas reales de transformación que inspiran a la próxima generación
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-3xl overflow-hidden hover-glow"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4F1675]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{story.description}</p>
                  <blockquote className="text-[#4F1675] font-semibold italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Nuestros Socios Estratégicos</span>
            </h2>
            <p className="text-lg text-gray-600">
              Colaborando con líderes en tecnología e innovación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center hover-glow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-lg font-bold text-[#4F1675]">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Section */}
      <section className="py-20 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Únete al Cambio
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Sé parte del programa "Jóvenes Emprendedores por el Cambio" y conviértete en embajador de la innovación.
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
              <h3 className="text-xl font-bold mb-2">Aplica Ahora</h3>
              <p className="text-gray-200 mb-4">Únete a nuestros programas y transforma tu futuro</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Solicitar Participación
              </motion.button>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Aplicar como Mentor
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect-dark rounded-2xl p-6"
            >
              <Clock className="w-12 h-12 text-[#E3B037] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Piloto 2026</h3>
              <p className="text-gray-200 mb-4">Únete al programa inaugural en Irapuato - ¡Plazas limitadas!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Reservar Lugar
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}