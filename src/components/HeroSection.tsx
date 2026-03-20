import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import sellIcon from "@/assets/sell-icon.png";
import buyIcon from "@/assets/buy-icon.png";
import servicesIcon from "@/assets/services-icon.png";
import hireIcon from "@/assets/hire-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import networkIcon from "@/assets/network-icon.png";
import HeroBanner from "./HeroBanner";

const features = [
  { icon: sellIcon, label: "Sell" },
  { icon: buyIcon, label: "Buy" },
  { icon: jobsIcon, label: "Get Jobs" },
  { icon: servicesIcon, label: "Offer Services" },
  { icon: hireIcon, label: "Hire Services" },
  { icon: networkIcon, label: "Network" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Desktop hero */}
      <div className="hidden md:block">
        <div className="relative pt-32 pb-20">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance"
            >
              Get <span className="text-primary">everything</span> you{" "}
              <span className="text-primary">need</span>
              <br />
              in one place
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto"
            >
              Sell anything · Buy anything · Hire services · Offer services
              <br />
              Get jobs · Network
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center gap-3 p-4 bg-card rounded-2xl cursor-pointer transition-shadow duration-300"
                  style={{ boxShadow: "var(--card-shadow)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "var(--card-shadow)")
                  }
                >
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile hero: banner slider */}
      <div className="md:hidden pt-14">
        <HeroBanner />
      </div>
    </section>
  );
};

export default HeroSection;
