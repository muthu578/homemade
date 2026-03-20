"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ChevronDown, Check, Star } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 overflow-hidden text-center bg-[#fbf9f6]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,77,109,0.12),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="space-y-6 md:space-y-10">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Gateway</span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-[#1a1c24] leading-[1.1] italic group">
              Let's Create <br className="hidden md:block" /><span className="italic font-normal text-[#bfa37e]">Something Special.</span>
            </h1>
            <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit max-w-2xl mx-auto leading-relaxed italic">
              "Custom order rituals, boutique whispers, or shared visions — we invite you to manifest your desires with us."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Contact Info Side */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-4 space-y-12 md:space-y-16 order-2 lg:order-1">
              <div className="space-y-10">
                <div className="space-y-4 text-center lg:text-left">
                   <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]/40 italic">The Sanctum</span>
                   <h3 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Reach Us</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {[
                    { Icon: Phone, label: 'Voice / WhatsApp', value: '+91 98765 43210', sub: 'Sunrays to Sunset Rituals', href: 'tel:+919876543210' },
                    { Icon: Mail, label: 'Digital Mail', value: 'hello@pranavika.in', sub: 'Manifesting in 24h', href: 'mailto:hello@pranavika.in' },
                    { Icon: MapPin, label: 'The Physical Realm', value: 'No. 02, MGR Street', sub: 'Tirunelveli, Tamil Nadu 627001', href: '#' },
                    { Icon: Clock, label: 'Celestial Hours', value: 'Mon – Sat: 9 AM – 8 PM', sub: 'Lunar Days: 10 AM – 5 PM', href: '#' },
                  ].map(({ Icon, label, value, sub, href }) => (
                    <a key={label} href={href} className="group flex items-start gap-6 p-8 rounded-[2.5rem] bg-white border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-500">
                      <div className="w-14 h-14 rounded-[1.5rem] bg-[#ff4d6d]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff4d6d] group-hover:text-white transition-all transform group-hover:rotate-12 group-hover:scale-110 shadow-sm">
                        <Icon className="w-6 h-6 text-[#ff4d6d] group-hover:text-white transition-all" />
                      </div>
                      <div className="min-w-0 space-y-1.5">
                        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{label}</p>
                        <p className="font-fraunces font-black text-lg text-[#1a1c24] leading-tight group-hover:text-[#ff4d6d] transition-colors italic">{value}</p>
                        <p className="text-[10px] md:text-xs font-outfit font-medium text-[#1a1c24]/30 italic">{sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-6 text-center lg:text-left">
                <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 italic">Social Rituals</h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {[
                    { Icon: Instagram, label: 'Instagram', href: '#' },
                    { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
                  ].map(({ Icon, label, href }) => (
                    <a key={label} href={href} className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#1a1c24]/10 text-[10px] font-outfit font-black uppercase tracking-[0.2em] text-[#1a1c24]/40 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 italic bg-white">
                      <Icon className="w-4 h-4" /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Main */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 bg-white rounded-[4rem] md:rounded-[5rem] p-8 md:p-20 shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5 order-1 lg:order-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff4d6d]/5 rounded-full blur-[100px] -z-0" />
              
              {submitted ? (
                <AnimatePresence>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-10 py-16 md:py-32 relative z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#ff4d6d]/10 rounded-full flex items-center justify-center text-3xl md:text-5xl animate-bounce">✨</div>
                    <div className="space-y-4">
                       <h3 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Message Received!</h3>
                       <p className="text-sm md:text-xl text-[#1a1c24]/40 font-outfit max-w-sm mx-auto italic">"The masters have heard your vision. We shall return within a lunar cycle (24h) to finalize the manifestation."</p>
                    </div>
                    <button onClick={() => setSubmitted(false)} className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl active:scale-95">
                      Send Another Ritual
                    </button>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="relative z-10">
                  <div className="mb-12 md:mb-16 space-y-4 text-center md:text-left">
                     <span className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d]/60 italic">The Form of Creation</span>
                     <h3 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] italic">Whisper Your Vision</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                      {(['name', 'email'] as const).map(field => (
                        <div key={field} className="space-y-3 md:space-y-4">
                          <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 mb-1 ml-4 block italic">{field}</label>
                          <input
                            name={field} type={field === 'email' ? 'email' : 'text'}
                            value={form[field]} onChange={handleChange} required
                            placeholder={field === 'name' ? 'The Visionary' : 'your@ritual.com'}
                            className="w-full px-8 md:px-10 py-6 md:py-8 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit font-medium text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all shadow-inner"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 mb-1 ml-4 block italic">Phone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-8 md:px-10 py-6 md:py-8 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit font-medium text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all shadow-inner"
                        />
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 mb-1 ml-4 block italic">Enquiry Ritual</label>
                        <div className="relative">
                          <select name="type" value={form.type} onChange={handleChange}
                            className="w-full px-8 md:px-10 py-6 md:py-8 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit font-medium text-[#1a1c24] focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all appearance-none cursor-pointer pr-16 shadow-inner italic">
                            {['General Inquiry', 'Custom Cake Ritual', 'Boutique Request', 'Gift Hamper Vision', 'Wholesale Alliance', 'Other Artifacts'].map(o => (
                              <option key={o}>{o}</option>
                            ))}
                          </select>
                          <div className="absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none">
                             <ChevronDown className="w-5 h-5 text-[#ff4d6d]/60" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <label className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 mb-1 ml-4 block italic">The Manifestation</label>
                      <textarea name="message" rows={6} value={form.message} onChange={handleChange} required
                        placeholder="Detail your requirements — sacred dates, design visions, union rituals, or any other whispered desires..."
                        className="w-full px-8 md:px-10 py-8 md:py-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 text-sm md:text-base font-outfit font-medium text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 focus:bg-white transition-all resize-none shadow-inner italic"
                      />
                    </div>
                    <button type="submit" className="group relative w-full py-7 md:py-10 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-[1.02] transition-all shadow-[0_40px_100px_rgba(0,0,0,0.2)] active:scale-95 flex items-center justify-center gap-6 overflow-hidden">
                       <div className="absolute inset-0 bg-[#ff4d6d]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                       <span className="relative z-10 flex items-center justify-center gap-6">Launch Message <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="relative h-[400px] md:h-[600px] bg-[#1a1c24] mx-6 md:mx-10 mb-16 rounded-[4rem] md:rounded-[6rem] overflow-hidden group">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24] via-transparent to-[#1a1c24]/20" />
        
        {/* Abstract Map Decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <div className="w-[120%] h-[120%] border-[2px] border-white/20 rounded-full animate-pulse-slow" />
           <div className="absolute w-[80%] h-[80%] border-[1px] border-white/10 rounded-full animate-spin-slow" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-10 px-6 z-10">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="w-20 h-20 md:w-28 md:h-28 rounded-[2.5rem] bg-[#ff4d6d]/20 border border-white/10 flex items-center justify-center backdrop-blur-2xl mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
            <MapPin className="w-10 h-10 text-[#ff4d6d]" />
          </motion.div>
          <div className="space-y-4">
             <h3 className="font-fraunces font-black text-white text-3xl md:text-5xl italic leading-tight">No. 02, MGR Street <br className="hidden md:block" /><span className="text-[#bfa37e] font-normal">Tirunelveli Sanctum.</span></h3>
             <p className="font-outfit text-white/40 text-sm md:text-xl uppercase tracking-[0.4em] italic">Tamil Nadu 627001</p>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="group relative px-12 md:px-20 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full text-xs md:text-sm font-black uppercase tracking-[0.5em] hover:scale-110 transition-all shadow-[0_30px_80px_rgba(255,77,109,0.4)] active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center justify-center gap-6 italic">Open in Ritual Maps <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></span>
          </a>
        </div>
      </section>

      <footer className="py-12 md:py-20 bg-[#fbf9f6] border-t border-[#1a1c24]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 relative z-10">
          <p className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#1a1c24]/15 italic text-center md:text-left leading-relaxed">
            © 2026 PRANAVIKA'S · Bespoke Creations · All Rituals Reserved
          </p>
          <Link href="/" className="group flex items-center gap-6 text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all transform hover:-translate-x-4 italic">
            <ArrowRight className="w-6 h-6 rotate-180 group-hover:scale-125 transition-transform" /> 
            Ascend Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
