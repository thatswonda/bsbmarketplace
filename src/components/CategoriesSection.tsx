import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, Wrench, Car } from "lucide-react";

const categories = [
  { icon: Wrench, label: "Services" },
  { icon: ShoppingBag, label: "Goods" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Car, label: "Automobiles" },
];

const desktopCategories = [
  { icon: Wrench, label: "Services", desc: "Find professional services for any project." },
  { icon: ShoppingBag, label: "Goods", desc: "Browse quality products from verified sellers." },
  { icon: Briefcase, label: "Jobs", desc: "Discover career opportunities near you." },
  { icon: Car, label: "Automobiles", desc: "Buy, sell, or rent vehicles with ease." },
];

const CategoriesSection = () => (
  <section className="py-6 sm:py-24" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-12"
      >
        Categories of Activities
      </motion.h2>

      {/* Desktop: 4 columns */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {desktopCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center p-8 bg-card rounded-[20px] transition-shadow duration-300 cursor-pointer"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4">
              <cat.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{cat.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: 2 cards, each with 2 icons side by side, matching reference */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {/* Card 1: Services + Goods */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-4 flex flex-col items-center text-center"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold text-foreground">Services</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold text-foreground">Goods</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>

        {/* Card 2: Jobs + Automobiles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="bg-card rounded-2xl p-4 flex flex-col items-center text-center"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold text-foreground">Jobs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold text-foreground">Automobiles</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CategoriesSection;
