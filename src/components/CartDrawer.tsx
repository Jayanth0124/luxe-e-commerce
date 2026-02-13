import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, total } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:w-[400px] flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center gap-2 font-serif text-xl">
            <ShoppingBag className="w-5 h-5" /> Your Cart ({cart.length})
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center text-muted-foreground">
              <ShoppingBag size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => setIsCartOpen(false)}
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 rounded-lg overflow-hidden border bg-secondary/10 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-sm font-bold text-primary">₹{item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border rounded-md h-8">
                          <button 
                            className="px-2 h-full hover:bg-secondary/50 text-muted-foreground"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            className="px-2 h-full hover:bg-secondary/50 text-muted-foreground"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          className="text-muted-foreground hover:text-destructive transition-colors ml-auto"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-6 border-t bg-secondary/5 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>
              <Button className="w-full h-12 text-base" asChild onClick={() => setIsCartOpen(false)}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};