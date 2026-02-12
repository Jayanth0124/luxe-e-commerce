import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
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

    setLoading(true);

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

    // 4. Open WhatsApp IMMEDIATELY
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    clearCart();
    setLoading(false);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-28 pb-20 px-4 flex items-center justify-center">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden grid lg:grid-cols-5 border border-white/50"
      >
        
        {/* LEFT SIDE: Premium Receipt Panel (Dark Mode aesthetics) */}
        <div className="lg:col-span-2 bg-[#1a1a1a] text-white p-8 md:p-12 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#D2A679_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold text-[#D2A679] flex items-center gap-2">
                        <Sparkles size={24} /> Order Summary
                    </h2>
                    <p className="text-white/60 text-sm mt-2">Review your premium selection.</p>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
                    {cart.length === 0 ? (
                        <div className="text-center py-10 text-white/40">
                            <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="w-16 h-16 rounded-lg bg-white/5 overflow-hidden border border-white/10 shrink-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-white/90 truncate">{item.title}</h4>
                                    <p className="text-sm text-white/50 mt-1">Qty: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#D2A679]">₹{item.price * item.quantity}</p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* Total Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60">Subtotal</span>
                        <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-white/60">Shipping</span>
                        <span className="text-green-400 text-sm">Free via WhatsApp</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <span className="text-xl font-serif font-bold">Total</span>
                        <span className="text-2xl font-bold text-[#D2A679]">₹{total}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE: Clean Form */}
        <div className="lg:col-span-3 p-8 md:p-12 bg-white">
            <div className="max-w-md mx-auto h-full flex flex-col justify-center">
                <div className="mb-8">
                    <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Checkout Details</h1>
                    <p className="text-muted-foreground">Complete your order to receive it via WhatsApp instantly.</p>
                </div>

                <form onSubmit={handleWhatsAppCheckout} className="space-y-6">
                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                            <Input 
                                id="name" name="name" required 
                                placeholder="John Doe" 
                                className="h-12 bg-secondary/10 border-transparent focus:border-[#D2A679] focus:bg-white transition-all rounded-xl"
                                value={formData.name} onChange={handleInputChange} 
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                            <Input 
                                id="phone" name="phone" type="tel" required 
                                placeholder="+91 98765 43210" 
                                className="h-12 bg-secondary/10 border-transparent focus:border-[#D2A679] focus:bg-white transition-all rounded-xl"
                                value={formData.phone} onChange={handleInputChange} 
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                        <Input 
                            id="email" name="email" type="email" required 
                            placeholder="john@example.com" 
                            className="h-12 bg-secondary/10 border-transparent focus:border-[#D2A679] focus:bg-white transition-all rounded-xl"
                            value={formData.email} onChange={handleInputChange} 
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="space-y-2">
                        <Label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Order Notes (Optional)</Label>
                        <Textarea 
                            id="notes" name="notes" 
                            placeholder="Any specific requests?" 
                            className="min-h-[100px] bg-secondary/10 border-transparent focus:border-[#D2A679] focus:bg-white transition-all rounded-xl resize-none"
                            value={formData.notes} onChange={handleInputChange} 
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="pt-4">
                        <Button 
                            type="submit" 
                            className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#1ebc57] text-white rounded-xl shadow-lg shadow-green-500/20 group transition-all duration-300 hover:scale-[1.02]" 
                            disabled={loading || cart.length === 0}
                        >
                            <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            {loading ? "Processing..." : "Place Order on WhatsApp"}
                            <ArrowRight className="ml-2 h-5 w-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                            <ShieldCheck size={14} className="text-green-600" />
                            <span>Secure & Encrypted Checkout via WhatsApp</span>
                        </div>
                    </motion.div>
                </form>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;