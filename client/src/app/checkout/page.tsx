"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
   ArrowLeft, CreditCard, Truck, ShieldCheck, MapPin,
   Phone, Mail, ChevronRight, Clock, Calendar, Edit2,
   ShoppingBag, CheckCircle2, Gift, DollarSign
} from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

export default function CheckoutPage() {
   const [step, setStep] = useState(1);
   const [paymentMethod, setPaymentMethod] = useState('razorpay');
   const [deliveryDate, setDeliveryDate] = useState('');
   const [deliveryTime, setDeliveryTime] = useState('');

   const cartItems = [
      { name: 'Lotus Biscoff Cake', price: 1200, qty: 1, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { name: 'Kanchi Silk Saree', price: 7960, qty: 1, img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393' }
   ];

   const subtotal = 9160;
   const pointsToRedeem = 450;
   const total = subtotal - pointsToRedeem;

   const steps = [
      { n: 1, label: 'Shipping' },
      { n: 2, label: 'Payment' },
      { n: 3, label: 'Review' },
      { n: 4, label: 'Success' }
   ];

   return (
      <main className="min-h-screen bg-[#fbf9f6] text-[#2d241c]">
         <Navbar />

         <section className="pt-24 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

               {/* Progress Indicator */}
               <div className="flex items-center justify-between mb-16 md:mb-24 max-w-4xl mx-auto">
                  {steps.map((s, i) => (
                     <React.Fragment key={s.n}>
                        <div className="flex flex-col items-center gap-3">
                           <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-fraunces font-black text-lg transition-all border-2 ${step >= s.n ? 'bg-[#2d241c] text-white border-[#2d241c] shadow-xl' : 'bg-white text-[#2d241c]/20 border-[#2d241c]/5'}`}>
                              {step > s.n ? <CheckCircle2 className="w-6 h-6" /> : s.n}
                           </div>
                           <span className={`text-[8px] md:text-[10px] font-outfit font-black uppercase tracking-widest italic ${step >= s.n ? 'text-[#2d241c]' : 'text-[#2d241c]/20'}`}>{s.label}</span>
                        </div>
                        {i < steps.length - 1 && (
                           <div className={`flex-1 h-px transition-all duration-1000 ${step > s.n ? 'bg-[#dcb0af]' : 'bg-[#2d241c]/5'}`} />
                        )}
                     </React.Fragment>
                  ))}
               </div>

               <div className={`${step === 4 ? 'max-w-4xl mx-auto' : 'grid lg:grid-cols-12 gap-12 lg:gap-20'}`}>

                  <AnimatePresence mode="wait">
                     {step < 4 && (
                        <motion.div
                           key={step}
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           className="lg:col-span-8 space-y-10"
                        >
                           {/* Step 1: Shipping */}
                           {step === 1 && (
                              <div className="space-y-10 bg-white p-8 md:p-14 rounded-[3rem] shadow-sm border border-[#1a1c24]/5">
                                 <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-fraunces font-black italic">Shipping <span className="text-[#dcb0af] font-normal">Ritual.</span></h2>
                                    <p className="text-sm md:text-lg font-outfit text-[#2d241c]/40 italic">Tell us where your treasures should be manifested.</p>
                                 </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-[#2d241c]/30 px-4">Artisan Name</label>
                                       <input className="w-full px-8 py-5 rounded-2xl bg-[#fbf9f6] border border-[#1a1c24]/5 focus:border-[#dcb0af] transition-all outline-none font-outfit font-bold italic" placeholder="e.g. Elena Gilbert" />
                                    </div>
                                    <div className="space-y-3">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-[#2d241c]/30 px-4">Palace Signal</label>
                                       <input className="w-full px-8 py-5 rounded-2xl bg-[#fbf9f6] border border-[#1a1c24]/5 focus:border-[#dcb0af] transition-all outline-none font-outfit font-bold italic" placeholder="+91 98765 43210" />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                       <label className="text-[10px] font-black uppercase tracking-widest text-[#2d241c]/30 px-4">Studio / Palace Address</label>
                                       <input className="w-full px-8 py-5 rounded-2xl bg-[#fbf9f6] border border-[#1a1c24]/5 focus:border-[#dcb0af] transition-all outline-none font-outfit font-bold italic" placeholder="Street Name, Landmarking, Realm Number" />
                                    </div>
                                 </div>

                                 {/* Essential Bakery Scheduler */}
                                 <div className="bg-[#fbf9f6] p-8 rounded-[2.5rem] border border-[#dcb0af]/20 space-y-8">
                                    <div className="flex items-center gap-4">
                                       <Clock className="w-6 h-6 text-[#dcb0af]" />
                                       <h4 className="text-xs font-outfit font-black uppercase tracking-[0.3em] text-[#2d241c] italic">Bakery Manifestation Window</h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                       <div className="space-y-3">
                                          <label className="text-[9px] font-black uppercase tracking-widest text-[#2d241c]/30 px-4">Delivery Date</label>
                                          <input type="date" className="w-full px-8 py-5 rounded-xl bg-white border border-[#1a1c24]/5 outline-none font-outfit font-bold cursor-pointer" />
                                       </div>
                                       <div className="space-y-3">
                                          <label className="text-[9px] font-black uppercase tracking-widest text-[#2d241c]/30 px-4">Ritual Time</label>
                                          <select className="w-full px-8 py-5 rounded-xl bg-white border border-[#1a1c24]/5 outline-none font-outfit font-bold cursor-pointer">
                                             <option>Morning (10 AM - 12 PM)</option>
                                             <option>Afternoon (2 PM - 4 PM)</option>
                                             <option>Twilight (6 PM - 8 PM)</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>

                                 <button onClick={() => setStep(2)} className="w-full py-6 bg-[#2d241c] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#dcb0af] transition-all shadow-xl active:scale-95 italic flex items-center justify-center gap-4">
                                    Proceed to Exchange <ChevronRight className="w-5 h-5" />
                                 </button>
                              </div>
                           )}

                           {/* Step 2: Payment */}
                           {step === 2 && (
                              <div className="space-y-10 bg-white p-8 md:p-14 rounded-[3rem] shadow-sm border border-[#1a1c24]/5">
                                 <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-fraunces font-black italic">Artisan <span className="text-[#bfa37e] font-normal">Exchange.</span></h2>
                                    <p className="text-sm md:text-lg font-outfit text-[#2d241c]/40 italic">Finalize the ritual of transaction with grace.</p>
                                 </div>

                                 <div className="space-y-6">
                                    {[
                                       { id: 'razorpay', label: 'Razorpay / Cards / UPI', icon: CreditCard },
                                       { id: 'stripe', label: 'Stripe (Global)', icon: ShieldCheck },
                                       { id: 'cod', label: 'Cash on Delivery Ritual', icon: DollarSign }
                                    ].map((method) => (
                                       <label key={method.id} className="flex items-center justify-between p-8 rounded-[2rem] border border-[#1a1c24]/5 cursor-pointer hover:bg-[#fbf9f6] transition-all group">
                                          <div className="flex items-center gap-6">
                                             <input type="radio" name="payment" checked={paymentMethod === method.id} onChange={() => setPaymentMethod(method.id)} className="w-5 h-5 accent-[#dcb0af]" />
                                             <span className="font-outfit font-black text-xs uppercase tracking-widest text-[#2d241c]/60 group-hover:text-[#2d241c] italic">{method.label}</span>
                                          </div>
                                          <method.icon className="w-6 h-6 text-[#2d241c]/10" />
                                       </label>
                                    ))}
                                 </div>

                                 <div className="flex gap-6">
                                    <button onClick={() => setStep(1)} className="flex-1 py-6 border-2 border-[#2d241c]/5 rounded-full font-black text-[10px] uppercase tracking-widest text-[#2d241c]/30 italic">Back</button>
                                    <button onClick={() => setStep(3)} className="flex-[2] py-6 bg-[#2d241c] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#dcb0af] transition-all shadow-xl italic">Review Submission</button>
                                 </div>
                              </div>
                           )}

                           {/* Step 3: Review */}
                           {step === 3 && (
                              <div className="space-y-10 bg-white p-8 md:p-14 rounded-[3rem] shadow-sm border border-[#1a1c24]/5">
                                 <div className="space-y-4">
                                    <h2 className="text-3xl md:text-5xl font-fraunces font-black italic">Final <span className="text-[#dcb0af] font-normal">Manifestation.</span></h2>
                                    <p className="text-sm md:text-lg font-outfit text-[#2d241c]/40 italic">Verify your sacred selections before they are woven into reality.</p>
                                 </div>

                                 <div className="space-y-8 divide-y divide-[#2d241c]/5">
                                    <div className="py-6 flex items-center justify-between">
                                       <div className="flex items-center gap-6">
                                          <div className="w-12 h-12 bg-[#fbf9f6] rounded-full flex items-center justify-center"><Truck className="w-5 h-5 text-[#dcb0af]" /></div>
                                          <div>
                                             <p className="text-[10px] font-black uppercase tracking-widest text-[#2d241c]/30 italic">Delivery Realm</p>
                                             <p className="text-xs font-bold">123 Palace Way, Chennai Realm</p>
                                          </div>
                                       </div>
                                       <button onClick={() => setStep(1)} className="text-[#dcb0af] hover:underline text-[10px] font-black uppercase tracking-widest italic">Edit</button>
                                    </div>

                                    <div className="py-6 flex items-center justify-between">
                                       <div className="flex items-center gap-6">
                                          <div className="w-12 h-12 bg-[#fbf9f6] rounded-full flex items-center justify-center"><CreditCard className="w-5 h-5 text-[#dcb0af]" /></div>
                                          <div>
                                             <p className="text-[10px] font-black uppercase tracking-widest text-[#2d241c]/30 italic">Exchange Mode</p>
                                             <p className="text-xs font-bold uppercase">{paymentMethod}</p>
                                          </div>
                                       </div>
                                       <button onClick={() => setStep(2)} className="text-[#dcb0af] hover:underline text-[10px] font-black uppercase tracking-widest italic">Edit</button>
                                    </div>

                                    {/* Loyalty Redemption */}
                                    <div className="py-8 px-8 bg-[#dcb0af]/5 rounded-3xl flex items-center justify-between border border-[#dcb0af]/10 group">
                                       <div className="flex items-center gap-6">
                                          <Gift className="w-6 h-6 text-[#dcb0af] animate-pulse" />
                                          <div>
                                             <p className="text-[10px] font-black uppercase tracking-widest text-[#2d241c] italic">Redeem Pranavika Points</p>
                                             <p className="text-xs font-bold text-[#bfa37e]">Available: 1,200 points (Save ₹120)</p>
                                          </div>
                                       </div>
                                       <button className="px-6 py-2 bg-white rounded-full text-[9px] font-black uppercase tracking-widest border border-[#dcb0af]/20 shadow-sm active:scale-95 transition-all">Redeem</button>
                                    </div>
                                 </div>

                                 <button onClick={() => setStep(4)} className="w-full py-8 bg-[#2d241c] text-white rounded-full font-black text-sm uppercase tracking-[0.5em] hover:bg-[#dcb0af] transition-all shadow-2xl italic">Finalize Commitment</button>
                              </div>
                           )}
                        </motion.div>
                     )}

                     {/* Step 4: Success */}
                     {step === 4 && (
                        <motion.div
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="text-center py-20 px-10 space-y-12 bg-white rounded-[5rem] border border-[#dcb0af]/20 shadow-2xl relative overflow-hidden"
                        >
                           <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-[#dcb0af] to-transparent" />
                           <div className="w-32 h-32 md:w-48 md:h-48 bg-[#dcb0af]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                              <CheckCircle2 className="w-16 h-16 md:w-24 md:h-24 text-[#dcb0af]" />
                           </div>

                           <div className="space-y-6">
                              <h2 className="text-4xl md:text-7xl font-fraunces font-black italic tracking-tighter">Ordered Successfully!</h2>
                              <p className="text-base md:text-2xl font-outfit text-[#2d241c]/40 italic max-w-xl mx-auto">"An artisan ritual has begun. Your order ID is <span className="text-[#2d241c] font-black not-italic px-2">#P-2026-9931</span>. We are now weaving your selections into reality."</p>
                           </div>

                           <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                              <Link href="/orders" className="px-12 py-6 bg-[#2d241c] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl italic">Track My Ritual</Link>
                              <Link href="/" className="px-12 py-6 border-2 border-[#1a1c24]/5 rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all italic">Return to Palace</Link>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>

                  {/* Sidebar Summary (Visible until Success) */}
                  {step < 4 && (
                     <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="bg-[#1a1c24] text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl space-y-10 relative overflow-hidden">
                           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                           <h3 className="text-2xl md:text-3xl font-fraunces font-black italic border-b border-white/10 pb-6 uppercase tracking-widest">Ritual List</h3>

                           <div className="space-y-8 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                              {cartItems.map((item, i) => (
                                 <div key={i} className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0">
                                       <img src={item.img} alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="space-y-1">
                                       <p className="font-fraunces font-black text-xs italic">{item.name}</p>
                                       <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-white/40">Qty: {item.qty} • ₹{item.price.toLocaleString()}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           <div className="space-y-6 pt-10 border-t border-white/10">
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                                 <span>Subtotal</span>
                                 <span>₹{subtotal.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                                 <span>Loyalty Redemed</span>
                                 <span className="text-[#dcb0af]">-₹{pointsToRedeem}</span>
                              </div>
                              <div className="flex justify-between items-center pt-8 border-t border-white/20">
                                 <div className="space-y-1">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 italic">Total Tribute</p>
                                    <p className="text-3xl md:text-5xl font-fraunces font-black italic mb-0">₹{total.toLocaleString()}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </section>

         <footer className="py-10 border-t border-[#1a1c24]/5 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#2d241c]/20 italic">Handcrafted Secure Checkout • Pranavika’s Creations</p>
         </footer>
      </main>
   );
}

