"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Truck, RotateCcw, CreditCard, MessageCircle } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const faqs = [
   {
      category: 'Ordering & Customization',
      items: [
         { q: 'How do I place a custom cake order?', a: 'You can use our "Custom Order" button in the Bakery section or contact us directly via WhatsApp. We recommend at least 48 hours notice for complex designs.' },
         { q: 'Can I request a specific fabric for a gown?', a: 'Yes! Our Boutique offers bespoke tailoring. You can schedule a consultation at our Tirunelveli studio to select fabrics and discuss measurements.' }
      ]
   },
   {
      category: 'Delivery & Shipping',
      items: [
         { q: 'Where do you deliver?', a: 'We deliver Bakery and Homemade items within Tirunelveli city limits. Boutique items are shipped pan-India via our courier partners.' },
         { q: 'What are the shipping charges?', a: 'Shipping is free for orders above ₹5,000. For smaller orders, a flat fee of ₹100 applies for local delivery and ₹250 for national shipping.' }
      ]
   },
   {
      category: 'Returns & Exchanges',
      items: [
         { q: 'Do you accept returns on food items?', a: 'Due to the perishable nature of Bakery and Homemade products, we do not accept returns. However, if your order is damaged, contact us immediately for a replacement.' },
         { q: 'What is the return policy for Boutique items?', a: 'Unworn and unwashed garments with original tags can be exchanged within 7 days of delivery. Custom-stitched outfits are non-returnable.' }
      ]
   }
];

