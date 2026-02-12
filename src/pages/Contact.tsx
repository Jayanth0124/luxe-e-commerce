import React from 'react';
import { Button } from '../components/Button';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold">Get in <span className="text-primary italic">Touch</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a custom requirement or just want to say hello? Our team is always ready 
            to assist you with your premium file needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Phone", content: "+91 98765 43210", sub: "Mon-Sat, 9am-6pm" },
                { icon: Mail, title: "Email", content: "hello@caramelluxe.com", sub: "Response in 24h" },
                { icon: MapPin, title: "Location", content: "Mumbai, India", sub: "Craft District, 400001" },
                { icon: MessageCircle, title: "WhatsApp", content: "+91 98765 43210", sub: "Direct Order Support" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-secondary/30 border border-border/40 hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-bold font-serif text-lg mb-1">{item.title}</h4>
                  <p className="font-medium text-foreground">{item.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-8 rounded-3xl bg-primary text-white space-y-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-20 rotate-12">
                <MessageCircle size={200} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-2">Need a faster response?</h3>
                <p className="text-white/80 mb-6 max-w-sm">
                  Chat with our luxury consultants directly on WhatsApp for instant assistance and personalized quotes.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-secondary w-full sm:w-auto gap-2">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="aspect-video w-full rounded-3xl overflow-hidden grayscale contrast-125 opacity-80 border border-border">
              <iframe
                title="Google Map Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120641.47275811365!2d72.76672323719124!3d19.105574381895697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-12 rounded-3xl border border-border/40 caramel-shadow">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
              <Button className="w-full gap-2 py-5 text-lg">
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
