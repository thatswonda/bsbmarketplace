import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import sellIcon from "@/assets/sell-icon.png";
import buyIcon from "@/assets/buy-icon.png";
import servicesIcon from "@/assets/services-icon.png";
import hireIcon from "@/assets/hire-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import networkIcon from "@/assets/network-icon.png";

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
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 text-balance"
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
          className="text-muted-foreground text-sm sm:text-lg mb-10 sm:mb-16 max-w-xl mx-auto"
        >
          Sell anything · Buy anything · Hire services · Offer services
          <br />
          Get jobs · Network
        </motion.p>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card rounded-2xl cursor-pointer transition-shadow duration-300"
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
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
