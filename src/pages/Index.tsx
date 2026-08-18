import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PopularOffers from "@/components/PopularOffers";
import CategoriesSection from "@/components/CategoriesSection";
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
    {/* Desktop: About before Trust */}
    <div className="hidden sm:block">
      <AboutSection />
      <TrustSection />
    </div>
    {/* Mobile: HowItWorks before Trust */}
    <div className="sm:hidden">
      <HowItWorks />
      <TrustSection />
    </div>
    {/* Desktop: HowItWorks before Popular listings */}
    <div className="hidden sm:block">
      <HowItWorks />
    </div>
    <PopularOffers />
    {/* Mobile: Categories here, desktop after HowItWorks */}
    <div className="sm:hidden">
      <CategoriesSection />
    </div>
    <div className="hidden sm:block">
      <CategoriesSection />
    </div>
    <div className="sm:hidden">
      <AboutSection />
    </div>
    <TestimonialsSection />
    <FAQSection />
    <CtaSection />
    <NewsletterSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
