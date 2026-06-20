import React, { useState } from 'react';
import { Search, Globe, MessageSquare, Send, Instagram, Facebook, Music, ShieldCheck, Twitter, Mail, Cpu, MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { PLATFORMS, COUNTRIES } from '../data';
import { Platform, Country } from '../types';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface PricingCalculatorProps {
  onSelectPlatform?: (platform: Platform, country: Country) => void;
}

export default function PricingCalculator({ onSelectPlatform }: PricingCalculatorProps) {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'social' | 'ecommerce'>('all');
  
  const navigate = useNavigate();
  const { preloadSimulator, showNotification } = useApp();

  const handleSelectLocal = (platform: Platform, country: Country) => {
    if (onSelectPlatform) {
      onSelectPlatform(platform, country);
    } else {
      preloadSimulator(platform, country);
      navigate('/get-started');
      showNotification({
        title: 'Channel Preloaded',
        message: `Selected ${platform.name} Gateway for ${country.name} (${country.dialCode}). Click securing button to open the line.`,
        type: 'info'
      });
    }
  };

  // Adjust price based on country dial code multiplier (e.g. US is 1.0, UK is 1.1, India is 0.9, South Africa is 1.25)
  const getAdjustedPrice = (basePrice: number, countryCode: string) => {
    let multiplier = 1.0;
    if (countryCode === 'GB') multiplier = 1.15;
    if (countryCode === 'ZA') multiplier = 1.25;
    if (countryCode === 'DE') multiplier = 1.20;
    if (countryCode === 'FR') multiplier = 1.10;
    if (countryCode === 'NG') multiplier = 0.90;
    if (countryCode === 'IN') multiplier = 0.85;
    if (countryCode === 'BR') multiplier = 0.95;
    return parseFloat((basePrice * multiplier).toFixed(2));
  };

  const getLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'Send': return <Send className="w-5 h-5 text-sky-450" />;
      case 'Instagram': return <Instagram className="w-5 h-5 text-pink-400" />;
      case 'Facebook': return <Facebook className="w-5 h-5 text-blue-400" />;
      case 'Music': return <Music className="w-5 h-5 text-slate-200" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Twitter': return <Twitter className="w-5 h-5 text-neutral-300" />;
      case 'Mail': return <Mail className="w-5 h-5 text-red-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-indigo-400" />;
      default: return <MessageSquare className="w-5 h-5 text-slate-400" />;
    }
  };

  const filteredPlatforms = PLATFORMS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="pricing" className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="pricing-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Get Instant SMS Verification Codes
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Choose your communication channel, select the target country gateway, and pay only for successful SMS delivery. No monthly commitments on temporary tokens.
          </p>
        </div>

        {/* Pricing Controls / Filters */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 mb-12" id="pricing-toolbar">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search platforms (e.g. WhatsApp, OpenAI)..."
                className="w-full pl-11 pr-4 py-3 bg-[#0A0F1E] border border-white/5 rounded-xl focus:border-sky-500 focus:outline-hidden text-xs transition-all shadow-md text-white placeholder-slate-500"
              />
            </div>

            {/* Selector and Category Chips */}
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-end">
              {/* Category selector */}
              <div className="flex bg-[#0A0F1E] p-1.5 rounded-xl border border-white/5">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all pointer-events-auto cursor-pointer ${
                    selectedCategory === 'all' 
                      ? 'bg-sky-500 text-slate-950 shadow-lg font-black' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Channels
                </button>
                <button
                  onClick={() => setSelectedCategory('social')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all pointer-events-auto cursor-pointer ${
                    selectedCategory === 'social' 
                      ? 'bg-sky-500 text-slate-950 shadow-lg font-black' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Social Media
                </button>
                <button
                  onClick={() => setSelectedCategory('ecommerce')}
                  className={`px-4 py-2 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all pointer-events-auto cursor-pointer ${
                    selectedCategory === 'ecommerce' 
                      ? 'bg-sky-500 text-slate-950 shadow-lg font-black' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AI & Workspace
                </button>
              </div>

              {/* Dynamic Country Selector */}
              <div className="flex items-center gap-2 bg-[#0A0F1E] border border-white/5 rounded-xl px-4 py-2.5 shadow-md w-full sm:w-auto min-w-52">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-[10px] text-slate-400 font-extrabold uppercase shrink-0">Gateway:</span>
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const country = COUNTRIES.find(c => c.code === e.target.value);
                    if (country) setSelectedCountry(country);
                  }}
                  className="font-sans font-extrabold text-xs text-white bg-transparent py-0.5 border-none focus:outline-hidden cursor-pointer w-full"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code} className="bg-[#0A0F1E] text-white">
                      {c.flag} {c.name} ({c.dialCode})
                    </option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        </div>

        {/* Pricing Cards List */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="pricing-grid-container"
        >
          {filteredPlatforms.map((platform) => {
            const adjustedPrice = getAdjustedPrice(platform.price, selectedCountry.code);
            return (
              <div
                key={platform.id}
                className="group relative bg-[#0A0F1E] border border-white/5 hover:border-sky-500/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Header card icon and count */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-all">
                      {getLucideIcon(platform.icon)}
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-450 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border border-emerald-500/20">
                      🟢 {platform.available} Available
                    </span>
                  </div>

                  {/* Platform meta */}
                  <h3 className="font-display font-bold text-base text-white group-hover:text-sky-400 transition-colors mb-1">
                    {platform.name}
                  </h3>
                  <span className="text-[9px] uppercase font-black tracking-wider text-slate-500 font-sans block">
                    SMS Verification ID
                  </span>

                  {/* Price display */}
                  <div className="my-5 flex items-baseline gap-1" id={`price-display-${platform.id}`}>
                    <span className="text-3xl font-black font-display text-white">
                      ₦{adjustedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      / activation
                    </span>
                  </div>

                </div>

                {/* Info / Checkout action block */}
                <div className="pt-4 border-t border-white/5 space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-sans font-semibold">
                    <span>Gateway Code:</span>
                    <span className="font-mono text-white text-xs">{selectedCountry.flag} {selectedCountry.dialCode}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-sans font-semibold">
                    <span>Active window:</span>
                    <span className="text-white">10 Minutes</span>
                  </div>

                  <button
                    onClick={() => handleSelectLocal(platform, selectedCountry)}
                    className="w-full font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl bg-white/5 group-hover:bg-sky-500 text-slate-200 group-hover:text-slate-950 border border-white/5 group-hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 decoration-none"
                  >
                    Quick Activate
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}

          {filteredPlatforms.length === 0 && (
            <div className="col-span-full border border-dashed border-white/10 rounded-3xl p-12 text-center bg-[#0A0F1E]" id="no-search-results">
              <AlertCircle className="w-8 h-8 text-sky-400 mx-auto mb-3 animate-bounce" />
              <p className="font-sans font-bold uppercase tracking-wider text-white text-sm mb-1">No channels found</p>
              <p className="font-sans text-xs text-slate-400 max-w-sm mx-auto">We couldn't identify any virtual channels matching "{search}". Try searching for popular networks like WhatsApp, Telegram, or Gmail.</p>
            </div>
          )}
        </div>

        {/* Footer notification */}
        <div className="mt-12 bg-sky-500/5 rounded-2xl p-5 border border-sky-500/10 flex items-start gap-3 text-slate-350 max-w-2xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <p className="font-sans text-xs leading-relaxed">
            <span className="font-bold text-white">NEXORA Guarantee:</span> If your verification code is not received within 10 minutes, we refund the full credit to your wallet.
          </p>
        </div>

      </div>
    </section>
  );
}
