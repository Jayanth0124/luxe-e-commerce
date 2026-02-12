import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
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
    onClose();
  };

  const handleBuyNow = () => {
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
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-full max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-white border-none rounded-2xl flex flex-col md:grid md:grid-cols-2">
        
        {/* Scrollable Content Wrapper */}
        <div className="flex-1 overflow-y-auto md:contents">
          
          {/* Left: Image Section */}
          <div className="relative h-[200px] md:h-full bg-secondary/20 shrink-0">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-[#D2A679] uppercase tracking-wider shadow-sm">
                {product.category}
              </span>
            </div>
          </div>

          {/* Right: Details Section */}
          <div className="p-5 md:p-8 flex flex-col h-full bg-white">
            <DialogHeader className="mb-4 text-left">
              <DialogTitle className="text-xl md:text-3xl font-serif font-bold text-gray-900 mb-2 leading-tight">
                {product.title}
              </DialogTitle>
              
              <div className="flex items-center gap-2 mb-3">
                 <div className="flex text-[#D2A679]">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                   ))}
                 </div>
                 <span className="text-xs md:text-sm text-muted-foreground">(4.9/5 Rating)</span>
              </div>
              
              <DialogDescription className="text-sm md:text-base text-gray-600 leading-relaxed">
                {product.description}
                <br className="hidden md:block" /><br className="hidden md:block" />
                <span className="block mt-2 md:mt-0">
                  This premium digital asset is crafted with attention to detail, ensuring high-quality output.
                </span>
              </DialogDescription>
            </DialogHeader>

            <div className="mt-auto space-y-5">
              {/* Price & Quantity Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 bg-secondary/10 rounded-xl gap-4">
                <div className="flex items-center justify-between sm:block">
                    <p className="text-xs text-muted-foreground mb-0.5 sm:mb-1">Total Price</p>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">₹{product.price * quantity}</span>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between gap-4 bg-white rounded-full px-4 py-2 border border-border/50 shadow-sm sm:w-auto">
                  <button onClick={handleDecrement} className="p-1 hover:text-primary transition-colors touch-manipulation">
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-bold w-6 text-center">{quantity}</span>
                  <button onClick={handleIncrement} className="p-1 hover:text-primary transition-colors touch-manipulation">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full gap-2 h-12 text-base border-2 hover:bg-secondary/20 hover:text-primary hover:border-primary/20"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  className="w-full gap-2 h-12 text-base bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg shadow-green-500/20" 
                  onClick={handleBuyNow}
                >
                  <MessageCircle size={18} />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};