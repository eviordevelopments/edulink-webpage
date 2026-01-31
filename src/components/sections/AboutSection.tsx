import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Lightbulb, HandshakeIcon, Sparkles } from "lucide-react";

const AboutSection = () => {
    const missionVisionObjective = [
        {
            icon: Target,
            title: "Objetivo",
            description: "Democratizar el acceso a STEAM, educación financiera e innovación para jóvenes de 10-25 años en desigualdad social, brindándoles herramientas para transformar sus vidas y comunidades.",
            gradient: "from-blue-500 to-cyan-600"
        },
        {
            icon: Heart,
            title: "Misión",
            description: "Proporcionar plataformas integrales para desarrollar habilidades emprendedoras, conectar con mentores de clase mundial y generar impacto positivo en sus comunidades a través de proyectos innovadores.",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: Eye,
            title: "Visión",
            description: "Convertir a estudiantes mexicanos en líderes innovadores, socialmente responsables y competitivos a nivel global, siendo agentes de cambio que impulsen el desarrollo de México.",
            gradient: "from-yellow-500 to-orange-600"
        }
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovación",
            description: "Soluciones disruptivas que transforman la educación y el emprendimiento"
        },
        {
            icon: HandshakeIcon,
            title: "Colaboración",
            description: "Trabajo en equipo que amplifica el impacto y genera sinergias"
        },
        {
            icon: Heart,
            title: "Integridad",
            description: "Ética y transparencia en cada acción que emprendemos"
        },
        {
            icon: Users,
            title: "Responsabilidad Social",
            description: "Impacto positivo en comunidades y compromiso con el cambio"
        },
        {
            icon: Target,
            title: "Aprendizaje Continuo",
            description: "Crecimiento experiencial y desarrollo constante de habilidades"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-background via-[#0A0080]/5 to-background relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Quiénes Somos</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#4F1675] via-[#7C3AED] to-[#E3B037] bg-clip-text text-transparent">
                        Transformando el Futuro de México
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Fundada por <span className="font-semibold text-foreground">David Emiliano Castillo García</span>, un joven emprendedor apasionado de la tecnología y <span className="font-semibold text-foreground">Diego Silva</span>, estudiante e innovador,
                        CONEDU nace del orgullo mexicano por superar nuestras propias barreras y buscar el cambio, empoderando a jóvenes para que sean embajadores globales.
                    </p>
                </motion.div>

                {/* Mission, Vision, Objective Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {missionVisionObjective.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glassmorphic Card */}
                            <div className="relative p-8 rounded-3xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Gradient Glow on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="relative text-2xl font-black mb-4 text-foreground">{item.title}</h3>
                                <p className="relative text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Nuestros Valores
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Principios que guían cada acción y decisión en CONEDU
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group"
                            >
                                <div className="relative p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">{value.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Community Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative p-12 rounded-[3rem] bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-purple-500/20 shadow-2xl overflow-hidden">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.3),transparent_50%)] animate-pulse"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-xl">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Sentido de Comunidad
                            </h3>
                            <p className="text-xl text-foreground/80 leading-relaxed italic">
                                "Somos una familia mexicana que transforma ideas en realidad para enfrentar la vida y generar innovación nacional.
                                Unidos por el orgullo de nuestras raíces en Guanajuato y Puebla, trabajamos bajo el espíritu <span className="font-bold text-purple-600">'Piensa Global, Actúa Local'</span>,
                                empoderando a niños, niñas y jóvenes para que se conviertan en líderes del cambio global y embajadores juveniles."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
