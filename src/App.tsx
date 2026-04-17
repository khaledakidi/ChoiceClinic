import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/contexts/I18nContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index.tsx";
import DentalPage from "./pages/DentalPage.tsx";
import HairPage from "./pages/HairPage.tsx";
import FacePage from "./pages/FacePage.tsx";
import BariatricPage from "./pages/BariatricPage.tsx";
import EyePage from "./pages/EyePage.tsx";
import AwardsPage from "./pages/AwardsPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <I18nProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dental" element={<DentalPage />} />
              <Route path="/hair" element={<HairPage />} />
              <Route path="/face" element={<FacePage />} />
              <Route path="/bariatric" element={<BariatricPage />} />
              <Route path="/eye" element={<EyePage />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </I18nProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
