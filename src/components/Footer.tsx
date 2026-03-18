import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-foreground">
              NT <span className="text-primary">Wholesales</span>
            </span>
            <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed max-w-xs">
              Commercial coffee distribution, scaled for UK hospitality and retail.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">Quick Links</h4>
            <div className="space-y-2 text-[13px]">
              <a href="#products" className="block text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-[13px]">
              <a href="mailto:info@ntwholesales.com" className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@ntwholesales.com
              </a>
              <a href="tel:+447709537486" className="flex items-center gap-1.5 tabular-nums font-medium text-foreground hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> +44 7709 537 486
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} NT Wholesales. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
