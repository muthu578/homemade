"use client";
import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, Scale } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

export default function LegalPage() {
   return (
      <main className="min-h-screen bg-[#fbf9f6] text-[#1a1c24]">
         <Navbar />

         <section className="pt-24 md:pt-40 pb-12 md:pb-24 overflow-hidden bg-[#fbf9f6] relative">
            {/* Subtle decorative ornaments */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff4d6d]/5 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#bfa37e]/5 rounded-full blur-[100px] -z-0" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
               <div className="flex flex-col lg:flex-row items-baseline justify-between gap-8 md:gap-12 mb-16 md:mb-24">
                  <div className="space-y-4 md:space-y-6 w-full text-center lg:text-left">
                     <span className="text-[10px] md:text-[12px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Governance & Integrity</span>
                     <h1 className="text-4xl md:text-6xl lg:text-8xl font-fraunces font-black leading-tight text-[#1a1c24]">Legal Center.</h1>
                     <p className="text-sm md:text-base font-outfit text-[#1a1c24]/30 max-w-xl mx-auto lg:mx-0">Our artisan standards protected by traditional values and modern compliance.</p>
                  </div>
                  <div className="flex w-full overflow-x-auto no-scrollbar lg:w-auto -mx-6 px-6 lg:mx-0 lg:px-0">
                     <div className="flex gap-3 md:gap-4 pb-2 lg:pb-0 mx-auto lg:mx-0">
                        {['Privacy', 'Terms', 'Cookies', 'Shipping'].map(item => (
                           <Link key={item} href={`#${item.toLowerCase()}`} className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#1a1c24]/5 bg-white text-[10px] md:text-xs font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40 hover:bg-[#1a1c24] hover:text-white transition-all shadow-sm active:scale-95 whitespace-nowrap">
                              {item}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  {/* Sidebar TOC - Visible on LG screens */}
                  <div className="hidden lg:block lg:col-span-3">
                     <div className="sticky top-32 space-y-10 group">
                        <div className="p-10 bg-white rounded-[3.5rem] shadow-[0_15px_60px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 space-y-8">
                           <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 italic">Navigation Code</h4>
                           <ul className="space-y-6">
                              {[
                                 { icon: Shield, label: 'Privacy Policy', id: 'privacy' },
                                 { icon: FileText, label: 'Terms of Use', id: 'terms' },
                                 { icon: Lock, label: 'Cookie Policy', id: 'cookies' },
                                 { icon: Scale, label: 'Governing Law', id: 'governing' },
                                 { icon: FileText, label: 'Shipping Policy', id: 'shipping' }
                              ].map(link => (
                                 <li key={link.id}>
                                    <a href={`#${link.id}`} className="flex items-center gap-4 text-xs font-outfit font-black uppercase tracking-widest text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors group/link px-2">
                                       <link.icon className="w-5 h-5 group-hover/link:scale-110 transition-transform text-[#1a1c24]/10 group-hover/link:text-[#ff4d6d]" />
                                       {link.label}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        {/* Status Badge */}
                        <div className="px-10 py-6 bg-[#1a1c24] rounded-full flex items-center justify-between">
                           <span className="text-[9px] font-outfit font-black uppercase tracking-widest text-white/40">Status</span>
                           <span className="text-[10px] font-outfit font-black uppercase tracking-widest text-green-400 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Compliant
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="lg:col-span-9 space-y-20 md:space-y-32 pb-24 md:pb-40">
                     {/* Privacy Policy */}
                     <section id="privacy" className="scroll-mt-32 space-y-10 group">
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ff4d6d]/5 text-[#ff4d6d] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center font-fraunces font-black text-2xl md:text-3xl italic shadow-inner group-hover:-rotate-6 transition-transform">P</div>
                           <h2 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight">Privacy Policy</h2>
                        </div>
                        <div className="space-y-8 md:space-y-12 text-sm md:text-lg font-outfit text-[#1a1c24]/60 leading-relaxed max-w-4xl">
                           <p className="italic text-lg md:text-2xl font-fraunces text-[#1a1c24]/80 leading-snug">"At PRANAVIKA'S, we value your trust. Your artisan journey with us is protected by the highest standards of digital security."</p>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 not-italic">
                              <div className="space-y-4 md:space-y-5 p-10 bg-white rounded-[3rem] shadow-sm border border-[#1a1c24]/5">
                                 <h4 className="font-fraunces font-black text-[#1a1c24] text-xl md:text-2xl italic">Data Rituals</h4>
                                 <p className="text-sm md:text-base leading-relaxed">We collect essential data to process your boutique and bakery orders. This includes name, delivery address, phone, and email for logistical purposes. No personal data is ever sold to third parties.</p>
                              </div>
                              <div className="space-y-4 md:space-y-5 p-10 bg-white rounded-[3rem] shadow-sm border border-[#1a1c24]/5">
                                 <h4 className="font-fraunces font-black text-[#1a1c24] text-xl md:text-2xl italic">Encryption Code</h4>
                                 <p className="text-sm md:text-base leading-relaxed">All financial transactions are handled through 256-bit SSL encrypted gateways. We never store your card details on our local servers, ensuring your peace of mind.</p>
                              </div>
                           </div>
                        </div>
                     </section>

                     {/* Terms of Service */}
                     <section id="terms" className="scroll-mt-32 space-y-10 group">
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 md:w-16 md:h-16 bg-[#bfa37e]/5 text-[#bfa37e] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center font-fraunces font-black text-2xl md:text-3xl italic shadow-inner group-hover:rotate-6 transition-transform">T</div>
                           <h2 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight">Terms of Use</h2>
                        </div>
                        <div className="space-y-8 text-sm md:text-lg font-outfit text-[#1a1c24]/60 leading-relaxed max-w-4xl">
                           <p className="italic text-base md:text-xl font-medium">By engaging with PRANAVIKA'S Sweet & Chic, you agree to the following artisan governance:</p>
                           <ul className="space-y-6 list-none italic">
                              {[
                                 'Boutique items are handcrafted and may have slight variations in weave and color, adding to their unique charm.',
                                 'Bakery cancellations must occur within 2 hours of ordering for a full refund as ingredients are prepared fresh.',
                                 'Homemade products are prepared in a traditional home environment that handles nuts and dairy.'
                              ].map((item, idx) => (
                                 <li key={idx} className="flex gap-4 items-start">
                                    <span className="text-[#ff4d6d] font-bold text-xl leading-none">·</span>
                                    <span className="text-sm md:text-base">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </section>

                     {/* Cookies */}
                     <section id="cookies" className="scroll-mt-32 space-y-6 md:space-y-10 group">
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1a1c24]/5 text-[#1a1c24] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center font-fraunces font-black text-2xl md:text-3xl italic shadow-inner group-hover:-rotate-12 transition-transform">C</div>
                           <h2 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight">Cookie Policy</h2>
                        </div>
                        <div className="p-10 md:p-14 bg-[#1a1c24] rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/silk.png')" }} />
                           <p className="text-base md:text-2xl font-fraunces text-white/80 leading-relaxed italic relative z-10">We use essential cookies to manage your artisan cart and account session. No third-party tracking is used without your explicit artisan consent.</p>
                        </div>
                     </section>

                     {/* Shipping & Returns */}
                     <section id="shipping" className="scroll-mt-32 space-y-12 group">
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ff4d6d]/5 text-[#ff4d6d] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center font-fraunces font-black text-2xl md:text-3xl italic shadow-inner group-hover:rotate-12 transition-transform">S</div>
                           <h2 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24] leading-tight">Shipping & Returns</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                           {[
                              { title: 'Boutique Delivery', desc: 'Designer wear and silks are shipped within 5-7 business days. We offer global shipping via authorized courier networks.' },
                              { title: 'Bakery Logistics', desc: 'Fresh bakes are delivered within 4-24 hours. Serving Chennai and Tirunelveli regions for perishables.' },
                              { title: 'Artisan Returns', desc: 'Due to handcrafted nature, we only accept returns for items damaged during transit. Bakery items are non-returnable.' },
                              { title: 'Return Window', desc: 'Damaged boutique items must be reported with proof within 48 hours of delivery for artisan review.' }
                           ].map((item, idx) => (
                              <div key={idx} className="space-y-4 md:space-y-5 p-10 bg-white rounded-[3rem] shadow-sm border border-[#1a1c24]/5 hover:border-[#ff4d6d]/20 transition-all">
                                 <h4 className="font-fraunces font-black text-[#1a1c24] text-xl md:text-2xl italic">{item.title}</h4>
                                 <p className="text-sm md:text-base font-outfit text-[#1a1c24]/50 leading-relaxed">{item.desc}</p>
                              </div>
                           ))}
                        </div>
                     </section>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
