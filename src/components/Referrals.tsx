import React, { useState } from 'react';
import { Copy, Check, Users, ShieldCheck, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface ReferralsProps {
  onOpenReferrals?: () => void;
}

export default function Referrals({ onOpenReferrals }: ReferralsProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const navigate = useNavigate();
  const { setSelectedSimulatorTab, showNotification } = useApp();

  const handleOpenLocal = () => {
    if (onOpenReferrals) {
      onOpenReferrals();
    } else {
      setSelectedSimulatorTab('referrals');
      navigate('/get-started');
      showNotification({
        title: 'Referrals Desk Preloaded',
        message: 'Access your active partner tokens and rewards ledger inside the secure simulator sandbox.',
        type: 'info'
      });
    }
  };

  const copyLink = () => {
    setCopiedLink(true);
    navigator.clipboard.writeText('https://nexora.com/ref?code=VERIFY-ISRAEL-5');
    setTimeout(() => setCopiedLink(false), 2000);
    showNotification({
      title: 'Link Copied',
      message: 'Referral link copied to clipboard.',
      type: 'success'
    });
  };

  const referralSteps = [
    {
      step: '01',
      title: 'Obtain Partner Link',
      desc: 'Activate your account instantly. No verification ID required. Grab your referral code inside the secure wallet dashboard.',
    },
    {
      step: '02',
      title: 'Distribute URL Links',
      desc: 'Introduce brand associates, digital marketers, or developers. Share anywhere (social channels, forums, blogs).',
    },
    {
      step: '03',
      title: 'Collect 5% Commission',
      desc: 'Every single time your referrals make a deposit, you receive an automated 5% cash reward back into your secure balance instantly.',
    },
  ];

  return (
    <section id="referrals" className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      
      {/* Background custom ambient glows */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text details */}
          <div className="lg:col-span-7 space-y-6" id="referrals-text-panel">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Referral Program
            </span>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none uppercase">
              Infinite Residual Earnings. Zero Limits.
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Transform your network into active fintech rewards. With NEXORA’s multi-server verification engine, you acquire a direct 5% cash refund on every customer wallet deposit made through your partner URLs.
            </p>

            {/* Stepper block */}
            <div className="space-y-6 pt-4">
              {referralSteps.map((s, idx) => (
                <div key={idx} className="flex gap-4 items-start" style={{ contentVisibility: 'auto' }}>
                  <span className="font-display font-extrabold text-2xl text-sky-400 bg-[#0B132B] border border-sky-500/20 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-base text-white mb-1">
                      {s.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual panel showing dashboard stats preview */}
          <div className="lg:col-span-5 relative" id="referrals-dashboard-mockup">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-cyan-500/5 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-[#0A0F1E] text-white rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl overflow-hidden font-sans">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl" />

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-400" />
                  <span className="font-display font-bold text-sm text-slate-100">Referrals Manager</span>
                </div>
                <span className="text-[10px] bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono px-2 py-0.5 rounded-full">
                  Partner Code Active
                </span>
              </div>

              {/* Stats boxes inside */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#060A13] border border-white/5 p-4 rounded-xl">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block">Active referrals</span>
                  <span className="text-xl font-bold text-white mt-1 block">14 Partners</span>
                </div>

                <div className="bg-[#060A13] border border-white/5 p-4 rounded-xl">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block">Withdrawn Reward</span>
                  <span className="text-xl font-bold text-emerald-400 mt-1 block">₦45,500.00</span>
                </div>
              </div>

              {/* Active rewards lock section */}
              <div className="bg-[#060A13] border border-orange-500/10 rounded-xl p-4 mb-6 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase font-bold text-sky-450 block">Available rewards</span>
                  <b className="text-lg font-bold font-display text-white mt-0.5 block">₦12,500.00</b>
                </div>
                <button
                  onClick={handleOpenLocal}
                  className="bg-sky-500 hover:bg-sky-600 text-slate-950 font-sans font-black text-[10px] px-3.5 py-2.5 rounded-xl cursor-pointer transition-all uppercase tracking-wider shadow-md shadow-sky-500/10"
                >
                  Withdraw to Wallet
                </button>
              </div>

              {/* Dynamic copy panel */}
              <div className="space-y-2">
                <span className="text-[10px] text-slate-400 font-semibold block">Copy Partner Link URL</span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://nexora.com/ref?code=VERIFY-ISRAEL-5"
                    className="flex-1 bg-[#0B132B] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-400 font-mono focus:outline-hidden"
                  />
                  <button
                    onClick={copyLink}
                    className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-400 font-bold" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Footer text */}
              <div className="mt-6 pt-4 border-t border-white/5 text-slate-505 text-[10px] font-mono flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Withdrawals settle immediately into wallet credit.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
