"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

const milestones = [
  { year: '2018', title: 'A Kitchen & A Dream', desc: `Pranavika started baking from her home kitchen, sharing cakes with neighbours and family. What began as a passion quickly became everyone's favourite indulgence.` },
  { year: '2020', title: 'The Boutique Is Born', desc: `Combining a love for fashion and artisan craftsmanship, the first boutique collection launched — handcrafted ethnic wear inspired by Indian heritage.` },
  { year: '2022', title: 'Going Online', desc: `PRANAVIKA'S Sweet & Chic went digital, bringing the artisan bakery and boutique experience to customers across Tamil Nadu and beyond.` },
  { year: '2024', title: 'Homemade Line Launches', desc: `Expanding into traditional homemade delicacies — pickles, laddoos, snacks and hampers — rooted in grandma's secret recipes.` },
  { year: '2026', title: 'Growing Together', desc: `12,000+ happy customers and counting. The journey continues with new collections, custom orders, and a deep commitment to artisan quality.` },
];

const values = [
  { emoji: '🎨', title: 'Artistry First', desc: 'Every product — from a silk saree to a fondant cake — is treated as a work of art.' },
  { emoji: '🌿', title: 'Pure & Natural', desc: 'We use only the finest, freshest ingredients. No shortcuts. No compromises.' },
  { emoji: '🤝', title: 'Community Roots', desc: 'We support local artisans, weavers, and farmers to keep traditional crafts alive.' },
  { emoji: '💛', title: 'Made with Love', desc: 'Every creation carries the warmth and care of a home kitchen and atelier.' },
];

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(220,176,175,0.2),transparent_60%)]" />
        <div className="max-w-[1200px] mx-auto px-10 text-center relative z-10 space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight mt-6">
              From a Kitchen<br /><span className="italic font-normal text-[#bfa37e]">to a Craft.</span>
            </h1>
            <p className="mt-10 text-xl text-[#1a1c24]/50 font-outfit leading-relaxed max-w-2xl mx-auto">
              PRANAVIKA'S Sweet & Chic is more than a brand — it's a celebration of artistry, tradition, and the joy of creating something beautiful with your hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER FEATURE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="relative h-[560px]">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                <img src="https://images.pexels.com/photos/3814892/pexels-photo-3814892.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Founder" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-10">
                <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#bfa37e]">Founded by</p>
                <p className="text-2xl font-fraunces font-bold text-[#1a1c24] mt-1">Pranavika</p>
                <p className="text-xs font-outfit italic text-[#1a1c24]/50">Baker · Designer · Dreamer</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="space-y-8">
              <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Meet the Founder</span>
              <h2 className="text-5xl font-fraunces font-black text-[#1a1c24] leading-tight">
                A Passion for <span className="italic font-normal text-[#bfa37e]">Creating Beauty.</span>
              </h2>
              <div className="space-y-6 text-[#1a1c24]/55 font-outfit leading-relaxed">
                <p>Pranavika grew up surrounded by the rich aromas of her grandmother's kitchen and the vibrant colours of handloom fabrics at local markets. These two worlds — food and fashion — never felt separate to her.</p>
                <p>In 2018, she started baking celebration cakes for friends and family, and the response was overwhelming. Within two years, the idea for a boutique that combined artisan fashion with homemade baking was born — and PRANAVIKA'S Sweet & Chic came to life.</p>
                <p>Today, every cake baked and every outfit crafted carries the same philosophy: <em>create with love, deliver with pride, and never compromise on quality.</em></p>
              </div>
              <Link href="/contact" className="group inline-flex items-center gap-4 px-10 py-4 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl">
                Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 bg-[#fbf9f6]">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-24 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Our Journey</span>
            <h2 className="text-5xl font-fraunces font-black text-[#1a1c24]">The Milestones <span className="italic font-normal">That Made Us.</span></h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1a1c24]/5 hidden lg:block" />
            <div className="space-y-16">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                  {/* Content */}
                  <div className={`p-10 rounded-[2.5rem] bg-white shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5 space-y-4 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                    <span className="text-4xl font-fraunces font-black text-[#ff4d6d]/30">{m.year}</span>
                    <h3 className="text-2xl font-fraunces font-bold text-[#1a1c24]">{m.title}</h3>
                    <p className="text-[#1a1c24]/50 font-outfit leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#ff4d6d] rounded-full border-4 border-[#fbf9f6] z-10" />
                  {/* Empty space for alternating */}
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-white">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">What We Believe</span>
            <h2 className="text-5xl font-fraunces font-black text-[#1a1c24]">Our <span className="italic font-normal">Values.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 text-center space-y-5 hover:-translate-y-2 transition-transform">
                <span className="text-5xl">{v.emoji}</span>
                <h4 className="text-xl font-fraunces font-bold text-[#1a1c24]">{v.title}</h4>
                <p className="text-sm font-outfit text-[#1a1c24]/50 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#1a1c24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="max-w-3xl mx-auto px-10 text-center space-y-8 relative z-10">
          <h2 className="text-5xl font-fraunces font-black text-white">Be Part of Our <span className="italic text-[#bfa37e]">Story.</span></h2>
          <p className="text-lg text-white/40 font-outfit">Whether you're celebrating a special moment or simply treating yourself — let us create something beautiful for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/boutique" className="group inline-flex items-center gap-4 px-12 py-5 bg-[#ff4d6d] text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-2xl">
              Shop Boutique <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/bakery" className="inline-flex items-center gap-4 px-12 py-5 border border-white/10 text-white/60 rounded-full font-bold text-sm hover:border-white/30 hover:text-white transition-all">
              Order Cakes 🎂
            </Link>
          </div>
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
