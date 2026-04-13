import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Work from "./pages/Work";
import WorkplaceInclusion from "./pages/WorkplaceInclusion";
import AccessibleIelts from "./pages/AccessibleIelts";
import CapacityBuilding from "./pages/CapacityBuilding";
import ExperientialAdvocacy from "./pages/ExperientialAdvocacy";
import CreativeAdvocacy from "./pages/CreativeAdvocacy";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Resources from "./pages/Resources";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Blogs from "./pages/Blogs";
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
            <Route path="/team" element={<Team />} />
            <Route path="/work" element={<Work />} />
            <Route path="/workplace-inclusion" element={<WorkplaceInclusion />} />
            <Route path="/accessible-ielts" element={<AccessibleIelts />} />
            <Route path="/capacity-building" element={<CapacityBuilding />} />
            <Route path="/experiential-advocacy" element={<ExperientialAdvocacy />} />
            <Route path="/creative-advocacy" element={<CreativeAdvocacy />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
