/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#062C1D', // Deep Emerald
        surface: '#143D30',    // Lighter Emerald for cards
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#C5A059',  // Brand Gold
          hover: '#D4AF37',    // Bright Gold
          dark: '#B18B44',
        },
        accent: {
          DEFAULT: '#D4AF37',
          muted: 'rgba(197, 160, 89, 0.2)',
        },
        highlight: {
          DEFAULT: '#E67E22',  // Spice Orange
        },
        dark: {
          background: '#041F14',
          foreground: '#FCFBF7',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(20, 61, 48, 0.4) 0%, rgba(6, 44, 29, 0.6) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.2), transparent)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -5px rgba(197, 160, 89, 0.3)',
        'gold-glow': '0 0 20px -5px rgba(197, 160, 89, 0.5)',
      }
    },
  },
  plugins: [],
}