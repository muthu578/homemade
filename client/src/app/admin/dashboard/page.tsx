"use client";
import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  TrendingUp, Users, ShoppingBag, Package, AlertTriangle,
  ArrowUpRight, ArrowDownRight, Calendar, Filter, Download, LogOut
} from 'lucide-react';
import { cn } from "@/lib/utils";

const salesData = [
  { name: 'Mon', boutique: 4000, bakery: 2400, homemade: 2400 },
  { name: 'Tue', boutique: 3000, bakery: 1398, homemade: 2210 },
  { name: 'Wed', boutique: 2000, bakery: 9800, homemade: 2290 },
  { name: 'Thu', boutique: 2780, bakery: 3908, homemade: 2000 },
  { name: 'Fri', boutique: 1890, bakery: 4800, homemade: 2181 },
  { name: 'Sat', boutique: 2390, bakery: 3800, homemade: 2500 },
  { name: 'Sun', boutique: 3490, bakery: 4300, homemade: 2100 },
];

const topProducts = [
  { name: 'Silk Dress', sales: 400, category: 'Boutique' },
  { name: 'Velvet Gown', sales: 300, category: 'Boutique' },
  { name: 'Floral Cake', sales: 200, category: 'Bakery' },
  { name: 'Cupcake Box', sales: 180, category: 'Bakery' },
  { name: 'Meal Box A', sales: 150, category: 'Homemade' },
];

