import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", title: "Best Experience", text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", rating: 5, color: "bg-accent" },
  { name: "James K.", title: "Amazing Experience", text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", rating: 5, color: "bg-orange-100" },
  { name: "Amara O.", title: "Great Experience", text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", rating: 5, color: "bg-pink-100" },
];

const TestimonialsSection = () => (
  <section className="py-6 sm:py-24 bg-card">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-12"
      >
        Testimonials
      </motion.h2>

      {/* Desktop: 3 column grid */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-card rounded-[20px] transition-shadow duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center`}>
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{t.title}</h4>
                <p className="text-xs text-muted-foreground">{t.name}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical card list */}
      <div className="flex flex-col gap-3 md:hidden">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-3 bg-card rounded-2xl"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                <User className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-sm font-bold text-foreground">{t.title}</h4>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{t.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-border" />
          <div className="w-2 h-2 rounded-full bg-border" />
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
