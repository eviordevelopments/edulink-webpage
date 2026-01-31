import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const ValuePropTable = () => {
    const { language } = useLanguage();

    const data = [
        {
            stakeholder: "Jóvenes marginados",
            problem: "Desigualdad educativa + exclusión digital",
            solution: "Acceso 100% gratuito a STEAM, emprendimiento, habilidades blandas",
            benefit: "50% mayor empleabilidad; microempresas sostenibles"
        },
        {
            stakeholder: "Instituciones educativas privadas",
            problem: "Brecha de liderazgo y innovación",
            solution: "Programas personalizados de liderazgo transformador",
            benefit: "Egresados innovadores, agentes de cambio; diferenciación institucional"
        },
        {
            stakeholder: "Sector público",
            problem: "Cumplimiento ODS 4 y ODS 8 + baja productividad",
            solution: "Soluciones escalables con métricas claras y ROI social comprobado",
            benefit: "Impacto en miles de beneficiarios; reducción de deserción escolar"
        },
        {
            stakeholder: "Empresas tecnológicas",
            problem: "Déficit de talento STEAM + responsabilidad social",
            solution: "Red de mentores, bolsa de talento, incubación de startups",
            benefit: "Acceso a talento joven; cumplimiento ESG"
        },
        {
            stakeholder: "Gobierno y ONGs",
            problem: "Fragmentación de iniciativas + baja sinergia",
            solution: "Ecosistema coordinado y replicable de educación disruptiva",
            benefit: "Eficiencia en inversión social; escalabilidad regional"
        }
    ];

    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Propuesta de Valor Diferenciadora</h2>
                    <p className="text-muted-foreground">Impacto medible para cada actor del ecosistema.</p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px] border border-white/10 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm">

                        {/* Header */}
                        <div className="grid grid-cols-4 bg-primary/20 text-primary font-bold text-sm uppercase tracking-wider">
                            <div className="p-6">Stakeholder</div>
                            <div className="p-6">Problema</div>
                            <div className="p-6">Nuestra Solución</div>
                            <div className="p-6">Beneficio Medible</div>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-white/10">
                            {data.map((row, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="grid grid-cols-4 text-sm group hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-6 font-bold text-white group-hover:text-primary transition-colors">{row.stakeholder}</div>
                                    <div className="p-6 text-muted-foreground">{row.problem}</div>
                                    <div className="p-6 text-white">{row.solution}</div>
                                    <div className="p-6 text-green-400 font-medium">{row.benefit}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuePropTable;
