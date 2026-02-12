import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="text-xl font-serif">My Cart ({cart.length})</SheetTitle>
          {/* This Description fixes the warning */}
          <SheetDescription>
            Review your selected items before proceeding to checkout.
          </SheetDescription>
          <Separator />
        </SheetHeader>
        
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-1 pr-4 -mr-4">
              <div className="flex flex-col gap-6 pt-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="grid gap-1">
                        <h3 className="font-medium truncate font-serif">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border rounded-md p-1">
                          <Button 
                            variant="ghost" size="icon" className="h-6 w-6" 
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" size="icon" className="h-6 w-6" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4 pt-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between font-bold text-lg font-serif">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>
              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
            <div className="text-center space-y-1">
              <p className="text-lg font-semibold font-serif">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">
                Looks like you haven't added anything yet.
              </p>
            </div>
            <Button variant="outline" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;