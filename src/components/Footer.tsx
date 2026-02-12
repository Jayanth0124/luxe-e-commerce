import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border/40 relative overflow-hidden">
      {/* Caramel Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-serif text-xl font-bold">
                C
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Caramel<span className="text-primary">Luxe</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium file manufacturing business dedicated to elegance and organization. 
              Elevate your workspace with our designer collection.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Information</h4>
            <ul className="space-y-4">
              {['Terms & Conditions', 'Privacy Policy', 'Shipping Policy', 'Returns'].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Luxury Avenue, Craft District, Mumbai, India</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@caramelluxe.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Caramel Luxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
