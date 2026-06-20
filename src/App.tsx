import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Pages
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ReferralsPage from './pages/ReferralsPage';
import DownloadPage from './pages/DownloadPage';
import AboutPage from './pages/AboutPage';
import FAQsPage from './pages/FAQsPage';
import GetStartedPage from './pages/GetStartedPage';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/referrals" element={<ReferralsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          
          {/* Fallback redirect or Home render for unmapped/stale paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
