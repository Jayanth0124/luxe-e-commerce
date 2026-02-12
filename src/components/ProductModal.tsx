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

  // --- Sub-components ---

  const QuantitySelector = () => (
    <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1.5 border border-border/50 shadow-sm">
      <button onClick={handleDecrement} className="p-1 hover:text-primary transition-colors touch-manipulation">
        <Minus size={14} />
      </button>
      <span className="text-base font-bold w-4 text-center">{quantity}</span>
      <button onClick={handleIncrement} className="p-1 hover:text-primary transition-colors touch-manipulation">
        <Plus size={14} />
      </button>
    </div>
  );

  const ActionButtons = () => (
    <div className="grid grid-cols-2 gap-3 w-full">
      <Button 
        size="lg" 
        variant="outline"
        className="w-full gap-2 h-11 text-sm md:text-base border-2 hover:bg-secondary/20 hover:text-primary hover:border-primary/20"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={16} />
        Add <span className="hidden sm:inline ml-1">to Cart</span>
      </Button>
      <Button 
        size="lg" 
        className="w-full gap-2 h-11 text-sm md:text-base bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg shadow-green-500/20" 
        onClick={handleBuyNow}
      >
        <MessageCircle size={16} />
        Buy <span className="hidden sm:inline ml-1">Now</span>
      </Button>
    </div>
  );

  const ProductDetails = () => (
    <DialogHeader className="text-left">
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
  );

  // --- Main Render ---

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-full max-w-4xl max-h-[90vh] md:h-[600px] p-0 gap-0 border-none rounded-2xl bg-white flex flex-col md:grid md:grid-cols-2 overflow-hidden focus:outline-none">
        
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden flex flex-col h-full overflow-hidden">
            
            {/* Scrollable Area: Image + Text */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Image: Natural Height (Full Pic) */}
                <div className="relative w-full">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-auto object-contain"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#D2A679] uppercase tracking-wider shadow-sm">
                        {product.category}
                        </span>
                    </div>
                </div>
                
                {/* Details */}
                <div className="p-5 pb-4">
                    <ProductDetails />
                </div>
            </div>

            {/* Sticky Footer: Always Visible */}
            <div className="shrink-0 p-4 border-t border-border/40 bg-white z-20 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]">
                 <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Total Price</span>
                        <span className="text-xl font-bold text-gray-900 leading-none">₹{product.price * quantity}</span>
                    </div>
                    <QuantitySelector />
                 </div>
                 <ActionButtons />
            </div>
        </div>

        {/* ================= DESKTOP LAYOUT (FIXED HEIGHT) ================= */}
        {/* Left Col: Image (Full height, contain to show all) */}
        <div className="hidden md:block relative h-full bg-secondary/10">
             <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-contain p-4 absolute inset-0" 
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#D2A679] uppercase tracking-wider shadow-sm">
                {product.category}
              </span>
            </div>
        </div>

        {/* Right Col: Details + Footer */}
        <div className="hidden md:flex flex-col h-full bg-white p-8">
             <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                 <ProductDetails />
             </div>
             
             <div className="mt-auto space-y-6 pt-4 border-t border-border/40">
                <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-xl">
                    <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Price</p>
                        <span className="text-3xl font-bold text-gray-900">₹{product.price * quantity}</span>
                    </div>
                    {/* Reuse Quantity Selector */}
                    <div className="flex items-center gap-4 bg-white rounded-full px-4 py-2 border border-border/50 shadow-sm">
                        <button onClick={handleDecrement} className="p-1 hover:text-primary transition-colors"><Minus size={16} /></button>
                        <span className="text-lg font-bold w-6 text-center">{quantity}</span>
                        <button onClick={handleIncrement} className="p-1 hover:text-primary transition-colors"><Plus size={16} /></button>
                    </div>
                </div>
                <ActionButtons />
             </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};