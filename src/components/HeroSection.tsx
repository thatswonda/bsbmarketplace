import { motion, type Transition } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import sellIcon from "@/assets/sell-icon.png";
import buyIcon from "@/assets/buy-icon.png";
import servicesIcon from "@/assets/services-icon.png";
import hireIcon from "@/assets/hire-icon.png";
import jobsIcon from "@/assets/jobs-icon.png";
import networkIcon from "@/assets/network-icon.png";
import phoneMockup from "@/assets/phone-mockup.png";
import { Check } from "lucide-react";

const features = [
  { icon: sellIcon, label: "Sell" },
  { icon: buyIcon, label: "Buy" },
  { icon: jobsIcon, label: "Get Jobs" },
  { icon: servicesIcon, label: "Offer Services" },
  { icon: hireIcon, label: "Hire Services" },
  { icon: networkIcon, label: "Network" },
];

const floatAnimation = (delay: number, x: number, y: number) => ({
  initial: { opacity: 0, scale: 0.5, x: x * 0.5, y: y * 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: [0, -8, 0],
    transition: {
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      x: { duration: 0.6, delay },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.6 },
    },
  },
});

const leftItems = ["Sell anything", "Buy anything", "Hire services", "Offer services"];
const rightItems = ["Get jobs", "Network", "All about business within your location and globally"];

// Positions for floating icons around the phone (mobile layout)
const iconPositions = [
  { top: "8%", left: "-2%", x: -30, y: -20 },    // Sell - top left
  { top: "35%", left: "-8%", x: -40, y: 0 },     // Buy - mid left
  { bottom: "12%", left: "-2%", x: -30, y: 20 },  // Get Jobs - bottom left
  { top: "8%", right: "-2%", x: 30, y: -20 },     // Offer Services - top right
  { top: "38%", right: "-8%", x: 40, y: 0 },     // Hire Services - mid right
  { bottom: "12%", right: "-2%", x: 30, y: 20 },  // Network - bottom right
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative pt-20 sm:pt-32 pb-6 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3 sm:mb-6 text-balance"
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
            className="text-muted-foreground text-xs sm:text-lg mb-8 sm:mb-16 max-w-xl mx-auto"
          >
            Sell anything · Buy anything · Hire services · Offer services
            <br />
            Get jobs · Network
          </motion.p>

          {/* Phone mockup with floating icons */}
          <div className="relative mx-auto w-[320px] sm:w-[400px] mb-8 sm:mb-16">
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 mx-auto w-[180px] sm:w-[220px]"
            >
              <img
                src={phoneMockup}
                alt="BSB App"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating feature icons */}
            {features.map((feature, i) => {
              const pos = iconPositions[i];
              return (
                <motion.div
                  key={feature.label}
                  {...floatAnimation(0.5 + i * 0.12, pos.x, pos.y)}
                  className="absolute z-20 flex flex-col items-center gap-1"
                  style={{
                    top: pos.top,
                    bottom: (pos as any).bottom,
                    left: pos.left,
                    right: (pos as any).right,
                  }}
                >
                  <div
                    className="bg-card rounded-xl p-2 sm:p-3 flex flex-col items-center gap-1"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.label}
                      className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground whitespace-nowrap">
                      {feature.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Dashed connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 320 400">
              <motion.path
                d="M60 60 Q90 100 140 120"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path
                d="M260 60 Q230 100 180 120"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.path
                d="M40 180 Q80 190 130 200"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
              <motion.path
                d="M280 180 Q240 190 190 200"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
            </svg>
          </div>

          {/* Checklist section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-5 sm:p-10 mb-6 sm:mb-10 max-w-lg mx-auto"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <div className="flex flex-col gap-2.5">
                {leftItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs sm:text-base text-foreground font-medium leading-tight text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {rightItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-xs sm:text-base text-foreground font-medium leading-tight text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.4 4.8C17.07 4.83 18.97 5.08 20.18 6.88C20.07 6.95 17.7 8.32 17.73 11.16C17.76 14.56 20.67 15.65 20.7 15.66C20.67 15.74 20.22 17.33 19.11 18.97L18.71 19.5ZM13.05 4.24C13.78 3.38 14.25 2.19 14.12 1C13.09 1.04 11.85 1.69 11.1 2.55C10.42 3.31 9.85 4.53 10 5.69C11.14 5.78 12.31 5.1 13.05 4.24Z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] sm:text-[10px] opacity-80">Download on the</div>
                <div className="text-[11px] sm:text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground text-card rounded-lg sm:rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302L21.884 12l-1.884 1.19-2.302-2.302L19.884 12l-2.186-1.492zM5.864 2.658L16.8 8.99l-2.302 2.303L5.864 2.658z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] sm:text-[10px] opacity-80">Get it on</div>
                <div className="text-[11px] sm:text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
