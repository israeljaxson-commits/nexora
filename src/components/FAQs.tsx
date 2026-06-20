import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="faqs-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Have questions?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Frequently Asked Disclosures
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Acquire critical guidance on temporary active phone numbers, security refund procedures, invite balances, and multi-server compliance levels.
          </p>
        </div>

        {/* FAQs Accordion items */}
        <div className="space-y-4" id="faqs-accordion-container">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-white/5 rounded-2xl overflow-hidden bg-[#0A0F1E]/80 transition-colors"
                style={{ contentVisibility: 'auto' }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-5 hover:bg-white/5 transition-colors flex justify-between items-center gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0B132B] border border-white/10 flex items-center justify-center text-slate-400 font-bold shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-sky-400" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-[#0B132B]/40 border-t border-white/5 text-xs sm:text-sm text-slate-450 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
