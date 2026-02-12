import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, MessageCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';
import { toast } from 'sonner';
import { ProductModal } from './ProductModal';

interface FileCardProps {
  product: Product;
}

export const FileCard: React.FC<FileCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(q => q + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(q => Math.max(1, q - 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} ${product.title} to cart`);
    setQuantity(1);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = "916309113898";
    const message = `
*Instant Order Request* ⚡
------------------
*Item:* ${product.title}
*Quantity:* ${quantity}
*Price:* ₹${product.price * quantity}
------------------
Please confirm this order.
    `.trim();
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <motion.div
        layout
        whileHover={{ y: -8 }}
        onClick={() => setIsModalOpen(true)} // Open modal on card click
        className="group bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer relative"
      >
        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 z-10 transition-colors pointer-events-none" />

        {/* Image Area */}
        <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#D2A679] uppercase tracking-wider shadow-sm z-20">
            {product.category}
          </div>
          
          {/* Quick View Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="bg-white/90 text-[#D2A679] px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <Eye size={16} /> Quick View
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-grow z-20 bg-white">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-[#D2A679] transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
            {product.description}
          </p>
          
          {/* Price & Controls */}
          <div className="space-y-4 mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
              
              {/* Quantity Selector */}
              <div 
                className="flex items-center gap-3 bg-secondary/30 rounded-full px-2 py-1"
                onClick={(e) => e.stopPropagation()} 
              >
                <button 
                  onClick={handleDecrement}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-gray-600 transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="text-sm font-medium w-3 text-center">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white text-gray-600 transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button 
                className="w-full gap-2 rounded-xl h-10 text-sm font-medium hover:border-[#D2A679]/50" 
                variant="outline"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} />
                Add
              </Button>
              <Button 
                className="w-full gap-2 rounded-xl h-10 text-sm font-medium bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-sm" 
                onClick={handleBuyNow}
              >
                <MessageCircle size={16} />
                Buy
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* The Modal Component */}
      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};