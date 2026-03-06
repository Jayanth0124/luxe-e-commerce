import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { FileCard } from '@/components/FileCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { products } from '@/lib/products';
import SEO from '@/components/SEO';

// --- TRADITIONAL CSS BORDER COMPONENT ---
const ThoranamBorder = () => (
  <div 
    className="w-full h-8 opacity-40 mix-blend-multiply my-4" 
    style={{ 
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='30'%3E%3Cpath d='M0 0 Q20 25 40 0 Q60 25 80 0' fill='none' stroke='%23D2A679' stroke-width='2'/%3E%3Ccircle cx='20' cy='12' r='2' fill='%23D2A679'/%3E%3Ccircle cx='60' cy='12' r='2' fill='%23D2A679'/%3E%3Cpath d='M40 0 L40 15' fill='none' stroke='%23D2A679' stroke-width='1.5'/%3E%3C/svg%3E")`, 
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'top center'
    }} 
  />
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Get top 3 premium products for display
  const featuredProducts = products.filter(p => p.category === 'Premium' || p.category === 'Designer').slice(0, 3);

  // Mock Testimonials Data
  const testimonials = [
    {
      name: "Jayanth Chowdary",
      image: "images/t1.png",
      rating: 5,
      content: "The quality of these files is unparalleled. They brought a sense of organized luxury to my boutique office."
    },
    {
      name: "Akshar Ram",
      image: "images/t2.jpeg",
      rating: 5,
      content: "I've tried many suppliers, but Sree Files stands out with their designer aesthetics and durability."
    },
    {
      name: "Eswar",
      image: "images/t3.jpeg",
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
      {/* SEO Configuration */}
      <SEO 
        title="Home" 
        description="Sree.files - Premium file manufacturing in Vijayawada. Trusted since 2010. Shop high-quality office files, folders, and custom stationery."
        url="https://sreefiles.netlify.app/"
      />

      {/* --- HERO SECTION --- */}
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
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl mx-auto border border-border/50">
              <img 
                src="images/hero.png" 
                alt="Luxury workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="absolute -bottom-8 lg:-left-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/20 hidden md:block z-20">
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

      <ThoranamBorder />

      {/* --- TRADITIONAL "SHUBHARAMBHAM" SECTION ---
      <section className="py-24 relative overflow-hidden bg-[#1A1A1A] text-white">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 -top-64 w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="#D2A679" strokeWidth="0.5">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="40" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 10 Q60 30 50 50 Q40 30 50 10" transform={`rotate(${i * 30} 50 50)`} />
            ))}
            {[...Array(24)].map((_, i) => (
              <path key={i} d="M50 50 L50 2" transform={`rotate(${i * 15} 50 50)`} />
            ))}
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#D2A679]"></span>
                <span className="text-[#D2A679] uppercase tracking-[0.3em] text-xs font-bold">శుభ సూచకం</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Auspicious <br/>
                <span className="text-[#D2A679] italic">Beginnings</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                In Indian tradition, every new venture starts with a blessing. Whether it's your new company registration, your first property deed, or your Diwali account ledgers, secure your most important milestones in our premium Religious & Designer collections.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Property & Real Estate Documents",
                  "New Business Registrations",
                  "Financial Year & Ledger Openings"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#D2A679]" /> 
                    {item}
                  </li>
                ))}
              </ul>

              <Button size="lg" onClick={() => navigate('/shop')} className="bg-transparent border border-[#D2A679] text-[#D2A679] hover:bg-[#D2A679] hover:text-[#1A1A1A] h-14 px-8 rounded-full transition-all duration-300">
                Explore Religious Collection
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#D2A679]/20 to-transparent rounded-full blur-3xl -z-10" />
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 mt-12">
                     <img src="images/religious/balaji.png" alt="Tirupati Balaji File" className="w-full rounded-2xl bg-white/5 p-2 border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-500" />
                     <img src="images/designer/mandala.png" alt="Mandala File" className="w-full rounded-2xl bg-white/5 p-2 border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-500" />
                  </div>
                  <div className="space-y-4">
                     <img src="images/religious/lakshmi.png" alt="Lakshmi File" className="w-full rounded-2xl bg-white/5 p-2 border border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-500" />
                     <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#D2A679]/20 to-transparent border border-[#D2A679]/30 flex items-center justify-center p-6 text-center shadow-2xl">
                        <p className="font-serif text-[#D2A679] text-xl">Crafted with Heritage</p>
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section> */}

      {/* <ThoranamBorder /> */}

      {/* --- BENEFITS SECTION --- */}
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

      <ThoranamBorder />

      {/* --- FEATURED PRODUCTS SECTION --- */}
      <section className="py-24 bg-[#D2A679]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">The Designer Selection</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Experience the fusion of artistic expression and organizational utility.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <FileCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" onClick={() => navigate('/shop')} className="px-8 rounded-full h-12 border-2 bg-white">
              View All Collections
            </Button>
          </div>
        </div>
      </section>

      <ThoranamBorder />

      {/* --- TESTIMONIALS SECTION --- */}
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