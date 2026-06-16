import Layout from '../layouts/Layout';
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

export default function HomePage() {
  return (
    <Layout>
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
