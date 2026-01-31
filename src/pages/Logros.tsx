import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Rocket,
  Globe,
  Brain,
  Target,
  Heart,
  Zap,
  BookOpen,
  Star,
  Trophy,
  Lightbulb,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Play,
  Eye,
  Share2
} from "lucide-react";
import coneduLogo from '@/assets/conedu.png';
import congresosabesImg from '@/assets/congresosabes.jpg';
import globalaibootcampImg from '@/assets/globalaibootcmap.jpg';
import mentesenaccionImg from '@/assets/mentesenaccion.jpeg';
import nasaspaceappsImg from '@/assets/nasaspaceapps.jpg';
import podcastImg from '@/assets/podcast.png';
import roboticaImg from '@/assets/robotica.jpg';
import torneodehabitatsImg from '@/assets/torneodehabitats.jpg';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const achievements = [
  {
    id: 1,
    title: "Congreso Internacional SABES 2025",
    subtitle: "Innovation Educational Forum",
    emotionalStory: "Imagina a un joven participante superando dudas iniciales para compartir su viaje en innovación educativa. Esta narrativa conectó emocionalmente con la audiencia, recordando que 'no estás solo; tu potencial es ilimitado'. Inspiró a muchos a ver la educación como un puente hacia un propósito mayor, fomentando autenticidad y alejando de riesgos juveniles.",
    description: "El Congreso Internacional SABES 2025, organizado por la Universidad SABES en Guanajuato, fue un foro para discutir innovación educativa y desarrollo juvenil. CONEDU lideró sesiones sobre STEAM y emprendimiento social, incluyendo talleres prácticos enfocados en soluciones para brechas educativas.",
    impact: "Impactó a cientos de asistentes, generando mayor interés en carreras STEAM entre jóvenes marginados. Facilitó alianzas que resultaron en proyectos piloto, contribuyendo a reducir la deserción escolar en comunidades locales.",
    involvedParties: "Universidad SABES, Secretaría de Educación de Guanajuato, jóvenes participantes y aliados internacionales como UNESCO. CONEDU coordinó con Circuito de Robótica para integrar elementos prácticos.",
    icon: Lightbulb,
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    color: "purple",
    year: "2025",
    location: "Guanajuato, México",
    attendees: "500+",
    image: congresosabesImg
  },
  {
    id: 2,
    title: "Circuito de Robótica Guanajuato 2025",
    subtitle: "Robotics Competition",
    emotionalStory: "Para un participante joven, el circuito representó un punto de inflexión: de inseguridades a confianza al ver su robot competir. Esta experiencia creó lazos emocionales, mostrando que 'el talento no conoce barreras' e inspirando a otros a perseguir pasiones tech, lejos de desafíos juveniles.",
    description: "El Circuito de Robótica Guanajuato 2025 fue una competencia estatal con batallas de robots y talleres LEGO League, enfocada en habilidades STEAM para niños y jóvenes. CONEDU organizó ediciones inclusivas, promoviendo innovación local.",
    impact: "Involucró a miles de participantes, con equipos destacando en nacionales. Aumentó el acceso STEAM en áreas rurales, generando inspiración para nuevos proyectos robóticos.",
    involvedParties: "Circuito de Robótica, Gobierno de Guanajuato, escuelas como SABES y aliados como FIRST LEGO League. CONEDU proporcionó mentorías.",
    icon: Rocket,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    color: "blue",
    year: "2025",
    location: "Guanajuato, México",
    attendees: "1000+",
    image: roboticaImg
  },
  {
    id: 3,
    title: "Hecho en México: Mentes en Acción 2025",
    subtitle: "Innovation Pitches",
    emotionalStory: "Un participante transformó su crisis en motivación durante un pitch, conectando con inversionistas al compartir su resiliencia. Esta narrativa emocional inspiró a la audiencia, recordando que 'las desafíos son combustible para el éxito', fomentando conexiones que preservan el talento juvenil.",
    description: "Esta iniciativa gubernamental reunió proyectos innovadores de México para pitches ante inversionistas. CONEDU apoyó sesiones sobre emprendimiento social, enfocadas en soluciones tech para impacto económico.",
    impact: "Atrajo inversiones para varios proyectos, impactando millones mediante innovación. Facilitó alianzas, aumentando la empleabilidad juvenil y posicionando Guanajuato como hub de talento.",
    involvedParties: "Secretaría de Economía México, IMPI, inversionistas y universidades.",
    icon: Target,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    color: "green",
    year: "2025",
    location: "México",
    attendees: "200+",
    image: mentesenaccionImg
  },
  {
    id: 4,
    title: "NASA Space Apps Challenge 2025",
    subtitle: "Space Hackathon",
    emotionalStory: "Un equipo de jóvenes marginados creó una app innovadora, celebrando una victoria que simbolizó 'del desafío al triunfo'. Esta conexión emocional mostró que el potencial juvenil puede conquistar grandes metas, inspirando a otros a soñar en grande.",
    description: "La hackathon global de NASA en Guanajuato enfocó en desafíos espaciales como apps para sostenibilidad. CONEDU organizó equipos juveniles, integrando STEAM para soluciones locales con impacto global.",
    impact: "Generó numerosas apps, con reconocimientos internacionales. Impactó a participantes, aumentando el interés en STEM y posicionando Guanajuato en innovación espacial.",
    involvedParties: "NASA, Universidad de Guadalajara (sede local), gobierno estatal. CONEDU aliada con Circuito de Robótica para preparación tech.",
    icon: Globe,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    color: "indigo",
    year: "2025",
    location: "Guanajuato, México",
    attendees: "200+",
    image: nasaspaceappsImg
  },
  {
    id: 5,
    title: "Podcast Posibilistas - Comunidad de IA Guanajuato",
    subtitle: "AI Community Podcast",
    emotionalStory: "Un participante joven encontró inspiración en un episodio sobre IA aplicada, transformando su percepción de la tecnología de un concepto distante a una herramienta personal para superar desafíos cotidianos. Esta narrativa creó lazos emocionales, recordando que 'la IA puede ser un aliado en tu viaje personal', fomentando conexiones que preservan el potencial juvenil.",
    description: "El podcast Posibilistas, producido por EmprendeHEC y la Comunidad de IA Guanajuato, es una serie de episodios que explora el impacto de la IA en productividad, salud mental y sectores como alimentos y construcción. CONEDU participó en sesiones sobre IA ética para jóvenes, promoviendo aplicaciones locales.",
    impact: "Atrajo a cientos de oyentes, generando mayor awareness sobre IA en Guanajuato. Facilitó discusiones que inspiraron proyectos juveniles, contribuyendo a un incremento en el interés por carreras tech entre comunidades locales.",
    involvedParties: "EmprendeHEC, Comunidad de IA Guanajuato, Global AI Community y expertos como Karla María Martínez y Roberto Sánchez Mendiola. CONEDU colaboró en episodios enfocados en educación.",
    icon: Brain,
    gradient: "from-pink-500 via-rose-500 to-red-500",
    color: "pink",
    year: "2024-2025",
    location: "Guanajuato, México",
    attendees: "1000+ oyentes",
    image: podcastImg
  },
  {
    id: 6,
    title: "Lo Mejor del Mes para Creadores de IA - Comunidad de IA Guanajuato",
    subtitle: "Monthly AI Podcast",
    emotionalStory: "En un episodio, un creador compartió cómo la IA lo ayudó a superar barreras creativas, conectando emocionalmente con la audiencia al enfatizar que 'la innovación nace de la resiliencia'. Esta historia inspiró a participantes a explorar su potencial, creando un sentido de comunidad que aleja de desafíos juveniles.",
    description: "Este podcast mensual, parte de la Comunidad de IA EmprendeHEC, resume avances en IA para creadores, cubriendo temas como investigación, capacitación y proyectos éticos. CONEDU contribuyó con segmentos sobre IA en educación juvenil y emprendimiento.",
    impact: "Alcanzó a audiencias estatales, fomentando 50+ colaboraciones en proyectos IA. Aumentó el engagement en tech, contribuyendo a un ecosistema más inclusivo en Guanajuato.",
    involvedParties: "Comunidad de IA Guanajuato, EmprendeHEC, expertos como David Cuellar Rueda, Paulo César Ramírez Silva y aliados globales. CONEDU integró contenido sobre democratización STEAM.",
    icon: Star,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    color: "yellow",
    year: "2024-2025",
    location: "Guanajuato, México",
    attendees: "2000+ oyentes",
    image: podcastImg
  },
  {
    id: 7,
    title: "Global AI Bootcamp 2025 - Instituto de Innovación Guanajuato",
    subtitle: "AI Training Event",
    emotionalStory: "Un asistente joven descubrió el poder de la IA para resolver problemas locales, creando un momento emocional al colaborar en un equipo y ver resultados reales. Esta experiencia mostró que 'la IA une comunidades', inspirando a participantes a perseguir innovaciones con impacto personal.",
    description: "El Global AI Bootcamp 2025 en León, Guanajuato, fue un encuentro sobre IA accesible, con talleres en dashboards inteligentes, ciberseguridad y aplicaciones prácticas. CONEDU organizó sesiones para jóvenes, enfocadas en innovación al alcance de todos.",
    impact: "Con 272 participantes de México, Colombia y Ecuador, generó un NPS de 68 y proyectos colaborativos. Aumentó el conocimiento IA en la región, posicionando Guanajuato como hub de tech inclusiva.",
    involvedParties: "Instituto de Innovación Guanajuato, EmprendeHEC, Microsoft Startups Hub, Red por la Ciberseguridad y Global AI Community. CONEDU lideró actividades educativas.",
    icon: Zap,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    color: "orange",
    year: "2025",
    location: "León, Guanajuato",
    attendees: "272",
    image: globalaibootcampImg
  },
  {
    id: 8,
    title: "Torneo de Diseño de Hábitats en el Espacio 2025 - SpacePort MX",
    subtitle: "Space Habitat Design Competition",
    emotionalStory: "Un grupo de jóvenes de comunidades marginadas descubrió su pasión por el espacio al diseñar un hábitat viable, transformando dudas en entusiasmo colectivo. Esta experiencia creó lazos emocionales, recordando que 'el espacio no es solo para soñar, sino para construir futuros inclusivos', inspirando a participantes a superar barreras y perseguir metas globales.",
    description: "El Torneo LATAM de Diseño de Hábitats en el Espacio 2025, organizado por SpacePort MX, es una competencia donde equipos de jóvenes de 15 a 19 años diseñan hábitats viables en cuerpos celestes, considerando factores científicos y sostenibles. La convocatoria, abierta desde agosto 2025, invita a participantes con interés en inglés y espacio. CONEDU, como patrocinador oficial, apoya la inclusión de juventudes mexicanas, alineando con nuestras rutas de innovación y tecnología.",
    impact: "El torneo impacta a cientos de participantes en LATAM, fomentando habilidades STEAM y generando proyectos escalables. Como patrocinador, CONEDU facilita acceso a jóvenes guanajuatenses, contribuyendo a reducir la brecha educativa (solo 12% eligen STEAM en México) y posicionando la juventud mexicana en la vanguardia espacial, con potencial para inspirar carreras que eleven el PIB nacional mediante innovación.",
    involvedParties: "SpacePort MX (organizador principal), Gobierno de Guanajuato, aliados como NASA y clusters aeroespaciales. CONEDU patrocina con mentorías, recursos educativos y difusión, enfocándonos en embajadores juveniles para llevar talentos mexicanos al espacio.",
    icon: Trophy,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    color: "cyan",
    year: "2025",
    location: "LATAM",
    attendees: "400+",
    image: torneodehabitatsImg
  },
  {
    id: 9,
    title: "AgentCamp Guanajuato 2026",
    subtitle: "AI Agents Workshop",
    emotionalStory: "Un joven emprendedor pasó de una idea abstracta a un agente de IA funcional en solo 4.5 horas. Esta experiencia transformó su visión de 'imposible' a 'realizable', inspirando a toda la comunidad a construir el futuro hoy mismo. Fue el primer éxito del año que demostró que el talento en Guanajuato no tiene límites.",
    description: "Primer gran evento del año co-creado con la Global AI Community y la ruta HackMinds de CONEDU. Un bootcamp 100% práctico enfocado en crear agentes de IA y MVPs adaptables para startups y PyMEs del Bajío.",
    impact: "Impactó a 30+ asistentes con un NPS de +84. Generó la guía gratuita 'De la idea al Agente' y más de 15 recursos técnicos. Consolidó una alianza estratégica entre academia, industria y comunidad global.",
    involvedParties: "Global AI Community León, EmprendHEC, E-vior Developments, TrueData, Instituto de Innovación y CONEDU (HackMinds).",
    icon: Rocket,
    gradient: "from-[#4F1675] via-[#7C3AED] to-[#E3B037]",
    color: "amber",
    year: "2026",
    location: "Silao, Guanajuato",
    attendees: "30+",
    image: "/src/assets/silao.png"
  }
];

