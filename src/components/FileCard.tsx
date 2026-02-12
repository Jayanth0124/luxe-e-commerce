import React, { useState } from 'react';
import { Product, useCart } from '../context/CartContext';
import { Button } from './Button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

interface FileCardProps {
  product: Product;
  className?: string;
}

export const FileCard: React.FC<FileCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className={cn(
      'group rounded-2xl overflow-hidden bg-white border border-border/40 caramel-glow transition-all duration-500',
      className
    )}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full text-primary border border-primary/20">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold">₹{product.price}</span>
          <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="p-1 hover:text-primary transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="font-medium min-w-[1.5rem] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="p-1 hover:text-primary transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
        
        <Button
          onClick={handleAddToCart}
          className="w-full gap-2"
          variant="primary"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
