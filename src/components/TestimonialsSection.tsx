import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", title: "Best Experience", text: "BSB made it so easy to find professional services. Highly recommend to anyone looking for quality.", rating: 5 },
  { name: "James K.", title: "Amazing Experience", text: "I sold my products quickly and connected with great clients through this platform.", rating: 5 },
  { name: "Amara O.", title: "Great Experience", text: "Found my dream job through BSB. The networking features are incredibly powerful.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-card">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-12"
      >
        Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
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
    </div>
  </section>
);

export default TestimonialsSection;
