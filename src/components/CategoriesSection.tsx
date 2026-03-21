import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Wrench, ShoppingBag, Briefcase, Car, FileText, Building2,
  Megaphone, Store, Smartphone, BookOpen, BarChart3, ChevronLeft, ChevronRight
} from "lucide-react";

const categories = [
  { icon: Wrench, label: "Services" },
  { icon: ShoppingBag, label: "Goods" },
  { icon: FileText, label: "Contracts" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Building2, label: "Real Estate" },
  { icon: Car, label: "Automobiles" },
  { icon: Megaphone, label: "Promotions" },
  { icon: Store, label: "Panteka" },
  { icon: Smartphone, label: "Gadgets" },
  { icon: BookOpen, label: "Ebooks" },
  { icon: BarChart3, label: "Shares" },
];

const CategoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section className="py-6 sm:py-24" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground"
          >
            Categories of Activities
          </motion.h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full bg-card flex items-center justify-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Slidable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-4 sm:p-8 bg-card rounded-2xl sm:rounded-[20px] transition-shadow duration-300 cursor-pointer snap-start flex-shrink-0 w-[100px] sm:w-[160px]"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent flex items-center justify-center mb-2 sm:mb-4">
                <cat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{cat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default CategoriesSection;
