import { motion } from "framer-motion";
import { Star } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialAmara from "@/assets/testimonial-amara.jpg";

const testimonials = [
  { name: "Sarah M.", title: "Best Experience", text: "BSB Market made it so easy to find exactly what I needed. The platform is smooth and reliable.", rating: 5, color: "bg-accent", img: testimonialSarah },
  { name: "James K.", title: "Amazing Experience", text: "I sold my products within hours of listing them. Highly recommend this marketplace to everyone.", rating: 5, color: "bg-orange-100", img: testimonialJames },
  { name: "Amara O.", title: "Great Experience", text: "Found a professional photographer for my event in minutes. The service quality was outstanding.", rating: 5, color: "bg-pink-100", img: testimonialAmara },
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
              <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
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
              <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
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
                <p className="text-[10px] text-muted-foreground/70 mt-0.5 font-medium">— {t.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
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
