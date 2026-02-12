import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { FileCard } from '../components/FileCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { products } from '../lib/products';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import gsap from 'gsap';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter(p => p.category === 'Premium' || p.category === 'Designer').slice(0, 3);

  useEffect(() => {
    // Entrance animations
    gsap.from('.hero-title', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 1, delay: 0.3, ease: 'power3.out' });
    gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.from('.hero-image', { opacity: 0, scale: 0.95, duration: 1.5, delay: 0.2, ease: 'power2.out' });
  }, []);

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

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDFBF9]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm animate-fade-in">
              <Star size={16} fill="currentColor" />
              <span>India's Premium File Manufacturer</span>
            </div>
            
            <h1 className="hero-title text-6xl lg:text-8xl font-serif font-bold leading-tight">
              Elegance in Every <span className="text-primary">Detail</span>
            </h1>
            
            <p className="hero-subtitle text-xl text-muted-foreground max-w-lg leading-relaxed">
              Discover our collection of handcrafted, luxury files designed for those who value organization and aesthetic excellence.
            </p>
            
            <div className="hero-cta flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('/shop')} className="gap-2 group">
                Shop Collection
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                Our Story
              </Button>
            </div>
          </div>
          
          <div className="hero-image relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl caramel-shadow">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Star fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold">4.9/5 Rating</p>
                  <p className="text-sm text-muted-foreground">From 500+ professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Superior Quality", desc: "Handcrafted with premium materials for lifelong durability." },
              { icon: Truck, title: "Nationwide Delivery", desc: "Elegant packaging delivered safely to your doorstep." },
              { icon: Clock, title: "Custom Orders", desc: "Personalized designs tailored to your unique requirements." }
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl hover:bg-secondary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold font-serif">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">The Designer Selection</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experience the fusion of artistic expression and organizational utility with our most-coveted designs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <FileCard key={product.id} product={product} />
            ))}
          </div>
          
          <Button
            size="lg"
            variant="outline"
            className="mt-16"
            onClick={() => navigate('/shop')}
          >
            Explore All Categories
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-16">What Our Clients Say</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                {...t}
                className={`animate-in fade-in duration-700 delay-${i * 200}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-primary p-12 lg:p-24 text-center text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                Ready to Elevate Your Workspace?
              </h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto">
                Join thousands of businesses who trust Caramel Luxe for their premium organizational needs.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-secondary"
                onClick={() => navigate('/shop')}
              >
                Start Shopping Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
