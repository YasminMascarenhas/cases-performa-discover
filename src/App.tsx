import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseAxiaAgro from "./pages/CaseAxiaAgro.tsx";
import CaseAxiaAgroIA from "./pages/CaseAxiaAgroIA.tsx";
import CaseAxiaAgroPortal from "./pages/CaseAxiaAgroPortal.tsx";
import CaseAleCockpit from "./pages/CaseAleCockpit.tsx";
import CaseBorgWarnerPortal from "./pages/CaseBorgWarnerPortal.tsx";
import CaseCognaAIJourney from "./pages/CaseCognaAIJourney.tsx";
import CaseContinentalPortal from "./pages/CaseContinentalPortal.tsx";
import CaseCrodaPlataforma from "./pages/CaseCrodaPlataforma.tsx";
import CaseEatonBlueSapphire from "./pages/CaseEatonBlueSapphire.tsx";
import CaseEatonLifeSafety from "./pages/CaseEatonLifeSafety.tsx";
import CaseEatonPortoFeliz from "./pages/CaseEatonPortoFeliz.tsx";
import CaseEatonBlueGuardian from "./pages/CaseEatonBlueGuardian.tsx";
import CaseEduFlexPocIA from "./pages/CaseEduFlexPocIA.tsx";
import CaseEurochemTaNaMao from "./pages/CaseEurochemTaNaMao.tsx";
import CaseGpaPlataformaLogistica from "./pages/CaseGpaPlataformaLogistica.tsx";
import CaseGpaClienteMais from "./pages/CaseGpaClienteMais.tsx";
import CaseGpaGamification from "./pages/CaseGpaGamification.tsx";
import CaseGpaProgramaClienteMais from "./pages/CaseGpaProgramaClienteMais.tsx";
import CaseGpaPraJaMarketing from "./pages/CaseGpaPraJaMarketing.tsx";
import CaseGpaAcessibilidade from "./pages/CaseGpaAcessibilidade.tsx";
import CaseGpaVencimento from "./pages/CaseGpaVencimento.tsx";
import CaseGpaMigracaoGcp from "./pages/CaseGpaMigracaoGcp.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pdf") === "1") {
      document.body.classList.add("pdf-mode");
      if (params.get("nohdr") === "1") document.body.classList.add("pdf-mode-no-header");
    }
  }, []);
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case/axia-agro" element={<CaseAxiaAgro />} />
          <Route path="/case/axia-agro-ia" element={<CaseAxiaAgroIA />} />
          <Route path="/case/axia-agro-portal" element={<CaseAxiaAgroPortal />} />
          <Route path="/case/ale-cockpit-tatico" element={<CaseAleCockpit />} />
          <Route path="/case/borgwarner-portal-b2b" element={<CaseBorgWarnerPortal />} />
          <Route path="/case/cogna-ai-journey" element={<CaseCognaAIJourney />} />
          <Route path="/case/continental-portal-sap" element={<CaseContinentalPortal />} />
          <Route path="/case/croda-plataforma-digital" element={<CaseCrodaPlataforma />} />
          <Route path="/case/eaton-blue-sapphire" element={<CaseEatonBlueSapphire />} />
          <Route path="/case/eaton-life-safety" element={<CaseEatonLifeSafety />} />
          <Route path="/case/eaton-porto-feliz" element={<CaseEatonPortoFeliz />} />
          <Route path="/case/eaton-blue-guardian" element={<CaseEatonBlueGuardian />} />
          <Route path="/case/eduflex-poc-ia" element={<CaseEduFlexPocIA />} />
          <Route path="/case/eurochem-ta-na-mao" element={<CaseEurochemTaNaMao />} />
          <Route path="/case/gpa-plataforma-logistica" element={<CaseGpaPlataformaLogistica />} />
          <Route path="/case/gpa-cliente-mais" element={<CaseGpaClienteMais />} />
          <Route path="/case/gpa-gamification" element={<CaseGpaGamification />} />
          <Route path="/case/gpa-programa-cliente-mais" element={<CaseGpaProgramaClienteMais />} />
          <Route path="/case/gpa-praja-marketing" element={<CaseGpaPraJaMarketing />} />
          <Route path="/case/gpa-acessibilidade" element={<CaseGpaAcessibilidade />} />
          <Route path="/case/gpa-vencimento" element={<CaseGpaVencimento />} />
          <Route path="/case/gpa-migracao-gcp" element={<CaseGpaMigracaoGcp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};


export default App;
