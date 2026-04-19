import { useState } from 'react';
import type { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Flame } from 'lucide-react';
import { useToast } from '../ui/Toast';

interface ProductCardProps {
  product: Product;
  isFeatured?: boolean;
}

export function ProductCard({ product, isFeatured = false }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    addToast(`${product.name} added to your selection`);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group bg-surface/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 
                 hover:border-primary/30 transition-all duration-500 h-full flex flex-col shadow-luxury hover:shadow-gold-glow ${
        isFeatured ? 'lg:flex-row lg:items-stretch' : ''
      }`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${
        isFeatured ? 'h-80 lg:h-auto lg:w-2/5' : 'h-72 w-full'
      }`}>
        <img
          src={product.image_url}
          alt={product.name}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isFeatured && (
            <div className="glass px-3 py-1 rounded-full flex items-center gap-1.5">
              <Flame size={12} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-widest uppercase text-primary">Must Try</span>
            </div>
          )}
          {product.stock !== undefined && product.stock < 5 && (
            <div className="bg-highlight/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Low Stock</span>
            </div>
          )}
        </div>

        {/* Floating Price */}
        <div className="absolute bottom-4 right-4">
          <div className="glass-dark px-4 py-2 rounded-xl border border-white/10 group-hover:border-primary/30 transition-colors">
            <span className="text-xl font-bold text-primary">₹{product.price}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-8 flex flex-col flex-grow ${
        isFeatured ? 'lg:w-3/5 lg:justify-center' : ''
      }`}>
        <div className="mb-4">
          <p className="text-[10px] text-primary/70 font-sans uppercase tracking-[0.3em] font-black mb-1">
            {product.marinade_type || 'Gourmet Selection'}
          </p>
          <h3 className={`font-serif font-black text-foreground leading-[1.1] transition-colors group-hover:text-primary ${
            isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl'
          }`}>
            {product.name}
          </h3>
        </div>

        <p className="text-foreground/50 text-sm font-sans mb-8 leading-relaxed line-clamp-2">
          Handcrafted using traditional family recipes and the finest spices. A true taste of Shahi heritage.
        </p>

        <div className="mt-auto pt-4 flex items-center gap-4">
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-grow h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 ${
              isAdded 
                ? 'bg-green-500/10 border border-green-500/50 text-green-500' 
                : 'bg-white/5 border border-white/10 hover:border-primary/50 text-foreground group-hover:bg-primary/5'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} />
                  <span>Added to Order</span>
                </motion.div>
              ) : (
                <motion.div
                  key="cart"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingBag size={16} />
                  <span>Add to Order</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