export default function FAQPage() {
   const [openIndex, setOpenIndex] = useState<string | null>(null);

   return (
      <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden text-[#1a1c24]">
         <Navbar />
         <section className="pt-24 md:pt-40 pb-16 md:pb-32 overflow-hidden bg-[#fbf9f6] relative">
            {/* Subtle decorative circles */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-1/2 left-0 w-[300px] h-[300px] bg-[#bfa37e]/5 rounded-full blur-[100px] -z-0" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
               <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-24">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                     <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Artisan Support</span>
                     <h1 className="text-4xl md:text-6xl lg:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight mt-2 md:mt-4 italic">Help Center.</h1>
                     <p className="mt-4 md:mt-6 text-sm md:text-base text-[#1a1c24]/40 font-outfit max-w-lg mx-auto leading-relaxed">Everything you need to know about our bespoke collections and artisan bakery, all in one curated gallery.</p>
                  </motion.div>
               </div>

               {/* Quick Icons - Grid Adjustment */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-32">
                  {[
                     { icon: Truck, label: 'Van Tracking', desc: 'Secure artisan delivery paths' },
                     { icon: RotateCcw, label: 'Silk Returns', desc: 'Curated boutique exchanges' },
                     { icon: CreditCard, label: 'Royal Payments', desc: 'Vault-secured checkout' },
                     { icon: MessageCircle, label: 'Palace Support', desc: '24/7 artisan concierge' }
                  ].map((item, i) => (
                     <motion.div 
                       key={i} 
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="p-8 rounded-[2.5rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-[#1a1c24]/5 text-center space-y-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all group overflow-hidden relative"
                     >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#ff4d6d]/0 group-hover:bg-[#ff4d6d] transition-all" />
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#fbf9f6] flex items-center justify-center mx-auto text-[#1a1c24]/20 group-hover:bg-[#1a1c24] group-hover:text-white transition-all transform group-hover:rotate-12">
                           <item.icon className="w-5 h-5 md:w-7 md:h-7" />
                        </div>
                        <div className="space-y-1">
                           <h4 className="font-fraunces font-black text-sm md:text-base text-[#1a1c24] italic">{item.label}</h4>
                           <p className="text-[10px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Accordion - Refined Styling */}
               <div className="space-y-16 md:space-y-24">
                  {faqs.map((cat, catIdx) => (
                     <div key={catIdx} className="space-y-8 md:space-y-10">
                        <div className="flex items-center gap-4 border-b border-[#1a1c24]/5 pb-6">
                           <div className="w-8 h-8 rounded-full bg-[#ff4d6d]/5 text-[#ff4d6d] flex items-center justify-center font-bold text-xs italic">{catIdx + 1}</div>
                           <h3 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.5em] text-[#bfa37e]">{cat.category}</h3>
                        </div>
                        
                        <div className="space-y-4 md:space-y-5">
                           {cat.items.map((item, idx) => {
                              const key = `${catIdx}-${idx}`;
                              const isOpen = openIndex === key;
                              return (
                                 <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -10 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true }}
                                    className={`rounded-[2rem] md:rounded-[3rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white border-[#1a1c24]/10 shadow-[0_30px_100px_rgba(26,28,36,0.06)] px-0' : 'bg-transparent border-[#1a1c24]/5 hover:border-[#1a1c24]/10'}`}
                                 >
                                    <button
                                       onClick={() => setOpenIndex(isOpen ? null : key)}
                                       className="w-full flex items-center justify-between p-7 md:p-10 text-left group outline-none"
                                    >
                                       <span className={`font-fraunces font-bold text-base md:text-2xl transition-colors ${isOpen ? 'text-[#ff4d6d]' : 'text-[#1a1c24]/80 group-hover:text-[#1a1c24]'}`}>{item.q}</span>
                                       <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full border border-[#1a1c24]/5 flex items-center justify-center transition-all ${isOpen ? 'bg-[#ff4d6d] text-white rotate-180 shadow-lg border-[#ff4d6d]' : 'group-hover:bg-[#1a1c24] group-hover:text-white group-hover:border-[#1a1c24]'}`}>
                                          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                                       </div>
                                    </button>
                                    <AnimatePresence>
                                       {isOpen && (
                                          <motion.div
                                             initial={{ height: 0, opacity: 0 }}
                                             animate={{ height: 'auto', opacity: 1 }}
                                             exit={{ height: 0, opacity: 0 }}
                                             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                          >
                                             <div className="px-7 md:px-14 pb-10 md:pb-14 pt-0">
                                                <div className="w-full h-px bg-gradient-to-r from-[#1a1c24]/5 via-transparent to-transparent mb-8" />
                                                <p className="text-sm md:text-base font-outfit text-[#1a1c24]/50 leading-relaxed max-w-3xl italic">
                                                   {item.a}
                                                </p>
                                             </div>
                                          </motion.div>
                                       )}
                                    </AnimatePresence>
                                 </motion.div>
                              );
                           })}
                        </div>
                     </div>
                  ))}
               </div>

               {/* Royal Support CTA */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="mt-24 md:mt-40 p-10 md:p-20 bg-[#1a1c24] rounded-[3rem] md:rounded-[5rem] text-center space-y-10 md:space-y-14 relative overflow-hidden group shadow-2xl"
               >
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4d6d]/10 rounded-full blur-[120px] -z-0" />
                  <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#bfa37e]/10 rounded-full blur-[100px] -z-0" />

                  <div className="relative z-10 space-y-4 md:space-y-6">
                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-black text-white leading-tight">Need a Private <br /><span className="italic text-[#bfa37e] font-normal">Consultation?</span></h2>
                     <p className="text-white/40 font-outfit text-sm md:text-lg max-w-xl mx-auto leading-relaxed italic">Our artisans are available Monday–Saturday, 10 AM to 7 PM to guide your choices.</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center relative z-10 pt-4">
                     <Link href="/contact" className="px-10 md:px-14 py-5 md:py-6 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl active:scale-95">
                        Open Royal Ticket
                     </Link>
                     <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="px-10 md:px-14 py-5 md:py-6 bg-white border border-white/10 text-[#1a1c24] rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-white/90 transition-all active:scale-95 shadow-xl">
                        WhatsApp Concierge
                     </a>
                  </div>
               </motion.div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
