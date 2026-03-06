import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryFilter } from '@/components/CategoryFilter';
import { FileCard } from '@/components/FileCard';
import { products } from '@/lib/products';
import { Search, SlidersHorizontal, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

// --- DYNAMIC CATEGORY STORYTELLING ---
const categoryStories: Record<string, string> = {
  'All': "Browse through our complete collection. Each piece is crafted to absolute perfection.",
  'Religious': "Auspicious designs crafted for new business ledgers, property documents, and traditional beginnings.",
  'Designer': "Elegant, artistic patterns designed to bring a touch of luxury and beauty to your professional workspace.",
  'Standard': "Durable, classic designs built for everyday reliability and seamless organization.",
  'Box File': "Heavy-duty, high-capacity storage engineered specifically for corporate archiving and long-term security.",
  'Customized': "Premium personalized files, custom-tailored to represent your institution's unique brand identity."
};

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 md:pt-32 pb-24 min-h-screen bg-[#FDFBF9] overflow-hidden">
      {/* SEO Configuration */}
      <SEO 
        title="Shop Premium Files" 
        description="Browse our exclusive collection of office files, cobra files, and custom folders. Bulk orders available via WhatsApp."
        url="https://sreefiles.netlify.app/shop"
      />

      {/* --- VIP PREMIUM SEAMLESS SCROLLING ANNOUNCEMENT BAR --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        /* Animated Gold Foil Text Effect */
        .gold-gradient-text {
          background: linear-gradient(to right, #D2A679, #FFF3D8, #D2A679, #D2A679);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}} />
      
      <div className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 py-4 mb-12 overflow-hidden relative border-y border-[#D2A679]/50 shadow-[0_0_25px_rgba(210,166,121,0.15)] z-10">
        
        {/* Subtle glowing orb in the background of the bar */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D2A679]/15 via-transparent to-transparent pointer-events-none mix-blend-screen" />
        
        <div className="flex w-[250%] md:w-[150%] animate-marquee hover:[animation-play-state:paused] transition-all cursor-default relative z-10">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex-1 flex justify-around items-center whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
              
              <span className="flex items-center gap-3 gold-gradient-text drop-shadow-[0_2px_10px_rgba(210,166,121,0.4)] text-base md:text-lg">
                <Sparkles size={18} className="text-[#FFF3D8]" /> 
                Wholesale Available 
                <Sparkles size={18} className="text-[#FFF3D8]" />
              </span>
              
              <span className="text-[#D2A679]/50 mx-4 md:mx-8">❖</span>
              <span className="text-white drop-shadow-sm">Huge Discounts on Bulk Orders</span>
              <span className="text-[#D2A679]/50 mx-4 md:mx-8">❖</span>
              <span className="text-white drop-shadow-sm">Custom Logo Printing</span>
              <span className="text-[#D2A679]/50 mx-4 md:mx-8">❖</span>
              <span className="text-white drop-shadow-sm">WhatsApp for Quote</span>
              <span className="text-[#D2A679]/50 mx-4 md:mx-8">❖</span>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------- */}

      <div className="container mx-auto px-6">
        
        {/* Animated Header with Dynamic Storytelling */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            My Files <span className="text-primary italic">Shop</span>
          </h1>
          
          {/* Dynamic Storytelling Text container (fixed height prevents page jumping) */}
          <div className="h-16 flex items-start justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCategory} // Triggers animation when category changes
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium text-[#D2A679]"
              >
                {categoryStories[activeCategory]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-16 p-4 rounded-3xl bg-white border border-border/40 shadow-sm flex flex-col lg:flex-row gap-6 items-center justify-between"
        >
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="relative w-full lg:max-w-xs group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search files..."
              className="w-full pl-12 pr-10 py-3 rounded-full bg-secondary/30 border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Product Grid with Smooth Layout Movement */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div 
                  layout
                  key={product.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <FileCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                layout
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-24"
              >
                <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SlidersHorizontal className="text-muted-foreground w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">No matches found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or category filter.</p>
                <Button 
                  variant="outline" 
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;