import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="border-b border-border/40">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-[13px] text-muted-foreground">
          <div className="hidden sm:flex items-center gap-5">
            <a href="mailto:info@ntwholesales.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@ntwholesales.com
            </a>
            <a href="tel:+447709537486" className="flex items-center gap-1.5 hover:text-foreground transition-colors tabular-nums">
              <Phone className="w-3.5 h-3.5" />
              +44 7709 537 486
            </a>
          </div>
          <span className="hidden sm:block">Wholesale Coffee Distribution — UK</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold tracking-tight text-foreground">
            NT <span className="text-primary">Wholesales</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a
              href="mailto:info@ntwholesales.com"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Inquire for Pricing
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 px-4 py-4 space-y-3">
            <a href="#products" className="block text-[15px] font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Products</a>
            <a href="#about" className="block text-[15px] font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#contact" className="block text-[15px] font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Contact</a>
            <a
              href="mailto:info@ntwholesales.com"
              className="block text-center h-11 leading-[44px] rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              Inquire for Pricing
            </a>
            <div className="pt-2 space-y-1 text-[13px] text-muted-foreground">
              <a href="mailto:info@ntwholesales.com" className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> info@ntwholesales.com
              </a>
              <a href="tel:+447709537486" className="flex items-center gap-1.5 tabular-nums">
                <Phone className="w-3.5 h-3.5" /> +44 7709 537 486
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
