import { Truck, ShieldCheck, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Truck, title: "Next-Day Delivery", description: "UK-wide distribution with tracked logistics and reliable scheduling for all toy orders." },
  { icon: ShieldCheck, title: "Safety Certified", description: "All products meet UK & EU safety standards with full compliance documentation." },
  { icon: Clock, title: "Flexible Scheduling", description: "Weekly, fortnightly, or custom delivery schedules to keep your shelves stocked." },
  { icon: Package, title: "Bulk Pricing", description: "Competitive wholesale rates with volume-based discounts across all toy and game lines." },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-2xl font-bold text-foreground leading-snug">
            Built for Toy Shops & Retailers
          </h2>
          <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">
            NT Wholesales supplies toy shops, department stores, online sellers, and gift retailers across the UK
            with the latest toys, games, and family entertainment at unbeatable wholesale prices.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.2, 0, 0, 1] } } }}
              className="bg-card rounded-[12px] shadow-card p-5 space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
