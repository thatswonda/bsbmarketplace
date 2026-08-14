import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe, Headphones, CreditCard, Lock } from "lucide-react";
import remoteAsset from "@/assets/remote-work-dubai.png.asset.json";


const badges = [
  { icon: ShieldCheck, label: "Verified Listings" },
  { icon: Lock, label: "Secure Payments" },
  { icon: Clock, label: "24/7 Access" },
  { icon: Globe, label: "Global Reach" },
  { icon: Headphones, label: "Customer Support" },
  { icon: CreditCard, label: "Easy Transactions" },
];

const TrustSection = () => (
  <section className="py-6 sm:py-16 bg-card border-y border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 sm:mb-8"
      >
        Why people trust BSB Market
      </motion.p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center text-center gap-1.5 sm:gap-2"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
