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
        description="Our mobile apps support lightweight verification tools, instant wallet actions, and fast activation on iOS and Android."
      />
    </Layout>
  );
}
