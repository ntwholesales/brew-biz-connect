import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import elfLotto from "@/assets/elf-lotto.png";
import logoToysGames from "@/assets/logo-toys-games.png";
import logoBoardGameDisney from "@/assets/logo-board-game-disney.png";
import monopoly from "@/assets/monopoly.png";
import footballTable from "@/assets/football-table.png";
import dontPanic from "@/assets/dont-panic.png";

const products = [
  { image: monopoly, name: "Monopoly Classic", brand: "Hasbro Gaming", size: "Ages 8+", category: "Board Games" },
  { image: logoBoardGameDisney, name: "The Logo Board Game – Disney Edition", brand: "Spin Master", size: "Ages 6+", category: "Board Games" },
  { image: logoToysGames, name: "Logo Toys & Games Mini", brand: "Drumond Park", size: "Ages 8+", category: "Mini Games" },
  { image: elfLotto, name: "Elf Lotto", brand: "Orchard Toys", size: "Ages 3–6", category: "Kids Games" },
  { image: footballTable, name: "Tabletop Football", brand: "Sport Squad", size: "51cm", category: "Action Toys" },
  { image: dontPanic, name: "Don't Panic!", brand: "Ideal Games", size: "Ages 7+", category: "Party Games" },
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
            Bulk quantities available across all lines. Contact us for trade pricing.
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

        {!showAll && products.length > INITIAL_COUNT && (
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
