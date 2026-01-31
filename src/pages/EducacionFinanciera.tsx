import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Users, Target, Award, DollarSign, TrendingUp, PiggyBank, Heart, Clock, Star, Calculator, Coins } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const problemStats = [
  {
    icon: AlertTriangle,
    number: "38%",
    label: "Adultos sin servicios financieros",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: DollarSign,
    number: "58%",
    label: "Microempresas informales en Guanajuato",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Users,
    number: "15%",
    label: "Mejora en alfabetización financiera 2025",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: TrendingUp,
    number: "40%",
    label: "Juventud con planes financieros en 2030",
    color: "from-yellow-500 to-red-500"
  }
];

const solutionPillars = [
  {
    icon: Lightbulb,
    title: "Simuladores Interactivos",
    description: "Herramientas digitales para aprender finanzas personales y emprendimiento",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Talleres Prácticos",
    description: "Sesiones interactivas basadas en IMEF Universitario para desarrollo de habilidades",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: PiggyBank,
    title: "Educación Personalizada",
    description: "Aprendizaje adaptado a diferentes niveles de conocimiento financiero",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Certificación IMEF",
    description: "Reconocimiento oficial de competencias en educación financiera",
    color: "from-amber-500 to-orange-500"
  }
];

const keyPrograms = [
  {
    icon: Star,
    title: "FinYouth Expo",
    description: "Feria anual de educación financiera donde jóvenes exploran oportunidades de inversión y emprendimiento",
    features: ["Simuladores de inversión", "Talleres interactivos", "Networking con expertos"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Budget Challenge",
    description: "Reto mensual de presupuestos donde participantes aprenden a gestionar finanzas personales y empresariales",
    features: ["Seguimiento semanal", "Mentoría financiera", "Premios por consistencia"],
    color: "from-teal-500 to-green-500"
  }
];

const impactMetrics = [
  {
    icon: Target,
    number: "4,000",
    label: "Jóvenes educados en 2030",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    number: "400",
    label: "Participantes en piloto 2026",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    number: "85%",
    label: "Retención en programas",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    number: "60%",
    label: "Mejora en hábitos financieros",
    color: "from-amber-500 to-orange-500"
  }
];

const successStories = [
  {
    title: "Semana de Educación Financiera",
    description: "Estudiantes universitarios participaron en simuladores de inversión, aprendiendo a gestionar riesgos y oportunidades financieras.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    quote: "Los simuladores me enseñaron que las finanzas no son tan complicadas como pensaba."
  },
  {
    title: "Pasantes IMEF",
    description: "Jóvenes emprendedores desarrollaron planes financieros sólidos, obteniendo certificación y oportunidades laborales.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    quote: "La mentoría financiera cambió mi perspectiva sobre el emprendimiento."
  }
];

const partners = [
  { name: "BBVA", logo: "https://via.placeholder.com/150x80?text=BBVA" },
  { name: "RSM Consultores", logo: "https://via.placeholder.com/150x80?text=RSM" },
  { name: "PNUD", logo: "https://via.placeholder.com/150x80?text=PNUD" },
  { name: "Secretaría de Desarrollo Económico", logo: "https://via.placeholder.com/150x80?text=SDE" }
];

export default function EducacionFinanciera() {
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
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            <Calculator className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.8, repeat: Infinity }}
          >
            <PiggyBank className="w-20 h-20 text-white" />
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-20 opacity-15">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4.2, repeat: Infinity }}
          >
            <DollarSign className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-15">
          <motion.div
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 5.2, repeat: Infinity }}
          >
            <Coins className="w-14 h-14 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6">
              Educación Financiera
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fomentando la Resiliencia Económica
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Un modelo interactivo basado en IMEF Universitario para cerrar la brecha de alfabetización financiera
              y empoderar a la juventud mexicana con herramientas para el éxito económico.
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
              <span className="text-gradient">La Crisis de Alfabetización Financiera</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En Guanajuato, el 38% de los adultos carecen de servicios financieros básicos,
              mientras que el 58% de las microempresas operan en la informalidad.
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
                  Guanajuato: Base para el Cambio
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nuestro objetivo es educar a 4,000 jóvenes para 2030, comenzando con un piloto en 2026
                  con 400 participantes en León. A través de simuladores interactivos y talleres prácticos,
                  construiremos una generación financieramente preparada.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Basados en el modelo IMEF Universitario, esperamos lograr una mejora del 15% en la
                  alfabetización financiera para 2025, sentando las bases para el 40% de juventud con
                  planes financieros sólidos en 2030.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800"
                  alt="Educación financiera"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#4F1675]/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">
                    "El conocimiento financiero es poder económico"
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
              Nuestro Modelo Interactivo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Simuladores + Talleres IMEF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Inspirados en IMEF Universitario, combinamos tecnología interactiva con educación financiera
              práctica para desarrollar habilidades que duran toda la vida.
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
              <span className="text-gradient">Programas Transformadores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dos iniciativas clave que revolucionan la educación financiera en México
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
              <span className="text-gradient">Resultados que Transforman Vidas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro compromiso con la educación financiera se refleja en métricas concretas y cambio sostenible.
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
              <span className="text-gradient">Historias de Éxito Financiero</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Narrativas reales de jóvenes que transformaron su futuro económico
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
              Colaborando con líderes en finanzas y desarrollo económico
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
              Únete al Movimiento Financiero
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Conviértete en embajador de "Jóvenes Emprendedores por el Cambio" y ayuda a promover
              la alfabetización financiera en tu comunidad.
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
              <p className="text-gray-200 mb-4">Únete a nuestros programas de educación financiera</p>
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
              <h3 className="text-xl font-bold mb-2">Conviértete en Embajador</h3>
              <p className="text-gray-200 mb-4">Promueve la educación financiera en tu comunidad</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Aplicar como Embajador
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
              <h3 className="text-xl font-bold mb-2">Piloto León 2026</h3>
              <p className="text-gray-200 mb-4">Únete al programa inaugural - ¡Plazas limitadas!</p>
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