import React from 'react';
import Layout from '../components/Layout';
import PrivacySecurity from '../components/PrivacySecurity';
import WhyChooseUs from '../components/WhyChooseUs';
import ReusableCTA from '../components/ReusableCTA';
import { Shield, Sparkles, Cpu, Lock } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Premium custom About Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-505/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-6 shadow-md">
            Who We Are
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none uppercase mb-6 max-w-4xl mx-auto">
            Decentralized Privacy & <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Digital Gateways</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            NEXORA was born from a simple belief: your personal identity should never be the cost of standard digital entry. We secure dual-routing physical and logical SIM gateways globally, giving you absolute control over verifications.
          </p>

          {/* Quick core pillars bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left" id="about-pillars">
            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 group-hover:bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-2 uppercase">Zero-Log Protocol</h3>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                We store absolutely no meta-records, incoming SMS string histories, or personal verification tags. Your session is deleted immediately upon checkout.
              </p>
            </div>

            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 group-hover:bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-2 uppercase">Decentralized Routing</h3>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                Our logical SIM matrix utilizes multi-path fiber carriers, providing automatic failover and 99.9% transmission success rates.
              </p>
            </div>

            <div className="bg-[#0A0F1E] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 group-hover:bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-2 uppercase">Data Minimization</h3>
              <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                By stripping unnecessary parameters, we protect users from active system data breach vulnerabilities and advertising scrapers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      <PrivacySecurity />
      <WhyChooseUs />

      <ReusableCTA 
        title="We build systems with privacy at the core" 
        badge="Technology Integrity Standards"
        description="Verify lines with complete confidence. No registration limits, absolute zero data storage, premium multi-server encryption layers."
      />
    </Layout>
  );
}
