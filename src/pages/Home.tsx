import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import PrivacySecurity from '../components/PrivacySecurity';
import Testimonials from '../components/Testimonials';
import ReusableCTA from '../components/ReusableCTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <PrivacySecurity />
      <Testimonials />
      <ReusableCTA 
        title="Access all virtual tools with zero setup wait" 
        badge="Zero Friction Portal"
      />
    </Layout>
  );
}
