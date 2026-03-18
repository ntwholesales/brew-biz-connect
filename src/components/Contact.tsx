import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground leading-snug">
              Get in Touch
            </h2>
            <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed max-w-md">
              Ready to set up a wholesale account? Contact our team for pricing, delivery schedules, and product availability.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:info@ntwholesales.com"
                className="flex items-center gap-3 text-[15px] text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                info@ntwholesales.com
              </a>
              <a
                href="tel:+447709537486"
                className="flex items-center gap-3 text-[15px] font-medium tabular-nums text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +44 7709 537 486
              </a>
              <div className="flex items-center gap-3 text-[15px] text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                United Kingdom
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-[12px] p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-foreground mb-5">Send an Inquiry</h3>
            <form
              action={`mailto:info@ntwholesales.com`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="h-11 bg-card rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground ring-1 ring-border focus:ring-2 focus:ring-primary outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Business name"
                  className="h-11 bg-card rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground ring-1 ring-border focus:ring-2 focus:ring-primary outline-none transition"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-11 bg-card rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground ring-1 ring-border focus:ring-2 focus:ring-primary outline-none transition"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full bg-card rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground ring-1 ring-border focus:ring-2 focus:ring-primary outline-none transition resize-none"
              />
              <button
                type="submit"
                className="h-11 px-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
