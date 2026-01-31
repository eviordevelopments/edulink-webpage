import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CallToAction = () => {

    const styles = {
        card: "bg-secondary/30 border border-border/50 p-8 rounded-3xl mt-8 min-h-[400px] flex flex-col justify-between"
    };

    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-12">LLAMADA A LA ACCIÓN</h2>

                <Tabs defaultValue="partners" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-2 bg-secondary/50 rounded-full">
                        <TabsTrigger value="partners" className="rounded-full py-3">Empresas</TabsTrigger>
                        <TabsTrigger value="gov" className="rounded-full py-3">Gobierno</TabsTrigger>
                        <TabsTrigger value="edu" className="rounded-full py-3">Escuelas</TabsTrigger>
                        <TabsTrigger value="youth" className="rounded-full py-3">Jóvenes</TabsTrigger>
                    </TabsList>

                    <TabsContent value="partners" className={styles.card}>
                        <div className="text-left space-y-6">
                            <h3 className="text-3xl font-bold">Para Empresas Tecnológicas</h3>
                            <p className="text-lg text-muted-foreground">Únase a HackMinds como aliado de excelencia.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Acceso a 100+ candidatos pre-filtrados anualmente.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Mejora de métricas ESG comprobable.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Visibilidad mediática y reputacional.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Mentoría especializada y voluntariado corporativo.</span></li>
                            </ul>
                        </div>
                        <Button size="lg" className="w-full mt-8 text-lg font-bold">Convertirse en Aliado <ArrowRight className="ml-2" /></Button>
                    </TabsContent>

                    <TabsContent value="gov" className={styles.card}>
                        <div className="text-left space-y-6">
                            <h3 className="text-3xl font-bold">Sector Público y Gobiernos</h3>
                            <p className="text-lg text-muted-foreground">Alianza para cumplimiento acelerado de ODS 4 y 8.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Soluciones llave en mano con métricas probadas.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Reducción de deserción escolar (ahorro fiscal).</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Mejora de competitividad regional.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Gobernanza colaborativa en toma de decisiones.</span></li>
                            </ul>
                        </div>
                        <Button size="lg" className="w-full mt-8 text-lg font-bold">Agendar Reunión Estratégica <ArrowRight className="ml-2" /></Button>
                    </TabsContent>

                    <TabsContent value="edu" className={styles.card}>
                        <div className="text-left space-y-6">
                            <h3 className="text-3xl font-bold">Instituciones Educativas</h3>
                            <p className="text-lg text-muted-foreground">Programas que convierten estudiantes en agentes de cambio.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Liderazgo transformador para estudiantes.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Certificaciones en emprendimiento e innovación.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Reputación institucional mejorada.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Reclutamiento facilitado.</span></li>
                            </ul>
                        </div>
                        <Button size="lg" className="w-full mt-8 text-lg font-bold">Implementar HackMinds <ArrowRight className="ml-2" /></Button>
                    </TabsContent>

                    <TabsContent value="youth" className={styles.card}>
                        <div className="text-left space-y-6">
                            <h3 className="text-3xl font-bold">Comunidades y Jóvenes</h3>
                            <p className="text-lg text-muted-foreground">Educación 100% gratuita para transformar tu futuro.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Educación en emprendimiento, tech y liderazgo.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Comunidad de excelencia y networking.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Oportunidades reales de empleo e ingresos.</span></li>
                                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> <span>Requisitos: 12-35 años, internet, compromiso.</span></li>
                            </ul>
                        </div>
                        <Button size="lg" className="w-full mt-8 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600">Inscribirse Ahora <ArrowRight className="ml-2" /></Button>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default CallToAction;
