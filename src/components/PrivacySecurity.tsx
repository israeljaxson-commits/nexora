import React from 'react';
import { ShieldAlert, Lock, EyeOff, CheckCircle2, UserCheck, KeyRound } from 'lucide-react';

export default function PrivacySecurity() {
  const points = [
    {
      icon: <Lock className="w-5 h-5 text-sky-400" />,
      title: 'End-to-End Encryption',
      description: 'Your verification requests and codes are encrypted in transit with AES-256 standards. Temporary logs expire after delivery.',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: 'Secure Transit Gateway',
      description: 'Multi-layer API handshakes reduce packet sniffing and payload interception. Payment modules run behind secure firewalls and proxies.',
    },
    {
      icon: <EyeOff className="w-5 h-5 text-orange-400" />,
      title: 'Anonymous Verification Code',
      description: 'We do not ask for any personal identity documentation or target SIM identifiers. You receive standard verification codes without exposing your personal privacy.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
      title: 'Active Fraud Protection',
      description: 'Our systems filter spam activity, duplicate requests, and compromised numbers to protect verification integrity.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-sky-400" />,
      title: 'Absolute Data Minimization',
      description: 'We keep data collection minimal and do not sell user logs or browsing history to third parties.',
    },
  ];

  return (
    <section id="security" className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      
      {/* Decorative background radial glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left illustration/visual mockup of security */}
          <div className="lg:col-span-5 order- order-2 lg:order-1 relative" id="security-diagram-panel">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-emerald-500/5 rounded-3xl blur-2xl pointer-events-none" />
            
            {/* Visual Security Box Card */}
            <div className="relative bg-[#0A0F1E] text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/5 overflow-hidden select-none font-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl animate-pulse" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-slate-950">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-white">NEXORA Shield V4</h4>
                  <span className="text-[10px] text-slate-400 font-mono">Active cryptographic token: AES-256</span>
                </div>
              </div>

              {/* Encryption simulation layout */}
              <div className="space-y-4">
                
                {/* Gateway 1 */}
                <div className="bg-[#060A13] border border-white/5 rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-550 animate-ping" />
                    <span className="text-slate-300 font-mono">SMS Request Gateway</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-semibold">ENCRYPTED</span>
                </div>

                {/* Arrow lines */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-dashed border-l border-white/10" />
                </div>

                {/* Verification Node */}
                <div className="bg-[#060A13] border border-white/5 rounded-xl p-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-extrabold">Intermediate payload decryption lock</span>
                    <span className="text-white font-mono mt-1 block">**** - **** - **** - 4920</span>
                  </div>
                  <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-md font-mono text-[10px] border border-sky-500/20 font-bold">VALID</span>
                </div>

                {/* Arrow lines */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-6 bg-dashed border-l border-white/10" />
                </div>

                {/* Decrypted SMS pin client */}
                <div className="bg-[#060A13] border border-emerald-500/20 rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] uppercase font-extrabold text-emerald-400 tracking-wider">SMS Code Output Terminal</span>
                    <span className="text-xs font-mono text-slate-300 block mt-1">Code delivery successful inside sandbox</span>
                  </div>
                  <div className="text-emerald-400 font-bold font-mono text-xs">OK (200)</div>
                </div>

              </div>

              <div className="mt-6 pt-5 border-t border-white/5 text-center">
                <span className="text-[10px] text-slate-500 font-mono">Secure API Gateway • No third-party trace loops</span>
              </div>
            </div>
          </div>

          {/* Right Text Content Panel */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6" id="security-text-panel">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Premium Protection
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none uppercase">
              Privacy-First Data Protection
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              We are designed to reduce invasive tracking. No unnecessary identity profiling, no ad-tech matching, and secure verification flows from start to finish.
            </p>

            <div className="space-y-4 pt-4">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-[#0A0F1E]/60 p-4 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                    {pt.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white mb-1">
                      {pt.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
