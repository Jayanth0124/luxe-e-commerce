import React from 'react';
import SEO from '@/components/SEO';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const Returns = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFBF9]">
      <SEO title="Return Policy" description="Strict No-Return Policy once delivered." />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Returns & Refunds</h1>

        {/* Highlighted Policy Box */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12 flex gap-4 items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0 mt-1" />
            <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Strict No-Return Policy</h3>
                <p className="text-red-700 leading-relaxed">
                    Due to the nature of our products, <strong>we do not accept returns or exchanges once the item has been delivered</strong>. Please review your order carefully before confirming.
                </p>
            </div>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">All Sales Are Final</h2>
            <p>Once a product has been successfully delivered to your address, it is considered sold and non-refundable. We do not offer "change of mind" returns.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Exceptions: Damaged Items</h2>
            <p>We only replace items if they are defective or damaged <strong>upon arrival</strong>. If you receive a damaged product, you must:</p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>Record a generic unboxing video clearly showing the sealed package and the damage.</li>
                <li>Report the issue to us via WhatsApp (+91 63091 13898) within <strong>24 hours</strong> of delivery.</li>
            </ul>
            <p className="mt-4">Requests made after 24 hours of delivery will not be entertained.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-900">Cancellations</h2>
            <p>You may cancel your order only if it has not yet been shipped. Once the shipping label is generated or the product has left our facility, cancellations are not permitted.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;