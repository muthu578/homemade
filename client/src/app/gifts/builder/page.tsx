"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, ShoppingBag, Package, Gift, ChevronRight, 
  ArrowLeft, Check, Sparkles, Star 
} from 'lucide-react';
import { Navbar } from '../../../components/sections/Navbar';
import { Footer } from '../../../components/sections/Footer';

type GiftStep = 'boutique' | 'bakery' | 'homemade' | 'review';

export default function GiftBuilderPage() {
  const [activeStep, setActiveStep] = useState<GiftStep>('boutique');
  const [selectedItems, setSelectedItems] = useState<{
    boutique: any | null,
    bakery: any | null,
    homemade: any | null
  }>({ boutique: null, bakery: null, homemade: null });

  const steps: { key: GiftStep, label: string }[] = [
    { key: 'boutique', label: 'Boutique' },
    { key: 'bakery', label: 'Bakery' },
    { key: 'homemade', label: 'Homemade' },
    { key: 'review', label: 'Manifest' }
  ];

  const items = {
    boutique: [
      { id: 1, name: 'Silk Stole', price: 1200, img: 'https://anyaonline.in/cdn/shop/files/10_91061a4c-2853-4728-b38d-e10d8f038c4d_400x.jpg' },
      { id: 2, name: 'Thread-work Shawl', price: 2400, img: 'https://anyaonline.in/cdn/shop/files/1_3d4bcb96-0782-4338-9c5a-1a0740261f36_400x.jpg' }
    ],
    bakery: [
      { id: 3, name: 'Mini Rose Cake', price: 850, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg' },
      { id: 4, name: 'Artisan Brownies', price: 650, img: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg' }
    ],
    homemade: [
      { id: 5, name: 'Mango Thokku (250g)', price: 320, img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg' },
      { id: 6, name: 'Sambar Spice Mix', price: 180, img: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg' }
    ]
  };

  const handleSelectItem = (category: keyof typeof selectedItems, item: any) => {
    setSelectedItems(prev => ({ ...prev, [category]: item }));
  };

  const nextStep = () => {
    if (activeStep === 'boutique') setActiveStep('bakery');
    else if (activeStep === 'bakery') setActiveStep('homemade');
    else if (activeStep === 'homemade') setActiveStep('review');
  };

  const prevStep = () => {
    if (activeStep === 'bakery') setActiveStep('boutique');
    else if (activeStep === 'homemade') setActiveStep('bakery');
    else if (activeStep === 'review') setActiveStep('homemade');
  };

  const total = (selectedItems.boutique?.price || 0) + (selectedItems.bakery?.price || 0) + (selectedItems.homemade?.price || 0) + 500; // 500 for the luxe box

  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#2d241c]">
      <Navbar />

      <section className="pt-24 md:pt-40 pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center space-y-6 mb-16 md:mb-24">
             <span className="text-[10px] md:text-xs font-outfit font-black uppercase tracking-[0.6em] text-[#dcb0af] italic">The Gifting Ritual</span>
             <h1 className="text-4xl md:text-7xl font-fraunces font-black italic">Craft Your <span className="text-[#bfa37e] font-normal">Divine Box.</span></h1>
             <p className="text-sm md:text-xl font-outfit text-[#2d241c]/40 italic max-w-xl mx-auto">Select one item from each of our artisan realms to manifest the perfect gift.</p>
          </div>

          {/* Stepper */}
          <div className="flex justify-center mb-16 md:mb-24">
             <div className="flex items-center gap-4 bg-white p-2 md:p-3 rounded-full border border-[#1a1c24]/5 shadow-sm">
                {steps.map((s, i) => (
                  <button 
                    key={s.key}
                    onClick={() => setActiveStep(s.key)}
                    className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeStep === s.key ? 'bg-[#2d241c] text-white shadow-lg' : 'text-[#2d241c]/30 hover:text-[#2d241c]'}`}
                  >
                    {s.label}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
             
             {/* Left: Selection Grid */}
             <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                   {activeStep !== 'review' ? (
                     <motion.div 
                       key={activeStep}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -20 }}
                       className="grid grid-cols-1 md:grid-cols-2 gap-8"
                     >
                        {(items[activeStep as keyof typeof items] || []).map((item) => (
                          <div 
                            key={item.id} 
                            onClick={() => handleSelectItem(activeStep as keyof typeof selectedItems, item)}
                            className={`group bg-white rounded-[3rem] p-8 md:p-10 border transition-all cursor-pointer relative overflow-hidden ${selectedItems[activeStep as keyof typeof selectedItems]?.id === item.id ? 'border-[#dcb0af] shadow-xl scale-[1.02]' : 'border-[#1a1c24]/5 hover:border-[#1a1c24]/20'}`}
                          >
                             <div className="aspect-square rounded-[2rem] overflow-hidden mb-8">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                             </div>
                             <div className="flex justify-between items-center">
                                <div>
                                   <p className="font-fraunces font-black text-xl italic">{item.name}</p>
                                   <p className="text-[#dcb0af] font-black italic">₹{item.price}</p>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedItems[activeStep as keyof typeof selectedItems]?.id === item.id ? 'bg-[#dcb0af] text-white' : 'bg-[#fbf9f6] text-[#2d241c]/20'}`}>
                                   {selectedItems[activeStep as keyof typeof selectedItems]?.id === item.id ? <Check className="w-6 h-6" /> : <Plus className="w-5 h-5" />}
                                </div>
                             </div>
                          </div>
                        ))}
                     </motion.div>
                   ) : (
                     <motion.div 
                       key="review"
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="bg-[#1a1c24] text-white p-12 md:p-20 rounded-[5rem] shadow-2xl space-y-12 relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#dcb0af]/10 rounded-full blur-3xl" />
                        
                        <div className="space-y-4">
                           <h2 className="text-3xl md:text-5xl font-fraunces font-black italic tracking-tight">The Manifested Box.</h2>
                           <p className="text-[#dcb0af] text-xs font-black uppercase tracking-[0.4em] italic">Artisanal Curation Summary</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                           {Object.entries(selectedItems).map(([cat, item]: [string, any]) => (
                             <div key={cat} className="space-y-4 text-center">
                                <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 relative group">
                                   {item ? (
                                     <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                   ) : (
                                     <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/10 italic text-[8px] font-black uppercase tracking-widest">Empty Realm</div>
                                   )}
                                   <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[6px] font-black uppercase tracking-widest">{cat}</div>
                                </div>
                                <p className="font-fraunces font-black text-sm italic">{item?.name || 'Nothing Selected'}</p>
                             </div>
                           ) as any)}
                        </div>

                        <button className="w-full py-8 bg-[#dcb0af] text-white rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-xl hover:bg-white hover:text-[#1a1c24] transition-all">Manifest this Box</button>
                     </motion.div>
                   )}
                </AnimatePresence>

                <div className="flex gap-6 mt-12">
                   {activeStep !== 'boutique' && (
                     <button onClick={prevStep} className="flex-1 py-6 border-2 border-[#1a1c24]/5 bg-white text-[#2d241c]/40 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 hover:border-[#2d241c]/20 hover:text-[#2d241c] transition-all">
                        <ArrowLeft className="w-5 h-5" /> Previous Realm
                     </button>
                   )}
                   {activeStep !== 'review' && (
                     <button 
                        onClick={nextStep} 
                        disabled={!selectedItems[activeStep as keyof typeof selectedItems]}
                        className={`flex-[2] py-6 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-4 transition-all ${selectedItems[activeStep as keyof typeof selectedItems] ? 'bg-[#2d241c] text-white shadow-xl hover:bg-[#dcb0af]' : 'bg-[#1a1c24]/5 text-[#2d241c]/10 cursor-not-allowed'}`}
                     >
                        Next Realm <ChevronRight className="w-5 h-5" />
                     </button>
                   )}
                </div>
             </div>

             {/* Right: Box Summary Sidebar */}
             <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-[#dcb0af]/10 space-y-10">
                   <div className="space-y-2">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-[#dcb0af] italic flex items-center gap-3">
                          <Package className="w-4 h-4" /> Your Ritual Box
                       </h4>
                       <p className="text-2xl font-fraunces font-black italic">Curated Tributes.</p>
                   </div>

                   <div className="space-y-6">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#2d241c]/20">
                         <span>Boutique Selection</span>
                         <span className="text-[#2d241c] italic">{selectedItems.boutique?.name || '—'}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#2d241c]/20">
                         <span>Bakery Selection</span>
                         <span className="text-[#2d241c] italic">{selectedItems.bakery?.name || '—'}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#2d241c]/20">
                         <span>Homemade Selection</span>
                         <span className="text-[#2d241c] italic">{selectedItems.homemade?.name || '—'}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#2d241c]/20">
                         <span>Signature Luxe Box</span>
                         <span className="text-green-500 italic">₹500</span>
                      </div>
                   </div>

                   <div className="pt-10 border-t border-[#1a1c24]/10 space-y-8">
                      <div className="space-y-1">
                         <span className="text-[8px] font-black uppercase tracking-widest text-[#2d241c]/20 italic">Total Ritual Value</span>
                         <p className="text-4xl md:text-5xl font-fraunces font-black italic">₹{total}</p>
                      </div>
                      <div className="bg-[#fbf9f6] p-6 rounded-2xl space-y-3">
                         <div className="flex items-center gap-2 text-[#bfa37e]">
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Loyalty Reward</span>
                         </div>
                         <p className="text-[8px] font-outfit font-medium text-[#2d241c]/40 uppercase tracking-widest">You will earn <span className="text-[#2d241c] font-black">250 Pranavika Points</span> with this box.</p>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
