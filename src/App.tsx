import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // ✅ removed BrowserRouter

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import ChatBot from "./components/ChatBot";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* ✅ Router now handled by HashRouter in main.tsx */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>

      {/* Shared UI */}
      <BackToTop />
      <ChatBot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
