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

      <section className="pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.1),transparent_70%)] relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          {/* Progress Header */}
          <div className="flex flex-col lg:flex-row items-baseline justify-between gap-10 md:gap-16 mb-16 md:mb-24">
            <div className="space-y-4 md:space-y-6 w-full text-center lg:text-left">
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Final Steps</span>
              <h1 className="text-5xl md:text-7xl lg:text-[84px] font-fraunces font-black leading-tight text-[#1a1c24] italic">Checkout.</h1>
            </div>

            <div className="w-full lg:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="flex items-center justify-start lg:justify-end gap-5 md:gap-10 min-w-max pb-4">
                {[
                  { n: 1, label: 'Shipping' },
                  { n: 2, label: 'Payment' },
                  { n: 3, label: 'Review' }
                ].map(({ n, label }) => (
                  <React.Fragment key={n}>
                    <div className="flex items-center gap-3 md:gap-5 group cursor-pointer" onClick={() => n < step && setStep(n)}>
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-xl font-black transition-all border-2 active:scale-95 italic ${step >= n ? 'bg-[#1a1c24] text-white border-[#1a1c24] shadow-[0_20px_50px_rgba(26,28,36,0.2)]' : 'bg-white text-[#1a1c24]/20 border-[#1a1c24]/5 group-hover:border-[#ff4d6d]/40 group-hover:text-[#ff4d6d] shadow-sm'}`}>
                        {n}
                      </div>
                      <span className={`text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] transition-all italic ${step >= n ? 'text-[#1a1c24]' : 'text-[#1a1c24]/20 group-hover:text-[#ff4d6d]'}`}>
                        {label}
                      </span>
                    </div>
                    {n < 3 && <div className={`w-8 md:w-16 h-px transition-all duration-700 ${step > n ? 'bg-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.4)]' : 'bg-[#1a1c24]/10'}`} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form Side */}
            <div className="lg:col-span-8 space-y-10 md:space-y-16 order-2 lg:order-1">
              {step === 1 && (
                /* Shipping Step */
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="space-y-10 md:space-y-16">
                  <div className="space-y-10 md:space-y-16 bg-white p-8 md:p-14 lg:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ff4d6d]/10" />
                    <div className="space-y-10 md:space-y-14 relative z-10">
                      <div className="space-y-3">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-tight italic">Shipment <span className="italic font-normal text-[#bfa37e]">Ritual.</span></h3>
                        <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/40 italic font-medium leading-relaxed">Where shall our artisans deliver your bespoke collection?</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-4">
                          <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Artisan Name</label>
                          <input className="w-full px-8 md:px-10 py-5 md:py-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base lg:text-lg font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="Your Legacy Name" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Private Signal</label>
                          <input className="w-full px-8 md:px-10 py-5 md:py-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base lg:text-lg font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Palace / Studio Address</label>
                        <input className="w-full px-8 md:px-10 py-5 md:py-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base lg:text-lg font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="Door No, Street Name, Hallmark" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Region</label>
                          <input className="w-full px-8 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="Tirunelveli" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Domain</label>
                          <input className="w-full px-8 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="Tamil Nadu" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 px-6 block italic">Post Code</label>
                          <input className="w-full px-8 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit outline-none focus:border-[#ff4d6d]/40 focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] transition-all shadow-inner font-medium italic placeholder:text-[#1a1c24]/20" placeholder="627001" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-[1.02] transition-all shadow-[0_30px_60px_rgba(26,28,36,0.15)] hover:shadow-[#ff4d6d]/30 flex items-center justify-center gap-4 active:scale-95 group italic">
                    Continue to Vault <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                /* Payment Step */
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="space-y-10 md:space-y-16">
                  <div className="space-y-10 md:space-y-16 bg-white p-8 md:p-14 lg:p-20 rounded-[3rem] md:rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-2 h-full bg-[#bfa37e]/10" />
                    <div className="space-y-10 md:space-y-14 relative z-10">
                      <div className="space-y-3">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-fraunces font-black text-[#1a1c24] leading-tight italic">Vault <span className="italic font-normal text-[#bfa37e]">Exchange.</span></h3>
                        <p className="text-sm md:text-xl font-outfit text-[#1a1c24]/40 italic font-medium leading-relaxed">Select your preferred method for the artisan exchange.</p>
                      </div>

                      <div className="space-y-6 md:space-y-8">
                        {['UPI / Google Pay', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((m) => (
                          <label key={m} className="flex items-center justify-between p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-[#1a1c24]/5 hover:border-[#ff4d6d]/40 cursor-pointer group transition-all bg-[#fbf9f6] hover:bg-white shadow-inner hover:shadow-[0_20px_60px_rgba(255,77,109,0.05)] active:scale-[0.98]">
                            <div className="flex items-center gap-6 md:gap-8">
                              <div className="relative flex items-center justify-center">
                                <input type="radio" name="payment" className="peer absolute w-full h-full opacity-0 cursor-pointer" />
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#1a1c24]/20 peer-checked:border-[#ff4d6d] transition-all flex items-center justify-center after:content-[''] after:w-3 md:after:w-4 after:h-3 md:after:h-4 after:bg-[#ff4d6d] after:rounded-full after:scale-0 peer-checked:after:scale-100 after:transition-transform shadow-sm" />
                              </div>
                              <span className="font-outfit font-black uppercase text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24]/60 group-hover:text-[#1a1c24] transition-colors italic">{m}</span>
                            </div>
                            <CreditCard className="w-6 h-6 md:w-8 md:h-8 text-[#1a1c24]/20 group-hover:text-[#ff4d6d]/60 transition-all group-hover:scale-110" />
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                    <button onClick={() => setStep(1)} className="order-2 sm:order-1 flex-1 py-5 md:py-6 border-2 border-[#1a1c24]/5 bg-[#fbf9f6] rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#1a1c24]/40 hover:text-[#ff4d6d] hover:border-[#ff4d6d]/30 hover:bg-white transition-all active:scale-95 italic">Back to Paths</button>
                    <button onClick={() => setStep(3)} className="order-1 sm:order-2 flex-[2] py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-[1.02] shadow-[0_20px_50px_rgba(26,28,36,0.2)] hover:shadow-[#ff4d6d]/30 transition-all active:scale-95 italic">Preview Royal Order</button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                /* Review Step */
                <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center py-24 md:py-40 px-6 md:px-14 bg-white rounded-[3.5rem] md:rounded-[5rem] shadow-[0_40px_120px_rgba(0,0,0,0.05)] border border-[#1a1c24]/5 space-y-12 md:space-y-16 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
                  <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-green-500/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }} className="w-32 h-32 md:w-40 md:h-40 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner relative z-10 border border-green-500/10">
                    <ShieldCheck className="w-16 h-16 md:w-20 md:h-20" />
                  </motion.div>

                  <div className="space-y-6 md:space-y-8 relative z-10">
                    <h2 className="text-5xl md:text-7xl lg:text-[84px] font-fraunces font-black text-[#1a1c24] leading-[1.05] tracking-tight italic">Ready for <br className="hidden md:block" />the <span className="italic font-normal text-[#bfa37e]">Journey.</span></h2>
                    <p className="text-base md:text-xl text-[#1a1c24]/40 font-outfit max-w-lg mx-auto leading-relaxed italic font-medium">"Click below to place your artisan order and start the magical journey from our palace to yours."</p>
                  </div>

                  <Link href="/order-success" className="group px-10 md:px-20 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-base uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl inline-block mx-auto w-full sm:w-auto active:scale-95">
                    Finalize & Commit ₹9,160
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Sidebar Summary */}
            <div className="lg:col-span-4 space-y-8 md:space-y-12 order-1 lg:order-2">
              <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5 space-y-10 md:space-y-12 sticky top-32 lg:h-fit group">
                <div className="space-y-2">
                   <h4 className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d] italic">Artifacts</h4>
                   <p className="text-xl md:text-3xl font-fraunces font-black text-[#1a1c24] leading-tight italic">Order Gallery.</p>
                </div>

                <div className="space-y-8 md:space-y-10 max-h-[300px] md:max-h-none overflow-y-auto no-scrollbar">
                  {[
                    { name: 'Lotus Biscoff Cake', price: 1200, qty: 1, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=100' },
                    { name: 'Kanchi Silk Saree', price: 7960, qty: 1, img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393' }
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="flex gap-6 group/item">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#fbf9f6] flex-shrink-0 shadow-inner group-hover/item:scale-110 transition-transform duration-500">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center space-y-1">
                        <p className="font-fraunces font-black text-[#1a1c24] text-xs md:text-sm leading-tight italic">{item.name}</p>
                        <p className="text-[10px] font-outfit font-black uppercase tracking-[0.2em] text-[#1a1c24]/30">Qty: {item.qty} · ₹{item.price.toLocaleString()}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6 pt-10 border-t-2 border-[#1a1c24]/5 font-outfit">
                  <div className="flex justify-between items-center text-xs md:text-sm font-black uppercase tracking-widest text-[#1a1c24]/20 italic">
                    <span>Artifact Subtotal</span> 
                    <span className="text-[#1a1c24]">₹9,160</span>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-sm font-black uppercase tracking-widest text-[#1a1c24]/20 italic">
                    <span>Artisan Shipping</span> 
                    <span className="text-green-500 font-black">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t-2 border-[#1a1c24]/10">
                    <div className="space-y-1">
                       <span className="font-outfit font-black text-[10px] uppercase tracking-[0.4em] text-[#1a1c24]/30">Total Tribute</span>
                       <p className="font-fraunces font-black text-[#1a1c24] text-2xl md:text-4xl italic leading-none">₹9,160</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-8 px-6">
                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-green-500/5 flex items-center justify-center text-green-500">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/60">Secured Vault</p>
                     <p className="text-[9px] font-outfit font-medium text-[#1a1c24]/20 tracking-wider">256-BIT SSL ENCRYPTION ACTIVE</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-[#bfa37e]/5 flex items-center justify-center text-[#bfa37e]">
                     <Truck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/60">Artisan Delivery</p>
                     <p className="text-[9px] font-outfit font-medium text-[#1a1c24]/20 tracking-wider">EST. ARRIVAL: 3–5 LUNAR DAYS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 md:py-32 bg-white border-t border-[#1a1c24]/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
        <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#1a1c24]/15 leading-relaxed relative z-10 px-6">
          Handcrafted by PRANAVIKA'S · © 2026 PRANAVIKA'S Sweet & Chic · Secured Artisan Checkpoint
        </p>
      </footer>
    </main>
  );
}
