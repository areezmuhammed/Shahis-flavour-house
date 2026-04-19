import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ProductGrid } from './components/shop/ProductGrid';
import { CategoryTabs } from './components/shop/CategoryTabs';
import { StickyCartBar } from './components/cart/StickyCartBar';
import { CartSheet } from './components/cart/CartSheet';
import { Footer } from './components/layout/Footer';
import { useCart } from './hooks/useCart';
import { ToastProvider } from './components/ui/Toast';

function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frozen' | 'ready-to-eat'>('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-primary selection:text-background">
        <Header onOpenCart={() => setIsCartOpen(true)} />
        <Hero />
        
        <main className="container mx-auto px-6 lg:px-12 py-32 space-y-24">
          {/* Menu Section */}
          <section id="menu" className="scroll-mt-32">
            <div className="text-center mb-20 space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-sans text-xs font-black tracking-[0.4em] uppercase"
              >
                Exquisite Selection
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-black text-foreground uppercase tracking-tight"
              >
                Our <span className="text-primary italic">Signature</span> Menu
              </motion.h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-px w-24 bg-primary/30 mx-auto mt-8"
              ></motion.div>
            </div>
            
            <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <ProductGrid activeCategory={activeCategory} />
          </section>

          {/* Luxury Banner */}
          <section className="relative overflow-hidden rounded-[4rem] bg-surface/30 backdrop-blur-md border border-white/5 p-12 lg:p-32 text-center group">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
             >
               <h3 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">
                 BRINGING THE ART OF <br /> 
                 <span className="text-primary">SHAHI MARINATION</span> <br /> 
                 TO YOUR HOME
               </h3>
               <p className="text-foreground/60 max-w-2xl mx-auto font-sans tracking-wide uppercase text-xs font-bold">
                 Authentic Sheffield craftsmanship since 1994. Every jar is a legacy.
               </p>
             </motion.div>
          </section>
        </main>

        <Footer />

        {totalItems > 0 && (
          <StickyCartBar onOpenCart={() => setIsCartOpen(true)} />
        )}

        <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </ToastProvider>
  )
}

export default App
