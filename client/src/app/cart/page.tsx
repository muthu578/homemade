"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trash2, Plus, Minus, ShoppingBag, Tag } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';

type CartItem = {
  id: number; name: string; category: string; price: number;
  qty: number; img: string; note?: string;
};

const initialCart: CartItem[] = [
  { id: 1, name: 'Lotus Biscoff Caramel Cake', category: 'Gourmet Cakes', price: 1200, qty: 1, img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, name: 'Off White Kanchi Silk Saree', category: 'Sarees', price: 7960, qty: 1, img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393' },
  { id: 3, name: 'French Macarons Box', category: 'Desserts & Cupcakes', price: 480, qty: 2, img: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const updateQty = (id: number, delta: number) =>
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  const remove = (id: number) => setCart(prev => prev.filter(i => i.id !== id));

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const delivery = subtotal > 1500 ? 0 : 99;
  const total = subtotal - discount + delivery;

  const applyCoupon = () => { if (coupon.trim().toLowerCase() === 'pranavika10') setCouponApplied(true); };

  return (
    <main className="min-h-screen bg-[#fbf9f6] overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-[1800px] mx-auto px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="text-[10px] font-outfit font-black uppercase tracking-[0.5em] text-[#ff4d6d]">Your Selections</span>
            <h1 className="text-5xl md:text-7xl font-fraunces font-black text-[#1a1c24] leading-tight mt-3">
              Your Cart <span className="italic font-normal text-[#bfa37e]">({cart.length})</span>
            </h1>
          </motion.div>

          {cart.length === 0 ? (
            /* Empty state */
            <div className="py-40 text-center space-y-8">
              <div className="w-28 h-28 mx-auto bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <ShoppingBag className="w-12 h-12 text-[#1a1c24]/20" />
              </div>
              <h2 className="text-3xl font-fraunces font-bold text-[#1a1c24]/40">Your cart is empty</h2>
              <p className="text-[#1a1c24]/30 font-outfit">Looks like you haven't added anything yet. Go explore!</p>
              <div className="flex gap-4 justify-center">
                <Link href="/bakery" className="group inline-flex items-center gap-3 px-10 py-4 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-105 transition-all">
                  Browse Bakery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/boutique" className="inline-flex items-center gap-3 px-10 py-4 border border-[#1a1c24]/10 text-[#1a1c24]/60 rounded-full font-bold text-sm hover:border-[#ff4d6d] hover:text-[#ff4d6d] transition-all">
                  Browse Boutique
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Items */}
              <div className="lg:col-span-2 space-y-6">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div key={item.id}
                      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex gap-6 bg-white rounded-[2.5rem] p-6 shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all"
                    >
                      {/* Image */}
                      <div className="w-32 h-32 rounded-[1.5rem] overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-[#bfa37e] mb-1">{item.category}</p>
                        <h3 className="font-fraunces font-bold text-[#1a1c24] text-lg leading-snug">{item.name}</h3>
                        <p className="text-xl font-fraunces font-bold text-[#1a1c24] mt-2">₹{(item.price * item.qty).toLocaleString()}</p>
                      </div>

                      {/* Right: qty + delete */}
                      <div className="flex flex-col items-end justify-between">
                        <button onClick={() => remove(item.id)} className="w-9 h-9 rounded-full border border-[#1a1c24]/10 flex items-center justify-center text-[#1a1c24]/30 hover:bg-red-50 hover:border-red-200 hover:text-red-400 transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-3 bg-[#fbf9f6] rounded-full px-4 py-2 border border-[#1a1c24]/5">
                          <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded-full flex items-center justify-center text-[#1a1c24]/60 hover:text-[#ff4d6d] hover:bg-white transition-all">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-fraunces font-bold text-[#1a1c24] w-5 text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded-full flex items-center justify-center text-[#1a1c24]/60 hover:text-[#ff4d6d] hover:bg-white transition-all">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Continue shopping */}
                <div className="flex gap-4 pt-4">
                  <Link href="/boutique" className="text-xs font-outfit font-bold uppercase tracking-widest text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors pb-1 border-b border-[#1a1c24]/10 hover:border-[#ff4d6d]">
                    + Add from Boutique
                  </Link>
                  <Link href="/bakery" className="text-xs font-outfit font-bold uppercase tracking-widest text-[#1a1c24]/40 hover:text-[#ff4d6d] transition-colors pb-1 border-b border-[#1a1c24]/10 hover:border-[#ff4d6d]">
                    + Add from Bakery
                  </Link>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-6">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_6px_30px_rgba(0,0,0,0.06)] border border-[#1a1c24]/5 space-y-8">
                  <h3 className="text-xl font-fraunces font-bold text-[#1a1c24]">Order Summary</h3>

                  {/* Coupon */}
                  <div className="space-y-3">
                    <label className="text-[9px] font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24]/30">Coupon Code</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#1a1c24]/30" />
                        <input
                          value={coupon} onChange={e => setCoupon(e.target.value)}
                          disabled={couponApplied}
                          placeholder="PRANAVIKA10"
                          className="w-full pl-10 pr-4 py-3 rounded-full bg-[#fbf9f6] border border-[#1a1c24]/10 text-sm font-outfit text-[#1a1c24] placeholder-[#1a1c24]/20 focus:outline-none focus:border-[#ff4d6d]/40 transition-all disabled:opacity-50"
                        />
                      </div>
                      <button onClick={applyCoupon} disabled={couponApplied}
                        className="px-5 py-3 bg-[#1a1c24] text-white rounded-full text-xs font-outfit font-black uppercase tracking-wider hover:bg-[#ff4d6d] transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap">
                        {couponApplied ? '✓ Applied' : 'Apply'}
                      </button>
                    </div>
                    {couponApplied && <p className="text-xs text-green-500 font-outfit font-bold">🎉 10% off applied!</p>}
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-4 pt-2 border-t border-[#1a1c24]/5">
                    {[
                      { label: 'Subtotal', value: `₹${subtotal.toLocaleString()}` },
                      ...(discount > 0 ? [{ label: 'Discount (10%)', value: `−₹${discount.toLocaleString()}` }] : []),
                      { label: delivery === 0 ? 'Delivery (Free!)' : 'Delivery', value: delivery === 0 ? 'FREE' : `₹${delivery}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-sm font-outfit text-[#1a1c24]/50">{label}</span>
                        <span className={`text-sm font-fraunces font-bold ${value === 'FREE' || label.includes('Discount') ? 'text-green-500' : 'text-[#1a1c24]'}`}>{value}</span>
                      </div>
                    ))}
                    {subtotal <= 1500 && (
                      <p className="text-[9px] font-outfit text-[#bfa37e] bg-[#bfa37e]/10 rounded-full px-4 py-2 text-center">
                        Add ₹{(1500 - subtotal + delivery).toLocaleString()} more for free delivery
                      </p>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t border-[#1a1c24]/10">
                      <span className="font-fraunces font-bold text-[#1a1c24] text-lg">Total</span>
                      <span className="font-fraunces font-black text-[#1a1c24] text-2xl">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button className="group w-full py-5 bg-[#1a1c24] text-white rounded-full font-bold text-sm hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3">
                    Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-[9px] font-outfit text-[#1a1c24]/30 uppercase tracking-widest">
                    Secure · Encrypted · Trusted
                  </p>
                </div>

                {/* Accepted payments */}
                <div className="text-center space-y-3">
                  <p className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#1a1c24]/20">We Accept</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {['UPI', 'GPay', 'PhonePe', 'NetBanking', 'Card'].map(m => (
                      <span key={m} className="px-4 py-1.5 rounded-full border border-[#1a1c24]/10 text-[9px] font-outfit font-bold text-[#1a1c24]/30 uppercase tracking-wider">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-[#1a1c24]/5">
        <div className="max-w-[1800px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20">© 2026 PRANAVIKA'S Sweet & Chic</p>
          <Link href="/" className="text-[9px] font-outfit font-black uppercase tracking-[0.4em] text-[#1a1c24]/20 hover:text-[#ff4d6d] transition-colors">← Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
