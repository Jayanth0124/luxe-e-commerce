import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SEO from '@/components/SEO';

const faqs = [
  {
    question: "What is the minimum order for custom logo printing?",
    answer: "For custom printing (your school, college, or corporate logo), the minimum order quantity is 500 files. This ensures we can provide you with the best factory pricing and highest print quality."
  },
  {
    question: "Do you deliver outside Vijayawada?",
    answer: "Yes! While we are based in Vijayawada, we handle bulk shipping across Andhra Pradesh, Telangana, and other states upon request. Shipping charges are calculated based on bulk weight and location."
  },
  {
    question: "What is the difference between Ordinary and Deluxe Lace files?",
    answer: "Our Ordinary files are perfect for standard daily use. The Deluxe Lace files are constructed with a thicker, higher-GSM inner board, premium durable laces, and a slightly superior outer finish for long-term archival storage."
  },
  {
    question: "Can I mix and match designs in a bulk order?",
    answer: "Absolutely. If you are ordering our pre-designed files (Religious, Designer, Box files), you can mix different designs to reach your wholesale quantity requirement."
  },
  {
    question: "How long does a bulk custom order take?",
    answer: "Custom logo printing usually takes 7 to 14 business days from the date of design approval, depending on the volume of the order."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="FAQ - Sree Files" description="Frequently asked questions about our premium office files, bulk orders, and shipping." />
      
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Frequently Asked <span className="text-[#D2A679] italic">Questions</span></h1>
          <p className="text-gray-600">Everything you need to know about our products, bulk orders, and shipping.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown className={`shrink-0 text-[#D2A679] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;