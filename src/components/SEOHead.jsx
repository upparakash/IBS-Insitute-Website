import { useEffect } from 'react';

const BASE = 'https://ibsbankcareer.in';
const DEFAULT_IMG = `${BASE}/logo-blue.png`;
const DEFAULT_DESC = "IBS Institute of Banking Studies – Kerala's #1 JAIIB, CAIIB, Bank PO & RBI Grade B coaching centre. 50,000+ students trained. 94% pass rate. IIBF Authorised. Kayamkulam, Kerala.";

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'IBS Bank Career',
  alternateName: 'IBS Institute of Banking Studies',
  url: BASE,
  logo: `${BASE}/logo-blue.png`,
  foundingDate: '2011',
  description: DEFAULT_DESC,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Center Point, KP Road',
    addressLocality: 'Kayamkulam',
    addressRegion: 'Kerala',
    postalCode: '690502',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-944-787-3644',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam'],
  },
  sameAs: [
    'https://youtube.com/@ibsbankcareer',
    'https://instagram.com/ibsbankcareer',
    'https://facebook.com/ibsbankcareer',
    'https://linkedin.com/company/ibsbankcareer',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '2000',
    bestRating: '5',
  },
};

export default function SEOHead({
  title = 'IBS Bank Career | JAIIB CAIIB Bank PO Coaching Kerala | Kayamkulam',
  description = DEFAULT_DESC,
  keywords,
  canonical,
  ogImage = DEFAULT_IMG,
  noindex = false,
  jsonLd,
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    const setProp = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
      el.setAttribute('href', href);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    setProp('og:type', 'website');
    setProp('og:site_name', 'IBS Bank Career');
    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:image', ogImage);
    setProp('og:url', canonical ? `${BASE}${canonical}` : BASE);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@ibsbankcareer');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    if (canonical) setLink('canonical', `${BASE}${canonical}`);

    const injectJsonLd = (data, id) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    injectJsonLd(ORG_JSON_LD, 'seo-org-jsonld');
    if (jsonLd) injectJsonLd(jsonLd, 'seo-page-jsonld');

    return () => {
      const pageScript = document.getElementById('seo-page-jsonld');
      if (pageScript) pageScript.remove();
    };
  }, [title, description, keywords, canonical, ogImage, noindex, jsonLd]);

  return null;
}
