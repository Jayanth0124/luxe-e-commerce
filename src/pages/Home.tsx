import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { FileCard } from '@/components/FileCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { products } from '@/lib/products';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Get top 3 premium products for display
  const featuredProducts = products.filter(p => p.category === 'Premium' || p.category === 'Designer').slice(0, 3);

  // Mock Testimonials Data
  const testimonials = [
    {
      name: "Sophia Roberts",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      content: "The quality of these files is unparalleled. They brought a sense of organized luxury to my boutique office."
    },
    {
      name: "James Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      content: "I've tried many suppliers, but Caramel Luxe stands out with their designer aesthetics and durability."
    },
    {
      name: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      content: "The Divine Serenity collection is beautiful. It's more than just a file; it's a piece of art."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="pb-20 overflow-x-hidden">
      {/* Hero Section - Increased top padding to pt-32 for better spacing */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#FDFBF9]">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#D2A679]/10 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" className="space-y-8">
            <motion.div custom={0} variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2A679]/10 rounded-full text-[#D2A679] font-medium text-sm">
              <Star size={16} fill="currentColor" />
              <span>India's Premium File Manufacturer</span>
            </motion.div>
            
            <motion.h1 custom={1} variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-gray-900">
              Elegance in Every <span className="text-[#D2A679]">Detail</span>
            </motion.h1>
            
            <motion.p custom={2} variants={fadeIn} className="text-xl text-gray-500 max-w-lg leading-relaxed font-sans">
              Discover our collection of handcrafted, luxury files designed for those who value organization and aesthetic excellence.
            </motion.p>
            
            <motion.div custom={3} variants={fadeIn} className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('/shop')} className="gap-2 h-12 px-8 bg-[#D2A679] hover:bg-[#c29669] text-white rounded-full">
                Shop Collection <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')} className="h-12 px-8 rounded-full border-2">
                Our Story
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" alt="Luxury workspace" className="w-full h-full object-cover" />
            </div>
            {/* Floating Rating Badge */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/20 hidden md:block">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-[#D2A679] rounded-full flex items-center justify-center text-white">
                  <Star fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold font-serif text-lg">4.9/5 Rating</p>
                  <p className="text-sm text-gray-500">From 500+ professionals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Superior Quality", desc: "Handcrafted with premium materials for lifelong durability." },
              { icon: Truck, title: "Nationwide Delivery", desc: "Elegant packaging delivered safely to your doorstep." },
              { icon: Clock, title: "Custom Orders", desc: "Personalized designs tailored to your unique requirements." }
            ].map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl hover:bg-[#FDFBF9] transition-colors">
                <div className="w-16 h-16 bg-[#D2A679]/10 rounded-2xl flex items-center justify-center text-[#D2A679] mb-2">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Now using FileCard with Add to Cart */}
      <section className="py-24 bg-[#D2A679]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">The Designer Selection</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Experience the fusion of artistic expression and organizational utility.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* USING THE NEW FILECARD COMPONENT HERE */}
                <FileCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" onClick={() => navigate('/shop')} className="px-8 rounded-full h-12 border-2">
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Explicitly Fixed */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-[#D2A679] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;