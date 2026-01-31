import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Phone, Send, Heart, Handshake, Users,
  Sparkles, MessageSquare, Globe, ArrowRight, Zap, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacto = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === "es" ? "¡Mensaje enviado!" : "Message sent!",
      description: language === "es"
        ? "Nos pondremos en contacto contigo pronto."
        : "We will get in touch with you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: language === "es" ? "Email" : "Email",
      content: "contacto@conedu.com.mx",
      href: "mailto:contacto@conedu.com.mx",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: language === "es" ? "Ubicación" : "Location",
      content: "Guanajuato y Puebla, México",
      href: "#",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: language === "es" ? "Teléfono" : "Phone",
      content: "+52 (477) 123-4567",
      href: "tel:+524771234567",
      gradient: "from-orange-500 to-rose-600"
    },
  ];

  const ctaCards = [
    {
      icon: Heart,
      title: language === "es" ? "Dona Ahora" : "Donate Now",
      description: language === "es"
        ? "Cambia una vida hoy y construye el México del mañana"
        : "Change a life today and build the Mexico of tomorrow",
      buttonText: language === "es" ? "Hacer Donación" : "Make Donation",
      color: "text-[#E3B037]",
    },
    {
      icon: Handshake,
      title: language === "es" ? "Propón Alianza" : "Propose Partnership",
      description: language === "es"
        ? "Forma parte de nuestra red de colaboradores estratégicos"
        : "Be part of our network of strategic collaborators",
      buttonText: language === "es" ? "Colaborar" : "Collaborate",
      color: "text-[#E3B037]",
    },
    {
      icon: Users,
      title: language === "es" ? "Únete al Equipo" : "Join the Team",
      description: language === "es"
        ? "Sé parte del cambio y ayuda a empoderar a la juventud"
        : "Be part of the change and help empower youth",
      buttonText: language === "es" ? "Aplicar" : "Apply",
      color: "text-[#E3B037]",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <MessageSquare className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Zap className="w-20 h-20 text-white" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
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
              {language === "es" ? "Estamos para escucharte" : "We are here to listen"}
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              {language === "es" ? "CONECTA CON NOSOTROS" : "CONNECT WITH US"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              {language === "es"
                ? "Transformemos juntos el futuro mexicano. Estamos aquí para responder tus preguntas."
                : "Let's transform the Mexican future together. We are here to answer your questions."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left Side: Contact Methods & Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-black text-[#4F1675] tracking-tight">
                  {language === "es" ? "¿Tienes alguna duda?" : "Have any questions?"}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {language === "es"
                    ? "Nuestro equipo está listo para apoyarte en tu camino de innovación y emprendimiento."
                    : "Our team is ready to support you on your innovation and entrepreneurship journey."}
                </p>
              </motion.div>

              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    href={method.href}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group p-6 rounded-3xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-primary/10 shadow-xl hover:shadow-2xl transition-all flex items-center gap-6"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground">{method.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Glassmorphic Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 rounded-[2rem] bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden"
              >
                {/* Decorative elements inside form */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-8 text-[#4F1675] tracking-tight">
                    {language === "es" ? "ENVÍANOS UN MENSAJE" : "SEND US A MESSAGE"}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground ml-1 uppercase">
                          {language === "es" ? "Nombre" : "Name"}
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={language === "es" ? "Tu nombre" : "Your name"}
                          required
                          className="h-14 rounded-2xl bg-white/50 dark:bg-white/5 border-primary/20 focus:ring-secondary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground ml-1 uppercase">
                          {language === "es" ? "Email" : "Email"}
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          required
                          className="h-14 rounded-2xl bg-white/50 dark:bg-white/5 border-primary/20 focus:ring-secondary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1 uppercase">
                        {language === "es" ? "Asunto" : "Subject"}
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={language === "es" ? "¿En qué podemos ayudarte?" : "How can we help?"}
                        required
                        className="h-14 rounded-2xl bg-white/50 dark:bg-white/5 border-primary/20 focus:ring-secondary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1 uppercase">
                        {language === "es" ? "Mensaje" : "Message"}
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === "es" ? "Cuéntanos más sobre tu proyecto o duda..." : "Tell us more about your project or question..."}
                        rows={6}
                        required
                        className="rounded-2xl bg-white/50 dark:bg-white/5 border-primary/20 focus:ring-secondary resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#4F1675] to-[#7C3AED] text-white font-black text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3"
                    >
                      {language === "es" ? "ENVIAR AHORA" : "SEND NOW"}
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Style consistent with LogrosEventos */}
      <section className="py-24 bg-gradient-to-br from-[#4F1675] via-[#7C3AED] to-[#E3B037] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              {language === "es" ? "¿LISTO PARA EMPEZAR?" : "READY TO START?"}
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium">
              {language === "es"
                ? "Hay muchas formas de ser parte de la transformación educativa en México."
                : "There are many ways to be part of the educational transformation in Mexico."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ctaCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect-dark rounded-[2.5rem] p-8 border border-white/20 shadow-2xl flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <card.icon className={`w-10 h-10 ${card.color}`} />
                </div>
                <h3 className="text-2xl font-black mb-3">{card.title}</h3>
                <p className="text-gray-200 mb-8 leading-relaxed font-medium">
                  {card.description}
                </p>
                <motion.div className="mt-auto w-full">
                  <Button
                    className="w-full h-14 rounded-full bg-[#E3B037] text-[#4F1675] font-black hover:bg-white hover:scale-105 transition-all text-base shadow-lg"
                  >
                    {card.buttonText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
