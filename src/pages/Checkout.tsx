import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://5g4uhfh6--order-handler.functions.blink.new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          customerInfo: formData,
          totalPrice
        })
      });

      const data = await response.json();
      
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, '_blank');
        clearCart();
        navigate('/');
      }
    } catch (error) {
      console.error('Error processing order:', error);
      // Fallback to frontend logic if backend fails
      const orderItems = cart
        .map(item => `• ${item.title} x${item.quantity} (₹${item.price * item.quantity})`)
        .join('\n');
      
      const message = `*New Order from Caramel Luxe*%0A%0A` +
        `*Order Details:*%0A${orderItems}%0A%0A` +
        `*Total: ₹${totalPrice}*%0A%0A` +
        `*Customer Info:*%0A` +
        `Name: ${formData.fullName}%0A` +
        `Contact: ${formData.contactNumber}%0A` +
        `Address: ${formData.address}%0A%0A` +
        `Hello, I want to order these items. Please confirm my order.`;

      const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
      window.open(whatsappUrl, '_blank');
      clearCart();
      navigate('/');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-screen container mx-auto px-6 text-center">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={40} className="text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Add some items to your cart before checking out.</p>
        <Button onClick={() => navigate('/shop')}>Return to Shop</Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <button
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Shop
        </button>

        <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 lg:p-10 rounded-3xl border border-border/40 caramel-shadow">
              <h3 className="text-2xl font-serif font-bold mb-8">Delivery Information</h3>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Contact Number *</label>
                    <input
                      required
                      type="tel"
                      name="contactNumber"
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Shipping Address *</label>
                  <textarea
                    required
                    name="address"
                    rows={4}
                    placeholder="Enter your complete delivery address"
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>

            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-bold font-serif text-lg mb-1">WhatsApp Checkout</h4>
                <p className="text-muted-foreground text-sm">
                  We currently accept orders via WhatsApp to ensure personalized service. 
                  Once you submit, you'll be redirected to WhatsApp to complete your payment and confirm delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-border/40 caramel-shadow">
              <h3 className="text-xl font-serif font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{item.title} <span className="text-primary font-medium">x{item.quantity}</span></span>
                    <span className="font-semibold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold pt-2">
                  <span className="font-serif">Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>

              <Button
                type="submit"
                form="checkout-form"
                className="w-full gap-2 mt-8 py-5 text-lg"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
