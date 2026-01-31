import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Target, Award, TrendingUp, Globe, Calendar, Lightbulb, HandHeart, Star, Shield, Smile } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const programas = [
  {
    nombre: "Social Hack Day",
    descripcion: "Eventos de innovación social donde jóvenes desarrollan soluciones tecnológicas para problemas comunitarios locales",
    icon: Lightbulb,
    impacto: "600 jóvenes impactados en piloto 2026"
  },
  {
    nombre: "Impact Forum",
    descripcion: "Foros de diálogo y networking donde jóvenes emprendedores comparten experiencias y construyen alianzas",
    icon: Users,
    impacto: "Red de 6,000 jóvenes para 2030"
  }
];

const metricas = [
  {
    icon: TrendingUp,
    numero: "60%",
    descripcion: "Población de Guanajuato en pobreza",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Target,
    numero: "9%",
    descripcion: "Reducción pobreza vía CCTs juveniles (Prospera)",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    numero: "6,000",
    descripcion: "Jóvenes a empoderar para 2030",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    numero: "20%",
    descripcion: "Reducción pobreza juvenil meta 2030",
    color: "from-purple-500 to-pink-500"
  }
];

const proyectos = [
  {
    nombre: "STEAM Bridge Challenge",
    descripcion: "Programa de equidad de género en ciencias y tecnología",
    icon: Globe
  },
  {
    nombre: "KAIRA Health Volunteering",
    descripcion: "Voluntariado en salud comunitaria con enfoque juvenil",
    icon: Heart
  }
];

const aliados = [
  "U-Report", "UNICEF", "KAIRA", "CECyTEG"
];

const historias = [
  {
    nombre: "María González",
    historia: "Gracias a CONEDU, transformé mi pasión por la tecnología en un proyecto que ayuda a mi comunidad. Hoy soy embajadora de Jóvenes Emprendedores por el Cambio.",
    imagen: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400"
  },
  {
    nombre: "Carlos Ramírez",
    historia: "El Impact Forum me conectó con mentores que creyeron en mi idea. Ahora tengo un negocio que emplea a 15 jóvenes de mi barrio.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  }
];

export default function ImpactoSocial() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <Shield className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 3.2, repeat: Infinity }}
          >
            <Heart className="w-20 h-20 text-white" />
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-20 opacity-15">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4.6, repeat: Infinity }}
          >
            <Users className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-15">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 5.4, repeat: Infinity }}
          >
            <Smile className="w-14 h-14 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6">
              Impacto Social Transformador
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Jóvenes Emprendedores por el Cambio
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Inspirados en Prospera, empoderamos a 6,000 jóvenes para reducir la pobreza juvenil en Guanajuato en un 20% para 2030.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-4">
              La Realidad que Enfrentamos
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Desigualdad Social en Guanajuato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El 60% de la población de Guanajuato vive en pobreza, perpetuando ciclos de desigualdad que afectan especialmente a los jóvenes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#4F1675] mb-6">
                Más que Estadísticas
              </h3>
              <ul className="space-y-4">
                {[
                  "Millones de jóvenes sin oportunidades laborales",
                  "Brechas educativas que perpetúan la pobreza",
                  "Falta de acceso a herramientas de emprendimiento",
                  "Desconexión entre educación y mercado laboral"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8 hover-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Jóvenes en comunidad"
                className="rounded-2xl mb-6"
              />
              <p className="text-gray-700 text-center font-semibold">
                "Cada joven merece romper el ciclo de pobreza"
              </p>
            </motion.div>
          </div>
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
              Nuestro Modelo de Impacto
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Comunidad que Transforma</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspirados en el éxito de Prospera con CCTs juveniles, creamos un ecosistema donde jóvenes emprendedores lideran el cambio social.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#4F1675] mb-6">
                Enfoque Basado en Comunidad
              </h3>
              <ul className="space-y-4">
                {[
                  "Emprendedores juveniles como agentes de cambio",
                  "Proyectos alineados con necesidades locales",
                  "Mentoría entre pares y expertos",
                  "Medición de impacto en reducción de pobreza"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4F1675] to-[#E3B037] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {proyectos.map((proyecto, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl p-6 hover-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center">
                      <proyecto.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#4F1675]">{proyecto.nombre}</h4>
                      <p className="text-gray-600">{proyecto.descripcion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Programas Clave</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dos iniciativas principales que impulsan nuestro impacto social
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programas.map((programa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl p-8 hover-glow group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <programa.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4F1675] mb-4">{programa.nombre}</h3>
                <p className="text-gray-600 mb-4">{programa.descripcion}</p>
                <div className="inline-block px-4 py-2 rounded-full bg-[#E3B037]/10 text-[#E3B037] font-semibold">
                  {programa.impacto}
                </div>
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
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 font-semibold text-sm mb-4">
              Impacto Medible
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Métricas de Transformación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro compromiso con resultados tangibles en la reducción de pobreza juvenil
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metricas.map((metrica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 text-center hover-glow"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metrica.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <metrica.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#4F1675] mb-2">{metrica.numero}</div>
                <p className="text-sm text-gray-600">{metrica.descripcion}</p>
              </motion.div>
            ))}
          </div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-[#4F1675] mb-4">
              Aliados Estratégicos
            </h3>
            <p className="text-gray-600 mb-6">
              Juntos amplificamos nuestro impacto social
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {aliados.map((aliado, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#4F1675]/10 to-[#E3B037]/10 text-[#4F1675] font-semibold"
                >
                  {aliado}
                </span>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Historias de Éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vidas transformadas por el poder del emprendimiento social
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {historias.map((historia, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl p-8 hover-glow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={historia.imagen}
                    alt={historia.nombre}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-[#4F1675]">{historia.nombre}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#E3B037] fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{historia.historia}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Únete al Cambio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sé parte de la transformación social de Guanajuato
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-4">Conviértete en Embajador</h3>
              <p className="text-gray-600 mb-6">
                Únete a Jóvenes Emprendedores por el Cambio y lidera proyectos sociales en tu comunidad.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-semibold shadow-lg hover-glow"
              >
                Aplicar Ahora
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center mx-auto mb-6">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-4">Voluntariado Social</h3>
              <p className="text-gray-600 mb-6">
                Participa en nuestros programas de voluntariado y contribuye directamente al desarrollo comunitario.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-semibold shadow-lg hover-glow"
              >
                Involucrarse
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-4">Alianza Empresarial</h3>
              <p className="text-gray-600 mb-6">
                Empresas que quieran apoyar el desarrollo social juvenil y crear impacto sostenible.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-semibold shadow-lg hover-glow"
              >
                Contactar
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}