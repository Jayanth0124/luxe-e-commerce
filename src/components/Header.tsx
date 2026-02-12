import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Control Sheet state
  const { cart, setIsCartOpen } = useCart();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo with YoungMother Font */}
          <Link to="/" className="z-50 group">
            <span className="font-['YoungMother'] text-4xl text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
              Sree<span className="text-primary">.files</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : "w-0"
                )}/>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/10 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white animate-in zoom-in">
                  {cart.length}
                </span>
              )}
            </Button>

            {/* Mobile Menu Sidebar (Sheet) */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                
                <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col bg-white p-0">
                  {/* Sidebar Header */}
                  <SheetHeader className="p-6 border-b border-border/50 bg-[#FDFBF9]">
                    <SheetTitle className="text-left font-['YoungMother'] text-4xl font-bold">
                      Sree<span className="text-primary">.files</span>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Sidebar Links */}
                  <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200",
                          location.pathname === link.path
                            ? "bg-primary/10 text-primary translate-x-2"
                            : "text-foreground hover:bg-secondary hover:translate-x-1"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Sidebar Footer */}
                  <div className="p-6 border-t border-border/50 bg-[#FDFBF9]">
                    <Button 
                      className="w-full h-12 text-base font-medium shadow-md" 
                      onClick={() => {
                        setIsOpen(false);
                        setIsCartOpen(true);
                      }}
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      View Cart ({cart.length})
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      © {new Date().getFullYear()} Sree Manikanta
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;