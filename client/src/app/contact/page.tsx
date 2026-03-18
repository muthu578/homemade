"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
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
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(255,77,109,0.08),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-10 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-6">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight">
              Let's Create <br /><span className="italic font-normal text-[#bfa37e]">Something Special.</span>
            </h1>
            <p className="text-lg text-[#1a1c24]/50 font-outfit max-w-lg mx-auto leading-relaxed">
              Custom cake orders, boutique enquiries, gift hampers, or just a hello — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
              <div>
                <h3 className="text-2xl font-fraunces font-bold text-[#1a1c24] mb-8">Reach Us</h3>
                <div className="space-y-6">
                  {[
                    { Icon: Phone, label: 'Call / WhatsApp', value: '+91 98765 43210', sub: 'Mon–Sat, 9 AM – 8 PM', href: 'tel:+919876543210' },
                    { Icon: Mail, label: 'Email Us', value: 'hello@pranavika.in', sub: 'We reply within 24h', href: 'mailto:hello@pranavika.in' },
                    { Icon: MapPin, label: 'Visit Us', value: 'No. 02, MGR Street', sub: 'Tirunelveli, Tamil Nadu 627001', href: '#' },
                    { Icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 9 AM – 8 PM', sub: 'Sunday: 10 AM – 5 PM', href: '#' },
                  ].map(({ Icon, label, value, sub, href }) => (
                    <a key={label} href={href} className="group flex items-start gap-4 p-6 rounded-[1.5rem] bg-white border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all">
                      <div className="w-11 h-11 rounded-full bg-[#ff4d6d]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff4d6d] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 text-[#ff4d6d] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e] mb-1">{label}</p>
                        <p className="font-fraunces font-bold text-[#1a1c24] leading-snug">{value}</p>
                        <p className="text-xs font-outfit text-[#1a1c24]/40 mt-0.5">{sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Social */}
              <div className="space-y-4">
                <h4 className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/30">Social Media</h4>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, label: 'Instagram', href: '#' },
                    { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
                  ].map(({ Icon, label, href }) => (
                    <a key={label} href={href} className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#1a1c24]/10 text-xs font-outfit font-bold text-[#1a1c24]/40 hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all">
                      <Icon className="w-3.5 h-3.5" /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 bg-white rounded-[3rem] p-12 shadow-[0_10px_60px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                  <span className="text-6xl">🎉</span>
                  <h3 className="text-3xl font-fraunces font-bold text-[#1a1c24]">Message Received!</h3>
                  <p className="text-[#1a1c24]/50 font-outfit max-w-sm">Thank you for reaching out. We'll get back to you within 24 hours. Can't wait to create something beautiful together!</p>
                  <button onClick={() => setSubmitted(false)} className="px-10 py-4 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-fraunces font-bold text-[#1a1c24] mb-10">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {(['name', 'email'] as const).map(field => (
                        <div key={field}>
                          <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 mb-2 block">{field}</label>
                          <input
                            name={field} type={field === 'email' ? 'email' : 'text'}
                            value={form[field]} onChange={handleChange} required
                            placeholder={field === 'name' ? 'Your Name' : 'your@email.com'}
                            className="w-full px-6 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 mb-2 block">Phone</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-6 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 mb-2 block">Enquiry Type</label>
                        <select name="type" value={form.type} onChange={handleChange}
                          className="w-full px-6 py-4 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] focus:outline-none focus:border-[#ff4d6d]/40 transition-all appearance-none cursor-pointer">
                          {['General Inquiry', 'Custom Cake Order', 'Boutique Order', 'Gift Hamper', 'Wholesale', 'Other'].map(o => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30 mb-2 block">Message</label>
                      <textarea name="message" rows={5} value={form.message} onChange={handleChange} required
                        placeholder="Tell us about your requirement — date, design ideas, occasion, or anything else!"
                        className="w-full px-6 py-4 rounded-[2rem] bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/30 focus:outline-none focus:border-[#ff4d6d]/40 transition-all resize-none"
                      />
                    </div>
                    <button type="submit" className="group w-full py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
                      Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-80 bg-[#1a1c24] relative overflow-hidden mx-10 mb-16 rounded-[2.5rem]">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 z-10">
          <MapPin className="w-8 h-8 text-[#ff4d6d]" />
          <h3 className="font-fraunces font-bold text-white text-2xl">No. 02, MGR Street</h3>
          <p className="font-outfit text-white/40">Tirunelveli, Tamil Nadu 627001</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="px-8 py-3 bg-[#ff4d6d] text-white rounded-full text-xs font-outfit font-bold uppercase tracking-widest hover:scale-105 transition-all">
            Open in Maps
          </a>
        </div>
      </section>

      <footer className="py-8 bg-[#fbf9f6] border-t border-[#1a1c24]/5">
        <div className="max-w-[1800px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic</p>
          <Link href="/" className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
