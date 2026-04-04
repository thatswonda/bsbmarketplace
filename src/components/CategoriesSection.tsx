import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wrench, ShoppingBag, Briefcase, Car, FileText, Building2,
  Megaphone, Store, Smartphone, BookOpen, BarChart3,
  Eye, Heart, Share2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Per-listing images
import listingServices1 from "@/assets/listing-services-1.jpg";
import listingServices2 from "@/assets/listing-services-2.jpg";
import listingServices3 from "@/assets/listing-services-3.jpg";
import listingServices4 from "@/assets/listing-services-4.jpg";
import listingGoods1 from "@/assets/listing-goods-1.jpg";
import listingGoods2 from "@/assets/listing-goods-2.jpg";
import listingGoods3 from "@/assets/listing-goods-3.jpg";
import listingGoods4 from "@/assets/listing-goods-4.jpg";
import listingContracts1 from "@/assets/listing-contracts-1.jpg";
import listingContracts2 from "@/assets/listing-contracts-2.jpg";
import listingContracts3 from "@/assets/listing-contracts-3.jpg";
import listingContracts4 from "@/assets/listing-contracts-4.jpg";
import listingJobs1 from "@/assets/listing-jobs-1.jpg";
import listingJobs2 from "@/assets/listing-jobs-2.jpg";
import listingJobs3 from "@/assets/listing-jobs-3.jpg";
import listingJobs4 from "@/assets/listing-jobs-4.jpg";
import listingRealEstate1 from "@/assets/listing-realestate-1.jpg";
import listingRealEstate2 from "@/assets/listing-realestate-2.jpg";
import listingRealEstate3 from "@/assets/listing-realestate-3.jpg";
import listingRealEstate4 from "@/assets/listing-realestate-4.jpg";
import listingAuto1 from "@/assets/listing-auto-1.jpg";
import listingAuto2 from "@/assets/listing-auto-2.jpg";
import listingAuto3 from "@/assets/listing-auto-3.jpg";
import listingAuto4 from "@/assets/listing-auto-4.jpg";
import listingPromo1 from "@/assets/listing-promo-1.jpg";
import listingPromo2 from "@/assets/listing-promo-2.jpg";
import listingPromo3 from "@/assets/listing-promo-3.jpg";
import listingPromo4 from "@/assets/listing-promo-4.jpg";
import listingPanteka1 from "@/assets/listing-panteka-1.jpg";
import listingPanteka2 from "@/assets/listing-panteka-2.jpg";
import listingPanteka3 from "@/assets/listing-panteka-3.jpg";
import listingPanteka4 from "@/assets/listing-panteka-4.jpg";
import listingGadgets1 from "@/assets/listing-gadgets-1.jpg";
import listingGadgets2 from "@/assets/listing-gadgets-2.jpg";
import listingGadgets3 from "@/assets/listing-gadgets-3.jpg";
import listingGadgets4 from "@/assets/listing-gadgets-4.jpg";
import listingEbooks1 from "@/assets/listing-ebooks-1.jpg";
import listingEbooks2 from "@/assets/listing-ebooks-2.jpg";
import listingEbooks3 from "@/assets/listing-ebooks-3.jpg";
import listingEbooks4 from "@/assets/listing-ebooks-4.jpg";
import listingShares1 from "@/assets/listing-shares-1.jpg";
import listingShares2 from "@/assets/listing-shares-2.jpg";
import listingShares3 from "@/assets/listing-shares-3.jpg";
import listingShares4 from "@/assets/listing-shares-4.jpg";

