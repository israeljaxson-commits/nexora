import React from 'react';
import { Zap, Tag, ShieldCheck, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: 'Fast Delivery',
      desc: 'No queues and no hardware swaps. SMS verification and utility transactions are processed in seconds.',
    },
    {
      icon: <Tag className="w-6 h-6 text-emerald-400" />,
      title: 'Best Competitive Prices',
      desc: 'Pay exclusively for successful delivered verifications. Zero monthly fees, zero system setup charges. Fair international gateway pricing.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
      title: 'Secure Anti-Fraud Platform',
      desc: 'AES-256 encryption and active fraud filters help block duplicate requests, abuse, and leaked allocations.',
    },
    {
      icon: <Headphones className="w-6 h-6 text-red-400" />,
      title: 'Reliable 24/7 Support',
      desc: 'Get direct access to technical support specialists any time you need help.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      
      {/* Decorative background radial glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="why-choose-us-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Security Guarantee
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Built For Reliable Performance
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            See why developers, teams, and privacy-focused users choose NEXORA for fast and secure verification services.
          </p>
        </div>

        {/* Benefits cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-us-grid">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="bg-[#0A0F1E]/80 border border-white/5 p-8 rounded-3xl shadow-lg hover:border-white/10 transition-all duration-300 flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B132B] border border-white/5 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="font-display font-extrabold text-base text-white mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="h-1.5 w-12 bg-sky-500 rounded-full mt-8 shadow-sm shadow-sky-500/30" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
