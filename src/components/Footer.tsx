import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-6 sm:py-8 bg-card border-t border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-2">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} BSB Market, a product of BSB Global Tech Ltd.
      </p>
      <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
        <span>·</span>
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
