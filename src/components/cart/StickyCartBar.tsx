import { useCart } from '../../hooks/useCart';
import { motion } from 'framer-motion';

interface StickyCartBarProps {
  onOpenCart: () => void;
}

export function StickyCartBar({ onOpenCart }: StickyCartBarProps) {
  const { totalItems, totalPrice } = useCart();

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4"
    >
      <div className="glass-dark rounded-3xl p-4 flex items-center justify-between border-primary/30 shadow-gold-glow">
        <div className="flex flex-col pl-2">
          <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-1">
            {totalItems} {totalItems === 1 ? 'Selected' : 'Selected'}
          </span>
          <span className="text-xl font-serif font-black text-foreground">
            ₹{totalPrice}
          </span>
        </div>
        
        <button
          onClick={onOpenCart}
          className="btn-gold !py-3 !px-8 !text-sm tracking-widest"
        >
          VIEW ORDER
        </button>
      </div>
    </motion.div>
  );
}
