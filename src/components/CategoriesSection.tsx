import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, Wrench, Car } from "lucide-react";

const categories = [
  { icon: Wrench, label: "Services", desc: "Find professional services for any project." },
  { icon: ShoppingBag, label: "Goods", desc: "Browse quality products from verified sellers." },
  { icon: Briefcase, label: "Jobs", desc: "Discover career opportunities near you." },
  { icon: Car, label: "Automobiles", desc: "Buy, sell, or rent vehicles with ease." },
];

const CategoriesSection = () => (
  <section className="py-24" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-12"
      >
        Categories of Activities
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
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
    </div>
  </section>
);

export default CategoriesSection;
