"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

const orders = [
  { 
    id: "#PRN-7291B", 
    date: "Mar 12, 2026", 
    status: "Delivered", 
    total: 12500, 
    items: [
      { name: "Sanjna Rose Red Gown", img: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ]
  },
  { 
    id: "#PRN-6582A", 
    date: "Feb 28, 2026", 
    status: "Processing", 
    total: 3200, 
    items: [
      { name: "Artisan Sweetness Box", img: "https://images.pexels.com/photos/6152261/pexels-photo-6152261.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ]
  },
  { 
    id: "#PRN-5510C", 
    date: "Jan 15, 2026", 
    status: "Delivered", 
    total: 980, 
    items: [
      { name: "Triple Chocolate Fudge", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800" }
    ]
  }
];

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
      <Navbar />

      <section className="pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-16 gap-6 md:gap-10">
            <div className="space-y-4 md:space-y-6 text-center md:text-left w-full md:w-auto">
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.5em] md:tracking-[0.6em] text-[#ff4d6d] italic">The Vault</span>
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-fraunces font-black leading-tight italic">My <span className="italic font-normal text-[#bfa37e]">Orders.</span></h1>
            </div>
            
            <div className="relative group w-full md:w-[350px]">
              <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#1a1c24]/20 group-focus-within:text-[#ff4d6d] transition-colors" />
              <input 
                type="text" 
                placeholder="Search the ledger..."
                className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-5 md:py-6 rounded-full bg-white border border-[#1a1c24]/5 focus:border-[#ff4d6d]/30 focus:outline-none focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all text-xs md:text-sm font-outfit font-bold italic placeholder:text-[#1a1c24]/20 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {orders.map((order, i) => (
              <motion.div 
                key={order.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Visual */}
                <div className="w-full md:w-48 lg:w-56 aspect-[4/3] md:aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#fbf9f6] relative flex-shrink-0">
                   <img src={order.items[0].img} alt={order.id} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                   {order.items.length > 1 && (
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] text-white text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] italic shadow-inner">+{order.items.length - 1} More</div>
                   )}
                </div>

                {/* Info */}
                <div className="flex-1 w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                   <div className="space-y-1 md:space-y-2">
                      <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 italic">Order Code</p>
                      <p className="text-xl md:text-2xl font-fraunces font-black text-[#1a1c24] italic">{order.id}</p>
                   </div>
                   <div className="space-y-1 md:space-y-2">
                      <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 italic">Ritual Date</p>
                      <p className="text-sm md:text-base font-outfit font-medium text-[#1a1c24]/80 italic">{order.date}</p>
                   </div>
                   <div className="space-y-1 md:space-y-2">
                      <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 italic">State</p>
                      <div className="flex items-center gap-3 bg-[#fbf9f6] w-max px-4 py-2 rounded-full border border-[#1a1c24]/5">
                        <div className={`w-2 h-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]'}`} />
                        <span className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/60 italic group-hover:text-[#1a1c24] transition-colors">{order.status}</span>
                      </div>
                   </div>
                   <div className="space-y-1 md:space-y-2">
                      <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 italic">Treasury Value</p>
                      <p className="text-xl md:text-2xl lg:text-3xl font-fraunces font-black text-[#ff4d6d] italic leading-none">₹{order.total.toLocaleString()}</p>
                   </div>
                </div>

                {/* Action */}
                <div className="w-full md:w-auto flex mt-4 md:mt-0">
                   <button className="flex-1 md:w-16 h-16 md:h-20 bg-[#fbf9f6] text-[#1a1c24]/60 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center hover:bg-[#1a1c24] hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgba(26,28,36,0.2)] group/btn active:scale-95 border border-[#1a1c24]/5">
                      <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 sm:transform sm:-rotate-45 transition-all text-center mx-auto" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State Mock */}
          {orders.length === 0 && (
             <div className="py-40 text-center space-y-8">
                <div className="w-24 h-24 bg-[#ff4d6d]/5 text-[#ff4d6d]/10 rounded-full flex items-center justify-center mx-auto"><Package className="w-10 h-10" /></div>
                <h2 className="text-3xl font-fraunces font-bold italic text-[#1a1c24]/30">Your artisan history is a blank canvas.</h2>
                <Link href="/" className="inline-block px-10 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-xs uppercase tracking-widest">Start the Journey</Link>
             </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
