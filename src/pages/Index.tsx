import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
import ExploreServices from "@/components/ExploreServices";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustSection />
    <PopularOffers />
    <CategoriesSection />
    <ExploreServices />
    <HowItWorks />
    <StatsSection />
    <AboutSection />
    <TestimonialsSection />
    <FAQSection />
    <CtaSection />
    <NewsletterSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
