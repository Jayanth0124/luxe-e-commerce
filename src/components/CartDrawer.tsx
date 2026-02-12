import React from 'react';
import { useCart } from '../context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from './ui/sheet';
import { Button } from './Button';
import { ShoppingBag, Trash2, Plus, Minus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:text-primary transition-colors">
          <ShoppingBag size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in fade-in zoom-in">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-2xl font-serif">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
              <SheetTrigger asChild>
                <Button variant="outline">Start Shopping</Button>
              </SheetTrigger>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif font-semibold">{item.title}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1 scale-90 origin-left">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-primary"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-medium text-xs min-w-[1rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-primary"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t bg-secondary/30">
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="font-serif">Total</span>
                <span className="text-primary">₹{totalPrice}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <SheetClose asChild>
                <Button
                  onClick={() => navigate('/checkout')}
                  className="w-full"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
