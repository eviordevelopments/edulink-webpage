import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, Users, Rocket, Award, Globe, Network, Target, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoCarousel from "../components/shared/LogoCarousel";

const alianzas = [
  {
    nombre: "Tec de Monterrey",
    tipo: "Educación",
    descripcion: "Vinculación con Emprendimiento Tec, EGADE Business School e Instituto de Emprendimiento Eugenio Garza Laguëra",
    icon: Building2
  },
  {
    nombre: "Instituto de Innovación",
    tipo: "Educación",
    descripcion: "Instituto de Innovación, Ciencia y Emprendimiento para la Competitividad del Estado de Guanajuato, Gimnasios de innovación y casas del emprendimiento",
    icon: Rocket
  },
  {
    nombre: "Casas del Emprendimiento",
    tipo: "Emprendimiento",
    descripcion: "Red de espacios para fomentar la cultura emprendedora y desarrollo de startups",
    icon: Handshake
  },
  {
    nombre: "IMEF Universitario",
    tipo: "Finanzas",
    descripcion: "Educación financiera y vinculación profesional con las distintas mesas directivas con las mejores universidades de México",
    icon: Award
  },
  {
    nombre: "Microsoft for Startups",
    tipo: "Tecnología",
    descripcion: "Herramientas cloud e IA para startups y capacitación tecnológica que impulsan misiones de alto valor",
    icon: Rocket
  },
  {
    nombre: "CIMAT",
    tipo: "Investigación",
    descripcion: "Investigación en matemáticas e innovación",
    icon: Users
  },
  {
    nombre: "CINVESTAV",
    tipo: "Investigación",
    descripcion: "Investigación científica avanzada",
    icon: Globe
  },
  {
    nombre: "RSM Consultores",
    tipo: "Consultoría",
    descripcion: "Asesoría empresarial y estratégica que impulsa la educación financiera y acceso a habilidades para la vida en los jóvenes mexicanos",
    icon: Handshake
  },
  {
    nombre: "Kamdata",
    tipo: "Tecnología",
    descripcion: "Soluciones de datos para la transformación digital contribuyendo a la formación de estrategias para startups y mentalidad digital en jóvenes",
    icon: Rocket
  }
];

const alineaciones = [
  { nombre: "MIT PKG/Solve", descripcion: "Metodologías de innovación social respaldadas por el MIT" },
  { nombre: "ODS ONU", descripcion: "Objetivos de Desarrollo Sostenible" },
  { nombre: "UNESCO", descripcion: "Estándares educativos globales" },
  { nombre: "UNICEF", descripcion: "Derechos y bienestar infantil" }
];

export default function Alianzas() {
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
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Network className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Handshake className="w-20 h-20 text-white" />
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-20 opacity-15">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Target className="w-12 h-12 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 left-20 opacity-15">
          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Star className="w-14 h-14 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6">
              Red de Colaboración
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Alianzas Estratégicas
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Juntos, formamos una red que impulsa el cambio, y la formación de habilidades para todas las industrias, fomentando empleabilidad y crecimiento económico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carrusel de Logos - Destacado */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Nuestros Aliados Estratégicos</span>
            </h2>
            <p className="text-lg text-gray-600">
              Instituciones y organizaciones que comparten nuestra visión de transformación
            </p>
          </motion.div>

          <LogoCarousel />
        </div>
      </section>

      {/* Grid de Alianzas */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Categorías de Alianzas</span>
            </h2>
            <p className="text-xl text-gray-600">
              Colaboraciones diversas para maximizar el impacto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alianzas.map((alianza, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-2xl p-6 hover-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4F1675] to-[#E3B037] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <alianza.icon className="w-7 h-7 text-white" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#E3B037]/10 text-[#E3B037] text-xs font-semibold mb-3">
                  {alianza.tipo}
                </span>
                <h3 className="text-xl font-bold text-[#4F1675] mb-2">{alianza.nombre}</h3>
                <p className="text-gray-600 text-sm">{alianza.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Destacados de Nuevas Alianzas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Aliados Destacados</span>
            </h2>
            <p className="text-xl text-gray-600">
              Instituciones clave en nuestra red de innovación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Instituto de Innovación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/a9854fc90_LOGO_INNOVACIONoriginal-removebg-preview.png"
                  alt="Instituto de Innovación"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-2">Instituto de Innovación</h3>
              <p className="text-sm text-gray-600">
                Instituto de Innovación, Ciencia y Emprendimiento para la Competitividad del Estado de Guanajuato
              </p>
            </motion.div>

            {/* IMEF Universitario */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/a265185cf_images-9-removebg-preview.png"
                  alt="IMEF Universitario"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-2">IMEF Universitario</h3>
              <p className="text-sm text-gray-600">
                Red universitaria colaborativa de educación financiera que fomenta la cultura emprendedora y las finanzas personales en México
              </p>
            </motion.div>

            {/* SpacePort MX */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center hover-glow"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src="/src/assets/spaceportlogo.png"
                  alt="SpacePort MX"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#4F1675] mb-2">SpacePort MX</h3>
              <p className="text-sm text-gray-600">
                Destacando el talento mexicano en la industria aeroespacial, trascendencia fronteras y los límites del universo, SpacePort MX es orgullosamente CONEDU y busca democratizar e impulsar la divulgación del espacio en nuestra juventud
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alineaciones Globales */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Alineaciones Internacionales</span>
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos bajo estándares y metodologías globales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alineaciones.map((alineacion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center hover-glow"
              >
                <div className="text-2xl font-bold text-[#4F1675] mb-2">{alineacion.nombre}</div>
                <p className="text-sm text-gray-600">{alineacion.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#4F1675] mb-6">
                Beneficios de Nuestras Alianzas
              </h2>
              <ul className="space-y-4">
                {[
                  "Vinculación universitaria para oportunidades educativas",
                  "Acceso a empleabilidad con actores destacados en los sectores tecnológicos",
                  "Co-eventos y experiencias para desarrollo de talento",
                  "Mentorías con expertos y líderes de industria",
                  "Recursos tecnológicos y de investigación de alto nivel",
                  "Certificaciones reconocidas internacionalmente"
                ].map((beneficio, index) => (
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
                    <span className="text-gray-700">{beneficio}</span>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Colaboración"
                className="rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-[#4F1675] mb-4">
                ¿Quieres ser nuestro aliado?
              </h3>
              <p className="text-gray-700 mb-6">
                Únete a nuestra red de organizaciones comprometidas con la transformación
                educativa en México. Juntos podemos generar mayor impacto.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-semibold shadow-lg hover-glow"
              >
                Proponer una Alianza
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}