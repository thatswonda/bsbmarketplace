import { useRef } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Eye, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import photoImg from "@/assets/service-photography.jpg";
import webdevImg from "@/assets/service-webdev.jpg";
import spaImg from "@/assets/service-spa.jpg";
import fitnessImg from "@/assets/service-fitness.jpg";

const services = [
  { img: photoImg, title: "Professional Photography", price: "from $100" },
  { img: webdevImg, title: "Website Development", price: "from $300" },
  { img: spaImg, title: "Luxury Spa Treatment", price: "from $30" },
  { img: fitnessImg, title: "Fitness Coaching", price: "from $50" },
  { img: photoImg, title: "Event Coverage", price: "from $200" },
  { img: webdevImg, title: "Mobile App Design", price: "from $500" },
];

const ExploreServices = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -180 : 180, behavior: "smooth" });
  };

  return (
    <section className="py-6 md:hidden bg-card" id="hire">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-foreground"
          >
            Explore Our Services
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

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-2xl overflow-hidden snap-start flex-shrink-0 w-[150px]"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="relative h-28">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5">
                  <h3 className="text-xs font-bold text-primary-foreground leading-tight">{s.title}</h3>
                  <p className="text-[10px] text-primary-foreground/80 font-medium">{s.price}</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1.5 px-2.5 py-2">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <Heart className="w-3.5 h-3.5 text-primary" />
                <Share2 className="w-3.5 h-3.5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default ExploreServices;
