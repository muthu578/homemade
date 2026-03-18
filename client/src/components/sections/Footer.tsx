"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, MessageCircle, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-[#1a1c24]/5">
      <div className="max-w-[1800px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <Logo />
            <p className="text-sm font-outfit text-[#1a1c24]/40 leading-relaxed max-w-xs">
              Handcrafting elegance in fashion and artisan mastery in baking. From our home atelier to yours.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: MessageCircle, href: '#' }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full border border-[#1a1c24]/10 flex items-center justify-center text-[#1a1c24]/40 hover:bg-[#ff4d6d] hover:text-white hover:border-[#ff4d6d] transition-all">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d]">Collections</h4>
            <ul className="space-y-4">
              {['Boutique', 'Bakery', 'Homemade', 'Gifts'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm font-outfit font-bold text-[#1a1c24]/50 hover:text-[#ff4d6d] hover:translate-x-1 transition-all flex items-center gap-2 group">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d]">Help & Info</h4>
            <ul className="space-y-4">
              {['Our Story', 'Customer FAQ', 'Shipping Policy', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    href={
                      item === 'Our Story' ? '/our-story' : 
                      item === 'Customer FAQ' ? '/faq' : 
                      item === 'Terms of Service' ? '/legal#terms' :
                      item === 'Privacy Policy' ? '/legal#privacy' : '#'
                    } 
                    className="text-sm font-outfit font-bold text-[#1a1c24]/50 hover:text-[#ff4d6d] hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#ff4d6d]">Studio Contact</h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                 <MapPin className="w-5 h-5 text-[#ff4d6d]/40 flex-shrink-0 group-hover:text-[#ff4d6d] transition-colors" />
                 <p className="text-sm font-outfit text-[#1a1c24]/50 group-hover:text-[#1a1c24] transition-colors">No. 42, Gandhi Street, Coimbatore, TN 641001</p>
              </div>
              <div className="flex gap-4 group">
                 <Phone className="w-5 h-5 text-[#ff4d6d]/40 flex-shrink-0 group-hover:text-[#ff4d6d] transition-colors" />
                 <p className="text-sm font-outfit text-[#1a1c24]/50 group-hover:text-[#1a1c24] transition-colors">+91 98765 43210</p>
              </div>
              <div className="flex gap-4 group">
                 <Mail className="w-5 h-5 text-[#ff4d6d]/40 flex-shrink-0 group-hover:text-[#ff4d6d] transition-colors" />
                 <p className="text-sm font-outfit text-[#1a1c24]/50 group-hover:text-[#1a1c24] transition-colors">hello@pranavika.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#1a1c24]/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em]">© 2026 PRANAVIKA'S Sweet & Chic. All Artisan Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-[8px] font-outfit font-black uppercase tracking-[0.2em] hover:text-[#ff4d6d]">Instagram</Link>
            <Link href="#" className="text-[8px] font-outfit font-black uppercase tracking-[0.2em] hover:text-[#ff4d6d]">WhatsApp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
