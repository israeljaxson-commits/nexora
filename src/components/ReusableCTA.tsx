import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ReusableCTAProps {
  title?: string;
  badge?: string;
  description?: string;
}

export default function ReusableCTA({ 
  title = "Unlock completely borderless digital verifications today", 
  badge = "Immediate Activations Gateway",
  description = "Join developers, marketers, and privacy enthusiasts securing their workflows. Generate permanent or temporary gateways in seconds without exposing physical identities."
}: ReusableCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-transparent text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-[#070C1B] via-[#050812] to-[#04060E] border border-white/5 rounded-[32px] p-8 md:p-14 text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-full inline-block mb-5">
            {badge}
          </span>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase max-w-2xl mx-auto leading-tight">
            {title}
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mt-4 mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="font-sans font-extrabold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all duration-200 flex items-center gap-2 group decoration-none"
            >
              Access Simulator
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/features"
              className="font-sans font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-250 transition-all flex items-center gap-1.5 decoration-none"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Secure indicator tags */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[10px] text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>AES-256 Crypto Shield</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Immediate Activation</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span>Full Gateway Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
