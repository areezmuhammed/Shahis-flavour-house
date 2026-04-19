import { ProductCard } from './ProductCard';
import type { Product } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tandoori Chicken 500g',
    category: 'frozen',
    price: 449,
    marinade_type: 'Classic Tandoori',
    image_url: '/images/Gemini_Generated_Image_cprmrdcprmrdcprm.png',
  },
  {
    id: '2',
    name: 'Malai Tikka Chicken 500g',
    category: 'frozen',
    price: 499,
    marinade_type: 'Creamy Malai',
    image_url: '/images/Gemini_Generated_Image_80q3p280q3p280q3.png',
  },
  {
    id: '3',
    name: 'Lemon Saffron Chicken',
    category: 'frozen',
    price: 549,
    marinade_type: 'Persian Saffron',
    image_url: '/images/saffron_chicken_luxury.png',
  },
  {
    id: '4',
    name: 'Chicken Seekh Kebab',
    category: 'frozen',
    price: 479,
    marinade_type: 'Hand-minced',
    image_url: '/images/chicken_seekh_kebab_luxury.png',
  },
  {
    id: '5',
    name: 'Peri Peri Cheese Balls',
    category: 'frozen',
    price: 349,
    marinade_type: 'Molten Core',
    image_url: '/images/peri_peri_cheese_balls_luxury.png',
    stock: 4,
  },
  {
    id: '6',
    name: 'Chicken Croquettes',
    category: 'frozen',
    price: 399,
    marinade_type: 'Herb Crust',
    image_url: '/images/Gemini_Generated_Image_sxefplsxefplsxef.png',
  },
  {
    id: '7',
    name: 'Chicken Tikka Sandwich',
    category: 'ready-to-eat',
    price: 299,
    marinade_type: 'Signature',
    image_url: '/images/chicken_sandwich_luxury.png',
  },
  {
    id: '8',
    name: 'Signature Chicken Roll',
    category: 'ready-to-eat',
    price: 199,
    marinade_type: 'Tandoori Grilled',
    image_url: '/images/chicken_roll_luxury.png',
  },
  {
    id: '9',
    name: 'Samosa Platter (3pc)',
    category: 'ready-to-eat',
    price: 149,
    marinade_type: 'Crispy Spiced',
    image_url: '/images/samosas_luxury.png',
  },
  {
    id: '10',
    name: 'Schezwan Sandwich',
    category: 'ready-to-eat',
    price: 249,
    marinade_type: 'Indo-Chinese',
    image_url: '/images/Gemini_Generated_Image_i2xgqdi2xgqdi2xg.png',
  },
  {
    id: '11',
    name: 'Mango Lassi',
    category: 'ready-to-eat',
    price: 129,
    marinade_type: 'Classic Sweet',
    image_url: '/images/Gemini_Generated_Image_mtdo2imtdo2imtdo.png',
  },
  {
    id: '12',
    name: 'Shahi Luqaimat',
    category: 'ready-to-eat',
    price: 229,
    marinade_type: 'Honey Glazed',
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
