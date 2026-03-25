import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
import ExploreServices from "@/components/ExploreServices";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import NewsletterSection from "@/components/NewsletterSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    {/* Desktop: About before Trust; Mobile: Trust before About */}
    <div className="hidden sm:block">
      <AboutSection />
      <TrustSection />
    </div>
    <div className="sm:hidden">
      <TrustSection />
    </div>
    <PopularOffers />
    <CategoriesSection />
    <ExploreServices />
    <HowItWorks />
    <div className="sm:hidden">
      <AboutSection />
    </div>
    <TestimonialsSection />
    <FAQSection />
    <CtaSection />
    {/* Mobile only: Download app before newsletter */}
    <div className="sm:hidden">
      <DownloadSection />
    </div>
    <NewsletterSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
