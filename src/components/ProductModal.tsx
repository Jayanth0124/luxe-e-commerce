import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Safely handle both single image and multiple images array
  const imagesArray = product.images?.length ? product.images : [(product as any).image].filter(Boolean);
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
      <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] md:h-[650px] p-0 border-none rounded-3xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row focus:outline-none">
        
        {/* ================= LEFT SIDE: Premium Image Presentation ================= */}
        {/* FIXED: Increased minimum height on mobile and added perfectly even padding (p-8 md:p-12) */}
        <div className="w-full md:w-1/2 min-h-[45vh] md:h-full bg-[#FDFBF9] border-b md:border-b-0 md:border-r border-border/50 p-8 md:p-12 flex flex-col items-center justify-center relative shrink-0">
            
            {/* Category Badge */}
            <div className="absolute top-5 left-5 md:top-6 md:left-6 z-20">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-[#D2A679] uppercase tracking-widest shadow-sm border border-[#D2A679]/20">
                {product.category}
                </span>
            </div>

            {/* Padded Professional Image Box */}
            {/* FIXED: Added inner padding (p-6) so the image NEVER touches the bottom or sides of the box */}
            <div className="w-full max-w-[280px] md:max-w-[360px] aspect-[4/5] bg-white rounded-3xl shadow-sm border border-border/40 p-6 md:p-8 flex items-center justify-center relative group mx-auto">
                {imagesArray.length > 1 ? (
                    <Carousel setApi={setApi} className="w-full h-full flex items-center justify-center">
                        <CarouselContent className="h-full w-full">
                            {imagesArray.map((img: string, idx: number) => (
                                <CarouselItem key={idx} className="h-full w-full flex items-center justify-center">
                                    <img 
                                      src={img} 
                                      alt={`${product.title} view ${idx + 1}`} 
                                      className="max-w-full max-h-full object-contain drop-shadow-md mix-blend-multiply" 
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 md:-left-4 bg-white/90 hover:bg-white border border-gray-100 shadow-md opacity-0 group-hover:opacity-100 transition-opacity scale-90 md:scale-100" />
                        <CarouselNext className="right-0 md:-right-4 bg-white/90 hover:bg-white border border-gray-100 shadow-md opacity-0 group-hover:opacity-100 transition-opacity scale-90 md:scale-100" />
                    </Carousel>
                ) : (
                    <img 
                      src={imagesArray[0]} 
                      alt={product.title} 
                      className="max-w-full max-h-full object-contain drop-shadow-md mix-blend-multiply" 
                    />
                )}
            </div>

            {/* Carousel Dots / Counter */}
            {/* FIXED: Gave this proper margin-top so it isn't squeezed against the image box */}
            {count > 1 && (
                <div className="mt-8 flex items-center gap-2">
                    {imagesArray.map((_: any, idx: number) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${current === idx + 1 ? 'w-6 bg-[#D2A679]' : 'w-2 bg-gray-300'}`} />
                    ))}
                </div>
            )}
        </div>

        {/* ================= RIGHT SIDE: Content & Sticky Footer ================= */}
        <div className="w-full md:w-1/2 flex flex-col h-[calc(90vh-45vh)] md:h-full bg-white relative">
             
             {/* 1. Scrollable Details Area */}
             <div className="flex-1 overflow-y-auto p-6 md:p-10 pr-4 md:pr-10 custom-scrollbar">
                 <DialogHeader className="text-left pr-6"> 
                    <DialogTitle className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                        {product.title}
                    </DialogTitle>
                    
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex text-[#D2A679]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                        ))}
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">(4.9/5 Reviews)</span>
                    </div>
                    
                    <DialogDescription className="text-base text-gray-600 leading-relaxed space-y-4">
                        <p>{product.description}</p>
                        <p>Handcrafted locally in Vijayawada. This premium file is constructed with heavy-duty materials designed to protect your most important documents while maintaining a luxurious aesthetic.</p>
                    </DialogDescription>
                 </DialogHeader>
             </div>
             
             {/* 2. Sticky Action Footer */}
             <div className="shrink-0 p-6 md:p-8 bg-gray-50 border-t border-border/40 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
                
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Total Price</p>
                        <span className="text-3xl font-bold text-gray-900 leading-none">₹{product.price * quantity}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-white rounded-xl px-4 py-2 border border-border/50 shadow-sm">
                        <button onClick={handleDecrement} className="p-1 text-gray-400 hover:text-[#D2A679] transition-colors"><Minus size={16} /></button>
                        <span className="text-lg font-bold w-6 text-center text-gray-900">{quantity}</span>
                        <button onClick={handleIncrement} className="p-1 text-gray-400 hover:text-[#D2A679] transition-colors"><Plus size={16} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full">
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full gap-2 h-14 text-sm md:text-base border-2 hover:bg-[#D2A679]/5 hover:text-[#D2A679] hover:border-[#D2A679]/50 transition-all rounded-xl font-bold"
                        onClick={handleAddToCart}
                    >
                        <ShoppingCart size={18} /> Add to Cart
                    </Button>
                    <Button 
                        size="lg" 
                        className="w-full gap-2 h-14 text-sm md:text-base bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-md hover:shadow-lg transition-all rounded-xl font-bold" 
                        onClick={handleBuyNow}
                    >
                        <MessageCircle size={18} /> Buy Now
                    </Button>
                </div>
                
             </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};