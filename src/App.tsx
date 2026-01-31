import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programas from "./pages/Programas";
import Contacto from "./pages/Contacto";
import Alianzas from "./pages/Alianzas";
import InnovacionTecnologia from "./pages/InnovacionTecnologia";
import EducacionFinanciera from "./pages/EducacionFinanciera";
import Sustentabilidad from "./pages/Sustentabilidad";
import ImpactoSocial from "./pages/ImpactoSocial";
import Roadmap from "./pages/Roadmap";
import LogrosEventos from "./pages/LogrosEventos";
import AgentCampEvent from "./pages/AgentCampEvent";
import HackMindsLanding from "./pages/hackminds/HackMindsLanding";
import HackMindsRoutes from "./pages/hackminds/HackMindsRoutes";
import HackMindsEvents from "./pages/hackminds/HackMindsEvents";
import EmprenderParaAprender from "./pages/hackminds/EmprenderParaAprender";

import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/alianzas" element={<Alianzas />} />
            <Route path="/programas/innovacion-tecnologia" element={<InnovacionTecnologia />} />
            <Route path="/programas/educacion-financiera" element={<EducacionFinanciera />} />
            <Route path="/programas/sustentabilidad" element={<Sustentabilidad />} />
            <Route path="/programas/impacto-social" element={<ImpactoSocial />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/logros-eventos" element={<LogrosEventos />} />
            <Route path="/logros" element={<LogrosEventos />} />
            <Route path="/eventos" element={<LogrosEventos />} />
            <Route path="/eventos/agentcamp-guanajuato-2026" element={<AgentCampEvent />} />

            {/* HackMinds Routes */}
            <Route path="/hackminds" element={<HackMindsLanding />} />
            <Route path="/hackminds/rutas" element={<HackMindsRoutes />} />
            <Route path="/hackminds/eventos" element={<HackMindsEvents />} />
            <Route path="/hackminds/emprender-para-aprender" element={<EmprenderParaAprender />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Alianzas />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
