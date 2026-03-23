import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench, ShoppingBag, Briefcase, Car, FileText, Building2,
  Megaphone, Store, Smartphone, BookOpen, BarChart3,
  Eye, Heart, Share2, X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import catServices from "@/assets/cat-services.jpg";
import catGoods from "@/assets/cat-goods.jpg";
import catContracts from "@/assets/cat-contracts.jpg";
import catJobs from "@/assets/cat-jobs.jpg";
import catRealEstate from "@/assets/cat-realestate.jpg";
import catAutomobiles from "@/assets/cat-automobiles.jpg";
import catPromotions from "@/assets/cat-promotions.jpg";
import catPanteka from "@/assets/cat-panteka.jpg";
import catGadgets from "@/assets/cat-gadgets.jpg";
import catEbooks from "@/assets/cat-ebooks.jpg";
import catShares from "@/assets/cat-shares.jpg";

const categoryImages: Record<string, string> = {
  Services: catServices,
  Goods: catGoods,
  Contracts: catContracts,
  Jobs: catJobs,
  "Real Estate": catRealEstate,
  Automobiles: catAutomobiles,
  Promotions: catPromotions,
  Panteka: catPanteka,
  Gadgets: catGadgets,
  Ebooks: catEbooks,
  Shares: catShares,
};

