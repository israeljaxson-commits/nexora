import React from 'react';
import { Smartphone, Download, ShieldCheck, Zap } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-transparent text-white relative overflow-hidden">
      {/* Decorative ambient blurred vector elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-[#0B132B] via-[#0A0F1E] to-[#060A13] border border-white/5 rounded-[40px] px-6 py-12 md:p-16 lg:p-20 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Layout block */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="download-left-col">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Universal Mobile App
              </span>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none uppercase">
                Bypass Gateways directly from your Pocket
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Download the standalone NEXORA application. Secure dual-routing temporary phone lines, top up cellular airtime, and fund utility balances securely on the road.
              </p>

              {/* Download Buttons badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                {/* Google Play */}
                <a href="#download" className="flex items-center gap-3 bg-black hover:bg-[#0A0F1E] text-white px-5 py-3 rounded-xl border border-white/10 shadow-md transition-all hover:scale-[1.02]">
                  <svg className="w-5 h-5 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L12,6.5V11H7V13H12V17.5L17.5,12Z" />
                  </svg>
                  <div className="text-left leading-none font-sans">
                    <span className="text-[9px] text-gray-400 block tracking-wider uppercase font-semibold">Get it on</span>
                    <span className="text-sm font-bold font-display">Google Play</span>
                  </div>
                </a>

                {/* App Store */}
                <a href="#download" className="flex items-center gap-3 bg-black hover:bg-[#0A0F1E] text-white px-5 py-3 rounded-xl border border-white/10 shadow-md transition-all hover:scale-[1.02]">
                  <svg className="w-5 h-5 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                  </svg>
                  <div className="text-left leading-none font-sans">
                    <span className="text-[9px] text-gray-400 block tracking-wider uppercase font-semibold">Download on the</span>
                    <span className="text-sm font-bold font-display">App Store</span>
                  </div>
                </a>

                {/* QR scan section separator */}
                <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl ml-4 max-w-64 font-sans">
                  {/* Generated QR visual code */}
                  <div className="w-10 h-10 bg-white p-1 rounded-md shrink-0">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,3H9H3M3,3V9V3M21,3H15H21M21,3V9V3M3,15H9C9,15 9,21 9,21H3V15M21,15H15V21H21V15M15,9V11H18V13H15V15H17V18H19V21H21V18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[9px] text-sky-450 block font-bold font-mono uppercase">Quick Scan install</span>
                    <span className="text-[10px] text-slate-400 block font-medium">Scan QR to install APK file</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right mockup view column */}
            <div className="lg:col-span-5 relative flex justify-center" id="download-mockup-col">
              
              {/* Bezel view mockup */}
              <div className="relative w-64 h-[440px] bg-slate-950 rounded-[40px] p-2.5 shadow-2xl border-2 border-slate-800 select-none overflow-hidden hover:scale-[1.01] transition-transform">
                
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30" />

                {/* Screen elements inside */}
                <div className="relative h-full w-full rounded-[30px] bg-slate-900 overflow-hidden pt-10 px-3 pb-3 flex flex-col justify-between">
                  
                  {/* Custom active screen */}
                  <div className="space-y-4">
                    <div className="bg-sky-500 rounded-2xl p-4 text-slate-950 font-sans">
                      <span className="text-[8px] uppercase tracking-wider block opacity-75 font-extrabold">ACTIVATIONS DRIVER ACTIVE</span>
                      <b className="text-sm font-bold font-display mt-0.5 block">Secure Sandbox SIM</b>
                      <div className="h-0.5 bg-slate-950/10 my-2.5" />
                      <span className="text-[10px] font-mono font-bold">+44 7720-394012</span>
                    </div>

                    <div className="bg-slate-950/80 border border-white/5 rounded-xl p-3 flex justify-between items-center font-sans">
                      <div>
                        <span className="text-[8px] text-slate-500 block">DELIVERED SMS</span>
                        <span className="text-[10px] font-mono text-emerald-400 mt-0.5 block font-bold">294-811 Verified</span>
                      </div>
                      <span className="text-[9px] text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20 font-bold font-mono">Active</span>
                    </div>
                  </div>

                  {/* Button block */}
                  <div className="bg-slate-950 border border-white/5 p-2.5 rounded-2xl text-center font-sans">
                    <span className="text-[9px] text-sky-400 font-bold uppercase tracking-wider block">NEXORA mobile client</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
