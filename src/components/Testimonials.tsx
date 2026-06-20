import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setActive(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      
      {/* Background neon glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Audited Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Trusted by Modern Developers Globally
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Read comments from global developers, advertising specialists, and security companies who protect their digital privacy with NEXORA.
          </p>
        </div>

        {/* Carousel layout container */}
        <div className="max-w-4xl mx-auto relative bg-[#0A0F1E]/80 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl" id="testimonials-carousel">
          <Quote className="absolute right-8 top-8 w-12 h-12 text-sky-400/10 rotate-180 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start" id="active-testimonial-card">
            
            {/* Customer Avatar & Bio */}
            <div className="text-center md:text-left shrink-0">
              <img
                src={TESTIMONIALS[active].avatar}
                alt={TESTIMONIALS[active].name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-sky-500/30 shadow-md mx-auto md:mx-0 select-none referrer-policy"
                referrerPolicy="no-referrer"
              />
              <span className="block font-display font-bold text-white mt-4 leading-none">
                {TESTIMONIALS[active].name}
              </span>
              <span className="block font-sans text-xs text-slate-400 mt-1">
                {TESTIMONIALS[active].role}
              </span>
            </div>

            {/* Content Details */}
            <div className="flex-1 text-center md:text-left space-y-4">
              {/* Star rating component */}
              <div className="flex justify-center md:justify-start gap-1">
                {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-medium italic">
                "{TESTIMONIALS[active].content}"
              </blockquote>
            </div>

          </div>

          {/* Buttons Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5" id="testimonials-nav-buttons">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all pointer-events-auto cursor-pointer ${
                    active === idx ? 'w-6 bg-sky-500 shadow-sm shadow-sky-500/30' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-xl bg-[#0B132B] border border-white/10 hover:bg-white/5 text-slate-300 hover:text-sky-400 transition-all cursor-pointer active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-xl bg-[#0B132B] border border-white/10 hover:bg-white/5 text-slate-300 hover:text-sky-400 transition-all cursor-pointer active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
