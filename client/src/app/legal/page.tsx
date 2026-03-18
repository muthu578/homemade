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

      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
            <div className="space-y-4">
               <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Compliance & Trust</span>
               <h1 className="text-5xl md:text-7xl font-fraunces font-black leading-tight">Legal Center.</h1>
            </div>
            <div className="flex flex-wrap gap-4">
               {['Privacy', 'Terms', 'Cookies', 'Shipping'].map(item => (
                 <Link key={item} href={`#${item.toLowerCase()}`} className="px-6 py-3 rounded-full border border-[#1a1c24]/10 text-xs font-outfit font-bold hover:bg-[#1a1c24] hover:text-white transition-all">
                   {item}
                 </Link>
               ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar TOC */}
            <div className="hidden lg:block space-y-8 sticky top-32 h-fit">
               <div className="p-10 bg-white rounded-[3rem] shadow-soft border border-[#1a1c24]/5 space-y-6">
                  <h4 className="text-[10px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/30">On this page</h4>
                  <ul className="space-y-4">
                     {[
                       { icon: Shield, label: 'Privacy Policy', id: 'privacy' },
                       { icon: FileText, label: 'Terms of Use', id: 'terms' },
                       { icon: Lock, label: 'Cookie Policy', id: 'cookies' },
                       { icon: Scale, label: 'Governing Law', id: 'governing' }
                     ].map(link => (
                        <li key={link.id}>
                           <a href={`#${link.id}`} className="flex items-center gap-3 text-sm font-outfit font-bold text-[#1a1c24]/50 hover:text-[#ff4d6d] transition-colors group">
                              <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-24 pb-32">
               
               {/* Privacy Policy */}
               <section id="privacy" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#ff4d6d]/5 text-[#ff4d6d] rounded-2xl flex items-center justify-center font-bold text-xl italic">P</div>
                     <h2 className="text-4xl font-fraunces font-bold">Privacy Policy</h2>
                  </div>
                  <div className="space-y-6 text-sm font-outfit text-[#1a1c24]/60 leading-relaxed italic">
                     <p>At PRANAVIKA'S, we value your trust. Your artisan journey with us is protected by the highest standards of digital security.</p>
                     <div className="space-y-8 not-italic">
                        <div className="space-y-2">
                           <h4 className="font-bold text-[#1a1c24]">Data Collection</h4>
                           <p>We collect essential data to process your boutique and bakery orders. This includes name, delivery address, phone, and email for logistical purposes.</p>
                        </div>
                        <div className="space-y-2">
                           <h4 className="font-bold text-[#1a1c24]">Security</h4>
                           <p>All financial transactions are handled through 256-bit SSL encrypted gateways. We never store your card details on our local servers.</p>
                        </div>
                     </div>
                  </div>
               </section>

               {/* Terms of Service */}
               <section id="terms" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#bfa37e]/5 text-[#bfa37e] rounded-2xl flex items-center justify-center font-bold text-xl italic">T</div>
                     <h2 className="text-4xl font-fraunces font-bold">Terms of Use</h2>
                  </div>
                  <div className="space-y-8 text-sm font-outfit text-[#1a1c24]/60 leading-relaxed">
                     <p>By engaging with PRANAVIKA'S Sweet & Chic, you agree to the following artisan governance:</p>
                     <ul className="space-y-4 list-disc pl-6 italic">
                        <li>Boutique items are handcrafted and may have slight variations in weave and color, adding to their unique charm.</li>
                        <li>Bakery cancellations must occur within 2 hours of ordering for a full refund as ingredients are prepared fresh.</li>
                        <li>Homemade products are prepared in a traditional home environment that handles nuts and dairy.</li>
                     </ul>
                  </div>
               </section>

               {/* Cookies */}
               <section id="cookies" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#1a1c24]/5 text-[#1a1c24] rounded-2xl flex items-center justify-center font-bold text-xl italic">C</div>
                     <h2 className="text-4xl font-fraunces font-bold">Cookie Policy</h2>
                  </div>
                  <p className="text-sm font-outfit text-[#1a1c24]/60 leading-relaxed">We use essential cookies to manage your artisan cart and account session. No third-party tracking is used without your explicit artisan consent.</p>
               </section>

               {/* Shipping & Returns */}
               <section id="shipping" className="scroll-mt-32 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#ff4d6d]/5 text-[#ff4d6d] rounded-2xl flex items-center justify-center font-bold text-xl italic">S</div>
                     <h2 className="text-4xl font-fraunces font-bold">Shipping & Returns</h2>
                  </div>
                  <div className="space-y-6 text-sm font-outfit text-[#1a1c24]/60 leading-relaxed italic">
                     <div className="space-y-8 not-italic">
                        <div className="space-y-2">
                           <h4 className="font-bold text-[#1a1c24]">Boutique Delivery</h4>
                           <p>Designer wear and silks are shipped within 5-7 business days. We offer global shipping via authorized artisan couriers.</p>
                        </div>
                        <div className="space-y-2">
                           <h4 className="font-bold text-[#1a1c24]">Bakery & Homemade</h4>
                           <p>Fresh bakes are delivered within 4-24 hours depending on the order time. Currently serving Chennai and Coimbatore regions for perishables.</p>
                        </div>
                        <div className="space-y-2">
                           <h4 className="font-bold text-[#1a1c24]">Return Policy</h4>
                           <p>Due to the handcrafted nature of our products, we only accept returns for items damaged during transit. Perishable bakery items are non-returnable.</p>
                        </div>
                     </div>
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
