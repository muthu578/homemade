"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, Search, ArrowRight, Heart, Star, ShoppingBag, Utensils, Cake, Sparkles } from 'lucide-react';
import { Logo } from '../components/ui/Logo';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-background selection:bg-primary/30 scroll-smooth">
      {/* Navbar Section */}
      <nav className="sticky top-0 z-50 glass border-b border-border shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="transition-all hover:opacity-80 active:scale-95">
                <Logo />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/boutique" className="group flex items-center space-x-1.5 text-secondary font-serif font-medium text-lg relative transition-all hover:text-primary">
                <ShoppingBag className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                <span>Boutique</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </Link>
              <Link href="/bakery" className="group flex items-center space-x-1.5 text-secondary font-serif font-medium text-lg relative transition-all hover:text-primary">
                <Cake className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                <span>Bakery</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </Link>
              <Link href="/homemade" className="group flex items-center space-x-1.5 text-secondary font-serif font-medium text-lg relative transition-all hover:text-primary">
                <Utensils className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                <span>Homemade</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </Link>
              <Link href="/blog" className="group text-secondary font-serif font-medium text-lg relative transition-all hover:text-primary">
                <span>Blog</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden sm:flex p-3 rounded-xl hover:bg-muted text-secondary/80 hover:text-secondary transition-all hover:rotate-3 shadow-xs">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-xl hover:bg-muted text-secondary/80 hover:text-secondary transition-all hover:-rotate-3 relative shadow-xs">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-secondary text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-background shadow-md">
                  2
                </span>
              </button>
              <button className="p-3 rounded-xl bg-secondary text-background hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="hidden lg:inline-block font-medium text-sm">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--primary),transparent_60%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border border-primary/20 bg-primary/10 text-secondary animate-bounce-slow">
                <Sparkles className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-bold tracking-wider uppercase">New Spring Collection 2026</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-secondary">
                Where Fashion Meets <span className="text-primary italic">Flavor</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-sans max-w-lg">
                Discover the ultimate blend of chic boutique fashion, artisanal bakery delights, and the warmth of homemade meals. Curated by <span className="text-secondary font-black tracking-widest uppercase">Pranavika</span>.
              </p>
              
              <div className="flex flex-wrap gap-5 pt-4">
                <Link href="/boutique" className="group px-8 py-4 bg-secondary text-background rounded-2xl font-bold text-lg inline-flex items-center space-x-3 transition-all hover:shadow-[0_20px_40px_-15px_rgba(108,84,30,0.3)] hover:-translate-y-1 active:scale-95">
                  <span>Shop Boutique</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link href="/bakery" className="px-8 py-4 bg-primary/20 text-secondary border border-primary font-bold text-lg rounded-2xl hover:bg-primary/30 transition-all hover:shadow-[0_20px_40px_-15px_rgba(244,194,194,0.3)] hover:-translate-y-1 active:scale-95">
                  Order Treats
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-border mt-12 animate-fade-in">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-muted overflow-hidden bg-cover bg-center ring-2 ring-primary/20 shadow-xl" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${i}')` }} />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-secondary">2.5k+ Happy Customers</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1 font-medium">(4.9/5 stars)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl opacity-60 -z-10 animate-pulse-slow" />
              
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Image Grid with Glassmorphism Frames */}
                <div className="space-y-6 pt-12 translate-y-6 animate-float">
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] border-4 border-white aspect-[4/5] bg-muted/20">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" alt="Boutique Fashion" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-white font-serif text-xl font-bold">Luxe Silk Dresses</p>
                      <p className="text-white/80 text-sm font-medium">Boutique Exclusive</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] border-4 border-white aspect-[5/4] bg-muted/20">
                    <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80" alt="Fresh Bakery" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-white font-serif text-xl font-bold">Floral Tiers</p>
                      <p className="text-white/80 text-sm font-medium">Bakery Specials</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 animate-float-delayed">
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] border-4 border-white aspect-square bg-muted/20 shadow-primary/20">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" alt="Homemade Meals" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-white font-serif text-xl font-bold">Gourmet Bowls</p>
                      <p className="text-white/80 text-sm font-medium">Homemade Warmth</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] border-4 border-primary/20 aspect-[4/5] glass p-4 rotate-3 group-hover:rotate-0">
                    <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-cover bg-center group-hover:scale-105 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80')" }}>
                       <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                    </div>
                    <div className="bg-white absolute -top-4 -right-4 w-16 h-16 rounded-full shadow-xl flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all cursor-pointer">
                      <Heart className="w-8 h-8 text-primary fill-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Labels */}
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-[2rem] border border-primary/30 shadow-2xl shadow-primary/10 animate-bounce-slow">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6 fill-primary" />
                   </div>
                   <div>
                    <p className="text-sm font-bold tracking-[0.2em] text-secondary font-serif uppercase">CURATED BY</p>
                    <p className="text-lg font-bold text-secondary uppercase tracking-widest leading-tight mt-0.5">PRANAVIKA S.</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">Weekly <span className="text-primary italic">Spotlight</span></h2>
              <p className="text-lg text-muted-foreground max-w-lg font-medium italic">Our most-loved pieces and desserts chosen just for you.</p>
            </div>
            <Link href="/shop" className="group inline-flex items-center space-x-2 text-secondary font-bold text-lg border-b-2 border-primary pb-1 transition-all hover:pr-4">
              <span>View All Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted/10 mb-6 border border-border/50 group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img src={`https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&sig=${item}`} alt="Product" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="p-3 rounded-full glass hover:bg-white text-secondary transition-all shadow-lg active:scale-95">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-10 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <button className="w-full py-3.5 bg-secondary text-background rounded-xl font-bold text-sm shadow-xl flex items-center justify-center space-x-2 active:scale-95 transition-all">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="space-y-1 px-2">
                  <div className="flex justify-between items-center capitalize">
                    <h3 className="font-serif text-xl font-bold text-secondary group-hover:text-primary transition-colors">Floral Silk Dress</h3>
                    <span className="font-bold text-secondary">$129.00</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-tight">Boutique • SS'26 Collection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Experience Tabs Section (Preview) */}
      <section className="py-24 bg-background border-t border-border">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-20">
            <div className="space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-secondary">A Curated <span className="text-primary italic">Lifestyle</span></h2>
              <p className="text-muted-foreground text-lg italic">Switch between our distinct worlds with a single tap.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 {title: 'The Boutique', icon: ShoppingBag, color: 'primary', desc: 'Luxury attire & handmade fabrics for the modern soul.'},
                 {title: 'The Bakery', icon: Cake, color: 'secondary', desc: 'Custom 3-tier floral cakes & artisanal gourmet treats.'},
                 {title: 'The Kitchen', icon: Utensils, color: 'accent', desc: 'Homestyle meals with organic ingredients, delivered warm.'}
               ].map((cat, i) => (
                 <div key={i} className="group relative p-10 rounded-[3rem] glass border border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-left bg-white/40">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-3xl bg-background border border-border shadow-lg flex items-center justify-center text-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-8 overflow-hidden group-hover:bg-primary/10">
                        <cat.icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-secondary mb-4 capitalize">{cat.title}</h3>
                      <p className="text-muted-foreground mb-10 text-lg leading-relaxed">{cat.desc}</p>
                      <button className="flex items-center space-x-2 text-primary font-bold text-lg group-hover:translate-x-2 transition-all">
                        <span>Explore Portal</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-secondary p-12 lg:p-24 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,var(--primary),transparent_50%)] opacity-30" />
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-serif font-bold text-background leading-tight">Join the <span className="text-primary italic">Inner Circle</span></h2>
              <p className="text-background/70 text-xl font-medium max-w-xl mx-auto italic">Receive exclusive fashion drops, secret recipes, and VIP bakery access directly in your inbox.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                 <input type="email" placeholder="Your beautiful email address..." className="flex-1 px-8 py-5 bg-background/10 border border-background/20 rounded-2xl text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary shadow-2xl backdrop-blur-md" />
                 <button className="px-10 py-5 bg-primary text-secondary font-bold text-lg rounded-2xl hover:scale-[1.03] transition-all shadow-2xl active:scale-95">Subscribe</button>
              </div>
              <p className="text-background/40 text-sm font-medium">By joining, you agree to our chic privacy policy.</p>
            </div>
         </div>
      </section>

      {/* Sticky Quick Actions (Bottom Mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-4 bg-secondary/90 backdrop-blur-xl px-8 py-5 rounded-full border border-white/10 shadow-2xl shadow-black/50 w-[90%] justify-between">
         <button className="flex flex-col items-center gap-1.5 transition-all text-background/60 hover:text-primary">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Shop</span>
         </button>
         <button className="flex flex-col items-center gap-1.5 transition-all text-background/60 hover:text-primary">
            <Cake className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Bake</span>
         </button>
         <div className="w-14 h-14 bg-primary rounded-full -translate-y-12 border-8 border-background/10 shadow-3xl shadow-primary/20 flex items-center justify-center text-secondary relative group active:scale-90 transition-all">
            <ShoppingCart className="w-7 h-7" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-background text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary">2</div>
         </div>
         <button className="flex flex-col items-center gap-1.5 transition-all text-background/60 hover:text-primary">
            <Utensils className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Eat</span>
         </button>
         <button className="flex flex-col items-center gap-1.5 transition-all text-background/60 hover:text-primary">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Me</span>
         </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-1.5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
