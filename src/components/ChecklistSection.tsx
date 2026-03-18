import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Sell anything",
  "Buy anything",
  "Hire services",
  "Offer services",
  "Get jobs",
  "Network",
  "All about business within your location and globally",
];

const ChecklistSection = () => (
  <section className="py-24" style={{ background: "var(--hero-gradient)" }}>
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-[24px] p-8 sm:p-12"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
          Everything you need, one platform
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ChecklistSection;
