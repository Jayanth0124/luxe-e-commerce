import React from 'react';
import SEO from '@/components/SEO';

const Terms = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="Terms & Conditions" description="Terms of service for Sree.files." />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">1. Introduction</h2>
            <p>Welcome to Sree.files. By accessing our website and placing an order, you agree to be bound by these terms and conditions. These terms apply to all visitors, users, and others who access or use the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">2. Products & Customization</h2>
            <p>We strive to display the colors and images of our products as accurately as possible. However, we cannot guarantee that your computer monitor's display of any color will be accurate. All our files are handcrafted, and slight variations in texture or finish are a mark of their premium nature.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">3. Pricing & Payments</h2>
            <p>All prices are listed in Indian Rupees (INR). We reserve the right to change prices at any time without notice. Orders are confirmed only upon receipt of payment or formal confirmation via WhatsApp for bulk orders.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">4. Limitation of Liability</h2>
            <p>Sree.files shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;