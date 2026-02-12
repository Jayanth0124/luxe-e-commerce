import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from './CartDrawer';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-40 transition-all duration-500',
        isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold transition-transform group-hover:rotate-12">
            C
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            Caramel<span className="text-primary">Luxe</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative text-sm font-medium transition-colors hover:text-primary py-1',
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in slide-in-from-left-2" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <CartDrawer />
          
          <button
            className="md:hidden p-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-30 transition-all duration-500 md:hidden',
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}>
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-2xl font-serif transition-colors',
                location.pathname === link.path ? 'text-primary underline' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
