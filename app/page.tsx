import Navigation from '@/components/navigation';
import TaskelevateHero from '@/components/taskelevate-hero';
import AuthoritySocialProof from '@/components/authority-social-proof';
import ServicesGrowthSystems from '@/components/services-growth-systems';
import Portfolio from '@/components/portfolio';
import CaseStudies from '@/components/case-studies';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import FinalCTAFooter from '@/components/final-cta-footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <TaskelevateHero />
      <AuthoritySocialProof />
      <ServicesGrowthSystems />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <FinalCTAFooter />
    </main>
  );
}