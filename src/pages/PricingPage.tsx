import React from 'react';
import Layout from '../components/Layout';
import PricingCalculator from '../components/PricingCalculator';
import ReusableCTA from '../components/ReusableCTA';

export default function PricingPage() {
  return (
    <Layout>
      <PricingCalculator />
      <ReusableCTA 
        title="Need a custom corporate volume rate?" 
        badge="Enterprise Bundles"
        description="Verify thousands of digital tokens daily with dedicated, private routing channels. Get in touch for custom SLA terms, specialized area codes, and bulk pricing discounts."
      />
    </Layout>
  );
}