const categoryListings: Record<string, { title: string; desc: string; price: string; views: string }[]> = {
  Services: [
    { title: "Home Cleaning", desc: "Professional deep cleaning services for your home or office.", price: "$ 50", views: "9,320" },
    { title: "Plumbing Repair", desc: "Expert plumbing solutions for leaks, installations and maintenance.", price: "$ 40", views: "5,812" },
    { title: "Electrical Work", desc: "Licensed electricians for wiring, repairs and installations.", price: "$ 60", views: "7,105" },
    { title: "Painting Service", desc: "Interior and exterior painting by skilled professionals.", price: "$ 80", views: "4,230" },
  ],
  Goods: [
    { title: "Samsung TV 55\"", desc: "Brand new Smart TV with 4K display and built-in streaming apps.", price: "$ 450", views: "12,400" },
    { title: "Leather Sofa Set", desc: "Premium 7-seater leather sofa set in excellent condition.", price: "$ 800", views: "6,210" },
    { title: "Running Shoes", desc: "Nike Air Max running shoes, size 42, barely used.", price: "$ 65", views: "3,890" },
    { title: "Blender Set", desc: "Industrial-grade blender with multiple attachments.", price: "$ 35", views: "8,750" },
  ],
  Contracts: [
    { title: "Building Contract", desc: "Residential building project requiring experienced contractors.", price: "₦ 5M", views: "2,340" },
    { title: "Supply Agreement", desc: "Long-term supply of office materials for corporate client.", price: "₦ 1.2M", views: "1,800" },
    { title: "Road Construction", desc: "Government road rehabilitation project seeking bids.", price: "₦ 15M", views: "4,100" },
    { title: "Catering Contract", desc: "Event catering services needed for corporate functions.", price: "₦ 500K", views: "3,560" },
  ],
  Jobs: [
    { title: "Software Developer", desc: "Remote full-stack developer role with competitive salary.", price: "$ 2,000/mo", views: "15,620" },
    { title: "Sales Representative", desc: "Field sales position with commission-based earnings.", price: "$ 800/mo", views: "9,430" },
    { title: "Graphic Designer", desc: "Creative designer needed for branding and marketing projects.", price: "$ 1,200/mo", views: "7,890" },
    { title: "Driver Needed", desc: "Experienced driver for executive transport services.", price: "$ 400/mo", views: "11,200" },
  ],
  "Real Estate": [
    { title: "3 Bedroom Flat", desc: "Spacious apartment in a gated estate with 24/7 security.", price: "₦ 1.5M/yr", views: "18,900" },
    { title: "Shop Space", desc: "Commercial shop space in a busy market area.", price: "₦ 800K/yr", views: "6,340" },
    { title: "Land for Sale", desc: "500sqm plot of land with C of O in a prime location.", price: "₦ 10M", views: "14,500" },
    { title: "Office Space", desc: "Furnished office space with internet and parking.", price: "₦ 2M/yr", views: "5,120" },
  ],
  Automobiles: [
    { title: "Toyota Camry 2020", desc: "Clean Camry with low mileage, fully loaded.", price: "₦ 12M", views: "22,100" },
    { title: "Honda CRV 2019", desc: "SUV in excellent condition, leather interior.", price: "₦ 9.5M", views: "13,400" },
    { title: "Motorcycle", desc: "Bajaj Boxer motorcycle, recently serviced.", price: "₦ 350K", views: "8,900" },
    { title: "Mini Bus", desc: "18-seater bus suitable for commercial transport.", price: "₦ 6M", views: "4,670" },
  ],
  Promotions: [
    { title: "Brand Ambassador", desc: "Promote a new beverage brand on social media and earn.", price: "$ 150", views: "20,300" },
    { title: "Product Review", desc: "Review and promote tech gadgets to your audience.", price: "$ 80", views: "11,560" },
    { title: "Event Promotion", desc: "Help promote upcoming concerts and earn commissions.", price: "$ 200", views: "7,890" },
    { title: "App Install Campaign", desc: "Earn per install by promoting a new mobile app.", price: "$ 0.50/install", views: "16,200" },
  ],
  Panteka: [
    { title: "Spare Parts", desc: "Quality car spare parts for all vehicle models.", price: "varies", views: "9,800" },
    { title: "Generator Parts", desc: "Replacement parts for popular generator brands.", price: "varies", views: "6,450" },
    { title: "Welding Materials", desc: "Industrial welding rods, gas, and equipment.", price: "varies", views: "3,210" },
    { title: "Plumbing Fittings", desc: "Pipes, valves, and fittings for all plumbing needs.", price: "varies", views: "5,670" },
  ],
  Gadgets: [
    { title: "iPhone 15 Pro", desc: "Brand new iPhone 15 Pro Max, 256GB, sealed.", price: "$ 1,100", views: "25,400" },
    { title: "Laptop - HP Pavilion", desc: "Core i7, 16GB RAM, 512GB SSD, like new.", price: "$ 650", views: "18,300" },
    { title: "Wireless Earbuds", desc: "AirPods Pro with active noise cancellation.", price: "$ 180", views: "14,200" },
    { title: "Smart Watch", desc: "Samsung Galaxy Watch with health tracking features.", price: "$ 220", views: "10,800" },
  ],
  Ebooks: [
    { title: "Business Mastery", desc: "Learn proven strategies to grow your business from scratch.", price: "$ 15", views: "8,900" },
    { title: "Forex Trading Guide", desc: "Complete beginner's guide to forex trading and investment.", price: "$ 25", views: "12,340" },
    { title: "Cooking Recipes", desc: "Over 200 African and continental recipes in one book.", price: "$ 10", views: "6,780" },
    { title: "Self Development", desc: "Transform your mindset with practical daily habits.", price: "$ 12", views: "9,560" },
  ],
  Shares: [
    { title: "Tech Startup Equity", desc: "10% equity stake in a growing fintech startup.", price: "$ 5,000", views: "3,450" },
    { title: "Restaurant Partnership", desc: "Investment opportunity in a popular restaurant chain.", price: "$ 2,000", views: "2,890" },
    { title: "Logistics Company", desc: "Shares available in an expanding delivery service.", price: "$ 3,500", views: "4,120" },
    { title: "Agribusiness Fund", desc: "Invest in large-scale farming and earn quarterly returns.", price: "$ 1,000", views: "6,780" },
  ],
};

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const listings = selectedCategory ? categoryListings[selectedCategory] || [] : [];

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
        </div>

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
              onClick={() => setSelectedCategory(cat.label)}
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

      {/* Listings Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-lg sm:max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-2xl font-bold">{selectedCategory}</DialogTitle>
            <DialogDescription>Browse listings in this category</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-4">
            {listings.map((listing, i) => (
              <motion.div
                key={listing.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-3 bg-card rounded-2xl cursor-pointer hover:scale-[1.01] transition-transform"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <img
                  src={selectedCategory ? categoryImages[selectedCategory] : ""}
                  alt={listing.title}
                  className="w-28 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-sm font-bold text-foreground mb-1">{listing.title}</h3>
                  <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">{listing.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground text-[11px]">{listing.views}</span>
                      <span className="text-primary font-bold text-sm">{listing.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-primary" />
                      <Heart className="w-3.5 h-3.5 text-primary" />
                      <Share2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default CategoriesSection;
