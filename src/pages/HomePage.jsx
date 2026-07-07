import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import CoursesSection from '../components/CoursesSection';
import WhyIBSSection from '../components/WhyIBSSection';
import UpcomingBatches from '../components/UpcomingBatches';
import ResultsSection from '../components/ResultsSection';
import FacultySection from '../components/FacultySection';
import ResourcesSection from '../components/ResourcesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import AppDownloadSection from '../components/AppDownloadSection';

const HOME_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ibsbankcareer.in/#organization',
  name: 'IBS Bank Career',
  image: 'https://ibsbankcareer.in/logo-blue.png',
  url: 'https://ibsbankcareer.in',
  telephone: '+91-944-787-3644',
  priceRange: '₹850 – ₹48,000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Center Point, KP Road',
    addressLocality: 'Kayamkulam',
    addressRegion: 'Kerala',
    postalCode: '690502',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 9.1697, longitude: 76.5013 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '21:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '2000', bestRating: '5' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Banking Exam Courses',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'JAIIB Coaching', url: 'https://ibsbankcareer.in/courses/jaiib' }, price: '9570', priceCurrency: 'INR' },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'CAIIB Coaching', url: 'https://ibsbankcareer.in/courses/caiib' }, price: '11440', priceCurrency: 'INR' },
    ],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <SEOHead
        title="IBS Bank Career | Kerala's #1 JAIIB CAIIB Bank PO Coaching | Kayamkulam Since 2011"
        description="IBS Institute of Banking Studies – Kerala's #1 coaching for JAIIB, CAIIB, Bank PO, RBI Grade B & IIBF certifications. 50,000+ students. 94% pass rate. IIBF Authorised. Kayamkulam, Kerala."
        keywords="JAIIB coaching Kerala, CAIIB coaching Kayamkulam, bank exam coaching Kerala, JAIIB classes Thiruvananthapuram, CAIIB coaching Ernakulam, banking institute Kerala, IBS Bank Career"
        canonical="/"
        jsonLd={HOME_JSONLD}
      />
      <HeroSection />
      <StatsBar />
      <CoursesSection />
      <WhyIBSSection />
      <UpcomingBatches />
      <ResultsSection />
      <FacultySection />
      <ResourcesSection />
      <TestimonialsSection />
      <BlogSection />
      <AppDownloadSection />
    </Layout>
  );
}
