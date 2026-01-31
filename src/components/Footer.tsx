import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-yellow.png";

const Footer = () => {
  const footerLinks = {
    navegacion: [
      { name: "Inicio", path: "/" },
      { name: "Sobre Nosotros", path: "/" },
      { name: "Programas", path: "/programas" },
      { name: "Alianzas", path: "/alianzas" },
    ],
    recursos: [
      { name: "Blog", path: "/blog" },
      { name: "Logros y Eventos", path: "/logros-eventos" },
      { name: "Foros", path: "/foros" },
      { name: "Tecnología", path: "/tecnologia" },
    ],
    participa: [
      { name: "Dona Ahora", path: "/contacto#dona" },
      { name: "Forma una Mesa", path: "/equipo" },
      { name: "Únete al Equipo", path: "/contacto#equipo" },
      { name: "Propón Alianza", path: "/contacto#alianza" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary via-primary to-black text-primary-foreground pt-16 pb-8">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="CONEDU" className="h-12 w-12" />
              <span className="text-2xl font-bold text-secondary">CONEDU</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              Empoderando a niños, niñas y jóvenes mexicanos con habilidades para transformar ideas en realidad.
              Con orgullo mexicano, construimos líderes globales desde lo local a lo global.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin size={16} />
              <span> Guanajuato | Puebla | México </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Participa</h3>
            <ul className="space-y-2">
              {footerLinks.participa.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-secondary/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-secondary/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Conéctate al Futuro</h3>
            <p className="text-primary-foreground/80 mb-4">
              Suscríbete para recibir noticias sobre programas, eventos y oportunidades
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-background/20 border border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary-dark text-foreground font-semibold">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contacto@conedu.com.mx"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60 text-center md:text-right">
              <p>© {new Date().getFullYear()} CONEDU. Todos los derechos reservados.</p>
              <p className="text-xs mt-1">Con ❤️ Hecho en México 🇲🇽</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
