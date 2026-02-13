import React from 'react';
import SEO from '@/components/SEO';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="Privacy Policy" description="How Sree.files handles your data." />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Your privacy is important to us.</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you place an order, including your name, shipping address, email address, and phone number. We do not store payment card details on our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Process and fulfill your orders.</li>
              <li>Communicate with you about your order status via WhatsApp or Email.</li>
              <li>Improve our website and product offerings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">3. Data Sharing</h2>
            <p>We do not sell or rent your personal data to third parties. We may share your shipping details with our logistics partners solely for the purpose of delivering your order.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;