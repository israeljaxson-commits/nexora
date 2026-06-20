import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Smartphone, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Referrals', path: '/referrals' },
    { name: 'Download', path: '/download' },
    { name: 'About', path: '/about' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isDashboardActive = location.pathname === '/get-started';

  return (
    <header 
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#05070A]/90 backdrop-blur-lg border-b border-white/5 shadow-2xl shadow-sky-950/20' 
          : 'bg-transparent border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2.5 cursor-pointer group decoration-none"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-lg tracking-wider text-white uppercase">
              NEX<span className="text-sky-400">ORA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isDashboardActive ? (
            <nav className="hidden md:flex items-center gap-7" id="nav-desktop-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-sans font-semibold text-[11px] uppercase tracking-widest transition-colors cursor-pointer decoration-none ${
                    isActive(item.path) 
                      ? 'text-sky-400' 
                      : 'text-slate-405 hover:text-sky-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ) : (
            <div className="hidden md:flex items-center gap-6 text-sm text-sky-400">
              <span className="font-mono bg-sky-500/10 text-emerald-400 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-emerald-500/20 flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                LIVE SIMULATOR ACTIVE
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4" id="nav-desktop-actions">
            {isDashboardActive && (
              <Link
                to="/"
                className="font-sans font-semibold text-xs text-slate-400 hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer decoration-none"
              >
                <LogOut className="w-4 h-4 text-sky-400" />
                Exit Simulator
              </Link>
            )}
            <Link
              to="/get-started"
              className="font-sans font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-all duration-200 flex items-center gap-1.5 group cursor-pointer decoration-none"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {isDashboardActive && (
              <span className="font-mono bg-sky-500/10 text-sky-400 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-sky-500/20">
                SIMULATOR
              </span>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 ml-1 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#05070A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="px-4 py-6 space-y-4">
              {!isDashboardActive ? (
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`w-full block text-left px-4 py-3 rounded-lg font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer decoration-none ${
                        isActive(item.path)
                          ? 'text-sky-400 bg-white/5'
                          : 'text-slate-400 hover:bg-white/5 hover:text-sky-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-2">
                  <span className="font-mono bg-sky-500/10 text-sky-400 text-xs px-3 py-1 rounded-full font-medium border border-sky-500/20 block text-center">
                    🟢 Live App Simulator (Interactive)
                  </span>
                </div>
              )}

              <hr className="border-white/5 my-2" />

              <div className="space-y-3 px-4">
                {isDashboardActive && (
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-400 hover:text-white bg-white/5 cursor-pointer block decoration-none"
                  >
                    Exit Simulator
                  </Link>
                )}
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg cursor-pointer flex items-center justify-center gap-2 decoration-none"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
