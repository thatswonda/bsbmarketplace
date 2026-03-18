import { motion } from "framer-motion";
import spaImg from "@/assets/service-spa.jpg";
import photoImg from "@/assets/service-photography.jpg";
import webdevImg from "@/assets/service-webdev.jpg";

const offers = [
  { img: spaImg, title: "Luxury Spa", desc: "Premium wellness and relaxation treatments for your body and mind.", price: "$30", views: "17,223" },
  { img: photoImg, title: "Professional Photography", desc: "Capture your special moments with expert photographers.", price: "from $100", views: "8,450" },
  { img: webdevImg, title: "Website Development", desc: "Modern, responsive websites built by professional developers.", price: "from $300", views: "12,891" },
];

const PopularOffers = () => (
  <section className="py-24 bg-card" id="services">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
      >
        Popular Offers
      </motion.h2>
      <p className="text-muted-foreground mb-12 max-w-lg">
        Discover top-rated services and goods from trusted sellers in your area and worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-card rounded-[20px] overflow-hidden transition-shadow duration-300"
            style={{ boxShadow: "var(--card-shadow)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
          >
            <div className="relative overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{offer.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{offer.price}</span>
                <span className="text-xs text-muted-foreground">{offer.views} views</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PopularOffers;
