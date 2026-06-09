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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
