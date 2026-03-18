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

         <section className="pt-32 pb-20">
            <div className="max-w-[1200px] mx-auto px-6">

               <div className="text-center space-y-4 mb-20">
                  <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Customer Care</span>
                  <h1 className="text-5xl md:text-7xl font-fraunces font-black">Help Center.</h1>
               </div>

               {/* Quick Icons */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                  {[
                     { icon: Truck, label: 'Tracking', desc: 'Monitor your artisan delivery' },
                     { icon: RotateCcw, label: 'Returns', desc: 'Easy boutique exchanges' },
                     { icon: CreditCard, label: 'Payments', desc: 'Secure checkout options' },
                     { icon: MessageCircle, label: 'Support', desc: 'Chat with our artisans' }
                  ].map((item, i) => (
                     <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-[#1a1c24]/5 text-center space-y-3 hover:shadow-soft transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-2xl bg-[#ff4d6d]/5 flex items-center justify-center mx-auto text-[#ff4d6d] group-hover:bg-[#ff4d6d] group-hover:text-white transition-all">
                           <item.icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-fraunces font-bold text-sm tracking-wide">{item.label}</h4>
                        <p className="text-[10px] font-outfit text-[#1a1c24]/30 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                     </div>
                  ))}
               </div>

               {/* Accordion */}
               <div className="space-y-16">
                  {faqs.map((cat, catIdx) => (
                     <div key={catIdx} className="space-y-8">
                        <h3 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] border-b border-[#1a1c24]/5 pb-4">{cat.category}</h3>
                        <div className="space-y-4">
                           {cat.items.map((item, idx) => {
                              const key = `${catIdx}-${idx}`;
                              const isOpen = openIndex === key;
                              return (
                                 <div key={idx} className={`rounded-[2rem] border transition-all ${isOpen ? 'bg-white border-[#1a1c24]/10 shadow-soft' : 'bg-transparent border-[#1a1c24]/5'}`}>
                                    <button
                                       onClick={() => setOpenIndex(isOpen ? null : key)}
                                       className="w-full flex items-center justify-between p-8 text-left group"
                                    >
                                       <span className="font-fraunces font-bold text-lg md:text-xl">{item.q}</span>
                                       <div className={`w-8 h-8 rounded-full border border-[#1a1c24]/5 flex items-center justify-center transition-all ${isOpen ? 'bg-[#1a1c24] text-white rotate-180' : 'group-hover:border-[#ff4d6d] group-hover:text-[#ff4d6d]'}`}>
                                          <ChevronDown className="w-4 h-4" />
                                       </div>
                                    </button>
                                    <AnimatePresence>
                                       {isOpen && (
                                          <motion.div
                                             initial={{ height: 0, opacity: 0 }}
                                             animate={{ height: 'auto', opacity: 1 }}
                                             exit={{ height: 0, opacity: 0 }}
                                             className="overflow-hidden"
                                          >
                                             <div className="px-8 pb-8 pt-0">
                                                <p className="text-sm font-outfit text-[#1a1c24]/50 leading-relaxed max-w-3xl">
                                                   {item.a}
                                                </p>
                                             </div>
                                          </motion.div>
                                       )}
                                    </AnimatePresence>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  ))}
               </div>

               {/* Still Need Help */}
               <div className="mt-32 p-14 bg-[#1a1c24] rounded-[4rem] text-center space-y-8">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-fraunces font-bold text-white">Still have questions?</h2>
                     <p className="text-white/40 font-outfit text-sm">Our artisans are available Monday–Saturday, 10 AM to 7 PM.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/contact" className="px-10 py-5 bg-[#ff4d6d] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl">
                        Open Support Ticket
                     </Link>
                     <a href="#" className="px-10 py-5 bg-white/10 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all">
                        Chat via WhatsApp
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
