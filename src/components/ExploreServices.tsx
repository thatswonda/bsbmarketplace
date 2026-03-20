import { motion } from "framer-motion";
import { RefreshCw, Eye, Heart, Share2 } from "lucide-react";
import photoImg from "@/assets/service-photography.jpg";
import webdevImg from "@/assets/service-webdev.jpg";

const services = [
  { img: photoImg, title: "Professional Photography", price: "from $100" },
  { img: webdevImg, title: "Website Development", price: "from $300" },
];

const ExploreServices = () => (
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
        <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <RefreshCw className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl overflow-hidden"
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
  </section>
);

export default ExploreServices;
