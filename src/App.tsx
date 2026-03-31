import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PresentationPage from "./pages/Presentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirects to default presentation */}
          <Route path="/" element={<Navigate to="/future-of-ai" replace />} />

          {/* Presentation routes: /:slug, /:slug/:section, /:slug/:section/:slide */}
          <Route path="/:slug" element={<PresentationPage />} />
          <Route path="/:slug/:section" element={<PresentationPage />} />
          <Route path="/:slug/:section/:slide" element={<PresentationPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