const COLORS = ['#e4a5a5', '#63452b', '#d4af37'];

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background p-4 lg:p-10 font-sans text-secondary selection:bg-primary/20">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-5xl font-playfair font-bold tracking-tight text-foreground">Executive Portal</h1>
            <p className="text-muted-foreground mt-2 font-medium italic text-lg opacity-80">Welcome back, Pranavika. Your empire at a glance.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 glass rounded-2xl border border-border flex items-center gap-2 font-bold text-sm hover:bg-white/60 transition-all shadow-sm">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Last 7 Days</span>
            </button>
            <button className="px-6 py-3 bg-secondary text-background rounded-2xl flex items-center gap-2 font-bold text-sm hover:shadow-2xl transition-all active:scale-95 group">
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Export Report</span>
            </button>
            <button
              onClick={() => window.location.href = '/login'}
              className="w-12 h-12 glass rounded-2xl border border-border flex items-center justify-center text-destructive hover:bg-destructive hover:text-white transition-all shadow-sm"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Total Revenue', value: '$24,560.00', change: '+12.5%', icon: TrendingUp, color: 'primary' },
            { label: 'Active Orders', value: '48', change: '+8%', icon: ShoppingBag, color: 'secondary' },
            { label: 'Repeat Customers', value: '82%', change: '+5.4%', icon: Users, color: 'accent' },
            { label: 'Low Stock Items', value: '5', change: '-2', icon: AlertTriangle, color: 'destructive' }
          ].map((kpi, i) => (
            <div key={i} className="group relative p-10 rounded-[3rem] glass border border-white shadow-soft hover:-translate-y-2 transition-all duration-500 bg-white/30 backdrop-blur-3xl">
              <div className="flex justify-between items-start mb-8">
                <div className={cn("p-5 rounded-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm",
                  kpi.color === 'primary' && "text-primary bg-primary/10",
                  kpi.color === 'secondary' && "text-secondary bg-secondary/10",
                  kpi.color === 'accent' && "text-accent bg-accent/10",
                  kpi.color === 'destructive' && "text-destructive bg-destructive/10"
                )}>
                  <kpi.icon className="w-7 h-7" />
                </div>
                <div className={cn("flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest",
                  kpi.change.startsWith('+') ? "text-emerald-700 bg-emerald-50" : "text-destructive bg-destructive/10"
                )}>
                  {kpi.change.startsWith('+') ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {kpi.change}
                </div>
              </div>
              <p className="text-muted-foreground font-bold text-[10px] tracking-[0.2em] uppercase opacity-70">{kpi.label}</p>
              <h3 className="text-4xl font-playfair font-bold mt-2 text-foreground">{kpi.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sales Performance (Line Chart) */}
          <div className="lg:col-span-2 p-10 rounded-[4rem] glass border border-white shadow-soft bg-white/20">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-playfair font-bold text-foreground">Sales Performance</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-primary shadow-sm" /> <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Boutique</span></div>
                <div className="flex items-center gap-2.5"><div className="w-3 h-3 rounded-full bg-secondary shadow-sm" /> <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Bakery</span></div>
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#E8E2D6" opacity={0.5} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#8b735b', fontSize: 11, fontWeight: 700 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8b735b', fontSize: 11, fontWeight: 700 }} />
                  <Tooltip
                    contentStyle={{ borderRadius: '2rem', border: 'none', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)' }}
                    itemStyle={{ fontWeight: 800, fontSize: '13px' }}
                  />
                  <Line type="monotone" dataKey="boutique" stroke="#e4a5a5" strokeWidth={6} dot={{ r: 0 }} activeDot={{ r: 10, strokeWidth: 0, fill: '#e4a5a5' }} />
                  <Line type="monotone" dataKey="bakery" stroke="#63452b" strokeWidth={6} dot={{ r: 0 }} activeDot={{ r: 10, strokeWidth: 0, fill: '#63452b' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Share (Pie Chart) */}
          <div className="p-10 rounded-[4rem] glass border border-white shadow-soft bg-white/20 relative overflow-hidden flex flex-col items-center">
            <h3 className="text-3xl font-playfair font-bold mb-12 text-foreground">Revenue Share</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Boutique', value: 45 },
                      { name: 'Bakery', value: 35 },
                      { name: 'Homemade', value: 20 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={125}
                    paddingAngle={10}
                    dataKey="value"
                  >
                    {[1, 2, 3].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80 transition-opacity cursor-pointer" />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 text-center bg-primary/5 p-6 rounded-3xl border border-primary/10">
              <p className="text-sm font-medium text-muted-foreground italic">Boutique leads with <span className="text-primary font-bold">45%</span> of total share.</p>
            </div>
          </div>
        </div>

        {/* Inventory & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-10 rounded-[4rem] glass border border-white shadow-soft bg-white/20">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-playfair font-bold text-foreground">Inventory Alerts</h3>
              <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline px-4 py-2 bg-primary/5 rounded-full transition-all">View All Catalog</button>
            </div>
            <div className="space-y-5">
              {[
                { name: 'Silk Ribbon (Pink)', stock: 12, status: 'Low Stock', color: 'primary' },
                { name: 'Belgium Cocoa', stock: 5, status: 'Critical', color: 'destructive' },
                { name: 'Gift Box Large', stock: 45, status: 'Healthy', color: 'accent' },
                { name: 'Floral Thread', stock: 8, status: 'Low Stock', color: 'primary' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/40 border border-white hover:shadow-lg transition-all duration-500 hover:-translate-x-1">
                  <div className="flex items-center gap-6">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-inner",
                      item.color === 'primary' && "bg-primary/10 text-primary",
                      item.color === 'destructive' && "bg-destructive/10 text-destructive",
                      item.color === 'accent' && "bg-accent/10 text-accent"
                    )}>
                      {item.stock}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-secondary">{item.name}</p>
                      <p className={cn("text-[10px] font-bold uppercase tracking-widest mt-1",
                        item.color === 'primary' && "text-primary",
                        item.color === 'destructive' && "text-destructive",
                        item.color === 'accent' && "text-emerald-600"
                      )}>{item.status}</p>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-secondary text-background rounded-xl text-xs font-bold hover:scale-105 transition-all shadow-md">Restock</button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[4rem] glass border border-white shadow-soft bg-white/20">
            <h3 className="text-3xl font-playfair font-bold mb-10 text-foreground">Top Performing Products</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} layout="vertical" margin={{ left: 40, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#2d1b08', fontSize: 13, fontWeight: 700 }} width={120} />
                  <Tooltip cursor={{ fill: 'rgba(228, 165, 165, 0.1)' }} contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 40px -5px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="sales" fill="#e4a5a5" radius={[0, 20, 20, 0]} barSize={40}>
                    {topProducts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.category === 'Boutique' ? '#e4a5a5' : entry.category === 'Bakery' ? '#63452b' : '#d4af37'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <div className="flex items-center gap-10">
            <button className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"><Filter className="w-4 h-4" /> Filter Views</button>
            <button className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2"><Users className="w-4 h-4" /> Staff Access</button>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">Creations • Executive Suite v2.0</p>
        </div>
      </div>
    </div>
  );
}
