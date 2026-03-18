import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            NT Wholesales
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] text-foreground mb-6">
            Commercial Coffee Distribution.{" "}
            <span className="text-muted-foreground">Scaled for Excellence.</span>
          </h1>
          <p className="text-[15px] sm:text-base leading-relaxed text-muted-foreground max-w-xl mb-8">
            Next-day wholesale delivery for UK hospitality groups, offices, and retailers.
            Precision sourcing, consistent profiles, competitive bulk pricing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@ntwholesales.com"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Request Wholesale Access
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center h-11 px-7 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors"
            >
              Browse Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
