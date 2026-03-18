"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trash2, Plus, Minus, ShoppingBag, Tag } from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

type CartItem = {
  id: number; name: string; category: string; price: number;
  qty: number; img: string; note?: string;
};

const initialCart: CartItem[] = [
  { id: 1, name: 'Lotus Biscoff Caramel Cake', category: 'Gourmet Cakes', price: 1200, qty: 1, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Off White Kanchi Silk Saree', category: 'Sarees', price: 7960, qty: 1, img: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'French Macarons Box', category: 'Desserts & Cupcakes', price: 480, qty: 2, img: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=800' },
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

      <section className="pt-32 md:pt-48 pb-20 md:pb-32 bg-[#fbf9f6] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#ff4d6d]/5 rounded-full blur-[100px] md:blur-[150px] -z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#bfa37e]/5 rounded-full blur-[80px] md:blur-[100px] -z-0 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="mb-12 md:mb-20 text-center md:text-left space-y-4 md:space-y-6"
          >
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="hidden sm:block h-px w-12 bg-[#ff4d6d]" />
              <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#ff4d6d] italic">Your Sacred Selection</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-fraunces font-black text-[#1a1c24] leading-[1.05] tracking-tight italic">
              Review Your <br className="hidden sm:block" /><span className="italic font-normal text-[#bfa37e]">Cravings.</span> <span className="text-2xl md:text-5xl font-fraunces font-black text-[#1a1c24]/20 align-top ml-2">({cart.length})</span>
            </h1>
          </motion.div>

          {cart.length === 0 ? (
            /* Empty state */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 md:py-40 text-center space-y-8 md:space-y-12 bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-[#1a1c24]/5"
            >
              <div className="w-32 md:w-40 h-32 md:h-40 mx-auto bg-[#fbf9f6] rounded-[2.5rem] md:rounded-[3rem] flex items-center justify-center shadow-inner group overflow-hidden">
                <ShoppingBag className="w-16 md:w-20 h-16 md:h-20 text-[#1a1c24]/10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700" />
              </div>
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-5xl font-fraunces font-black text-[#1a1c24]/40 italic">Nothing to Savor Here... Yet.</h2>
                <p className="text-base md:text-xl text-[#1a1c24]/30 font-outfit max-w-lg mx-auto leading-relaxed italic font-medium">"Your scroll feels a bit light. Let's fill it with some handcrafted divine goodness!"</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 px-6 md:px-10">
                <Link href="/bakery" className="group inline-flex items-center justify-center gap-4 px-12 md:px-16 py-6 md:py-8 bg-[#1a1c24] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:scale-105 transition-all w-full sm:w-auto shadow-[0_20px_50px_rgba(26,28,36,0.2)] active:scale-95 italic">
                  Explore Bakery <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/boutique" className="inline-flex items-center justify-center gap-4 px-12 md:px-16 py-6 md:py-8 border-2 border-[#1a1c24]/10 bg-[#fbf9f6] text-[#1a1c24]/60 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.5em] hover:border-[#ff4d6d] hover:text-[#ff4d6d] hover:bg-white transition-all w-full sm:w-auto active:scale-95 italic text-center">
                  Manifest Boutique
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-24 items-start">
              {/* Items */}
              <div className="lg:col-span-2 space-y-8 md:space-y-10">
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => (
                    <motion.div key={item.id}
                      layout
                      initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, x: -40, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="group flex flex-col sm:flex-row gap-6 md:gap-10 bg-white rounded-[3rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#1a1c24]/5 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-2 relative"
                    >
                      {/* Image */}
                      <div className="w-full sm:w-40 md:w-48 aspect-[4/3] sm:aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex-shrink-0 bg-[#f0ede8] shadow-inner relative">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#1a1c24]/80 to-transparent sm:hidden">
                           <div className="w-full py-2 bg-white text-[#1a1c24] text-center rounded-full text-[8px] font-black uppercase tracking-[0.3em] italic">Swift Manifest</div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-2">
                        <div className="space-y-2">
                          <p className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#bfa37e] italic">{item.category}</p>
                          <h3 className="font-fraunces font-black text-[#1a1c24] text-2xl md:text-3xl leading-tight group-hover:text-[#ff4d6d] transition-colors italic line-clamp-2">{item.name}</h3>
                          <p className="text-2xl md:text-3xl font-fraunces font-black text-[#ff4d6d] pt-2 italic">₹{item.price.toLocaleString()}</p>
                        </div>
                        
                        {/* Status label hidden on small screens */}
                        <div className="hidden sm:block mt-6">
                           <span className="text-[9px] md:text-[10px] font-outfit font-black uppercase tracking-[0.3em] text-green-600 bg-green-500/10 px-4 py-2.5 rounded-full border border-green-500/10 italic">In Stock · Ready to dispatch</span>
                        </div>
                      </div>

                      {/* Controls container - Always visible but styled better */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between py-2 border-t sm:border-t-0 border-[#1a1c24]/5 mt-4 sm:mt-0 pt-6 sm:pt-0 gap-4">
                        {/* Qty Controls */}
                        <div className="flex items-center gap-5 bg-[#fbf9f6] rounded-full px-6 py-3 border border-[#1a1c24]/5 shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
                          <button 
                            onClick={() => updateQty(item.id, -1)} 
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#1a1c24]/40 hover:text-[#ff4d6d] hover:bg-white transition-all shadow-sm active:scale-90 bg-white/50"
                          >
                            <Minus className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                          <span className="font-fraunces font-black text-[#1a1c24] w-8 md:w-10 text-center text-xl md:text-2xl italic">{item.qty}</span>
                          <button 
                            onClick={() => updateQty(item.id, 1)} 
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[#1a1c24]/40 hover:text-[#ff4d6d] hover:bg-white transition-all shadow-sm active:scale-90 bg-white/50"
                          >
                            <Plus className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </div>

                        {/* Delete button */}
                        <button 
                          onClick={() => remove(item.id)} 
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-red-300 hover:text-red-500 hover:bg-red-50 sm:border border-red-50 transition-all active:scale-90 group/trash shadow-sm"
                        >
                          <Trash2 className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/trash:scale-110 group-hover/trash:-rotate-12" />
                        </button>
                      </div>

                      {/* Subtotal bubble for desktop only */}
                      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 translate-x-full pr-12 pointer-events-none">
                         <span className="text-[10px] md:text-xs whitespace-nowrap font-outfit font-black text-[#1a1c24]/5 uppercase tracking-[0.5em] leading-none italic">Subtotal: ₹{(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Continue shopping links */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6 md:gap-12 pt-8 md:pt-12 opacity-60 hover:opacity-100 transition-opacity">
                  <Link href="/boutique" className="group flex items-center justify-center sm:justify-start gap-4 text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24] transition-all pb-2 border-b-2 border-transparent hover:border-[#ff4d6d] hover:text-[#ff4d6d] italic">
                    <Plus className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform" /> Add from Boutique
                  </Link>
                  <Link href="/bakery" className="group flex items-center justify-center sm:justify-start gap-4 text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.3em] text-[#1a1c24] transition-all pb-2 border-b-2 border-transparent hover:border-[#ff4d6d] hover:text-[#ff4d6d] italic">
                    <Plus className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform" /> Add from Bakery
                  </Link>
                </div>
              </div>

              {/* Summary card */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="bg-[#1a1c24] text-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.2)] space-y-10 md:space-y-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-white opacity-[0.03] rounded-full -mr-30 -mt-30 blur-3xl pointer-events-none" />
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-fraunces font-black text-white italic">Order Summary</h3>
                    <div className="h-1.5 w-16 bg-[#ff4d6d] rounded-full" />
                  </div>

                  {/* Coupon */}
                  <div className="space-y-6">
                    <label className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.5em] text-white/30 ml-4 italic">Promo Code</label>
                    <div className="flex flex-col gap-4">
                      <div className="relative">
                        <Tag className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <input
                          value={coupon} onChange={e => setCoupon(e.target.value)}
                          disabled={couponApplied}
                          placeholder="PRANAVIKA10"
                          className="w-full pl-16 pr-6 py-5 md:py-6 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-outfit text-white placeholder-white/20 focus:outline-none focus:border-[#ff4d6d]/40 transition-all disabled:opacity-50 font-black tracking-widest uppercase italic"
                        />
                      </div>
                      <button 
                        onClick={applyCoupon} 
                        disabled={couponApplied}
                        className={`w-full py-5 md:py-6 rounded-full text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl italic ${couponApplied ? 'bg-green-500 text-white' : 'bg-[#ff4d6d] text-white hover:scale-[1.02] shadow-[#ff4d6d]/20'}`}
                      >
                        {couponApplied ? '✓ Applied Successfully' : 'Apply Discount'}
                      </button>
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-6 pt-10 border-t border-white/5">
                    {[
                      { label: 'Subtotal', value: `₹${subtotal.toLocaleString()}` },
                      ...(discount > 0 ? [{ label: 'Discount Applied', value: `−₹${discount.toLocaleString()}` }] : []),
                      { label: delivery === 0 ? 'Divine Delivery' : 'Standard Delivery', value: delivery === 0 ? 'FREE' : `₹${delivery}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center px-4">
                        <span className="text-[10px] md:text-xs font-outfit font-black text-white/40 uppercase tracking-[0.4em] italic">{label}</span>
                        <span className={`text-base md:text-xl font-fraunces font-black italic ${value === 'FREE' || label.includes('Discount') ? 'text-green-400' : 'text-white'}`}>{value}</span>
                      </div>
                    ))}

                    {subtotal <= 1500 && (
                      <div className="bg-white/5 rounded-3xl md:rounded-[2rem] p-6 md:p-8 border border-white/5 group hover:bg-white/10 transition-colors">
                        <p className="text-[10px] md:text-xs font-outfit text-white/40 text-center leading-relaxed italic font-medium">
                          Savor more to save more! Add <span className="font-black text-[#bfa37e] text-sm md:text-base px-1">₹{(1500 - subtotal).toLocaleString()}</span> worth of treats to unlock <span className="font-black text-white px-1">Free Delivery</span>
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-10 border-t border-white/10 px-4 mt-6">
                      <span className="font-fraunces font-black text-white/40 text-2xl md:text-3xl italic">Total</span>
                      <div className="text-right">
                         <span className="block font-fraunces font-black text-white text-4xl md:text-5xl shadow-glow shadow-[#ff4d6d]/5 italic">₹{total.toLocaleString()}</span>
                         <span className="text-[9px] font-outfit font-black text-white/20 uppercase tracking-[0.4em] italic mt-2 block">Incl. all taxes</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/checkout" className="group w-full py-6 md:py-8 bg-white text-[#1a1c24] rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] hover:bg-[#ff4d6d] hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[#ff4d6d]/30 flex items-center justify-center gap-4 active:scale-95 select-none italic">
                    Proceed to Checkout <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>

                  <div className="flex items-center justify-center gap-6 pt-6 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all cursor-crosshair">
                     {['GPay', 'UPI', 'Visa', 'Master'].map(pay => (
                       <span key={pay} className="text-[9px] font-black uppercase tracking-[0.3em] font-outfit italic">{pay}</span>
                     ))}
                  </div>
                </div>

                <div className="mt-12 text-center px-6 md:px-10">
                   <p className="text-[9px] md:text-[10px] font-outfit text-[#1a1c24]/30 uppercase tracking-[0.3em] leading-relaxed italic font-black">
                     By proceeding, you agree to our <Link href="/legal" className="text-[#ff4d6d] border-b border-transparent hover:border-[#ff4d6d] transition-all px-1">Shipping Policy</Link> & <Link href="/legal" className="text-[#ff4d6d] border-b border-transparent hover:border-[#ff4d6d] transition-all px-1">Terms of Service</Link>.
                   </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
