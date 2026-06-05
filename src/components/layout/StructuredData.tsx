import React from 'react';
import { company } from '../../lib/content';

export function StructuredData(): JSX.Element {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": "https://www.boldpathhr.co.ke",
    "logo": "https://www.boldpathhr.co.ke/logo.png",
    "description": company.tagline,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-795-959416",
      "contactType": "Customer Service",
      "email": company.contact.email
    },
    "sameAs": [
      "https://www.linkedin.com/company/boldpath-hr",
      "https://twitter.com/boldpathhr",
      "https://www.facebook.com/boldpathhr"
    ]
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} 
    />
  );
}