"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Package, Heart, LogOut, ChevronRight, MapPin, Phone, Mail, Shield } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

export default function AccountPage() {
   const [activeTab, setActiveTab] = useState('orders');

   return (
      <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
         <Navbar />

         <section className="pt-32 md:pt-48 pb-20 md:pb-32 relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.1),transparent_70%)]">
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

               <div className="flex flex-col md:flex-row items-center md:items-baseline justify-between mb-12 md:mb-20 gap-6 md:gap-8 text-center md:text-left">
                  <div className="space-y-4">
                     <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Personal Atelier</span>
                     <h1 className="text-3xl md:text-5xl lg:text-[84px] font-fraunces font-black text-[#1a1c24] leading-tight italic">My <span className="italic font-normal text-[#bfa37e]">Account.</span></h1>
                  </div>
                  <p className="text-xl md:text-2xl font-fraunces font-black text-[#bfa37e] italic">Welcome back, <br className="md:hidden" /><span className="text-[#1a1c24] italic">Santhiya</span></p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-16 items-start">
                  {/* Sidebar */}
                  <div className="flex flex-row overflow-x-auto no-scrollbar lg:flex-col lg:space-y-4 gap-3 lg:gap-0 pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 sticky top-24 lg:top-32 z-20">
                     {[
                        { id: 'orders', label: 'Recent Orders', icon: Package },
                        { id: 'wishlist', label: 'Artisan Wishlist', icon: Heart },
                        { id: 'profile', label: 'Profile Details', icon: User },
                        { id: 'address', label: 'Saved Addresses', icon: MapPin },
                        { id: 'security', label: 'Security', icon: Shield },
                     ].map(({ id, label, icon: Icon }) => (
                        <button
                           key={id}
                           onClick={() => setActiveTab(id)}
                           className={`flex-shrink-0 flex items-center justify-between p-4 md:p-6 lg:rounded-[2rem] rounded-full transition-all duration-300 group ${activeTab === id ? 'bg-[#1a1c24] text-white shadow-[0_20px_50px_rgba(26,28,36,0.2)]' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40 hover:text-[#ff4d6d] hover:bg-[#ff4d6d]/5 active:scale-95'}`}
                        >
                           <div className="flex items-center gap-3 md:gap-4">
                              <Icon className="w-4 h-4 md:w-5 md:h-5" />
                              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] md:tracking-widest italic whitespace-nowrap">{label}</span>
                           </div>
                           <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform ${activeTab === id ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-20'}`} />
                        </button>
                     ))}

                     <button className="flex-shrink-0 lg:w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 lg:rounded-[2rem] rounded-full border border-[#1a1c24]/5 bg-white text-[#1a1c24]/20 hover:text-red-400 hover:border-red-100 transition-all lg:mt-8 group active:scale-95">
                        <LogOut className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] md:tracking-widest italic whitespace-nowrap">Sign Out</span>
                     </button>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-3">
                     <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 min-h-[500px] md:min-h-[700px] relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff4d6d]/5 rounded-full blur-[60px] pointer-events-none" />

                        {activeTab === 'orders' && (
                           <div className="space-y-8 md:space-y-12 relative z-10">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                 <h3 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Recent Orders</h3>
                                 <span className="px-5 md:px-6 py-2.5 md:py-3 bg-[#fbf9f6] rounded-full text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/40 border border-[#1a1c24]/5 italic shadow-sm">Last 6 Months</span>
                              </div>

                              <div className="space-y-6 md:space-y-8">
                                 {[
                                    { id: '#PC1024', date: 'March 14, 2026', status: 'Delivering Today', price: 9160, items: 3, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=300' },
                                    { id: '#PC0982', date: 'Feb 28, 2026', status: 'Delivered', price: 12450, items: 5, img: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=300' }
                                 ].map((order) => (
                                    <div key={order.id} className="p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-[#fbf9f6] border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 hover:bg-white transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                             <div className="w-24 md:w-28 aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-inner bg-white flex-shrink-0 border border-[#1a1c24]/5">
                                                <img src={order.img} alt="Order" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                             </div>
                                             <div className="space-y-2">
                                                <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] italic">{order.status}</p>
                                                <h4 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] leading-tight italic">Order {order.id}</h4>
                                                <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/40 italic font-medium">{order.date} • {order.items} Items</p>
                                             </div>
                                          </div>
                                          <div className="flex items-center justify-between sm:justify-start gap-8 w-full sm:w-auto pt-6 sm:pt-0 border-t sm:border-t-0 border-[#1a1c24]/5">
                                             <div className="text-left md:text-right">
                                                <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24]/30 italic pb-1">Total Paid</p>
                                                <p className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic">₹{order.price.toLocaleString()}</p>
                                             </div>
                                             <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#1a1c24]/10 bg-white flex items-center justify-center group-hover:bg-[#1a1c24] group-hover:text-white group-hover:border-[#1a1c24] transition-all duration-300 shadow-sm flex-shrink-0 hover:scale-105 active:scale-95">
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        {activeTab === 'profile' && (
                           <div className="space-y-12 md:space-y-16 relative z-10">
                              <h3 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Profile Details</h3>
                              <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                                 <div className="space-y-8">
                                    <div className="space-y-3">
                                       <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 px-6 block italic">Display Name</label>
                                       <div className="p-6 md:p-8 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 font-fraunces font-bold text-xl md:text-2xl text-[#1a1c24] shadow-inner italic">Santhiya Ravichandran</div>
                                    </div>
                                    <div className="space-y-3">
                                       <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 px-6 block italic">Email Contact</label>
                                       <div className="p-6 md:p-8 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 font-outfit font-bold text-base md:text-lg text-[#1a1c24]/60 shadow-inner">santhiya@example.com</div>
                                    </div>
                                 </div>
                                 <div className="space-y-6 pt-4 md:pt-0">
                                    <div className="p-10 md:p-12 rounded-[3rem] bg-[#ff4d6d]/5 border border-[#ff4d6d]/10 space-y-6 md:space-y-8 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_30px_60px_rgba(255,77,109,0.05)] text-center sm:text-left">
                                       <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex flex-col items-center justify-center text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] mx-auto sm:mx-0">👑</div>
                                       <div>
                                          <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] italic mb-2">Elite Member since 2024</p>
                                          <h4 className="text-3xl md:text-4xl font-fraunces font-black text-[#1a1c24] italic">Loyalty Status</h4>
                                       </div>
                                       <p className="text-sm md:text-base font-outfit text-[#1a1c24]/40 italic leading-relaxed font-medium">"You are only 240 pts away from a free custom cake. Keep manifesting."</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="pt-6">
                                 <button className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(26,28,36,0.2)] hover:shadow-[#ff4d6d]/30 italic text-center">Update Private Profile</button>
                              </div>
                           </div>
                        )}

                        {/* Other tabs placeholder */}
                        {activeTab !== 'orders' && activeTab !== 'profile' && (
                           <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-8 text-[#1a1c24]/20 p-10">
                              <div className="w-24 h-24 border-[6px] border-[#ff4d6d]/20 border-t-[#ff4d6d] border-dashed rounded-full animate-[spin_4s_linear_infinite]" />
                              <div className="space-y-4">
                                 <h3 className="text-3xl md:text-5xl font-fraunces font-black italic">In Development.</h3>
                                 <p className="font-outfit text-sm md:text-lg italic font-medium tracking-wide">"We are handcrafting this part of your atelier."</p>
                              </div>
                           </div>
                        )}
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         <footer className="py-10 md:py-16 bg-[#fbf9f6] border-t border-[#1a1c24]/5 text-center px-6">
            <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/20 italic line-clamp-1">© 2026 PRANAVIKA'S Creations — Member Atelier</p>
         </footer>
      </main>
   );
}
