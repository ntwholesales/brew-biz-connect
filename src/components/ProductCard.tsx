import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  size: string;
  category: string;
}

const ProductCard = ({ image, name, brand, size, category }: ProductCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.2, 0, 0, 1] } },
      }}
      className="group bg-card rounded-[12px] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 ease-authentic overflow-hidden"
    >
      <div className="aspect-square bg-muted flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-authentic"
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-2">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-primary">
          {category}
        </span>
        <h3 className="text-sm font-semibold text-card-foreground leading-snug">{name}</h3>
        <div className="flex items-center justify-between text-[13px] text-muted-foreground">
          <span>{brand}</span>
          <span className="tabular-nums font-medium">{size}</span>
        </div>
        <a
          href={`mailto:info@ntwholesales.com?subject=Wholesale Inquiry: ${name}`}
          className="block text-center mt-3 h-9 leading-9 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          Inquire for Pricing
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
