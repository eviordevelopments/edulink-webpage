import React from "react";
import { motion } from "framer-motion";
import {
  Calendar, Target, Users, Rocket, Zap, Globe, Code, Brain,
  Heart, TrendingUp, Star, CheckCircle, ArrowRight, MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline2026 = [
  {
    quarter: "Q1 2026",
    title: "Lanzamiento y Convocatoria",
    description: "Apertura oficial de HackMinds 2026. Selección de embajadores, formación de mesas estudiantiles y registro temprano de participantes.",
    metrics: "Meta: 2,000 registros, 50 embajadores.",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    events: ["Launch Event (Virtual)", "Asignación de Mentores", "Webinars Informativos"]
  },
  {
    quarter: "Q2 2026",
    title: "Formación Intensiva (Bootcamps)",
    description: "Inicio de las 8 Rutas de Impacto. Talleres prácticos, masterclasses con expertos de Microsoft, Google y Tec de Monterrey.",
    metrics: "Meta: 500 certificaciones, 80% retención.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    events: ["Finance Week", "Talleres de IA & Cloud", "Bootcamps de Liderazgo"]
  },
  {
    quarter: "Q3 2026",
    title: "Desarrollo y Prototipado",
    description: "Manos a la obra. Los equipos trabajan en sus soluciones. Hackathons regionales y sesiones de validación con usuarios reales.",
    metrics: "Meta: 100 prototipos funcionales.",
    icon: Code,
    color: "from-orange-500 to-red-500",
    events: ["NASA Space Apps Challenge", "Hackathons Regionales", "Validación de Mercado"]
  },
  {
    quarter: "Q4 2026",
    title: "Cierre y Escalamiento",
    description: "Presentación final de proyectos. Eventos cumbre donde se conectan ideas con capital y oportunidades reales de implementación.",
    metrics: "Meta: $5M MXN en capital semilla potencial.",
    icon: Trophy,
    color: "from-green-500 to-emerald-500",
    events: ["YES26 (Youth Entrepreneurs Summit)", "Pitch on Fire", "Gala de Premiación"]
  }
];

const impactRoutes = [
  { title: "Emprendimiento", icon: Rocket, color: "text-orange-500", desc: "De la idea al MVP validado." },
  { title: "Tech & Science", icon: Brain, color: "text-purple-500", desc: "IA, Cloud y Software." },
  { title: "Finanzas", icon: TrendingUp, color: "text-green-500", desc: "Libertad financiera e inversión." },
  { title: "Climatech", icon: Globe, color: "text-teal-500", desc: "Soluciones para el planeta." },
  { title: "Liderazgo", icon: Users, color: "text-blue-500", desc: "Skills del futuro." },
  { title: "Social", icon: Heart, color: "text-red-500", desc: "Impacto comunitario real." },
  { title: "Inclusión", icon: Star, color: "text-pink-500", desc: "Cerrando brechas." },
  { title: "Big Data", icon: Activity, color: "text-indigo-500", desc: "El poder de los datos." }
];

import { BookOpen, Trophy, Activity } from "lucide-react"; // Import missing icons locally

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10 container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 font-bold text-sm tracking-widest mb-6 backdrop-blur-md">
              HACKMINDS 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              TU RUTA HACIA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">EL FUTURO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Un cronograma estratégico diseñado para transformar tu potencial en impacto real.
              4 Trimestres. 8 Rutas. 1 Objetivo: Transformar México.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hackminds">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-white text-black hover:bg-gray-200">
                  Explorar Programa
                </Button>
              </Link>
              <Link to="/hackminds/rutas">
                <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-white/30 text-white hover:bg-white/10">
                  Ver las 8 Rutas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quarterly Roadmap */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-primary">CRONOGRAMA 2026</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada fase está diseñada para construir sobre la anterior, asegurando que llegues al final del año con resultados tangibles.
            </p>
          </div>

          <div className="relative">
            {/* Central Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 rounded-full opacity-30"></div>

            <div className="space-y-12 md:space-y-24">
              {timeline2026.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 md:max-w-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className={`text-2xl font-black mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.quarter}</h3>
                      <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Eventos Clave</h5>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {item.events.map((ev, i) => (
                            <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                              {ev}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex cursor-default">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-purple-500/20 text-white`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Empty Side for Balance (Desktop) */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Routes Quick View */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[3rem] p-10 md:p-20 text-white shadow-2xl overflow-hidden relative">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-12">ELIGE TU RUTA DE IMPACTO</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {impactRoutes.map((route, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center hover:bg-white/20 transition-colors">
                    <route.icon className={`w-8 h-8 mx-auto mb-3 ${route.color}`} />
                    <h4 className="font-bold text-sm mb-1">{route.title}</h4>
                    <p className="text-[10px] text-gray-300 leading-tight">{route.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/hackminds/rutas">
                  <Button size="lg" className="rounded-full bg-white text-blue-900 font-bold hover:bg-gray-100">
                    Explorar Detalles de Rutas
                  </Button>
                </Link>
                <p className="text-sm text-blue-200 mt-4 sm:mt-0">
                  *Puedes participar en múltiples rutas según tu disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-black mb-8">¿LISTO PARA EL 2026?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Estudiantes</h3>
              <p className="text-sm text-muted-foreground mb-6">Transforma tu carrera y conecta con oportunidades globales.</p>
              <Link to="/hackminds">
                <Button className="w-full rounded-full">Inscribirme</Button>
              </Link>
            </div>
            <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Aliados</h3>
              <p className="text-sm text-muted-foreground mb-6">Impulsa la innovación y capta el mejor talento joven.</p>
              <Link to="/contacto">
                <Button variant="outline" className="w-full rounded-full">Colaborar</Button>
              </Link>
            </div>
            <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-black/50 dark:hover:border-white/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Mentores</h3>
              <p className="text-sm text-muted-foreground mb-6">Comparte tu experiencia y guía a la próxima generación.</p>
              <Link to="/contacto">
                <Button variant="outline" className="w-full rounded-full">Aplicar</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}