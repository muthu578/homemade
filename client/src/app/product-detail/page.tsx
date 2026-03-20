"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ShoppingBag, Heart, Share2, Ruler, ShieldCheck, 
  Truck, Star, Clock, MapPin, Package, Edit3, ChevronRight 
} from 'lucide-react';
import { Navbar } from '../../components/sections/Navbar';
import { Footer } from '../../components/sections/Footer';

type ProductType = 'boutique' | 'bakery' | 'homemade';

export default function ProductDetailPage() {
  const [productType, setProductType] = useState<ProductType>('bakery');
  const [selectedSize, setSelectedSize] = useState('0.5 KG');
  const [selectedFlavor, setSelectedFlavor] = useState('Classic Caramel');
  const [selectedDecoration, setSelectedDecoration] = useState('Minimalist');
  const [isEggless, setIsEggless] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  // Mock product data that changes based on type for demonstration
  const getProductData = (type: ProductType) => {
    switch (type) {
      case 'bakery':
        return {
          name: "Lotus Biscoff Caramel Cake",
          price: 1200,
          rating: 4.9,
          reviews: 86,
          category: "Celestial Bakery",
          description: "A heavenly manifestation of caramelized Biscoff crunch, rich cream layers, and a luscious caramel drip. Every bite is a sacred ritual of sweetness, handcrafted for your divine moments.",
          images: [
            'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800'
          ],
          details: ["100% Organic Flour", "Hand-churned Butter", "Alcohol-free Recipe", "Eggless Option Free"],
          estTime: "24h Notice Required"
        };
      case 'boutique':
        return {
          name: "Classic Kanchi Silk Saree",
          price: 7960,
          rating: 4.8,
          reviews: 124,
          category: "Atelier Boutique",
          description: "A timeless masterpiece of hand-woven Kanchipuram silk, featuring intricate golden zari work and a deep ruby red finish. Perfect for weddings and festive celebrations.",
          images: [
            'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg?v=1771048393',
            'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg?v=1757499348',
            'https://anyaonline.in/cdn/shop/files/4_6446979a-1eb8-42f0-9740-10f545465e64_400x.jpg?v=1757499348'
          ],
          details: ["Pure Mulberry Silk", "Gold Zari Weave", "Dry Clean Recommended", "6.2m with Blouse"],
          estTime: "3-5 Days Shipping"
        };
      default:
        return {
          name: "Artisan Mango Thokku",
          price: 320,
          rating: 4.7,
          reviews: 45,
          category: "Homemade Delights",
          description: "Sun-dried mangoes grated and mixed with traditional hand-ground spices. Fermented in clay pots for that authentic grandmother's flavor profile.",
          images: [
            'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800',
          ],
          details: ["Small Batch Produced", "No Added Preservatives", "Hand-ground Spices", "Authentic Heritage Recipe"],
          estTime: "Ready to Dispatch"
        };
    }
  };

  const product = getProductData(productType);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#2d241c]">
      <Navbar />

      <section className="pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dcb0af]/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
        
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 relative z-10">
          
          <div className="flex flex-wrap items-center justify-between mb-8 md:mb-12 gap-6">
            <Link href="/boutique" className="inline-flex items-center gap-2 text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.4em] text-[#2d241c]/30 hover:text-[#dcb0af] transition-colors italic">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Collections
            </Link>
            
            {/* Quick Type Switcher (Only for demo purposes) */}
            <div className="flex bg-white rounded-full p-1 border border-[#1a1c24]/5 shadow-sm">
               {(['bakery', 'boutique', 'homemade'] as ProductType[]).map(t => (
                 <button 
                  key={t}
                  onClick={() => setProductType(t)}
                  className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${productType === t ? 'bg-[#2d241c] text-white' : 'text-[#2d241c]/30 hover:text-[#2d241c]'}`}
                 >
                   {t}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Gallery with Zoom-ready layout */}
            <div className="space-y-6 md:space-y-8 lg:sticky lg:top-32">
               <motion.div 
                  layoutId="product-image"
                  className="relative aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(45,36,28,0.08)] border border-[#1a1c24]/5 group cursor-zoom-in"
               >
                  <img 
                    src={product.images[activeImg]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.35] origin-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d241c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Floating Metadata */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest text-[#2d241c]">Masterpiece Artifact</span>
                     <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#2d241c]">
                        <Share2 className="w-4 h-4" />
                     </div>
                  </div>
               </motion.div>
               <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 px-2">
                  {product.images.map((img, i) => (
                    <button 
                       key={i} 
                       onClick={() => setActiveImg(i)}
                       className={`w-24 h-32 flex-shrink-0 rounded-[2rem] overflow-hidden border-2 transition-all duration-500 transform ${activeImg === i ? 'border-[#dcb0af] shadow-xl scale-105 active:scale-95' : 'border-transparent opacity-40 hover:opacity-100 bg-white scale-100'}`}
                    >
                       <img src={img} alt="Thumb" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Content Sidebar */}
            <div className="space-y-12 md:space-y-16">
               <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-6">
                     <span className="px-5 py-2 bg-white rounded-full text-[10px] md:text-[11px] font-outfit font-black uppercase tracking-[0.3em] text-[#dcb0af] shadow-sm border border-[#dcb0af]/10 italic">{product.category} Ritual</span>
                     <div className="flex items-center gap-3">
                        <div className="flex gap-1 text-[#bfa37e]">
                           {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none opacity-30 text-[#2d241c]'}`} />)}
                        </div>
                        <span className="text-[10px] font-outfit font-black uppercase tracking-[0.2em] text-[#2d241c]/20 italic">{product.rating} ({product.reviews} Witnessed)</span>
                     </div>
                  </div>
                  <h1 className="text-2xl md:text-5xl font-fraunces font-black leading-tight italic tracking-tight text-[#2d241c]">{product.name}</h1>
                  <p className="text-3xl md:text-6xl font-fraunces font-black text-[#dcb0af] italic flex items-baseline gap-4">
                     ₹{product.price.toLocaleString()}
                     <span className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#2d241c]/15 not-italic">Tribute Incl.</span>
                  </p>
               </div>

               <div className="relative group">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#dcb0af]/20 rounded-full" />
                  <p className="text-base md:text-2xl font-outfit text-[#2d241c]/60 leading-relaxed max-w-xl italic font-medium">
                     " {product.description} "
                  </p>
               </div>

               {/* Customization Flow */}
               <div className="space-y-10 md:space-y-14">
                  
                  {/* Bakery Specifics */}
                  {productType === 'bakery' && (
                    <div className="space-y-8">
                       <div className="space-y-6 bg-white p-8 md:p-10 rounded-[3rem] border border-[#dcb0af]/10 shadow-sm">
                          <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#2d241c]/40 italic">Select Cake Realm (Size)</h4>
                          <div className="flex flex-wrap gap-4">
                             {['0.5 KG', '1.0 KG', '1.5 KG', '2.0 KG'].map(size => (
                                <button 
                                   key={size}
                                   onClick={() => setSelectedSize(size)}
                                   className={`px-8 py-4 rounded-2xl text-[10px] font-outfit font-black uppercase tracking-widest transition-all ${selectedSize === size ? 'bg-[#2d241c] text-white shadow-xl' : 'bg-[#fbf9f6] border border-[#1a1c24]/5 text-[#2d241c]/30 hover:bg-white'}`}
                                >
                                   {size}
                                </button>
                             ))}
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#2d241c]/30 px-4 italic">Flavor Essence</label>
                             <select className="w-full px-6 py-4 rounded-2xl bg-white border border-[#1a1c24]/5 font-outfit font-bold text-xs uppercase tracking-widest outline-none focus:border-[#dcb0af] transition-all">
                                <option>Classic Caramel</option>
                                <option>Berry Fusion</option>
                                <option>Chocolate Ritual</option>
                             </select>
                          </div>
                          <div className="space-y-4">
                             <label className="text-[9px] font-outfit font-black uppercase tracking-widest text-[#2d241c]/30 px-4 italic">Eggless Preference</label>
                             <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-[#1a1c24]/5">
                                <button onClick={() => setIsEggless(false)} className={`flex-1 py-3 px-4 rounded-xl text-[9px] font-bold transition-all ${!isEggless ? 'bg-[#2d241c] text-white shadow-lg' : 'text-[#2d241c]/40'}`}>Standard</button>
                                <button onClick={() => setIsEggless(true)} className={`flex-1 py-3 px-4 rounded-xl text-[9px] font-bold transition-all ${isEggless ? 'bg-[#dcb0af] text-white shadow-lg' : 'text-[#2d241c]/40'}`}>Eggless</button>
                             </div>
                          </div>
                       </div>
                    </div>
                  )}

                  {/* Boutique Specifics */}
                  {productType === 'boutique' && (
                    <div className="space-y-8">
                       <div className="space-y-6 bg-white p-8 md:p-10 rounded-[3rem] border border-[#dcb0af]/10 shadow-sm">
                          <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#2d241c]/40 italic">Atelier Silhouette (Size)</h4>
                          <div className="flex flex-wrap gap-4">
                             {['S', 'M', 'L', 'XL', 'Custom Fit'].map(size => (
                                <button 
                                   key={size}
                                   onClick={() => setSelectedSize(size)}
                                   className={`px-8 py-4 rounded-2xl text-[10px] font-outfit font-black uppercase tracking-widest transition-all ${selectedSize === size ? 'bg-[#2d241c] text-white shadow-xl' : 'bg-[#fbf9f6] border border-[#1a1c24]/5 text-[#2d241c]/30 hover:bg-white'}`}
                                >
                                   {size}
                                </button>
                             ))}
                          </div>
                       </div>
                    </div>
                  )}

                  {/* Delivery / Pickup Toggle */}
                  <div className="space-y-6">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#2d241c]/40 italic">Experience Mode</h4>
                     <div className="flex gap-4 p-2 bg-white rounded-[2rem] border border-[#1a1c24]/5 shadow-sm">
                        <button 
                           onClick={() => setDeliveryType('delivery')}
                           className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[1.5rem] transition-all ${deliveryType === 'delivery' ? 'bg-[#2d241c] text-white shadow-xl scale-[1.02]' : 'bg-transparent text-[#2d241c]/30'}`}
                        >
                           <Truck className="w-5 h-5" />
                           <span className="text-[10px] font-black uppercase tracking-widest">Ritual Delivery</span>
                        </button>
                        <button 
                           onClick={() => setDeliveryType('pickup')}
                           className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[1.5rem] transition-all ${deliveryType === 'pickup' ? 'bg-[#dcb0af] text-white shadow-xl scale-[1.02]' : 'bg-transparent text-[#2d241c]/30'}`}
                        >
                           <MapPin className="w-5 h-5" />
                           <span className="text-[10px] font-black uppercase tracking-widest">Palace Pickup</span>
                        </button>
                     </div>
                  </div>

                  {/* Primary Actions */}
                  <div className="flex flex-col sm:flex-row gap-6">
                     <button 
                        onClick={handleAddToCart}
                        className={`flex-[3] py-7 md:py-9 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 active:scale-95 overflow-hidden group relative ${added ? 'bg-green-600 text-white' : 'bg-[#2d241c] text-white hover:bg-[#dcb0af]'}`}
                     >
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                        {added ? 'Added to Vault' : 'Manifest & Order'}
                        {!added && <ShoppingBag className="w-6 h-6" />}
                     </button>
                     <button className="flex-[2] py-7 md:py-9 border-2 border-[#2d241c]/5 bg-white text-[#2d241c]/40 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:border-[#dcb0af] hover:text-[#dcb0af] transition-all active:scale-95">
                        <Edit3 className="w-5 h-5" /> Customize Ritual
                     </button>
                     <button className="w-full sm:w-24 h-14 sm:h-auto border-2 border-[#2d241c]/5 rounded-full flex items-center justify-center hover:bg-[#dcb0af]/5 hover:border-[#dcb0af] hover:text-[#dcb0af] transition-all active:scale-75 shadow-sm">
                        <Heart className="w-6 h-6 md:w-8 md:h-8 hover:fill-current" />
                     </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-[#1a1c24]/5">
                     {[
                       { icon: Clock, label: product.estTime },
                       { icon: ShieldCheck, label: 'Master Quality' },
                       { icon: Package, label: 'Palace Wrapped' }
                     ].map((box, i) => (
                       <div key={i} className="flex items-center gap-4 text-[#2d241c]/20 hover:text-[#2d241c]/40 transition-colors">
                          <box.icon className="w-5 h-5" />
                          <span className="text-[9px] font-black uppercase tracking-widest italic">{box.label}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Reviews Section */}
      <section className="py-12 md:py-20 bg-[#fbf9f6] relative border-y border-[#1a1c24]/5">
         <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-6">
                     <h4 className="text-[10px] font-outfit font-black uppercase tracking-[0.6em] text-[#dcb0af] italic">The Witnesses</h4>
                     <h3 className="text-4xl md:text-7xl font-fraunces font-black leading-tight italic">Praised by <br />our <span className="text-[#bfa37e] font-normal">Divine Circle.</span></h3>
                  </div>
                  <div className="space-y-8">
                     <div className="flex items-center gap-8">
                        <span className="text-7xl md:text-[100px] font-fraunces font-black text-[#dcb0af] italic leading-none">{product.rating}</span>
                        <div className="space-y-3">
                           <div className="flex gap-2 text-[#bfa37e]">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                           </div>
                           <p className="font-outfit font-black text-xs uppercase tracking-[0.2em] text-[#2d241c]/40">Based on {product.reviews} reviews</p>
                        </div>
                     </div>
                     <button className="w-full md:w-auto px-12 py-6 border-2 border-[#2d241c] text-[#2d241c] rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#2d241c] hover:text-white transition-all italic">Write Your Story</button>
                  </div>
               </div>
               
               <div className="lg:col-span-7 grid gap-8">
                  {[
                    { name: 'Sofia M.', text: "The Caramel Biscoff is literally a spiritual experience. Every layer hums with artisan perfection. Truly divine!", time: '2 days ago' },
                    { name: 'Karthik R.', text: "Never had a cake this fresh and sophisticated. Pranavika's team are legends of their craft.", time: '1 week ago' }
                  ].map((review, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-[3rem] border border-[#dcb0af]/10 shadow-sm space-y-6 relative overflow-hidden group">
                       <span className="absolute top-8 right-10 text-[10px] font-outfit font-black uppercase tracking-widest text-[#2d241c]/10 italic">{review.time}</span>
                       <div className="flex gap-1 text-[#bfa37e]">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                       </div>
                       <p className="text-base md:text-xl font-outfit font-medium text-[#2d241c]/60 italic leading-relaxed">" {review.text} "</p>
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#dcb0af]/20 flex items-center justify-center font-fraunces font-black text-[#dcb0af] italic">{review.name[0]}</div>
                          <span className="font-fraunces font-black text-lg italic">{review.name}</span>
                       </div>
                    </motion.div>
                  ))}
                  <Link href="#" className="flex items-center justify-center gap-4 text-[10px] font-outfit font-black uppercase tracking-[0.4em] text-[#dcb0af] hover:text-[#2d241c] transition-colors mt-4 italic">
                    Read All Witnesses <ChevronRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

