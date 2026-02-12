import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  // YOUR NEW WHATSAPP NUMBER
  const phoneNumber = "916309113898"; 

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate sending
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const revealVar = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF9] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVar}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Get in <span className="text-primary italic">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light">
            Have a custom requirement? Our team is ready to craft your perfect solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVar}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Phone, title: "Phone", text: "+91 63091 13898", sub: "Mon-Sat, 9am-6pm" },
                { icon: Mail, title: "Email", text: "hello@sreefiles.com", sub: "Response < 24h" },
                { icon: MapPin, title: "Studio", text: "Vijayawada, India", sub: "By Appointment" },
                { icon: MessageCircle, title: "WhatsApp", text: "+91 63091 13898", sub: "Instant Chat" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold font-serif text-lg">{item.title}</h4>
                  <p className="text-foreground/80 font-medium">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Premium WhatsApp CTA Card - FIXED CLICK ACTION */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-white shadow-2xl shadow-primary/30">
              <div className="absolute -right-8 -bottom-8 opacity-20 rotate-12">
                <MessageCircle size={180} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-2">Need a quick quote?</h3>
                <p className="text-white/90 mb-8 max-w-sm">
                  Chat directly with our design consultants on WhatsApp for instant pricing.
                </p>
                <Button 
                  onClick={handleWhatsAppRedirect}
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 border-0 cursor-pointer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Open WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] border border-border/50 shadow-xl shadow-gray-200/50"
          >
            {formStatus === 'sent' ? (
              <div className="py-20 text-center space-y-4">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">We'll be in touch shortly.</p>
                <Button variant="ghost" onClick={() => setFormStatus('idle')}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold">Send us a message</h3>
                  <p className="text-muted-foreground text-sm">Fill out the form below and we'll get back to you.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                    <input required className="w-full bg-secondary/20 border-b-2 border-transparent focus:border-primary p-3 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input required type="email" className="w-full bg-secondary/20 border-b-2 border-transparent focus:border-primary p-3 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea required rows={4} className="w-full bg-secondary/20 border-b-2 border-transparent focus:border-primary p-3 outline-none resize-none transition-colors" placeholder="How can we help?" />
                </div>

                <Button type="submit" disabled={formStatus === 'sending'} className="w-full h-12 text-lg rounded-xl">
                  {formStatus === 'sending' ? 'Sending...' : (
                    <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;