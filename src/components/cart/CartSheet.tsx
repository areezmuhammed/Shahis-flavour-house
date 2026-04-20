import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import { formatWhatsAppMessage, getWhatsAppLink } from '../../lib/whatsapp';
import { X, Plus, Minus, Trash2, ShoppingBag, MapPin, Calendar, User } from 'lucide-react';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleCheckout = () => {
    if (cooldown > 0) return;
    
    const trimmedName = name.trim();
    const trimmedAddress = address.trim();
    const trimmedDate = date.trim();

    if (!trimmedAddress || !trimmedDate || !trimmedName) {
      alert("Please fill in your name, delivery address, and preferred date.");
      return;
    }

    setIsProcessing(true);
    
    const order = {
      customer_name: trimmedName,
      customer_phone: '', 
      delivery_address: trimmedAddress,
      delivery_date: trimmedDate,
      items: cart,
      total: totalPrice,
    };

    const message = formatWhatsAppMessage(order);
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '918147191739';
    const link = getWhatsAppLink(message, whatsappNumber);
    
    window.open(link, '_blank');
    
    // Start cooldown to prevent spamming
    setCooldown(10);
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsProcessing(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:max-w-lg bg-background z-[70] flex flex-col shadow-luxury border-l border-white/5"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-surface/20">
              <div>
                <h2 className="text-3xl font-serif font-black text-primary leading-none mb-1">YOUR ORDER</h2>
                <p className="text-[10px] text-foreground/40 uppercase tracking-[0.3em] font-bold">Luxury Selection</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 rounded-full hover:bg-white/5 text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-8 custom-scrollbar space-y-12">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                  <ShoppingBag size={80} strokeWidth={1} />
                  <div>
                    <p className="font-serif text-2xl mb-2 italic">Your cart is empty</p>
                    <p className="text-sm uppercase tracking-widest font-black">Fill it with flavor</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-6">
                    <h3 className="text-[10px] text-primary/60 font-black uppercase tracking-[0.4em]">Items ({cart.length})</h3>
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <motion.div 
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={item.product.id} 
                          className="flex items-center gap-6 group"
                        >
                          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-white/5">
                            <img
                              src={item.product.image_url}
                              alt={item.product.name}
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-serif font-bold text-lg text-foreground mb-1">{item.product.name}</h4>
                            <p className="text-primary font-black mb-4 tracking-tight">₹{item.product.price}</p>
                            
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-4 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="p-1 text-primary hover:text-white transition-colors"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="font-black text-xs min-w-[12px] text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-1 text-primary hover:text-white transition-colors"
                                >
                                  <Plus size={14} />
                                </button>
                                <span className="text-primary font-bold">₹{(item.product.price * item.quantity)}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-2 text-foreground/30 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Form section */}
                  <div className="space-y-8 pt-8 border-t border-white/5">
                    <h3 className="text-[10px] text-primary/60 font-black uppercase tracking-[0.4em]">Delivery Logistics</h3>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          maxLength={50}
                          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder-white/20 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all font-sans"
                        />
                      </div>

                      <div className="relative">
                        <MapPin className="absolute left-4 top-6 text-primary/40" size={18} />
                        <textarea
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Your Delivery Address"
                          maxLength={500}
                          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder-white/20 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none h-32 font-sans"
                        />
                      </div>
                      
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" size={18} />
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground focus:border-primary outline-none transition-all font-sans"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-8 glass-dark border-t border-primary/20 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-foreground/60 font-sans">Subtotal</span>
                <span className="text-foreground font-sans font-bold">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-serif">
                <span className="text-primary font-black">Total</span>
                <span className="text-primary font-black underline decoration-primary/30 underline-offset-8">₹{totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || cooldown > 0}
                className="w-full btn-gold !h-16 group relative overflow-hidden disabled:opacity-50 disabled:grayscale"
              >
                <div className="flex items-center justify-center gap-3 relative z-10 font-black tracking-[0.1em]">
                  <ShoppingBag size={20} />
                  <span>{cooldown > 0 ? `RETRY IN ${cooldown}S` : isProcessing ? 'CHECKING OUT...' : 'PROCEED TO WHATSAPP'}</span>
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <p className="text-center text-[9px] text-foreground/30 font-black uppercase tracking-[0.3em]">
                Fast delivery across major Indian cities
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
