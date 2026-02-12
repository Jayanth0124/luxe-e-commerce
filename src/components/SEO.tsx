import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Sree Files, Premium Files, Office Supplies, Vijayawada, File Manufacturing", 
  image = "/og-image.jpg", // You should add a default image in your public folder
  url = "https://sreefiles.netlify.app/" 
}) => {
  const siteTitle = "Sree.Files | Premium File Manufacturer";
  const fullTitle = `${title} | Sree.Files`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data (JSON-LD) for Google Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sree Manikanta",
          "url": "https://sreefiles.netlify.app/",
          "logo": "https://sreefiles.netlify.app//logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6309113898",
            "contactType": "sales",
            "areaServed": "IN"
          },
          
        })}
      </script>
    </Helmet>
  );
};

export default SEO;