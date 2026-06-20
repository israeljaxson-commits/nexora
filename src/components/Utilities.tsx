import React from 'react';
import { Zap, Tv, Wifi, Phone, Landmark, Plus, ArrowRight } from 'lucide-react';

interface UtilitiesProps {
  onOpenUtility: (tabId: string) => void;
}

export default function Utilities({ onOpenUtility }: UtilitiesProps) {
  const services = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500 font-bold" />,
      title: 'Electricity Token',
      desc: 'Purchase prepay credits for all municipal utility grids. Codes deliver instantly via SMS or screen.',
      color: 'bg-yellow-50',
      tab: 'bills',
    },
    {
      icon: <Tv className="w-6 h-6 text-violet-500" />,
      title: 'Premium TV Package',
      desc: 'Instant DSTV, StarTimes, Gotv and box subscription renewal directly through our API gateway.',
      color: 'bg-violet-50',
      tab: 'bills',
    },
    {
      icon: <Wifi className="w-6 h-6 text-pink-500" />,
      title: 'Broadband Internet',
      desc: 'Activate direct subscriber fiber or LTE data networks globally for home or office hotspots.',
      color: 'bg-pink-50',
      tab: 'airtime',
    },
    {
      icon: <Phone className="w-6 h-6 text-emerald-500" />,
      title: 'Direct Cellular Airtime',
      desc: 'Transfer instant cellular airrecharge balances to prepaid cards on over 400 global operators.',
      color: 'bg-emerald-50',
      tab: 'airtime',
    },
    {
      icon: <Landmark className="w-6 h-6 text-blue-500" />,
      title: 'Custom Payments API',
      desc: 'Configure callback URLs and webhook scripts to auto-process customer bill settlements.',
      color: 'bg-blue-50',
      tab: 'dashboard',
    },
    {
      icon: <Plus className="w-6 h-6 text-indigo-500" />,
      title: 'More Digital Services',
      desc: 'Bypass verification gateways and process unified payments across multiple server channels.',
      color: 'bg-indigo-50',
      tab: 'bills',
    },
  ];

  return (
    <section id="utilities" className="py-20 md:py-28 bg-gray-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="utilities-header">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Unified Utility payments
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
            One Wallet, Boundless Services
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-650">
            Ditch multiple payment accounts. Load your secure balance once and clear utility invoices, activate internet data lines, or recharge mobile airtime.
          </p>
        </div>

        {/* Services grid visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="utilities-services-grid">
          {services.map((svc, idx) => (
            <div
              key={idx}
              onClick={() => onOpenUtility(svc.tab)}
              className="bg-white border border-gray-100 hover:border-indigo-100 p-8 rounded-3xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Circle Container Icon */}
                <div className={`w-14 h-14 rounded-2xl ${svc.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  {svc.icon}
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-950 mb-2">
                  {svc.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                  {svc.desc}
                </p>
              </div>

              {/* Action link */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors pt-4 border-t border-gray-50 mt-auto">
                <span>Configure in simulator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
