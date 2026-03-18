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

      <section className="pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Order History</span>
              <h1 className="text-5xl md:text-7xl font-fraunces font-black">My Orders.</h1>
            </div>
            
            <div className="relative group w-full md:w-80">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20 group-focus-within:text-[#ff4d6d] transition-colors" />
              <input 
                type="text" 
                placeholder="Search Orders..."
                className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-[#1a1c24]/5 focus:border-[#ff4d6d]/20 focus:outline-none transition-all text-xs font-outfit font-bold"
              />
            </div>
          </div>

          <div className="space-y-8">
            {orders.map((order, i) => (
              <motion.div 
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[3rem] p-4 md:p-8 flex flex-col md:flex-row items-center gap-10 shadow-soft border border-[#1a1c24]/5 group hover:shadow-xl transition-all"
              >
                {/* Visual */}
                <div className="w-full md:w-48 aspect-square rounded-[2rem] overflow-hidden bg-[#fbf9f6] relative">
                   <img src={order.items[0].img} alt={order.id} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                   {order.items.length > 1 && (
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm text-white text-xs font-black uppercase">+{order.items.length - 1} More</div>
                   )}
                </div>

                {/* Info */}
                <div className="flex-1 w-full grid md:grid-cols-4 gap-8">
                   <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Order Number</p>
                      <p className="text-xl font-fraunces font-black">{order.id}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Placed Date</p>
                      <p className="text-sm font-outfit font-black text-[#1a1c24]/60">{order.date}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Status</p>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-400' : 'bg-amber-400'}`} />
                        <span className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40">{order.status}</span>
                      </div>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Total Palace Value</p>
                      <p className="text-xl font-fraunces font-black text-[#ff4d6d]">₹{order.total.toLocaleString()}</p>
                   </div>
                </div>

                {/* Action */}
                <div className="w-full md:w-auto flex gap-4">
                   <button className="flex-1 md:w-16 h-16 bg-[#1a1c24] text-white rounded-2xl flex items-center justify-center hover:bg-[#ff4d6d] transition-all shadow-xl group/btn">
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
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
