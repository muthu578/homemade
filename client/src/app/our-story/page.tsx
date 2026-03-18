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
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(220,176,175,0.15),transparent_70%)]">
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center relative z-10 space-y-8 md:space-y-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="space-y-6 md:space-y-8">
            <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Our Sacred Origin</span>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-fraunces font-black text-[#1a1c24] leading-[1.05] tracking-tight italic">
              From a Kitchen<br /><span className="italic font-normal text-[#bfa37e]"> to a Craft.</span>
            </h1>
            <p className="text-base md:text-2xl text-[#1a1c24]/30 font-outfit leading-relaxed max-w-3xl mx-auto italic">
              "PRANAVIKA'S Sweet & Chic is more than a brand — it's a celebration of ancestral artistry, tradition, and the joy of creating something pure with your bare hands."
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER FEATURE */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.9 }}
              className="relative h-[450px] md:h-[700px] group order-2 lg:order-1"
            >
              <div className="absolute inset-0 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-[#1a1c24]/5 bg-[#f0ede8]">
                <img src="https://images.pexels.com/photos/3814892/pexels-photo-3814892.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Founder" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-2 md:bottom-10 md:-right-10 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] px-8 md:px-12 py-6 md:py-8 shadow-2xl z-10 border border-[#bfa37e]/10 animate-float">
                <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d] italic">Founded by</p>
                <p className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] mt-2 italic">Pranavika</p>
                <p className="text-[11px] md:text-sm font-outfit italic text-[#1a1c24]/30 font-medium mt-1">"Artistry Manifested"</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.9 }} 
              className="space-y-8 md:space-y-12 text-center lg:text-left order-1 lg:order-2"
            >
              <div className="space-y-4">
                 <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Creator</span>
                 <h2 className="text-4xl md:text-6xl lg:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight italic">
                   A Passion for <br className="hidden lg:block" /><span className="italic font-normal text-[#bfa37e]">Sacred Beauty.</span>
                 </h2>
              </div>
              <div className="space-y-6 md:space-y-8 text-[#1a1c24]/40 font-outfit leading-relaxed text-sm md:text-lg max-w-2xl mx-auto lg:mx-0 italic font-medium">
                <p>"Pranavika grew up enveloped in the ancient aromas of her grandmother's kitchen and the vibrant, woven colours of handloom fabrics at local artisan markets. These two realms — the sacredness of food and the art of fashion — never felt separate to her soul."</p>
                <p>"In 2018, she manifested celebration cakes for her inner circle, and the resonance was overwhelming. Within two planetary cycles, the vision for a boutique that braided artisan fashion with homemade culinary artistry was born — and PRANAVIKA'S Sweet & Chic descended into reality."</p>
                <p className="text-[#1a1c24] font-black tracking-wide">"Create with devotion, deliver with grace, and never compromise on the purity of the craft."</p>
              </div>
              <div className="pt-6">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:bg-[#ff4d6d] hover:scale-105 transition-all shadow-2xl active:scale-95 w-full sm:w-auto italic">
                   Consult the Artisan <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-48 bg-[#fbf9f6] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20 md:mb-32 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">The Evolution</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-[#1a1c24] leading-tight italic">The Milestones <br className="sm:hidden" /><span className="italic font-normal text-[#bfa37e]">That Made Us.</span></h2>
          </div>
          
          <div className="relative">
            {/* Vertical line - hidden on very small screens, responsive width */}
            <div className="absolute left-[24px] md:left-[40px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1a1c24]/10 to-transparent" />
            
            <div className="space-y-16 md:space-y-24 lg:space-y-32 relative z-10">
              {milestones.map((m, i) => (
                <motion.div key={i} 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Visual Connector Dot */}
                  <div className="absolute left-[24px] md:left-[40px] lg:left-1/2 top-8 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#fbf9f6] rounded-full border-[10px] border-[#ff4d6d]/20 flex items-center justify-center z-10">
                     <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ff4d6d] rounded-full" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 pl-16 md:pl-24 lg:pl-0 ${i % 2 !== 0 ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'}`}>
                     <div className="p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 space-y-6 md:space-y-8 group hover:shadow-[0_60px_120px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-700">
                       <div className={`flex flex-col lg:flex-row lg:items-end gap-3 md:gap-6 ${i % 2 !== 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <span className="text-6xl md:text-[100px] font-fraunces font-black text-[#ff4d6d]/5 group-hover:text-[#ff4d6d]/10 transition-colors leading-none italic">{m.year}</span>
                          <h3 className="text-2xl md:text-4xl font-fraunces font-black text-[#1a1c24] leading-tight pb-2 italic">{m.title}</h3>
                       </div>
                       <p className="text-[11px] md:text-sm text-[#1a1c24]/30 font-outfit leading-relaxed italic font-medium">" {m.desc} "</p>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-48 bg-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#bfa37e]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-20 md:mb-32 space-y-6">
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">What We Breathe</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-fraunces font-black text-[#1a1c24] italic">Our Sacred <span className="italic font-normal text-[#bfa37e]">Values.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {values.map((v, i) => (
              <motion.div key={i} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 md:p-14 rounded-[3.5rem] bg-[#fbf9f6] border border-[#1a1c24]/5 text-center space-y-8 hover:-translate-y-4 hover:bg-white hover:border-[#ff4d6d]/20 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 group active:scale-95"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2.5rem] md:rounded-[3rem] mx-auto flex items-center justify-center text-6xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">
                  {v.emoji}
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-fraunces font-black text-[#1a1c24] italic">{v.title}</h4>
                  <p className="text-[11px] md:text-xs font-outfit text-[#1a1c24]/30 leading-relaxed italic font-medium">" {v.desc} "</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-48 bg-[#1a1c24] relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff4d6d]/10 rounded-full blur-[150px] md:blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bfa37e]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center space-y-12 md:space-y-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic mb-6 block">The Next Chapter</span>
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-fraunces font-black text-white leading-tight italic">
              Be Part of Our <span className="italic font-normal text-[#bfa37e]">Scroll.</span>
            </h2>
          </motion.div>
          
          <p className="text-sm md:text-2xl text-white/30 font-outfit max-w-3xl mx-auto leading-relaxed italic">
            "Whether you're celebrating a celestial moment or simply breathing in the beauty — let us weave a piece of art for your soul."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center pt-8">
            <Link href="/boutique" className="group relative inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#ff4d6d] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-110 active:scale-95 transition-all shadow-2xl italic overflow-hidden">
               <div className="absolute inset-0 bg-[#1a1c24]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 flex items-center justify-center gap-4 text-center">Manifest Boutique <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
            </Link>
            <Link href="/bakery" className="inline-flex items-center justify-center gap-6 px-12 md:px-16 py-6 md:py-8 border-2 border-white/5 bg-white/5 text-white/50 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:bg-white/10 hover:text-white hover:scale-105 transition-all active:scale-95 italic">
              Explore the Bakery 🎂
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Mini */}
      <footer className="py-12 md:py-20 bg-[#fbf9f6] border-t border-[#1a1c24]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.5em] text-[#1a1c24]/20 leading-loose italic">
              © 2026 PRANAVIKA'S · Sweet & Chic · Artistry Manifested
            </p>
          </div>
          <Link href="/" className="group flex items-center gap-4 text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-all italic">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-2 transition-transform" /> Back to Home
          </Link>
        </div>
      </footer>

    </main>
  );
}
