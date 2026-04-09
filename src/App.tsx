import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import HowWeOperate from "./pages/HowWeOperate";
import Services from "./pages/Services";
import LocalDeliveries from "./pages/services/LocalDeliveries";
import International from "./pages/services/International";
import ClickShip from "./pages/services/ClickShip";
import POBox from "./pages/services/POBox";
import BusinessPortal from "./pages/services/BusinessPortal";
import Government from "./pages/Government";
import Corporate from "./pages/Corporate";
import Ecommerce from "./pages/Ecommerce";
import MarriageBloodTest from "./pages/services/MarriageBloodTest";
import BirthDeathCertificate from "./pages/services/BirthDeathCertificate";
import DPHA from "./pages/services/DPHA";
import Track from "./pages/Track";
import Contact from "./pages/Contact";
import Branches from "./pages/Branches";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Careers from "./pages/Careers";
import VacancyDetail from "./pages/VacancyDetail";
import Guidelines from "./pages/Guidelines";
import FAQ from "./pages/FAQ";
import HowToSend from "./pages/HowToSend";
import ProhibitedItems from "./pages/ProhibitedItems";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/how-we-operate" element={<HowWeOperate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/local-deliveries" element={<LocalDeliveries />} />
            <Route path="/services/international" element={<International />} />
            <Route path="/services/click-ship" element={<ClickShip />} />
            <Route path="/services/po-box" element={<POBox />} />
            <Route path="/services/business-portal" element={<BusinessPortal />} />
            <Route path="/services/government" element={<Government />} />
            <Route path="/services/corporate" element={<Corporate />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/government/marriage-blood-test" element={<MarriageBloodTest />} />
            <Route path="/services/government/birth-death-certificate" element={<BirthDeathCertificate />} />
            <Route path="/services/government/dpha" element={<DPHA />} />
            <Route path="/track" element={<Track />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<VacancyDetail />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-to-send" element={<HowToSend />} />
            <Route path="/prohibited-items" element={<ProhibitedItems />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
