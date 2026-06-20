import React from 'react';
import Layout from '../components/Layout';
import DashboardMockup from '../components/DashboardMockup';
import { useApp } from '../context/AppContext';

export default function GetStartedPage() {
  const { selectedSimulatorTab, showNotification } = useApp();

  return (
    <Layout>
      {/* Immersive Dashboard Header Title block */}
      <div className="pt-10 pb-2 text-center max-w-4xl mx-auto px-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-3.5 py-1.5 rounded-full inline-block mb-4 animate-pulse">
          🟢 Live Secure Simulator
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-none uppercase mb-2">
          Secure Sandbox Workbench
        </h1>
        <p className="font-sans text-xs sm:text-sm text-slate-400">
          Simulate bypass routes, manage your virtual multi-currency wallet, top-up carriers, and configure referral programs in real time.
        </p>
      </div>

      {/* Interactive dashboard sandbox */}
      <DashboardMockup 
        initialTab={selectedSimulatorTab}
        onShowNotification={showNotification}
      />
    </Layout>
  );
}
