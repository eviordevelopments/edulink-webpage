import { Calendar, Users, Lightbulb, Rocket, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Programas = () => {
  const programs = [
    {
      icon: Lightbulb,
      title: "Desafío STEAM",
      description: "Hackathon intensivo para resolver problemas reales con mentoría de expertos de la industria",
      duration: "1 mes",
      impact: "10 equipos participantes, 3 proyectos premiados",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Rocket,
      title: "Emprendimiento Social",
      description: "Iniciativas comunitarias que generan impacto positivo (reciclaje, educación, tecnología verde)",
      duration: "2 meses",
      impact: "5 proyectos implementados, 100+ beneficiados",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "Mentoría Personalizada",
      description: "Conexión uno-a-uno con profesionales del ecosistema emprendedor y académico",
      duration: "3 meses",
      impact: "80% de mentoreados mejoran empleabilidad",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Award,
      title: "Bootcamp de Liderazgo",
      description: "Desarrollo de soft skills, pitch deck, networking con líderes de la industria",
      duration: "6 semanas",
      impact: "90% retención, certificación de liderazgo",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const timeline = [
    {
      month: "Agosto 2025",
      events: ["Lanzamiento Desafío STEAM", "Inscripciones abiertas Bootcamp"],
    },
    {
      month: "Septiembre 2025",
      events: ["Inicio Emprendimiento Social", "Conferencias con expertos"],
    },
    {
      month: "Octubre 2025",
      events: ["HackDay Nacional", "ElevaDay bimestral"],
    },
    {
      month: "Noviembre 2025",
      events: ["DemoDay proyectos STEAM", "Viernes de Ventas"],
    },
    {
      month: "Diciembre 2025",
      events: ["Cierre de ciclo", "Premiación y certificaciones"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Programas</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Nuestros programas no son solo clases; son catalizadores de sueños, alineados con modelos de impacto global 
              para formar líderes del cambio.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Iniciativas Clave
              </h2>
              <p className="text-xl text-muted-foreground">
                Programas diseñados para transformar ideas en realidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-purple transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-card-foreground">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-foreground/80">{program.duration}</span>
                      </div>
                    </div>
                    <div className="bg-accent/50 rounded-lg p-4 border border-border">
                      <p className="text-sm font-semibold text-primary mb-1">Impacto Esperado:</p>
                      <p className="text-sm text-foreground/80">{program.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-purple hover:scale-105 transition-all duration-300"
              >
                <Link to="/contacto">
                  Participa en un Programa <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Roadmap */}
      <section className="py-20 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Roadmap 2025
              </h2>
              <p className="text-xl text-muted-foreground">
                Agosto - Diciembre: Un viaje de innovación y transformación
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-purple transition-all duration-300 animate-fade-in border-border bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-32">
                        <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold px-4 py-2 rounded-lg text-center">
                          {item.month}
                        </div>
                      </div>
                      <div className="flex-1">
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                              <span className="text-foreground/80">{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-glow to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Transformar tu Futuro?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Únete a nuestros programas y sé parte de la próxima generación de líderes e innovadores mexicanos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-foreground font-bold shadow-glow"
              >
                <Link to="/contacto">Inscríbete Ahora</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/eventos">Ver Eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programas;
