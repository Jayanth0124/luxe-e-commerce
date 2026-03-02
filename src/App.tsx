import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import { AnimatePresence } from "framer-motion";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { WelcomeScreen } from "./components/WelcomeScreen";

// Main Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

// Legal/Policy Pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/shipping-policy" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(() => {
    return !sessionStorage.getItem('welcomeShown');
  });

  const handleEnterSite = () => {
    sessionStorage.setItem('welcomeShown', 'true');
    setShowWelcome(false);
  };

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showWelcome]);

  return (
    <HelmetProvider>
      <TooltipProvider>
        <Toaster position="top-center" richColors />
        <CartProvider>
          {/* ADDED FUTURE FLAGS HERE TO CLEAR WARNINGS */}
          <BrowserRouter 
            future={{ 
              v7_startTransition: true, 
              v7_relativeSplatPath: true 
            }}
          >
            <ScrollToTop />
            
            <AnimatePresence>
              {showWelcome && <WelcomeScreen onEnter={handleEnterSite} key="welcome" />}
            </AnimatePresence>

            <div className="flex flex-col min-h-screen bg-[#FDFBF9]">
              <Header />
              <CartDrawer />
              
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
              
              <Footer />
            </div>

          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </HelmetProvider>
  );
};

export default App;