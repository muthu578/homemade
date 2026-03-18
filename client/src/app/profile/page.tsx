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

      <section className="pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16">
            {/* Sidebar / Profile Card */}
            <div className="lg:w-1/3 xl:w-1/4 space-y-8 md:space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 text-center space-y-6 md:space-y-8"
              >
                <div className="relative inline-block">
                  <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-[6px] md:border-8 border-[#ff4d6d]/5 bg-[#fbf9f6] flex items-center justify-center shadow-inner">
                    <User className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1a1c24]/10" />
                  </div>
                  <button className="absolute bottom-1 right-1 w-12 h-12 bg-[#1a1c24] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#ff4d6d] hover:scale-105 active:scale-95 transition-all border-4 border-white">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h2 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic">{profile.name}</h2>
                  <p className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/30">Artisan Tier Member</p>
                </div>

                <div className="pt-8 md:pt-10 border-t-2 border-[#1a1c24]/5 grid grid-cols-2 gap-4">
                  <div className="text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-fraunces font-black text-[#ff4d6d] italic leading-tight">12</p>
                    <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24]/30 group-hover:text-[#ff4d6d] transition-colors mt-1 md:mt-2">Orders</p>
                  </div>
                  <div className="text-center group cursor-pointer hover:-translate-y-1 transition-transform">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-fraunces font-black text-[#bfa37e] italic leading-tight">850</p>
                    <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1a1c24]/30 group-hover:text-[#bfa37e] transition-colors mt-1 md:mt-2">Points</p>
                  </div>
                </div>
              </motion.div>

               <div className="bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5">
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
                     className={`w-full px-8 md:px-10 py-6 md:py-8 flex items-center justify-between hover:bg-[#fbf9f6] transition-all border-b border-[#1a1c24]/5 last:border-0 group ${item.danger ? 'text-[#ff4d6d]' : 'text-[#1a1c24]/60 hover:text-[#1a1c24]'}`}
                   >
                      <div className="flex items-center gap-6">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{item.label}</span>
                      </div>
                      {item.count && <span className="w-6 h-6 md:w-8 md:h-8 bg-[#ff4d6d] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-black shadow-md">{item.count}</span>}
                   </button>
                 ))}
              </div>
            </div>

            {/* Main Content Side */}
            <div className="flex-1 space-y-10 md:space-y-12">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 space-y-12 md:space-y-16"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 md:gap-8 border-b-2 sm:border-b-0 border-[#1a1c24]/5 pb-6 sm:pb-0">
                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-fraunces font-black leading-tight italic">My Profile <br className="hidden md:block lg:hidden" /><span className="italic font-normal text-[#bfa37e]">Atelier.</span></h3>
                   <button 
                     onClick={() => setIsEditing(!isEditing)}
                     className={`w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border-2 rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all active:scale-95 italic shadow-sm hover:shadow-xl ${isEditing ? 'border-[#ff4d6d] bg-[#ff4d6d] text-white hover:bg-[#e63c5a]' : 'border-[#1a1c24]/10 bg-white text-[#1a1c24] hover:bg-[#1a1c24] hover:border-[#1a1c24] hover:text-white'}`}
                   >
                     {isEditing ? 'Save Changes' : <><Edit2 className="w-4 h-4 md:w-5 md:h-5" /> Edit Profile</>}
                   </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                   {[
                     { label: 'Full Name', value: profile.name, icon: User },
                     { label: 'Email Address', value: profile.email, icon: Mail },
                     { label: 'Phone Number', value: profile.phone, icon: Phone },
                     { label: 'Shipping Address', value: profile.address, icon: MapPin },
                   ].map((field, i) => (
                     <div key={i} className="space-y-4">
                        <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/40 px-6 block italic">{field.label}</label>
                        <div className="relative group">
                           <field.icon className={`absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 transition-colors ${isEditing ? 'text-[#ff4d6d]' : 'text-[#1a1c24]/20 group-hover:text-[#1a1c24]/40'}`} />
                           <input 
                              type="text" 
                              readOnly={!isEditing}
                              defaultValue={field.value}
                              className={`w-full pl-16 md:pl-20 pr-6 md:pr-10 py-5 md:py-6 rounded-full text-sm md:text-base lg:text-lg font-outfit font-medium transition-all ${isEditing ? 'bg-[#fbf9f6] border border-[#ff4d6d]/30 outline-none focus:bg-white focus:shadow-[0_20px_40px_rgba(255,77,109,0.05)] text-[#1a1c24]' : 'bg-transparent border-2 border-[#1a1c24]/5 text-[#1a1c24]/60 cursor-default hover:bg-[#fbf9f6]'}`}
                           />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-10 md:pt-14 border-t-2 border-[#1a1c24]/5">
                   <div className="p-8 md:p-12 lg:p-14 bg-[#1a1c24] rounded-[3rem] md:rounded-[4rem] flex flex-col xl:flex-row items-center justify-between gap-10 md:gap-12 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-[#ff4d6d]/10 rounded-full blur-[60px] md:blur-[80px]" />
                      <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-[#bfa37e]/10 rounded-full blur-[50px] md:blur-[70px]" />
                      
                      <div className="space-y-4 text-center xl:text-left relative z-10 w-full xl:w-auto">
                         <h4 className="text-2xl md:text-4xl font-fraunces font-black text-white italic">Artisan <span className="text-[#bfa37e] font-normal italic">Rewards.</span></h4>
                         <p className="text-[10px] md:text-[11px] font-outfit text-white/50 uppercase tracking-[0.3em] md:tracking-[0.4em] leading-relaxed font-bold max-w-sm mx-auto xl:mx-0">Next Reward: Free Signature Cake at 1000 points</p>
                      </div>
                      <div className="w-full xl:w-[350px] relative z-10 space-y-4">
                         <div className="flex justify-between items-end px-2">
                            <span className="text-xs md:text-sm font-fraunces font-black text-[#ff4d6d] italic">850</span>
                            <span className="text-[10px] md:text-xs font-outfit font-black text-white/30 uppercase tracking-[0.3em]">1000</span>
                         </div>
                         <div className="w-full h-3 md:h-4 bg-white/10 rounded-full overflow-hidden shadow-inner">
                            <div className="w-[85%] h-full bg-[#ff4d6d] shadow-[0_0_20px_rgba(255,77,109,0.8)] relative">
                               <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Preferences */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                 <div className="bg-white rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 space-y-8 md:space-y-10 group hover:-translate-y-1 transition-transform duration-500">
                    <h5 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/20 flex items-center gap-4 italic"><span className="w-6 md:w-8 h-1 md:h-1.5 bg-[#ff4d6d]/20 rounded-full" /> Notifications</h5>
                    <div className="space-y-6 md:space-y-8">
                       {['Order Updates', 'New Collections', 'Exclusive Invites'].map((pref, i) => (
                         <div key={i} className="flex justify-between items-center group/toggle cursor-pointer">
                            <span className="text-xs md:text-sm lg:text-base font-outfit font-bold text-[#1a1c24]/60 group-hover/toggle:text-[#1a1c24] transition-colors">{pref}</span>
                            <div className="w-12 h-7 md:w-14 md:h-8 bg-[#ff4d6d] rounded-full relative shadow-inner"><div className="absolute right-1 md:right-1.5 top-1 md:top-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-md" /></div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-white rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 space-y-8 md:space-y-10 flex flex-col justify-center group hover:-translate-y-1 transition-transform duration-500">
                    <h5 className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1a1c24]/20 flex items-center gap-4 italic"><span className="w-6 md:w-8 h-1 md:h-1.5 bg-[#bfa37e]/20 rounded-full" /> Security</h5>
                    <div className="space-y-6 md:space-y-8 text-center md:text-left">
                       <p className="text-sm md:text-base lg:text-lg font-outfit text-[#1a1c24]/40 leading-relaxed italic font-medium">Your account is secured with artisan-grade encryption.</p>
                       <button className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] hover:text-[#1a1c24] border-b-2 border-[#ff4d6d]/40 hover:border-[#1a1c24] pb-2 transition-colors italic w-full md:w-auto">Reset Password</button>
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
