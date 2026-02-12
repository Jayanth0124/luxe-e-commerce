import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // 1. Construct the message
    const orderItems = cart.map(item => `• ${item.title} (x${item.quantity}) - ₹${item.price * item.quantity}`).join("\n");
    const message = `
*New Order Request* 📦
------------------
*Customer:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Order Details:*
${orderItems}
------------------
*Total Amount:* ₹${total}
*Notes:* ${formData.notes || "None"}
    `.trim();

    // 2. Encode for URL
    const encodedMessage = encodeURIComponent(message);
    
    // 3. YOUR WhatsApp Number
    const phoneNumber = "916309113898"; 

    // 4. Open WhatsApp IMMEDIATELY (No timeout, to avoid popup blockers)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 py-32 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Form Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold font-serif">Checkout</h1>
            <p className="text-muted-foreground">Complete your order details below.</p>
          </div>
          
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" name="name" required 
                      placeholder="John Doe" 
                      className="bg-secondary/10 border-border/50"
                      value={formData.name} onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" name="email" type="email" required 
                      placeholder="john@example.com" 
                      className="bg-secondary/10 border-border/50"
                      value={formData.email} onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" name="phone" type="tel" required 
                      placeholder="+91 98765 43210" 
                      className="bg-secondary/10 border-border/50"
                      value={formData.phone} onChange={handleInputChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea 
                      id="notes" name="notes" 
                      placeholder="Any specific requests?" 
                      className="bg-secondary/10 border-border/50 resize-none"
                      value={formData.notes} onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4 h-12 text-lg" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Place Order on WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary Section */}
        <div className="space-y-6">
          <Card className="bg-muted/30 border-border/50 shadow-none">
            <CardHeader>
              <CardTitle className="font-serif">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.length === 0 ? (
                 <div className="text-center py-10">
                   <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                   <p className="text-muted-foreground">Your cart is empty.</p>
                 </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium font-serif text-base">{item.title}</p>
                      <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))
              )}
              {cart.length > 0 && (
                <>
                  <Separator className="bg-border/60" />
                  <div className="flex justify-between items-center font-bold text-lg font-serif text-primary">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;