export default function Logros() {
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Trophy className="w-20 h-20 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect-dark border border-[#E3B037]/30 font-semibold text-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#E3B037]" />
              Historias de Éxito
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Logros que Inspiran
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Cada logro cuenta una historia de transformación, donde jóvenes mexicanos convierten sueños en realidad
              y contribuyen al futuro de nuestra nación y el mundo.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
            >
              <div className="glass-effect-dark rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">8</div>
                <div className="text-xs md:text-sm text-gray-300">Eventos Exitosos</div>
              </div>
              <div className="glass-effect-dark rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">5000+</div>
                <div className="text-xs md:text-sm text-gray-300">Participantes</div>
              </div>
              <div className="glass-effect-dark rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">15+</div>
                <div className="text-xs md:text-sm text-gray-300">Alianzas</div>
              </div>
              <div className="glass-effect-dark rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#E3B037]">2025</div>
                <div className="text-xs md:text-sm text-gray-300">Año de Impacto</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Nuestros Grandes Logros</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Historias reales de innovación, perseverancia y transformación que demuestran el potencial ilimitado de la juventud mexicana.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-effect rounded-3xl p-8 hover-glow group relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <achievement.icon className="w-16 h-16 text-current" />
                </div>

                {/* Image Section */}
                <div className="mb-6 relative">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <MapPin className="w-4 h-4" />
                        {achievement.location}
                        <span className="mx-2">•</span>
                        <Users className="w-4 h-4" />
                        {achievement.attendees}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${achievement.color}-100 text-${achievement.color}-700`}>
                      {achievement.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#4F1675] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[#E3B037] font-semibold mb-4">{achievement.subtitle}</p>

                  {/* Emotional Story */}
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#E3B037]">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{achievement.emotionalStory}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#4F1675] mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Impacto
                    </h4>
                    <p className="text-sm text-gray-600">{achievement.impact}</p>
                  </div>

                  {/* Involved Parties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#4F1675] mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Aliados Estratégicos
                    </h4>
                    <p className="text-sm text-gray-600">{achievement.involvedParties}</p>
                  </div>

                  {/* Interactive CTA */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r ${achievement.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl`}
                    >
                      Conoce Más
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl glass-effect border border-gray-200 hover:border-[#E3B037] transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Línea del Tiempo 2025</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un viaje a través de nuestros momentos más destacados del año
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4F1675] to-[#E3B037] rounded-full"></div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="glass-effect rounded-2xl p-6 hover-glow">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 mx-auto`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#4F1675] mb-2 text-center">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 text-center mb-4">{achievement.year}</p>
                    <div className="flex justify-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full bg-[#E3B037] text-white text-sm font-semibold"
                      >
                        Ver Detalles
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#E3B037] rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quieres Crear tu Próximo Logro?
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Únete a nuestra comunidad de innovadores y emprendedores. Juntos, construiremos el futuro que México merece.
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
              <h3 className="text-xl font-bold mb-2">Únete como Participante</h3>
              <p className="text-gray-200 mb-4">Forma parte de nuestros próximos eventos y programas</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Inscríbete Ahora
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
              <Award className="w-12 h-12 text-[#E3B037] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Propón una Alianza</h3>
              <p className="text-gray-200 mb-4">Únete a nuestra red de colaboradores estratégicos</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-full bg-[#E3B037] text-[#4F1675] font-semibold shadow-lg"
              >
                Contactar Equipo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}