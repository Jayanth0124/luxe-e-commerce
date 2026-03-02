import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  // 2. EDITORIAL CURTAIN ANIMATIONS
  const containerVars = {
    hidden: { opacity: 0, y: "10%" },
    show: {
      opacity: 1,
      y: "0%",
      transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      y: "-100%", 
      borderBottomLeftRadius: "50%", 
      borderBottomRightRadius: "50%",
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFBF9] overflow-auto px-4 sm:px-6 origin-center"
    >
      {/* Premium subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D2A679]/10 via-[#FDFBF9] to-[#FDFBF9] pointer-events-none" />
      
      {/* Subtle Noise Texture for high-end print feel */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* Main Content Wrapper */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-12 min-h-full">
        
        {/* Logo Section */}
        <motion.div variants={itemVars} className="mb-8 relative">
          <img 
            src="/images/namalu.png" 
            alt="Sree Files Logo" 
            className="relative w-24 sm:w-28 md:w-36 h-auto object-contain drop-shadow-[0_10px_20px_rgba(210,166,121,0.3)] z-10"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div variants={itemVars} className="relative mb-6">
          <h1 className="text-[3.5rem] sm:text-6xl md:text-[7rem] leading-none font-['YoungMother'] text-gray-900 tracking-wide text-center flex items-center justify-center">
            Sree<span className="text-[#D2A679]">.files</span>
          </h1>
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-4 -right-8 md:-right-12 text-[#D2A679] opacity-80"
          >
            <Sparkles size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Elegant Divider */}
        <motion.div variants={itemVars} className="flex items-center justify-center gap-4 w-full max-w-[250px] mb-8">
          <div className="h-[1px] flex-1 bg-[#D2A679]/40" />
          <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-semibold text-[#D2A679]">
            Premium
          </span>
          <div className="h-[1px] flex-1 bg-[#D2A679]/40" />
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVars} className="space-y-4 mb-12 text-center px-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900">
            Elevating Workspace Aesthetics
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto font-light leading-relaxed">
            Handcrafted office files and custom luxury stationery. <br className="hidden sm:block"/>
            Trusted by professionals since 2010.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div variants={itemVars} className="w-full px-4 sm:px-0 sm:w-auto">
          <button
            onClick={onEnter}
            className="group relative w-full sm:w-auto bg-[#1a1a1a] text-white px-10 py-4 sm:py-5 rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 overflow-hidden"
          >
            {/* Very subtle shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <span className="relative z-10 tracking-wide">Enter Boutique</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </motion.div>
  );
};