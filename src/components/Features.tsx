import React from 'react';
import { MessageSquareCode, ShieldCheck, PhoneCall, Wifi, Globe, Zap, Tv, Award, Pocket, Headphones, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface FeaturesProps {
  onFeatureClick?: (tabId: string) => void;
}

export default function Features({ onFeatureClick }: FeaturesProps) {
  const navigate = useNavigate();
  const { setSelectedSimulatorTab, showNotification } = useApp();

  const handleItemClick = (tabId: string) => {
    if (onFeatureClick) {
      onFeatureClick(tabId);
    } else {
      setSelectedSimulatorTab(tabId);
      navigate('/get-started');
      showNotification({
        title: 'Feature Module Selected',
        message: `Switched sandbox view to demonstrate the specified module.`,
        type: 'info'
      });
    }
  };

  const list = [
    {
      id: 'sms',
      icon: <MessageSquareCode className="w-6 h-6 text-sky-400" />,
      title: 'SMS Verification',
      description: 'Receive temporary verification bypass codes instantly for standard registration gateways.',
      tab: 'sms',
    },
    {
      id: 'numbers',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Virtual Numbers',
      description: 'Anonymous, private phone lines supporting secure, private digital account creation globally.',
      tab: 'sms',
    },
    {
      id: 'airtime',
      icon: <PhoneCall className="w-6 h-6 text-amber-400" />,
      title: 'Airtime Recharge',
      description: 'Top up direct local cellular carriers inside our utility gateway securely.',
      tab: 'airtime',
    },
    {
      id: 'data',
      icon: <Wifi className="w-6 h-6 text-pink-400" />,
      title: 'Data Bundles',
      description: 'Acquire direct network internet data packages for self-use or family and friends.',
      tab: 'data',
    },
    {
      id: 'international',
      icon: <Globe className="w-6 h-6 text-sky-450" />,
      title: 'International Airtime',
      description: 'Support direct transfer pathways for cellular users across over 120 countries.',
      tab: 'airtime',
    },
    {
      id: 'electricity',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Electricity Bills',
      description: 'Initiate immediate pre-paid or post-paid utility meter balance funding.',
      tab: 'bills',
    },
    {
      id: 'tv',
      icon: <Tv className="w-6 h-6 text-violet-400" />,
      title: 'TV Subscriptions',
      description: 'Renew television premium subscriptions (DSTV, StarTimes, Gotv) instantly.',
      tab: 'bills',
    },
    {
      id: 'referrals',
      icon: <Award className="w-6 h-6 text-rose-450" />,
      title: 'Referral Rewards',
      description: 'Earn a recurring 5% cashback on all wallet deposits made by referred users.',
      tab: 'referrals',
    },
    {
      id: 'wallet',
      icon: <Pocket className="w-6 h-6 text-teal-400" />,
      title: 'Wallet System',
      description: 'Store multi-currency balance credits and secure transaction ledgers safely.',
      tab: 'dashboard',
    },
    {
      id: 'support',
      icon: <Headphones className="w-6 h-6 text-sky-400" />,
      title: '24/7 Premium Support',
      description: 'Connect with security-focused technical specialists whenever you need support.',
      tab: 'dashboard',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="features-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Core Ecosystem
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Unified Utilities Ecosystem
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            More than just virtual numbers. NEXORA unites cellular airtime, internet data links, local utility bills, and SMS bypass tools into one beautiful secure environment.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" id="features-grid-container">
          {list.map((feature, idx) => (
            <div
              key={feature.id}
              onClick={() => handleItemClick(feature.tab)}
              className="group bg-[#0A0F1E] border border-white/5 hover:border-sky-500/20 hover:shadow-2xl hover:shadow-sky-950/20 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative overflow-hidden"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                {/* Accent Background Blur bubble */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 group-hover:bg-sky-500/10 rounded-full blur-xl transition-all pointer-events-none" />

                {/* Card Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <h3 className="font-display font-bold text-sm text-white group-hover:text-sky-400 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Action trigger link */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-sky-400 transition-colors">
                <span>Open in Sandbox</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