const categoryListings: Record<string, { title: string; desc: string; price: string; views: string; img: string }[]> = {
  Services: [
    { title: "Home Cleaning", desc: "Professional deep cleaning services for your home or office.", price: "$ 50", views: "9,320", img: listingServices1 },
    { title: "Plumbing Repair", desc: "Expert plumbing solutions for leaks, installations and maintenance.", price: "$ 40", views: "5,812", img: listingServices2 },
    { title: "Electrical Work", desc: "Licensed electricians for wiring, repairs and installations.", price: "$ 60", views: "7,105", img: listingServices3 },
    { title: "Painting Service", desc: "Interior and exterior painting by skilled professionals.", price: "$ 80", views: "4,230", img: listingServices4 },
  ],
  Goods: [
    { title: "Samsung TV 55\"", desc: "Brand new Smart TV with 4K display and built-in streaming apps.", price: "$ 450", views: "12,400", img: listingGoods1 },
    { title: "Leather Sofa Set", desc: "Premium 7-seater leather sofa set in excellent condition.", price: "$ 800", views: "6,210", img: listingGoods2 },
    { title: "Running Shoes", desc: "Nike Air Max running shoes, size 42, barely used.", price: "$ 65", views: "3,890", img: listingGoods3 },
    { title: "Blender Set", desc: "Industrial-grade blender with multiple attachments.", price: "$ 35", views: "8,750", img: listingGoods4 },
  ],
  Contracts: [
    { title: "Building Contract", desc: "Residential building project requiring experienced contractors.", price: "₦ 5M", views: "2,340", img: listingContracts1 },
    { title: "Supply Agreement", desc: "Long-term supply of office materials for corporate client.", price: "₦ 1.2M", views: "1,800", img: listingContracts2 },
    { title: "Road Construction", desc: "Government road rehabilitation project seeking bids.", price: "₦ 15M", views: "4,100", img: listingContracts3 },
    { title: "Catering Contract", desc: "Event catering services needed for corporate functions.", price: "₦ 500K", views: "3,560", img: listingContracts4 },
  ],
  Jobs: [
    { title: "Software Developer", desc: "Remote full-stack developer role with competitive salary.", price: "$ 2,000/mo", views: "15,620", img: listingJobs1 },
    { title: "Sales Representative", desc: "Field sales position with commission-based earnings.", price: "$ 800/mo", views: "9,430", img: listingJobs2 },
    { title: "Graphic Designer", desc: "Creative designer needed for branding and marketing projects.", price: "$ 1,200/mo", views: "7,890", img: listingJobs3 },
    { title: "Driver Needed", desc: "Experienced driver for executive transport services.", price: "$ 400/mo", views: "11,200", img: listingJobs4 },
  ],
  "Real Estate": [
    { title: "3 Bedroom Flat", desc: "Spacious apartment in a gated estate with 24/7 security.", price: "₦ 1.5M/yr", views: "18,900", img: listingRealEstate1 },
    { title: "Shop Space", desc: "Commercial shop space in a busy market area.", price: "₦ 800K/yr", views: "6,340", img: listingRealEstate2 },
    { title: "Land for Sale", desc: "500sqm plot of land with C of O in a prime location.", price: "₦ 10M", views: "14,500", img: listingRealEstate3 },
    { title: "Office Space", desc: "Furnished office space with internet and parking.", price: "₦ 2M/yr", views: "5,120", img: listingRealEstate4 },
  ],
  Automobiles: [
    { title: "Toyota Camry 2020", desc: "Clean Camry with low mileage, fully loaded.", price: "₦ 12M", views: "22,100", img: listingAuto1 },
    { title: "Honda CRV 2019", desc: "SUV in excellent condition, leather interior.", price: "₦ 9.5M", views: "13,400", img: listingAuto2 },
    { title: "Motorcycle", desc: "Bajaj Boxer motorcycle, recently serviced.", price: "₦ 350K", views: "8,900", img: listingAuto3 },
    { title: "Mini Bus", desc: "18-seater bus suitable for commercial transport.", price: "₦ 6M", views: "4,670", img: listingAuto4 },
  ],
  Promotions: [
    { title: "Brand Ambassador", desc: "Promote a new beverage brand on social media and earn.", price: "$ 150", views: "20,300", img: listingPromo1 },
    { title: "Product Review", desc: "Review and promote tech gadgets to your audience.", price: "$ 80", views: "11,560", img: listingPromo2 },
    { title: "Event Promotion", desc: "Help promote upcoming concerts and earn commissions.", price: "$ 200", views: "7,890", img: listingPromo3 },
    { title: "App Install Campaign", desc: "Earn per install by promoting a new mobile app.", price: "$ 0.50/install", views: "16,200", img: listingPromo4 },
  ],
  Panteka: [
    { title: "Spare Parts", desc: "Quality car spare parts for all vehicle models.", price: "varies", views: "9,800", img: listingPanteka1 },
    { title: "Generator Parts", desc: "Replacement parts for popular generator brands.", price: "varies", views: "6,450", img: listingPanteka2 },
    { title: "Welding Materials", desc: "Industrial welding rods, gas, and equipment.", price: "varies", views: "3,210", img: listingPanteka3 },
    { title: "Plumbing Fittings", desc: "Pipes, valves, and fittings for all plumbing needs.", price: "varies", views: "5,670", img: listingPanteka4 },
  ],
  Gadgets: [
    { title: "iPhone 15 Pro", desc: "Brand new iPhone 15 Pro Max, 256GB, sealed.", price: "$ 1,100", views: "25,400", img: listingGadgets1 },
    { title: "Laptop - HP Pavilion", desc: "Core i7, 16GB RAM, 512GB SSD, like new.", price: "$ 650", views: "18,300", img: listingGadgets2 },
    { title: "Wireless Earbuds", desc: "AirPods Pro with active noise cancellation.", price: "$ 180", views: "14,200", img: listingGadgets3 },
    { title: "Smart Watch", desc: "Samsung Galaxy Watch with health tracking features.", price: "$ 220", views: "10,800", img: listingGadgets4 },
  ],
  Ebooks: [
    { title: "Business Mastery", desc: "Learn proven strategies to grow your business from scratch.", price: "$ 15", views: "8,900", img: listingEbooks1 },
    { title: "Forex Trading Guide", desc: "Complete beginner's guide to forex trading and investment.", price: "$ 25", views: "12,340", img: listingEbooks2 },
    { title: "Cooking Recipes", desc: "Over 200 African and continental recipes in one book.", price: "$ 10", views: "6,780", img: listingEbooks3 },
    { title: "Self Development", desc: "Transform your mindset with practical daily habits.", price: "$ 12", views: "9,560", img: listingEbooks4 },
  ],
  Shares: [
    { title: "Tech Startup Equity", desc: "10% equity stake in a growing fintech startup.", price: "$ 5,000", views: "3,450", img: listingShares1 },
    { title: "Restaurant Partnership", desc: "Investment opportunity in a popular restaurant chain.", price: "$ 2,000", views: "2,890", img: listingShares2 },
    { title: "Logistics Company", desc: "Shares available in an expanding delivery service.", price: "$ 3,500", views: "4,120", img: listingShares3 },
    { title: "Agribusiness Fund", desc: "Invest in large-scale farming and earn quarterly returns.", price: "$ 1,000", views: "6,780", img: listingShares4 },
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

  // Preload all listing images on mount
  useEffect(() => {
    Object.values(categoryListings).flat().forEach(l => {
      const img = new Image();
      img.src = l.img;
    });
  }, []);

  return (
    <section className="py-6 sm:py-24" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-4 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2"
          >
            Categories of Activities
          </motion.h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Browse through diverse categories to find exactly what you need — from professional services to everyday essentials.
          </p>
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
                  src={listing.img}
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
