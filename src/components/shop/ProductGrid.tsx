import { ProductCard } from './ProductCard';
import type { Product } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Frozen chicken Seekh kabab (8pcs)',
    category: 'frozen',
    price: 180,
    marinade_type: 'Hand-minced Signature',
    image_url: '/images/chicken_seekh_kebab_luxury.png',
  },
  {
    id: '2',
    name: 'Chicken and potato croquettes (7pcs)',
    category: 'frozen',
    price: 200,
    marinade_type: 'Herb-crusted Gourmet',
    image_url: '/images/Gemini_Generated_Image_sxefplsxefplsxef.png',
  },
  {
    id: '3',
    name: 'Peri peri chicken cheese ball (7pcs)',
    category: 'frozen',
    price: 245,
    marinade_type: 'Molten Core',
    image_url: '/images/peri_peri_cheese_balls_luxury.png',
  },
  {
    id: '4',
    name: 'Atishi Whole Chicken',
    category: 'frozen',
    price: 450,
    marinade_type: 'Intense Tandoori Fire',
    image_url: '/images/atishi_chicken.png',
  },
  {
    id: '5',
    name: 'Grilled chicken Schezwan sandwich',
    category: 'ready-to-eat',
    price: 60,
    marinade_type: 'Fiery Indo-Chinese',
    image_url: '/images/Gemini_Generated_Image_i2xgqdi2xgqdi2xg.png',
  },
  {
    id: '6',
    name: 'Cheesy grilled chicken Schezwan sandwich',
    category: 'ready-to-eat',
    price: 70,
    marinade_type: 'Molten Schezwan Fusion',
    image_url: '/images/cheesy_schezwan_sandwich.png',
  },
  {
    id: '7',
    name: 'Cheesy chilly chicken wrap',
    category: 'ready-to-eat',
    price: 45,
    marinade_type: 'Zesty & Creamy',
    image_url: '/images/chicken_wrap_bundle.png',
  },
  {
    id: '8',
    name: 'Tortilla chicken wrap',
    category: 'ready-to-eat',
    price: 120,
    marinade_type: 'Fresh Gourmet Wrap',
    image_url: '/images/chicken_wrap_bundle.png',
  },
  {
    id: '9',
    name: 'Tortilla chicken pizza',
    category: 'ready-to-eat',
    price: 180,
    marinade_type: 'Thin-crust Luxury',
    image_url: '/images/tortilla_pizza.png',
  },
  {
    id: '10',
    name: 'Chicken loaded fries',
    category: 'ready-to-eat',
    price: 150,
    marinade_type: 'Gourmet Loaded',
    image_url: '/images/loaded_fries.png',
  },
  {
    id: '11',
    name: 'Mango chilli chicken satay',
    category: 'ready-to-eat',
    price: 60,
    marinade_type: 'Tropical Heat Glaze',
    image_url: '/images/chicken_satay.png',
  },
  {
    id: '12',
    name: 'Luqaimat (9 balls)',
    category: 'ready-to-eat',
    price: 90,
    marinade_type: 'Honey-drizzled Sweet',
    image_url: '/images/Gemini_Generated_Image_1dgwcl1dgwcl1dgw.png',
  }
];

interface ProductGridProps {
  activeCategory: 'all' | 'frozen' | 'ready-to-eat';
}

export function ProductGrid({ activeCategory }: ProductGridProps) {
  const filteredProducts = PRODUCTS.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-32"
    >
      <AnimatePresence mode='popLayout'>
        {filteredProducts.map((product, index) => {
          // Bento Logic: Some items take more columns
          const isFeatured = index === 0 || index === 3 || index === 7;
          return (
            <motion.div 
              layout
              key={product.id}
              className={`${
                isFeatured ? 'lg:col-span-6' : 'lg:col-span-4'
              }`}
            >
              <ProductCard product={product} isFeatured={isFeatured} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
