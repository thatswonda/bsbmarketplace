import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-6 sm:py-8 bg-card border-t border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium hover:text-primary cursor-pointer transition-colors">EN</span>
        <span>|</span>
        <span className="hover:text-primary cursor-pointer transition-colors">SP</span>
        <span>|</span>
        <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
      </div>
    </div>
  </footer>
);

export default Footer;
