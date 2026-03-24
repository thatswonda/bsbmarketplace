import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
import ExploreServices from "@/components/ExploreServices";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PopularOffers />
    <CategoriesSection />
    <ExploreServices />
    <HowItWorks />
    <StatsSection />
    <TestimonialsSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
