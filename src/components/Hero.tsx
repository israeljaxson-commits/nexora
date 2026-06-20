import React from 'react';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent"
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-gradient-to-br from-indigo-500/10 to-sky-500/10 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left" id="hero-left-content">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider self-center lg:self-start mb-6 shadow-md shadow-sky-950/20">
              <Zap className="w-3.5 h-3.5 text-sky-400 animate-pulse fill-sky-400/20" />
              <span>Next-Gen Temporary Numbers</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-6 uppercase">
              Get Verified <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">ASAP</span>. No SIM Required.
            </h1>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Manage all your digital services from one powerful platform. Get SMS verification codes, purchase virtual numbers, top up airtime and data, pay utility bills, and enjoy fast, secure, and hassle-free transactions—whenever you need them
            </p>

            {/* Download Badges & Get Started */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                to="/get-started"
                className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer decoration-none"
              >
                Start Instant Verification
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/pricing"
                className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer decoration-none"
              >
                View Prices
              </Link>
            </div>

            {/* Badges for store */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Google Play */}
              <Link to="/download" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl border border-white/5 shadow-md transition-all hover:scale-[1.02] decoration-none">
                <svg className="w-5 h-5 fill-sky-400" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L12,6.5V11H7V13H12V17.5L17.5,12Z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase font-bold text-slate-400">Get it on</span>
                  <span className="text-xs font-bold font-display uppercase tracking-wide">Google Play</span>
                </div>
              </Link>

              {/* App Store */}
              <Link to="/download" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl border border-white/5 shadow-md transition-all hover:scale-[1.02] decoration-none">
                <svg className="w-5 h-5 fill-indigo-400" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[9px] text-slate-400 block tracking-wider uppercase font-bold text-slate-400">Download on the</span>
                  <span className="text-xs font-bold font-display uppercase tracking-wide">App Store</span>
                </div>
              </Link>
            </div>

            {/* Mini metrics */}
            <div className="flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-6">
              <div>
                <span className="block text-2xl font-black font-display text-white">99.9%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">SMS Auto-Delivery</span>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div>
                <span className="block text-2xl font-black font-display text-white">&lt; 15s</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Activation Speed</span>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div>
                <span className="block text-2xl font-black font-display text-white">140k+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verifications Done</span>
              </div>
            </div>
          </div>

          {/* Hero Right Content Mockup */}
          <div className="lg:col-span-6 relative flex justify-center" id="hero-right-content">
            {/* Decorative background gradients & blurred shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-sky-500/10 blur-2xl animate-pulse pointer-events-none" />

            {/* Smartphone Case Frame Mockup */}
            <div className="relative w-76 sm:w-82 h-[600px] bg-[#0A0F1E] rounded-[48px] p-3.5 shadow-2xl border-8 border-slate-800 shadow-sky-950/30 select-none overflow-hidden hover:scale-[1.01] transition-transform duration-300">
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-30" />

              {/* Status Bar */}
              <div className="absolute top-9 left-8 right-8 flex justify-between items-center text-xs text-slate-400 font-sans font-medium px-2 z-20">
                <span>09:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <span className="bg-emerald-500 w-1.5 h-1.5 rounded-full animate-ping" />
                  <span className="text-[9px] tracking-widest text-emerald-400">LTE</span>
                  <div className="w-5 h-2.5 bg-slate-700/80 rounded-sm p-0.5 flex items-center">
                    <div className="bg-emerald-400 w-3 h-full rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Screen Content Wrapper */}
              <div className="relative h-full w-full rounded-[38px] bg-[#05070A] overflow-hidden pt-16 px-4 pb-4 flex flex-col justify-between">
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center px-1 mb-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                      NX
                    </div>
                    <div>
                      <span className="text-[9px] block text-slate-500">Welcome back</span>
                      <span className="text-xs font-bold text-slate-200">Alex Carter</span>
                    </div>
                  </div>
                  <div className="bg-[#0A0F1E] border border-white/5 px-2 py-1 rounded-lg text-[10px] text-emerald-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ₦14,800.00 Wallet
                  </div>
                </div>

                {/* Dashboard Elements */}
                <div className="space-y-3.5 flex-1 overflow-visible">
                  
                  {/* SMS Code Generated Visual */}
                  <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-3.5 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-sky-500/5 rounded-full blur-xs" />
                    
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">💬</span>
                        <div>
                          <span className="text-[11px] font-bold text-sky-400 block">WhatsApp Bypass</span>
                          <span className="text-[9px] text-slate-500 font-medium">Active • Expires in 08:44</span>
                        </div>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 font-mono text-indigo-300 border border-white/10">+1 (646) 770-0114</span>
                    </div>

                    <div className="mt-3.5 bg-neutral-950 border border-white/5 rounded-xl p-2.5 flex items-center justify-between">
                      <div>
                        <span className="text-[8px] uppercase tracking-wider text-slate-500 block font-bold text-slate-500">Waiting for SMS...</span>
                        <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">SMS CODE: 294-811</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 animate-pulse">Received</span>
                    </div>
                  </div>

                  {/* Platforms selection widget */}
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-2 block px-1">Verification Channels</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#0A0F1E] border border-white/5 p-2.5 rounded-xl flex items-center gap-2">
                        <span className="text-sm">📱</span>
                        <div>
                          <span className="text-[11px] font-semibold text-slate-200 block">Telegram</span>
                          <span className="text-[9px] text-indigo-300 font-bold">₦600.00 per code</span>
                        </div>
                      </div>

                      <div className="bg-sky-500/10 border border-sky-500/20 p-2.5 rounded-xl flex items-center gap-2">
                        <span className="text-xs">💬</span>
                        <div>
                          <span className="text-[11px] font-bold text-sky-400 block">WhatsApp</span>
                          <span className="text-[9px] text-sky-300 font-bold">₦750.00 per code</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Utility Quick action card */}
                  <div className="bg-[#0A0F1E] border border-white/5 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">⚡</span>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Utility Payment Gateway</span>
                        <span className="text-[11px] font-medium text-slate-200">Electricity & TV Bundles</span>
                      </div>
                    </div>
                    <span className="text-xs text-sky-400">→</span>
                  </div>

                  {/* Wallet & Referral summary widget */}
                  <div className="bg-gradient-to-r from-indigo-950/80 to-[#0A0F1E] border border-indigo-950 rounded-2xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] uppercase tracking-wider text-indigo-350 block font-bold text-indigo-350">Referral Multiplier</span>
                      <span className="text-xs font-bold text-white">Earn 5% cash-back</span>
                    </div>
                    <div className="bg-indigo-600 text-white rounded-lg px-2.5 py-1 text-[9px] uppercase tracking-wide font-black">
                      Stats
                    </div>
                  </div>

                </div>

                {/* Interactive Action Button to Launch Live Application Simulator */}
                <Link 
                  to="/get-started"
                  className="w-full bg-sky-500 hover:bg-sky-400 border-none rounded-full py-4 text-center text-xs font-bold font-sans text-slate-950 hover:scale-[1.02] cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(56,189,248,0.25)] z-10 block decoration-none uppercase font-extrabold"
                >
                  🚀 Launch Sandbox Simulator
                </Link>

              </div>
            </div>

            {/* Small floating badget inside Mockup section */}
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-[#05070A]/95 border border-white/10 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-float max-w-56 pointer-events-none">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-base shrink-0">
                🔒
              </div>
              <div>
                <span className="block text-xs font-bold text-white">SECURE VERIFY</span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">End-to-End Encrypted</span>
              </div>
            </div>

            <div className="absolute top-12 -left-12 bg-[#05070A]/95 border border-white/10 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md items-center gap-3 animate-float-slow max-w-52 pointer-events-none hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-sky-550 bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold shrink-0">
                ⚡
              </div>
              <div>
                <span className="block text-xs font-bold text-white">Fast Delivery</span>
                <span className="text-[10px] text-slate-400 font-medium">SMS in 2 seconds</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
