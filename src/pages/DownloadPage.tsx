import React from 'react';
import Layout from '../components/Layout';
import DownloadCTA from '../components/DownloadCTA';
import ReusableCTA from '../components/ReusableCTA';

export default function DownloadPage() {
  return (
    <Layout>
      <DownloadCTA />
      <ReusableCTA 
        title="Access NEXORA gateways on any platform" 
        badge="Cross-Platform Utility"
        description="Our unified mobile clients support light-weight bypass tools, instant cellular balances, and priority token activations on both iOS and Android natively."
      />
    </Layout>
  );
}
