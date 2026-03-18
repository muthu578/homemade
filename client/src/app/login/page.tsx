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
    <main className="min-h-screen bg-[#fbf9f6] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bfa37e]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-[480px] relative z-10">
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
            <h1 className="text-4xl font-fraunces font-black text-[#1a1c24] pt-4">Welcome Back.</h1>
            <p className="text-sm font-outfit text-[#1a1c24]/40">Sign in to your artisan account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 bg-red-50 text-[#ff4d6d] rounded-2xl text-[10px] font-outfit font-black uppercase tracking-widest text-center"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 block px-4">Identifier</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20" />
                <input 
                  type="text" 
                  required
                  placeholder="admin or email"
                  className="w-full pl-14 pr-6 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all uppercase"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 block">Password</label>
                <Link href="#" className="text-[9px] font-outfit font-black uppercase tracking-[0.2em] text-[#ff4d6d]/60 hover:text-[#ff4d6d] transition-colors">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1c24]/20" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-5 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all"
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

            <button 
              type="submit" 
              disabled={loading}
              className={`group w-full py-5 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${loading ? 'bg-black/20 cursor-not-allowed transform-none' : 'bg-[#1a1c24] hover:scale-[1.02] active:scale-95'}`}
            >
              {loading ? 'Authenticating...' : <><LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Enter the Palace</>}
            </button>
          </form>

          <div className="mt-12 text-center space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#1a1c24]/5"></div></div>
              <span className="relative bg-white px-4 text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30">or continue with</span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 border border-[#1a1c24]/10 rounded-full text-xs font-outfit font-bold text-[#1a1c24]/40 hover:bg-[#1a1c24]/5 transition-all">Google</button>
              <button className="flex-1 py-4 border border-[#1a1c24]/10 rounded-full text-xs font-outfit font-bold text-[#1a1c24]/40 hover:bg-[#1a1c24]/5 transition-all">Apple</button>
            </div>

            <p className="text-sm font-outfit text-[#1a1c24]/40">
              New to the family? {' '}
              <Link href="/register" className="font-bold text-[#ff4d6d] hover:underline decoration-2 underline-offset-4">Create Account</Link>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-12 text-center text-[9px] font-outfit text-[#1a1c24]/20 uppercase tracking-[0.5em]">
          © 2026 PRANAVIKA'S Sweet & Chic
        </p>
      </div>
    </main>
  );
}
