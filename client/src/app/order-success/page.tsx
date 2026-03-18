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

      <section className="flex-1 pt-40 pb-20 px-6 flex items-center justify-center">
        {/* Confetti-like shapes */}
        <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-[#ff4d6d]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-[#bfa37e]/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-32 h-32 bg-[#ff4d6d] text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-3"
          >
            <CheckCircle className="w-16 h-16" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Order Successful</span>
            <h1 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight mt-4">
               From Our Kitchen<br /><span className="italic font-normal text-[#bfa37e]">To Your Door.</span>
            </h1>
            <p className="text-[#1a1c24]/40 font-outfit max-w-sm mx-auto text-lg pt-6 leading-relaxed">
               Your artisan order **#PC1024** has been placed in our workshop. We'll start crafting it soon!
            </p>
          </motion.div>

          {/* Details Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-white rounded-[3rem] p-10 md:p-14 shadow-soft border border-[#1a1c24]/5 grid md:grid-cols-2 gap-10 text-left"
          >
             <div className="space-y-6">
                <div>
                   <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e] mb-2">Order ID</p>
                   <p className="font-fraunces font-bold text-[#1a1c24] text-xl">#PC-2026-ART1024</p>
                </div>
                <div>
                   <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e] mb-2">Estimated Arrival</p>
                   <p className="font-fraunces font-bold text-[#1a1c24] text-xl">March 21 - 23, 2026</p>
                </div>
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors cursor-pointer group">
                   <div className="p-3 bg-background rounded-2xl group-hover:bg-[#ff4d6d]/5"><Mail className="w-4 h-4" /></div>
                   <span className="text-xs font-outfit font-bold">Confirmation sent to email</span>
                </div>
                <div className="flex items-center gap-4 text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors cursor-pointer group">
                   <div className="p-3 bg-background rounded-2xl group-hover:bg-[#ff4d6d]/5"><Package className="w-4 h-4" /></div>
                   <span className="text-xs font-outfit font-bold">Track from Account Palace</span>
                </div>
             </div>
          </motion.div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/account" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl">
                Go to My Palace <Package className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
             <Link href="/" className="inline-flex items-center gap-4 px-12 py-5 border-2 border-[#1a1c24]/5 text-[#1a1c24]/60 rounded-full font-bold text-sm hover:border-[#1a1c24]/20 hover:text-[#1a1c24] transition-all">
                Continue Shopping <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-[#1a1c24]/5 text-center">
        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">PRANAVIKA'S Artisan Order Confirmed • Handcrafted in Coimbatore</p>
      </footer>
    </main>
  );
}
