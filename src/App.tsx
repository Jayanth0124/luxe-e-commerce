import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import { Toaster } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1" data-barba="container">
            <AppRoutes />
          </main>
          <Footer />
        </div>
        <Toaster position="bottom-right" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
