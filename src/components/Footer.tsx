import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  
  // Helper to scroll top when clicking links
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const policyLinks = [
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Shipping Policy', path: '/shipping-policy' },
    { name: 'Returns', path: '/returns' },
  ];

  return (
    <footer className="bg-white border-t border-border/40 relative overflow-hidden">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2 group">
              <span className="font-['YoungMother'] text-4xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                Sree<span className="text-primary">.files</span>
              </span>
            </Link>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>Company:</strong> Sree Manikanta<br/>
                <strong>Founder:</strong> P. Naveen<br/>
                <strong>Trusted Since:</strong> 2010
              </p>
              <p>
                Premium file manufacturing dedicated to elegance and organization.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information (Policies) */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Information</h4>
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground items-start">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span>
                  S No 5/6, Bhavanipuram-Kabela Rd,<br/>
                  RR Nagar, Vijayawada, 520012
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 94901 13370</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <span>+91 63091 13898 (Orders)</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground items-center">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@sreefiles.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sree Manikanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;