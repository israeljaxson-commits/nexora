import React from 'react';
import Layout from '../components/Layout';
import FAQs from '../components/FAQs';
import ReusableCTA from '../components/ReusableCTA';

export default function FAQsPage() {
  return (
    <Layout>
      <FAQs />
      <ReusableCTA 
        title="Can't find what you are looking for?" 
        badge="Direct Support Channels"
        description="Connect directly with our 24/7 technical security ops. Standard response window is under 15 minutes, with dedicated priority engineers standing by."
      />
    </Layout>
  );
}
