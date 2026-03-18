"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Package, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

export default function SuccessPage() {
   return (
      <main className="min-h-screen bg-[#fbf9f6] flex flex-col relative overflow-hidden">
         <Navbar />

         <section className="flex-1 pt-32 md:pt-48 pb-20 md:pb-32 px-6 flex items-center justify-center relative bg-[#fbf9f6]">
            {/* Subtle decorative circles with artisan blur */}
            <div className="absolute top-[15%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[120px] -z-0" />

            <div className="max-w-4xl w-full text-center relative z-10 px-4 md:px-10">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="w-24 h-24 md:w-40 md:h-40 bg-[#ff4d6d] text-white rounded-[2.5rem] md:rounded-[4rem] flex items-center justify-center mx-auto mb-10 md:mb-16 shadow-[0_40px_100px_rgba(255,77,109,0.3)] border-4 border-white/20"
               >
                  <CheckCircle className="w-12 h-12 md:w-20 md:h-20" />
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 md:space-y-10"
               >
                  <div className="space-y-4">
                     <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d]">Order Ceremonially Placed</span>
                     <h1 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-[#1a1c24] leading-[1.1] md:leading-tight italic">
                        Artisan Journey<br /><span className="text-[#bfa37e] font-normal italic">Commenced.</span>
                     </h1>
                  </div>
                  
                  <p className="text-[#1a1c24]/40 font-outfit max-w-lg mx-auto text-sm md:text-xl pt-6 md:pt-10 leading-relaxed italic border-t border-[#1a1c24]/5 px-6">
                     "Your artifact **#PC1024** has been entered into the royal ledger. Our artisans have begun the ritual of creation."
                  </p>
               </motion.div>

               {/* Details Card - Refined Artisan Look */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-16 md:mt-24 bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left relative overflow-hidden group"
               >
                  <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
                  
                  <div className="space-y-8 md:space-y-12 relative z-10 border-b lg:border-b-0 lg:border-r border-[#1a1c24]/5 pb-10 lg:pb-0 lg:pr-10">
                     <div className="space-y-3">
                        <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">Vault Identifier</p>
                        <p className="font-fraunces font-black text-[#1a1c24] text-2xl md:text-3xl lg:text-4xl leading-tight italic">#PC-2026-ART1024</p>
                     </div>
                     <div className="space-y-3">
                        <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">Est. Lunar Arrival</p>
                        <p className="font-fraunces font-black text-[#1a1c24] text-2xl md:text-3xl lg:text-4xl leading-tight italic">March 21 - 23, 2026</p>
                     </div>
                  </div>

                  <div className="space-y-10 md:space-y-12 relative z-10 flex flex-col justify-center">
                     <div className="flex items-center gap-6 group/link cursor-pointer">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#fbf9f6] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-[#1a1c24]/20 group-hover/link:bg-[#ff4d6d] group-hover/link:text-white transition-all transform group-hover/link:-translate-y-1 group-hover/link:shadow-xl group-hover/link:rotate-6 flex-shrink-0">
                           <Mail className="w-5 h-5 md:w-8 md:h-8" />
                        </div>
                        <div className="space-y-1 md:space-y-2">
                           <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/30 group-hover/link:text-[#1a1c24] transition-colors italic">Manifesto Sent</span>
                           <p className="text-xs md:text-base font-outfit font-medium text-[#1a1c24]/60 italic">Check your digital courier</p>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-6 group/link cursor-pointer">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#fbf9f6] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-[#1a1c24]/20 group-hover/link:bg-[#1a1c24] group-hover/link:text-white transition-all transform group-hover/link:-translate-y-1 group-hover/link:shadow-xl group-hover/link:-rotate-6 flex-shrink-0">
                           <Package className="w-5 h-5 md:w-8 md:h-8" />
                        </div>
                        <div className="space-y-1 md:space-y-2">
                           <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/30 group-hover/link:text-[#1a1c24] transition-colors italic">Track Artifact</span>
                           <p className="text-xs md:text-base font-outfit font-medium text-[#1a1c24]/60 italic">Monitor from Account Palace</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <div className="mt-16 md:mt-24 flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
                  <Link href="/account" className="group w-full sm:w-auto inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(26,28,36,0.15)] active:scale-95 italic">
                     Enter Palace <Package className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/" className="group w-full sm:w-auto inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 border-2 border-[#1a1c24]/5 text-[#1a1c24]/40 hover:text-[#1a1c24] hover:bg-white hover:border-[#1a1c24]/10 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] transition-all active:scale-95 italic text-center">
                     More Artifacts <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </section>

         <footer className="py-16 md:py-24 bg-white border-t border-[#1a1c24]/5 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
            <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.5em] md:tracking-[0.6em] text-[#1a1c24]/20 leading-relaxed relative z-10 italic">
               PRANAVIKA'S Artisan Order Confirmed · © 2026 PRANAVIKA'S Sweet & Chic · Crafted with Honor
            </p>
         </footer>
      </main>
   );
}
