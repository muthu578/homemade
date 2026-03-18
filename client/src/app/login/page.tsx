"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, UserPlus, LogIn } from 'lucide-react';
import { Logo } from '../../components/ui/Logo';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if ((formData.email === 'admin' || formData.email === 'admin@pranavika.com') && formData.password === 'admin123') {
        window.location.href = '/admin/dashboard';
      } else {
        setError('Invalid artisan credentials.');
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] flex flex-col items-center justify-center p-4 md:p-6 lg:p-10 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ff4d6d]/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[60px] md:blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="w-full max-w-[500px] relative z-10 py-6">
        <Link href="/" className="inline-flex items-center gap-3 text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 hover:text-[#ff4d6d] transition-colors mb-8 md:mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-[#1a1c24]/5 relative overflow-hidden"
        >
          {/* Subtle noise pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
          
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-16 relative z-10">
            <div className="inline-block transform scale-90 md:scale-110">
              <Logo />
            </div>
            <div className="space-y-2">
               <h1 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Welcome Back.</h1>
               <p className="text-sm md:text-base font-outfit text-[#1a1c24]/30 max-w-[280px] mx-auto">Sign in to your artisan account to savor your personal collection.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 bg-red-50 text-[#ff4d6d] rounded-2xl text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest text-center shadow-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 block px-4">Artisan ID</label>
              <div className="relative group/input">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20 group-focus-within/input:text-[#ff4d6d] transition-colors" />
                <input 
                  type="text" 
                  required
                  placeholder="name@artisan.com"
                  className="w-full pl-14 pr-6 py-4.5 md:py-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all shadow-inner"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30 block">Secret Key</label>
                <Link href="#" className="text-[10px] font-outfit font-bold uppercase tracking-[0.2em] text-[#ff4d6d]/40 hover:text-[#ff4d6d] transition-colors">Recover</Link>
              </div>
              <div className="relative group/input">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20 group-focus-within/input:text-[#ff4d6d] transition-colors" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="••••••••"
                  className="w-full pl-14 pr-16 py-4.5 md:py-6 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all shadow-inner"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`group w-full py-5 md:py-7 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center justify-center gap-4 ${loading ? 'bg-black/20 cursor-not-allowed scale-[0.98]' : 'bg-[#1a1c24] hover:bg-[#ff4d6d] hover:scale-[1.02] active:scale-[0.98] shadow-[#1a1c24]/20'}`}
            >
              {loading ? 'Authenticating...' : <><LogIn className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" /> Enter the Palace</>}
            </button>
          </form>

          <div className="mt-12 md:mt-16 text-center space-y-8 md:space-y-10 relative z-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center px-4"><div className="w-full border-t border-[#1a1c24]/5"></div></div>
              <span className="relative bg-white px-6 text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 italic">Or artisan sign-in with</span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4.5 border border-[#1a1c24]/10 rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 hover:bg-[#1a1c24] hover:text-white hover:border-[#1a1c24] transition-all duration-300">Google</button>
              <button className="flex-1 py-4.5 border border-[#1a1c24]/10 rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30 hover:bg-[#1a1c24] hover:text-white hover:border-[#1a1c24] transition-all duration-300">Apple</button>
            </div>

            <p className="text-sm md:text-base font-outfit text-[#1a1c24]/40">
              New to the palace? {' '}
              <Link href="/register" className="font-bold text-[#ff4d6d] hover:underline decoration-2 underline-offset-4 decoration-[#ff4d6d]/30 transition-all">Request Entry</Link>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-10 md:mt-16 text-center text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/10 leading-relaxed">
          © 2026 PRANAVIKA'S Sweet & Chic · Artisan Collective
        </p>
      </div>
    </main>
  );
}
