import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/luxury_marinade_ingredients.png')",
          }}
        >
          <div className="absolute inset-0 bg-background/80" /> {/* Emerald overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </motion.div>

      {/* Float Elements (Spices/Glow) */}
      <motion.div 
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full z-0"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 text-foreground flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-primary font-sans text-xs font-black tracking-[0.5em] uppercase px-6 py-2 border border-primary/20 rounded-full glass">
            Gourmet Heritage
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-black mb-8 leading-[0.9] tracking-tighter"
        >
          PURE <span className="text-primary italic">SHAHI</span> <br /> 
          <span className="text-foreground">EXPERIENCE</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl mb-12 max-w-2xl text-foreground/70 font-sans leading-relaxed"
        >
          Elevating homemade marinades to a world-class standard. 
          Fresh from our <span className="text-primary font-serif font-bold italic">Handcrafted</span> kitchen to your door.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold group relative overflow-hidden"
          >
            <span className="relative z-10">EXPLORE FULL MENU</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button className="px-8 py-4 rounded-full border border-white/10 hover:border-primary/50 text-foreground text-sm font-bold tracking-[0.2em] transition-all bg-white/5 backdrop-blur-sm">
            OUR STORY
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-primary/50 uppercase tracking-[0.3em] font-black">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
