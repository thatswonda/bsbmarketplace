import { motion } from "framer-motion";
import { Search, ShoppingCart, Handshake, Star } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse & Discover", desc: "Explore thousands of listings across goods, services, jobs, and more in your area or globally." },
  { icon: ShoppingCart, title: "Choose & Connect", desc: "Find exactly what you need and connect directly with sellers, service providers, or employers." },
  { icon: Handshake, title: "Deal & Transact", desc: "Negotiate, agree on terms, and complete your transaction safely and conveniently." },
  { icon: Star, title: "Rate & Review", desc: "Share your experience to help the community and build trust across the marketplace." },
];

const HowItWorks = () => (
  <section className="hidden md:block py-24 bg-card">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Get started in four simple steps and unlock the full power of BSB Market.</p>
      </motion.div>

      <div className="grid grid-cols-4 gap-8 relative">
        {/* Connecting line */}
        <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mb-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <step.icon className="w-10 h-10 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary mb-2">Step {i + 1}</span>
            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
