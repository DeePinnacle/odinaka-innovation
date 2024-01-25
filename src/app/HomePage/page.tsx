import React from 'react';
import Heropage from '../Heropage/Heropage';
import AboutSection from '../About/AboutSection';
import ServiceSection from '../Services/Servicesection';
import FeaturesSection from '../Features/Featuresection';
import TestimonialSection from '../Testimonies/TestimonialSection';
import CTA from '../CTA/CTAsection';
import FAQ from '../FAQ/FAQsection'; 
const HomePage = () => {
  return (
    <div>
      <Heropage />
      <AboutSection />
      <ServiceSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTA />
      <FAQ />
    </div>
  )
}

export default HomePage