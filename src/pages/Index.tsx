import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
import ExploreServices from "@/components/ExploreServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import ChecklistSection from "@/components/ChecklistSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PopularOffers />
    <CategoriesSection />
    <ExploreServices />
    <TestimonialsSection />
    <ChecklistSection />
    <DownloadSection />
    <Footer />
  </div>
);

export default Index;
