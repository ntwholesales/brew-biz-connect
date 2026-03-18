import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import nescafeClassic from "@/assets/nescafe-classic.png";
import coffeemate from "@/assets/coffeemate.png";
import kencoSmooth from "@/assets/kenco-smooth.png";
import carvetiiFilter from "@/assets/carvetii-filter.png";
import nescafeAzera from "@/assets/nescafe-azera.png";
import lavazzaEspresso from "@/assets/lavazza-espresso.png";
import peetsDarkRoast from "@/assets/peets-dark-roast.png";
import cafeBustelo from "@/assets/cafe-bustelo.png";
import motherParkers from "@/assets/mother-parkers.png";

const products = [
  { image: peetsDarkRoast, name: "Major Dickason's Decaf", brand: "Peet's Coffee", size: "10.5oz", category: "Ground Coffee" },
  { image: cafeBustelo, name: "Espresso Ground Coffee", brand: "Café Bustelo", size: "283g", category: "Ground Coffee" },
  { image: motherParkers, name: "Original Café Blend", brand: "Mother Parkers", size: "925g", category: "Ground Coffee" },
  { image: nescafeClassic, name: "Nescafé Classic", brand: "Nescafé", size: "200g", category: "Instant Coffee" },
  { image: coffeemate, name: "Coffee-Mate Original", brand: "Nestlé", size: "325g", category: "Creamer" },
  { image: kencoSmooth, name: "Kenco Smooth", brand: "Kenco", size: "200g", category: "Instant Coffee" },
  { image: carvetiiFilter, name: "Filter Selection Box", brand: "Carvetii", size: "3 × 250g", category: "Filter Coffee" },
  { image: nescafeAzera, name: "Azera Intenso", brand: "Nescafé", size: "100g", category: "Premium Instant" },
  { image: lavazzaEspresso, name: "Espresso Italiano", brand: "Lavazza", size: "1kg", category: "Whole Bean" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const INITIAL_COUNT = 6;

const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, INITIAL_COUNT);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground leading-snug">Product Catalogue</h2>
          <p className="text-[15px] text-muted-foreground mt-2">
            Bulk quantities available across all SKUs. Contact us for bespoke pricing.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </motion.div>

        {!showAll && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Check More Products
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
