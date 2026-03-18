const Footer = () => (
  <footer className="py-8 bg-card border-t border-border/50">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-xl font-bold text-primary">BSB</span>
      <div className="flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
      </div>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>EN</span>
        <span>|</span>
        <span>SP</span>
        <span>|</span>
        <span>FR</span>
      </div>
    </div>
  </footer>
);

export default Footer;
