import React, { useState, useMemo } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { FileCard } from '../components/FileCard';
import { products } from '../lib/products';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';

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
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold">The Boutique Shop</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our exclusive collections. Each piece is crafted to perfection with 
            attention to detail and premium materials.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-16">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <FileCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/20 rounded-3xl border-2 border-dashed border-border/40">
            <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
