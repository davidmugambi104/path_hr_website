import React, { Suspense } from 'react';
import { WorkingNavbar } from './components/layout/WorkingNavbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';
import { StructuredData } from './components/layout/StructuredData';
import { LoadingSkeleton } from './components/ui/LoadingSkeleton';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { FixedFloatingWhatsApp } from './components/ui/FixedFloatingWhatsApp';
import { FunctionalLiveChat } from './components/ui/FunctionalLiveChat';
import { TrainingCalendar } from './components/sections/TrainingCalendar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Values } from './components/sections/Values';
import { Services } from './components/sections/Services';
import { Approach } from './components/sections/Approach';
import { WhyChoose } from './components/sections/WhyChoose';
import { Team } from './components/sections/Team';
import { Clients } from './components/sections/Clients';
import { Testimonials } from './components/sections/Testimonials';
import { CaseStudies } from './components/sections/CaseStudies';
import { FixedDownloadBrochure } from './components/sections/FixedDownloadBrochure';
import { Newsletter } from './components/sections/Newsletter';
import { CompactContactSection } from './components/sections/CompactContactSection';
import { FAQ } from './components/sections/FAQ';
import { ServiceComparison } from './components/sections/ServiceComparison';
import { Certifications } from './components/sections/Certifications';
import { ClientLogos } from './components/sections/ClientLogos';
import { ServiceFinder } from './components/sections/ServiceFinder';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col">
          <Helmet>
            <title>BoldPath HR & Business Solutions | Transforming African Workplaces</title>
            <meta name="description" content="BoldPath HR & Business Solutions empowers African organizations with strategic human capital capabilities that drive sustainable growth and transformation." />
            <meta name="keywords" content="HR consultancy, human resources, Kenya, organizational development, talent management, training" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://www.boldpathhr.co.ke/" />
          </Helmet>
          
          <StructuredData />
          <WorkingNavbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSkeleton />}>
              <Hero />
              <About />
              <Values />
              <Services />
              <ServiceComparison />
              <ServiceFinder />
              <Approach />
              <WhyChoose />
              <Certifications />
              <Team />
              <TrainingCalendar />
              <ClientLogos />
              <Testimonials />
              <CaseStudies />
              <Clients />
              <FixedDownloadBrochure />
              <Newsletter />
              <FAQ />
              <CompactContactSection />
            </Suspense>
          </main>
          <Footer />
          <BackToTop />
          <FixedFloatingWhatsApp />
          <FunctionalLiveChat />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;