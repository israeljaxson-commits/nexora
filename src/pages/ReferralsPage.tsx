import React from 'react';
import Layout from '../components/Layout';
import Referrals from '../components/Referrals';
import ReusableCTA from '../components/ReusableCTA';

export default function ReferralsPage() {
  return (
    <Layout>
      <Referrals />
      <ReusableCTA 
        title="Ready to cash out? Get started here" 
        badge="Direct Cashback Portal"
        description="Share links with ease. Track real-time signup statistics and earn continuous split-commissions settle-able directly to your multi-currency utility wallet."
      />
    </Layout>
  );
}
