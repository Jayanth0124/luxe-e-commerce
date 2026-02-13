import React from 'react';
import SEO from '@/components/SEO';
import { Truck, Clock, MapPin } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="Shipping Policy" description="Delivery timelines and shipping information." />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Shipping Policy</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
                { icon: Clock, title: "Processing Time", desc: "1-2 Business Days" },
                { icon: Truck, title: "Delivery Time", desc: "3-7 Business Days" },
                { icon: MapPin, title: "Service Area", desc: "All Over India" }
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-border/50 text-center">
                    <item.icon className="w-8 h-8 mx-auto text-primary mb-3" />
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Order Processing</h2>
            <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Shipping Rates</h2>
            <p>Shipping charges for your order will be calculated and displayed at checkout (or confirmed via WhatsApp for bulk orders). We partner with reliable courier services to ensure your premium files arrive in perfect condition.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Damaged Orders</h2>
            <p>Sree.files is not liable for any products damaged or lost during shipping. However, if you received your order damaged, please contact us immediately so we can file a claim with the shipment carrier.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;