import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Info, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toasts, removeToast } = useApp();
  const { pathname } = useLocation();

  // Scroll to window top when route pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-300 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950 relative overflow-x-hidden" id="main-app-container">
      {/* Dynamic Ambient Background Design Rings */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[35%] bg-sky-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[35%] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[35%] bg-sky-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Navigation bar */}
      <Navigation />

      {/* Main page content area */}
      <main className="flex-grow pt-18">
        {children}
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Global Simulated Notification Center */}
      <div 
        className="fixed bottom-6 right-6 z-100 flex flex-col gap-3.5 max-w-sm w-full px-4 sm:px-0" 
        id="toasts-portal"
      >
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white border text-gray-900 border-gray-150 rounded-2xl p-4 shadow-xl flex items-start gap-3 relative hover:shadow-2xl transition-all"
            >
              {t.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              ) : (
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              )}
              
              <div className="flex-1 pr-4">
                <span className="block text-xs font-bold text-gray-950 font-display leading-none mb-1">
                  {t.title}
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed font-sans">
                  {t.message}
                </p>
              </div>

              <button
                onClick={() => removeToast(t.id)}
                className="absolute top-3.5 right-3.5 text-gray-300 hover:text-gray-500 p-0.5 rounded-lg hover:bg-neutral-50 cursor-pointer"
                aria-label="Close alert"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
