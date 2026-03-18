"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Shield, Bell, Heart, Package, LogOut, Camera, Edit2 } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Admin Artisan',
    email: 'admin@pranavika.com',
    phone: '+91 98765 43210',
    address: '123, Artisan Street, Chennai, TN',
    memberSince: 'March 2026'
  });

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar / Profile Card */}
            <div className="md:w-1/3 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[3rem] p-10 shadow-soft border border-[#1a1c24]/5 text-center space-y-6"
              >
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ff4d6d]/10 bg-[#fbf9f6] flex items-center justify-center">
                    <User className="w-16 h-16 text-[#1a1c24]/10" />
                  </div>
                  <button className="absolute bottom-1 right-1 w-10 h-10 bg-[#1a1c24] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff4d6d] transition-all border-4 border-white">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-1">
                  <h2 className="text-2xl font-fraunces font-black">{profile.name}</h2>
                  <p className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Artisan Tier Member</p>
                </div>

                <div className="pt-6 border-t border-[#1a1c24]/5 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xl font-fraunces font-black text-[#ff4d6d]">12</p>
                    <p className="text-[8px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Orders</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-fraunces font-black text-[#bfa37e]">850</p>
                    <p className="text-[8px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">Points</p>
                  </div>
                </div>
              </motion.div>

               <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft border border-[#1a1c24]/5">
                 {[
                   { icon: Package, label: 'Order History', href: '/orders' },
                   { icon: Heart, label: 'My Wishlist', href: '/wishlist' },
                   { icon: Bell, label: 'Notifications', count: 3 },
                   { icon: Shield, label: 'Account Security' },
                   { icon: LogOut, label: 'Sign Out', danger: true, action: () => window.location.href = '/login' },
                 ].map((item, i) => (
                   <button 
                     key={i} 
                     onClick={() => item.action ? item.action() : item.href && (window.location.href = item.href)}
                     className={`w-full px-8 py-5 flex items-center justify-between hover:bg-[#fbf9f6] transition-all border-b border-[#1a1c24]/5 last:border-0 ${item.danger ? 'text-[#ff4d6d]' : 'text-[#1a1c24]/60'}`}
                   >
                      <div className="flex items-center gap-4">
                        <item.icon className="w-4 h-4" />
                        <span className="text-[10px] font-outfit font-black uppercase tracking-widest">{item.label}</span>
                      </div>
                      {item.count && <span className="w-5 h-5 bg-[#ff4d6d] text-white rounded-full flex items-center justify-center text-[10px] font-black">{item.count}</span>}
                   </button>
                 ))}
              </div>
            </div>

            {/* Main Content Side */}
            <div className="flex-1 space-y-8">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-white rounded-[3rem] p-12 shadow-soft border border-[#1a1c24]/5 space-y-12"
              >
                <div className="flex justify-between items-center">
                   <h3 className="text-3xl font-fraunces font-black leading-tight">My Profile <span className="italic font-normal text-[#bfa37e]">Atelier.</span></h3>
                   <button 
                     onClick={() => setIsEditing(!isEditing)}
                     className="px-6 py-3 border border-[#1a1c24]/10 rounded-full text-[10px] font-outfit font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1a1c24] hover:text-white transition-all shadow-sm"
                   >
                     {isEditing ? 'Save Changes' : <><Edit2 className="w-3 h-3" /> Edit Profile</>}
                   </button>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   {[
                     { label: 'Full Name', value: profile.name, icon: User },
                     { label: 'Email Address', value: profile.email, icon: Mail },
                     { label: 'Phone Number', value: profile.phone, icon: Phone },
                     { label: 'Shipping Address', value: profile.address, icon: MapPin },
                   ].map((field, i) => (
                     <div key={i} className="space-y-3">
                        <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 px-2">{field.label}</label>
                        <div className="relative">
                           <field.icon className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/10" />
                           <input 
                              type="text" 
                              readOnly={!isEditing}
                              defaultValue={field.value}
                              className={`w-full pl-14 pr-6 py-5 rounded-[2rem] text-sm font-outfit transition-all ${isEditing ? 'bg-[#fbf9f6] border border-[#ff4d6d]/20 outline-none ring-2 ring-[#ff4d6d]/5' : 'bg-transparent border border-transparent cursor-default'}`}
                           />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-10 border-t border-[#1a1c24]/5">
                   <div className="p-8 bg-[#1a1c24] rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="space-y-2 text-center md:text-left">
                         <h4 className="text-xl font-fraunces font-bold text-white tracking-wide">Artisan Rewards</h4>
                         <p className="text-[10px] font-outfit text-white/30 uppercase tracking-[0.2em]">Next Reward: Free Signature Cake at 1000 points</p>
                      </div>
                      <div className="w-full md:w-48 h-3 bg-white/5 rounded-full overflow-hidden">
                         <div className="w-[85%] h-full bg-[#ff4d6d] shadow-[0_0_20px_rgba(255,77,109,0.5)]" />
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Preferences */}
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-[#1a1c24]/5 space-y-6">
                    <h5 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Notifications</h5>
                    <div className="space-y-4">
                       {['Order Updates', 'New Collections', 'Exclusive Invites'].map((pref, i) => (
                         <div key={i} className="flex justify-between items-center">
                            <span className="text-xs font-outfit font-bold">{pref}</span>
                            <div className="w-10 h-6 bg-[#ff4d6d] rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-[#1a1c24]/5 space-y-6">
                    <h5 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">Security</h5>
                    <div className="space-y-4 text-center md:text-left">
                       <p className="text-xs font-outfit text-[#1a1c24]/40 leading-relaxed italic">Your account is secured with artisan-grade encryption.</p>
                       <button className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#ff4d6d] border-b border-[#ff4d6d] pb-1">Reset Password</button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
