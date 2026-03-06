import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, PackageOpen, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const BulkOrders = () => {
  const handleBulkWhatsApp = () => {
    const message = "Hello Sree Files! I am interested in placing a Bulk/Custom order. Please share details and pricing.";
    window.open(`https://wa.me/916309113898?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="Bulk & Custom Orders" description="Get custom printed office files for your school, college, or corporate office at factory prices." />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="inline-block bg-[#D2A679]/10 px-4 py-2 rounded-full border border-[#D2A679]/30 text-[#D2A679] font-bold text-sm tracking-wider uppercase">B2B Wholesale</div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Custom Files for <span className="text-[#D2A679] italic">Your Brand</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We manufacture premium, heavy-duty office files custom-printed with your School, College, or Corporate logo. Get direct factory pricing for large quantities.
            </p>
            <Button size="lg" onClick={handleBulkWhatsApp} className="bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 rounded-xl font-bold text-lg shadow-lg">
              Request a Custom Quote
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
            {/* Visual Grid of Benefits */}
            {[
              { icon: GraduationCap, title: "Schools & Colleges", desc: "Perfect for student records & certificates." },
              { icon: Building2, title: "Corporate Offices", desc: "Maintain brand identity across departments." },
              { icon: PackageOpen, title: "Wholesale Pricing", desc: "Massive discounts on orders above 500." },
              { icon: BadgeCheck, title: "Premium Quality", desc: "Heavy-duty boards that last for years." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FDFBF9] rounded-full flex items-center justify-center mb-4 text-[#D2A679]">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;