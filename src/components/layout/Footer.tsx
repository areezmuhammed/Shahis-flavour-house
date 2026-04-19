import { useState } from 'react';
import { ChevronDown, Camera, Globe, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const footerLinks = [
    {
      id: 'delivery',
      title: 'Delivery Areas',
      content: 'We deliver fresh across major cities in India. For specific locations, bulk orders, or event catering, please reach out via WhatsApp.',
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-primary" />
            <span>hello@shahisflavourhouse.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-primary" />
            <span>+44 7000 000000</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-primary" />
            <span>India</span>
          </div>
        </div>
      ),
    },
    {
      id: 'faq',
      title: 'How it Works',
      content: 'Select your marinades, choose a delivery slot, and we\'ll deliver them fresh to your door. Our products are made-to-order to ensure maximum flavour.',
    }
  ];

  return (
    <footer className="bg-dark-background text-foreground pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo/605b34d4-6d23-4142-baa8-4e2f61109c9b.jpg" 
                alt="Shahi Logo" 
                className="w-16 h-16 rounded-full border border-primary/50 shadow-gold-glow"
              />
              <div>
                <h2 className="text-2xl font-serif font-black text-primary tracking-tight leading-none">SHAHI'S</h2>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Flavour House</span>
              </div>
            </div>
            
            <p className="text-foreground/70 text-lg leading-relaxed font-sans max-w-sm">
               Elevating the art of the marinade. From our kitchen to your home, we bring gourmet taste and ultimate convenience across India.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Globe, label: 'Website' },
                { icon: MessageCircle, label: 'WhatsApp', highlight: true }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  className={`p-3 rounded-full border transition-all duration-300 group ${
                    social.highlight 
                      ? 'bg-primary/10 border-primary/30 hover:bg-primary text-primary hover:text-background' 
                      : 'border-white/10 hover:border-primary/50 text-foreground/60 hover:text-primary'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {footerLinks.map((link) => (
                <div key={link.id} className="border-b border-white/5 last:border-0">
                  <button 
                    onClick={() => toggleAccordion(link.id)}
                    className="w-full flex justify-between items-center py-6 text-left group"
                  >
                    <span className={`text-xl font-serif font-bold transition-colors ${
                      openAccordion === link.id ? 'text-primary' : 'text-foreground/90 group-hover:text-primary'
                    }`}>
                      {link.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openAccordion === link.id ? 180 : 0 }}
                      className="text-primary"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === link.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-foreground/60 font-sans leading-relaxed text-lg">
                          {link.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/40 text-xs font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} SHAHI'S FLAVOUR HOUSE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
