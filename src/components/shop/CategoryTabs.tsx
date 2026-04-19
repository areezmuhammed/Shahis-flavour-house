import { motion } from 'framer-motion';

interface CategoryTabsProps {
  activeCategory: 'all' | 'frozen' | 'ready-to-eat';
  onCategoryChange: (category: 'all' | 'frozen' | 'ready-to-eat') => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const tabs = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'frozen', label: 'Ready-to-Cook' },
    { id: 'ready-to-eat', label: 'Ready-to-Eat' },
  ];

  return (
    <div className="flex justify-center overflow-x-auto scrollbar-hide py-8 mb-16 sticky top-24 z-30 transition-all duration-300">
      <div className="glass p-2 rounded-full flex gap-2 sm:gap-4 px-4 min-w-max backdrop-blur-2xl bg-surface/20 border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onCategoryChange(tab.id as 'all' | 'frozen' | 'ready-to-eat')}
            className={`relative whitespace-nowrap px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 overflow-hidden group ${
              activeCategory === tab.id
                ? 'text-background'
                : 'text-foreground/60 hover:text-primary'
            }`}
          >
            {activeCategory === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary shadow-gold-glow"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
