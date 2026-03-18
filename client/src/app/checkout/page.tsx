"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Progress Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <div className="space-y-2">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Order Flow</span>
              <h1 className="text-4xl md:text-6xl font-fraunces font-black text-[#1a1c24]">Checkout.</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { n: 1, label: 'Shipping' },
                { n: 2, label: 'Payment' },
                { n: 3, label: 'Review' }
              ].map(({ n, label }) => (
                <React.Fragment key={n}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${step >= n ? 'bg-[#1a1c24] text-white' : 'bg-[#1a1c24]/5 text-[#1a1c24]/20'}`}>
                      {n}
                    </div>
                    <span className={`text-[10px] font-outfit font-black uppercase tracking-widest transition-all ${step >= n ? 'text-[#1a1c24]' : 'text-[#1a1c24]/20'}`}>
                      {label}
                    </span>
                  </div>
                  {n < 3 && <div className={`w-8 h-px ${step > n ? 'bg-[#1a1c24]' : 'bg-[#1a1c24]/10'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form Side */}
            <div className="lg:col-span-2 space-y-10">
              {step === 1 && (
                /* Shipping Step */
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10 bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_10px_60px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-fraunces font-bold text-[#1a1c24]">Shipping Address</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">Full Name</label>
                         <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="Recipient Name" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">Phone Number</label>
                         <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">Address Street</label>
                       <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="Door No, Street Name" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                       <div className="space-y-2">
                          <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">City</label>
                          <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="Coimbatore" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">State</label>
                          <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="Tamil Nadu" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 px-4">Zip Code</label>
                          <input className="w-full px-7 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit" placeholder="641001" />
                       </div>
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-xl flex items-center justify-center gap-3">
                    Continue to Payment <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                /* Payment Step */
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10 bg-white p-14 rounded-[3rem] shadow-soft border border-border/10">
                   <h3 className="text-2xl font-fraunces font-bold text-[#1a1c24]">Payment Method</h3>
                   <div className="space-y-4">
                      {['UPI / Google Pay', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((m) => (
                        <label key={m} className="flex items-center justify-between p-6 rounded-[2rem] border border-[#1a1c24]/10 hover:border-[#ff4d6d]/40 cursor-pointer group transition-all bg-[#fbf9f6]/50">
                           <div className="flex items-center gap-4">
                              <input type="radio" name="payment" className="w-5 h-5 accent-[#ff4d6d]" />
                              <span className="font-outfit font-bold text-[#1a1c24]/80">{m}</span>
                           </div>
                           <CreditCard className="w-5 h-5 text-[#1a1c24]/20 group-hover:text-[#ff4d6d]/40 transition-colors" />
                        </label>
                      ))}
                   </div>
                   <div className="flex gap-4">
                      <button onClick={() => setStep(1)} className="flex-1 py-5 border border-[#1a1c24]/10 rounded-full font-bold text-xs text-[#1a1c24]/40 hover:text-[#1a1c24] transition-all">Back</button>
                      <button onClick={() => setStep(3)} className="flex-[2] py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:translate-y-[-2px] transition-all shadow-xl">Review Order</button>
                   </div>
                </motion.div>
              )}

              {step === 3 && (
                /* Success Screen Mock */
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 px-10 bg-white rounded-[4rem] shadow-soft border border-border/10 space-y-8">
                   <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">✓</div>
                   <h2 className="text-4xl font-fraunces font-black text-[#1a1c24]">Ready to Ship!</h2>
                   <p className="text-muted-foreground font-outfit max-w-sm mx-auto">Click below to place your artisan order and start the journey from our kitchen to yours.</p>
                   <Link href="/order-success" className="px-16 py-6 bg-[#ff4d6d] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl inline-block mx-auto">
                      Confirm & Pay ₹9,679
                   </Link>
                </motion.div>
              )}
            </div>

            {/* Sidebar Summary */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5 space-y-8">
                <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d]">Order Summary</h4>
                <div className="space-y-6">
                  {[
                    { name: 'Lotus Biscoff Cake', price: 1200, qty: 1, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Kanchi Silk Saree', price: 7960, qty: 1, img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-16 h-16 rounded-2xl overflow-hidden bg-background flex-shrink-0">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <p className="font-fraunces font-bold text-[#1a1c24] text-xs leading-tight">{item.name}</p>
                          <p className="text-[10px] font-outfit text-[#1a1c24]/40 mt-1">Qty: {item.qty} · ₹{item.price.toLocaleString()}</p>
                       </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-6 border-t border-[#1a1c24]/5">
                  <div className="flex justify-between text-sm font-outfit text-[#1a1c24]/40"><span>Subtotal</span> <span>₹9,160</span></div>
                  <div className="flex justify-between text-sm font-outfit text-[#1a1c24]/40"><span>Shipping</span> <span className="text-green-500 font-bold">FREE</span></div>
                  <div className="flex justify-between items-center pt-4 border-t border-[#1a1c24]/10">
                    <span className="font-fraunces font-bold text-[#1a1c24]">Total</span>
                    <span className="text-2xl font-fraunces font-black text-[#1a1c24]">₹9,160</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-6 px-4">
                 <div className="flex items-center gap-4 group">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    <p className="text-[10px] font-outfit font-bold uppercase tracking-widest text-[#1a1c24]/40">Secured with 256-bit SSL</p>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <Truck className="w-5 h-5 text-[#bfa37e]" />
                    <p className="text-[10px] font-outfit font-bold uppercase tracking-widest text-[#1a1c24]/40">Est. Arrival: 3–5 Days</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-[#1a1c24]/5 text-center">
        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic — Secured Checkpoint</p>
      </footer>
    </main>
  );
}
