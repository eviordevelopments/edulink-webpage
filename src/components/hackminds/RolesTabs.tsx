import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, BookOpen, Building2, GraduationCap, ChevronRight } from "lucide-react";

const RolesTabs = () => {
    const { language } = useLanguage();

    const tabs = [
        { id: "student", icon: User, labelEs: "Estudiante", labelEn: "Student", color: "text-orange-500" },
        { id: "mentor", icon: BookOpen, labelEs: "Mentor", labelEn: "Mentor", color: "text-blue-500" },
        { id: "sponsor", icon: Building2, labelEs: "Empresa", labelEn: "Sponsor", color: "text-purple-500" },
        { id: "partner", icon: GraduationCap, labelEs: "Institución", labelEn: "Partner", color: "text-green-500" },
    ];

    const content = {
        student: {
            titleEs: "De la idea a la realidad",
            titleEn: "From idea to reality",
            benefitsEs: ["Acceso 100% gratuito", "Mentoría global", "Certificaciones Tech", "+50% empleabilidad"],
            benefitsEn: ["100% Free Access", "Global Mentorship", "Tech Certifications", "+50% Employability"],
            ctaEs: "Aplica a una Ruta",
            ctaEn: "Apply to a Track"
        },
        mentor: {
            titleEs: "Deja un legado",
            titleEn: "Leave a legacy",
            benefitsEs: ["Certificación como docente innovador", "Networking de alto nivel", "Acceso a talento joven"],
            benefitsEn: ["Innovative Teacher Certification", "High-level Networking", "Access to Young Talent"],
            ctaEs: "Conviértete en Mentor",
            ctaEn: "Become a Mentor"
        },
        sponsor: {
            titleEs: "ROI Social comprobado",
            titleEn: "Proven Social ROI",
            benefitsEs: ["Acceso a talento pre-filtrado", "Cumplimiento ESG/ODS", "Voluntariado corporativo"],
            benefitsEn: ["Access to Pre-vetted Talent", "ESG/SDG Compliance", "Corporate Volunteering"],
            ctaEs: "Colabora con Nosotros",
            ctaEn: "Collaborate with Us"
        },
        partner: {
            titleEs: "Diferenciación Institucional",
            titleEn: "Institutional Differentiation",
            benefitsEs: ["Programas personalizados", "Reducción de deserción", "Innovación académica"],
            benefitsEn: ["Custom Programs", "Drop-out Reduction", "Academic Innovation"],
            ctaEs: "Alianza Académica",
            ctaEn: "Academic Alliance"
        }
    };

    return (
        <section className="py-24 bg-black/5 dark:bg-white/5">
            <div className="container px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        {language === "es" ? "Tu Rol en el Ecosistema" : "Your Role in the Ecosystem"}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {language === "es" ? "Encuentra tu lugar en HackMinds 2026" : "Find your place in HackMinds 2026"}
                    </p>
                </div>

                <Tabs defaultValue="student" className="max-w-4xl mx-auto">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto p-2 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="h-16 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg rounded-xl transition-all"
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <tab.icon className={`w-5 h-5 ${tab.color}`} />
                                    <span className="font-bold">{language === "es" ? tab.labelEs : tab.labelEn}</span>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(content).map(([key, data]) => (
                        <TabsContent key={key} value={key} className="mt-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="p-8 md:p-12 rounded-3xl bg-background border border-white/10 shadow-2xl overflow-hidden relative"
                            >
                                {/* Background glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-${key === 'student' ? 'orange' : key === 'mentor' ? 'blue' : key === 'sponsor' ? 'purple' : 'green'
                                    }-500/20 to-transparent blur-3xl opacity-50`}></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                    <div className="flex-1 space-y-6 text-center md:text-left">
                                        <h3 className="text-3xl md:text-4xl font-black">{language === "es" ? data.titleEs : data.titleEn}</h3>
                                        <ul className="space-y-4 inline-block text-left">
                                            {(language === "es" ? data.benefitsEs : data.benefitsEn).map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4">
                                            <Button size="lg" className="rounded-full px-8 text-lg font-bold h-12">
                                                {language === "es" ? data.ctaEs : data.ctaEn}
                                                <ChevronRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Placeholder Image/Graphic for each tab */}
                                    <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                                        <span className="text-4xl">🚀</span>
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default RolesTabs;
