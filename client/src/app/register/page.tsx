"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, UserPlus, LogIn } from 'lucide-react';
import { Logo } from '../../components/ui/Logo';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic here
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bfa37e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-[520px] relative z-10 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-12">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5"
        >
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block">
              <Logo />
            </div>
            <h1 className="text-4xl font-fraunces font-black text-[#1a1c24] pt-4 leading-tight">Join the <br /><span className="italic font-normal text-[#bfa37e]">Artisan Family.</span></h1>
            <p className="text-sm font-outfit text-[#1a1c24]/40">Exclusive access to bespoke fashion & bakery</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 block px-4">Full Name</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20" />
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full pl-14 pr-6 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all font-medium"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 block px-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20" />
                <input 
                  type="email" 
                  required
                  placeholder="name@email.com"
                  className="w-full pl-14 pr-6 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all font-medium"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 block px-4">Create Password</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all font-medium"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1a1c24]/20 hover:text-[#1a1c24]/40"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-4 px-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 accent-[#ff4d6d]" />
                <span className="text-[10px] font-outfit text-[#1a1c24]/40 leading-relaxed group-hover:text-[#1a1c24]/60 transition-colors">
                  I agree to the <Link href="#" className="font-bold text-[#ff4d6d]">Terms of Service</Link> and <Link href="#" className="font-bold text-[#ff4d6d]">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            <button type="submit" className="group w-full py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3 mt-4">
              Create Account <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm font-outfit text-[#1a1c24]/40">
              Already have an account? {' '}
              <Link href="/login" className="font-bold text-[#ff4d6d] hover:underline decoration-2 underline-offset-4">Sign In</Link>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-12 text-center text-[9px] font-outfit text-[#1a1c24]/20 uppercase tracking-[0.5em]">
          Handcrafted by PRANAVIKA'S • © 2026
        </p>
      </div>
    </main>
  );
}
