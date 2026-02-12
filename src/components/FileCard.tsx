import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';
import { toast } from 'sonner';

interface FileCardProps {
  product: Product;
}

export const FileCard: React.FC<FileCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} ${product.title} to cart`);
    setQuantity(1);
  };

  const handleBuyNow = () => {
    // Immediate WhatsApp Redirect
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
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Area */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#D2A679] uppercase tracking-wider shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.description}</p>
        
        {/* Price & Controls */}
        <div className="space-y-4 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-secondary/30 rounded-full px-2 py-1">
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
              className="w-full gap-2 rounded-xl h-10 text-sm font-medium" 
              variant="outline"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
              Add
            </Button>
            <Button 
              className="w-full gap-2 rounded-xl h-10 text-sm font-medium bg-[#25D366] hover:bg-[#20bd5a] text-white border-none" 
              onClick={handleBuyNow}
            >
              <MessageCircle size={16} />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};