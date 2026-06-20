import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const menuLinks = {
    services: [
      { name: 'SMS Verification Codes', path: '/pricing' },
      { name: 'Virtual Phone Lines', path: '/features' },
      { name: 'Airtime Recharge', path: '/features' },
      { name: 'Data Subscriptions', path: '/features' },
      { name: 'Prepaid Utility Bills', path: '/get-started' },
    ],
    support: [
      { name: 'FAQs', path: '/faqs' },
      { name: 'Terminal Guide', path: '/get-started' },
      { name: 'Referral Rewards', path: '/referrals' },
      { name: 'Privacy Standards', path: '/about' },
    ],
    company: [
      { name: 'Platform Features', path: '/features' },
      { name: 'Secure Gateways', path: '/about' },
      { name: 'Download Mobile App', path: '/download' },
      { name: 'Customer Reviews', path: '/' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-16">
          
          {/* Logo & description column */}
          <div className="lg:col-span-4 space-y-5" id="footer-brand-col">
            <Link to="/" className="flex items-center gap-2 cursor-pointer decoration-none">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                NEX<span className="text-indigo-400">ORA</span>
              </span>
            </Link>
            
            <p className="text-xs text-slate-405 leading-relaxed max-w-sm">
              NEXORA provides temporary verification numbers, airtime recharge channels, and secure utility payments for users worldwide.
            </p>

            {/* Social media listings */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#twitter" aria-label="Visit Twitter profile" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#github" aria-label="Visit GitHub repository" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="#telegram" aria-label="Join telegram group" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.622 3.844 10.328 9.072 11.644.6-.111.815-.26.815-.578v-2.036c-3.328.723-4.03-1.607-4.03-1.607-.544-1.385-1.33-1.753-1.33-1.753-1.085-.742.083-.727.083-.727 1.202.084 1.834 1.233 1.834 1.233 1.066 1.83 2.8 1.302 3.483.996.108-.773.417-1.302.758-1.603-2.657-.302-5.45-1.328-5.45-5.91 0-1.305.465-2.372 1.23-3.21-.13-.303-.535-1.518.115-3.167 0 0 .991-.318 3.25 1.214.945-.263 1.954-.393 2.96-.399 1.006.006 2.015.136 2.96.399 2.255-1.532 3.245-1.214 3.245-1.214.654 1.65.25 2.864.12 3.167.765.838 1.23 1.905 1.23 3.21 0 4.593-2.8 5.604-5.463 5.898.43.37.81 1.102.81 2.222v3.293c0 .319.22.67.82.557C20.144 22.25 24 17.556 24 11.944C24 5.344 18.656 0 11.944 0" /></svg>
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-100 block">Solutions</span>
            <ul className="space-y-2 text-xs">
              {menuLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:text-white transition-colors cursor-pointer text-left decoration-none block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-100 block">Support Ledger</span>
            <ul className="space-y-2 text-xs">
              {menuLinks.support.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="hover:text-white transition-colors cursor-pointer text-left decoration-none block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Input Box Column */}
          <div className="lg:col-span-4 space-y-4" id="footer-newsletter-col">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-100 block">Subscribe to security alerts</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sign up to receive rapid bulletins on active verification gateways, country code filters, and system security rollouts. No spam, ever.
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 p-4 rounded-xl flex items-center gap-2.5 text-xs">
                <Check className="w-5 h-5 text-emerald-450 shrink-0" />
                <span>Subscription successful! Security alerts activated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl transition-all cursor-pointer active:scale-95 text-center flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower footer section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500 space-y-4 sm:space-y-0" id="footer-copyright-panel">
          <span className="font-mono">
            © {new Date().getFullYear()} NEXORA Inc. All physical and logical SIM gateways protected.
          </span>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Gateway Usage</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Shield Policy</a>
            <a href="#disclaimers" className="hover:text-white transition-colors">Legal Notices</a>
            <a href="#abuse" className="hover:text-white text-rose-455 transition-colors font-semibold">Report Line Abuse</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
