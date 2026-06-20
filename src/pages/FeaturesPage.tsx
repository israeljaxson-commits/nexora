import React from 'react';
import Layout from '../components/Layout';
import Features from '../components/Features';
import ReusableCTA from '../components/ReusableCTA';

export default function FeaturesPage() {
  return (
    <Layout>
      <Features />
      <ReusableCTA 
        title="Experience our extreme routing speed live" 
        badge="Zero Friction Portal"
        description="Verify lines instantly, test cellular top-ups, and automate billing schedules in our simulated environment."
      />
    </Layout>
  );
}
