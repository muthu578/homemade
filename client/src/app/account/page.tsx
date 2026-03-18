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

      <section className="pt-32 pb-20">
        <div className="max-w-[1500px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Personal Atelier</span>
              <h1 className="text-4xl md:text-7xl font-fraunces font-black text-[#1a1c24]">My Account.</h1>
            </div>
            <p className="text-xl font-fraunces font-bold text-[#bfa37e]">Welcome back, <span className="text-[#1a1c24]">Santhiya</span></p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="space-y-4">
              {[
                { id: 'orders', label: 'Recent Orders', icon: Package },
                { id: 'wishlist', label: 'Artisan Wishlist', icon: Heart },
                { id: 'profile', label: 'Profile Details', icon: User },
                { id: 'address', label: 'Saved Addresses', icon: MapPin },
                { id: 'security', label: 'Password & Security', icon: Shield },
              ].map(({ id, label, icon: Icon }) => (
                <button
                   key={id}
                   onClick={() => setActiveTab(id)}
                   className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all group ${activeTab === id ? 'bg-[#1a1c24] text-white shadow-xl' : 'bg-white border border-[#1a1c24]/5 text-[#1a1c24]/40 hover:border-[#ff4d6d]/40 hover:text-[#ff4d6d]'}`}
                >
                   <div className="flex items-center gap-4">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-outfit font-black uppercase tracking-widest">{label}</span>
                   </div>
                   <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeTab === id ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-20'}`} />
                </button>
              ))}

              <button className="w-full flex items-center gap-4 p-6 rounded-[2rem] border border-[#1a1c24]/5 text-[#1a1c24]/20 hover:text-red-400 hover:border-red-100 transition-all mt-8 group">
                 <LogOut className="w-4 h-4" />
                 <span className="text-xs font-outfit font-black uppercase tracking-widest">Sign Out</span>
              </button>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
               <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-soft border border-border/10 min-h-[600px]"
               >
                  {activeTab === 'orders' && (
                    <div className="space-y-12">
                       <div className="flex justify-between items-center">
                          <h3 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Recent Orders</h3>
                          <span className="px-4 py-2 bg-[#fbf9f6] rounded-full text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Last 6 Months</span>
                       </div>
                       
                       <div className="space-y-6">
                          {[
                            { id: '#PC1024', date: 'March 14, 2026', status: 'Delivering Today', price: 9160, items: 3, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=150' },
                            { id: '#PC0982', date: 'Feb 28, 2026', status: 'Delivered', price: 12450, items: 5, img: 'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg?v=1757499348' }
                          ].map((order) => (
                             <div key={order.id} className="p-8 rounded-[2.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                   <div className="flex items-center gap-6">
                                      <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-soft">
                                         <img src={order.img} alt="Order" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                      </div>
                                      <div className="space-y-1">
                                         <p className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d]">{order.status}</p>
                                         <h4 className="text-xl font-fraunces font-black text-[#1a1c24]">Order {order.id}</h4>
                                         <p className="text-xs font-outfit text-[#1a1c24]/40">{order.date} • {order.items} Items</p>
                                      </div>
                                   </div>
                                   <div className="flex items-center gap-8">
                                      <div className="text-right">
                                         <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Total Paid</p>
                                         <p className="text-2xl font-fraunces font-black text-[#1a1c24]">₹{order.price.toLocaleString()}</p>
                                      </div>
                                      <button className="w-12 h-12 rounded-full border border-[#1a1c24]/10 flex items-center justify-center hover:bg-[#1a1c24] hover:text-white transition-all">
                                         <ChevronRight className="w-4 h-4" />
                                      </button>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                  )}

                  {activeTab === 'profile' && (
                    <div className="space-y-12">
                       <h3 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Profile Details</h3>
                       <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-6">
                             <div className="space-y-2">
                                <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20 px-6">Display Name</label>
                                <div className="p-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 font-fraunces font-bold text-[#1a1c24]/80">Santhiya Ravichandran</div>
                             </div>
                             <div className="space-y-2">
                                <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20 px-6">Email Contact</label>
                                <div className="p-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 font-outfit font-bold text-[#1a1c24]/60">santhiya@example.com</div>
                             </div>
                          </div>
                          <div className="space-y-4 pt-4">
                             <div className="p-8 rounded-[2.5rem] bg-[#ff4d6d]/5 border border-[#ff4d6d]/10 space-y-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">👑</div>
                                <h4 className="font-fraunces font-bold text-[#1a1c24]">Loyalty Status</h4>
                                <p className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d]">Elite Member since 2024</p>
                                <p className="text-xs font-outfit text-[#1a1c24]/40 italic">You are only 240 pts away from a free custom cake.</p>
                             </div>
                          </div>
                       </div>
                       <button className="px-10 py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl">Edit Private Profile</button>
                    </div>
                  )}
                  
                  {/* Other tabs can be empty skeletons or similar placeholders */}
                  {activeTab !== 'orders' && activeTab !== 'profile' && (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#1a1c24]/20">
                       <div className="w-16 h-16 border-4 border-current border-dashed rounded-full animate-spin-slow mb-4 opacity-10" />
                       <h3 className="text-2xl font-fraunces font-bold">In Development.</h3>
                       <p className="font-outfit text-sm">We are handcrafting this part of your atelier.</p>
                    </div>
                  )}
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#fbf9f6] border-t border-[#1a1c24]/5 text-center">
        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic — Member Atelier</p>
      </footer>
    </main>
  );
}
