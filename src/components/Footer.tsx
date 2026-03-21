const Footer = () => (
  <footer className="py-6 sm:py-8 bg-card border-t border-border/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-2">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} BSB Market, a product of BSB Global Tech Ltd.
      </p>
      <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
        <span>·</span>
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
