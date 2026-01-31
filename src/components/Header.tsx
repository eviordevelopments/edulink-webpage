import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Lightbulb, DollarSign, Leaf, Users, Languages, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import logo from "@/assets/isologo-conedu.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramsDropdownOpen(false);
      }
    };

    if (isProgramsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProgramsDropdownOpen]);

  const navItems = [
    { name: language === "es" ? "Sobre Nosotros" : "About Us", path: "/" },
    { name: language === "es" ? "Alianzas" : "Alliances", path: "/alianzas" },
    { name: "HackMinds", path: "/hackminds" },
    { name: language === "es" ? "Logros y Eventos" : "Achievements & Events", path: "/logros-eventos" },
    { name: language === "es" ? "Roadmap" : "Roadmap", path: "/roadmap" },
    { name: language === "es" ? "Contacto" : "Contact", path: "/contacto" },
  ];

  const programItems = [
    {
      name: language === "es" ? "Innovación y Tecnología" : "Innovation & Technology",
      path: "/programas/innovacion-tecnologia",
      icon: Lightbulb,
      description: language === "es" ? "STEAM + IA ética y prototipado" : "STEAM + Ethical AI & Prototyping",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: language === "es" ? "Educación Financiera" : "Financial Education",
      path: "/programas/educacion-financiera",
      icon: DollarSign,
      description: language === "es" ? "Simuladores y alfabetización financiera" : "Simulators & Financial Literacy",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: language === "es" ? "Sustentabilidad" : "Sustainability",
      path: "/programas/sustentabilidad",
      icon: Leaf,
      description: language === "es" ? "Agritech y soluciones ambientales" : "Agritech & Environmental Solutions",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: language === "es" ? "Impacto Social" : "Social Impact",
      path: "/programas/impacto-social",
      icon: Users,
      description: language === "es" ? "Equidad y bienestar comunitario" : "Equity & Community Wellbeing",
      color: "from-purple-500 to-pink-600"
    },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-4">
      <div className={`rounded-full transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-glow border border-primary/20"
        : "bg-background/80 backdrop-blur-sm border border-primary/10"
        }`}>
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="CONEDU Isologo"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                CONEDU
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.filter(item => item.path !== "/contacto" && item.path !== "/roadmap").map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}

              {/* Programs Dropdown moved earlier */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                  className={`text-sm font-medium transition-colors relative group flex items-center gap-1 ${location.pathname.startsWith("/programas")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {language === "es" ? "Programas" : "Programs"}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isProgramsDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${location.pathname.startsWith("/programas") ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProgramsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-glow p-4 animate-fade-in z-50">
                    <div className="space-y-3">
                      {programItems.map((program, index) => (
                        <Link
                          key={program.path}
                          to={program.path}
                          onClick={() => setIsProgramsDropdownOpen(false)}
                          className="group block p-3 rounded-xl hover:bg-accent/50 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <program.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {program.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {program.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Roadmap & Contacto at the end */}
              {navItems.filter(item => item.path === "/roadmap" || item.path === "/contacto").map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Language Toggle & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="p-2 rounded-full hover:bg-accent transition-colors flex items-center gap-2 text-sm font-semibold"
              >
                <Languages size={20} className="text-primary" />
                <span className="uppercase">{language}</span>
              </button>
              <Button
                asChild
                variant="default"
                className="bg-gradient-to-r from-secondary to-secondary-dark text-foreground font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Link to="/contacto">{language === 'es' ? 'Únete al Cambio' : 'Join the Change'}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-background z-40 pt-24 px-6 animate-fade-in">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-6 rounded-lg transition-colors text-lg ${location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-accent"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Programs Section */}
                <div className="space-y-3">
                  <div className="px-6 py-3 text-lg font-semibold text-primary">
                    {language === "es" ? "Programas" : "Programs"}
                  </div>
                  {programItems.map((program) => (
                    <Link
                      key={program.path}
                      to={program.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-4 py-3 px-6 rounded-lg transition-colors ${location.pathname === program.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-accent"
                        }`}
                    >
                      <program.icon className="w-5 h-5" />
                      <div>
                        <div className="text-base font-medium">{program.name}</div>
                        <div className="text-sm text-muted-foreground">{program.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pt-6 space-y-4">
                  <button
                    onClick={() => {
                      setLanguage(language === 'es' ? 'en' : 'es');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-3 px-6 rounded-lg bg-accent flex items-center justify-between text-lg font-semibold"
                  >
                    <div className="flex items-center gap-3">
                      <Languages size={24} className="text-primary" />
                      <span>{language === 'es' ? 'English Version' : 'Versión en Español'}</span>
                    </div>
                    <span className="uppercase bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {language === 'es' ? 'EN' : 'ES'}
                    </span>
                  </button>
                  <Button
                    asChild
                    variant="default"
                    className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-foreground font-semibold py-3 text-lg"
                  >
                    <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                      {language === 'es' ? 'Únete al Cambio' : 'Join the Change'}
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
