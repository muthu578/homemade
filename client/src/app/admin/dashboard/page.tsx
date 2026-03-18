"use client";
import React, { useEffect, useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  TrendingUp, Users, ShoppingBag, Package, AlertTriangle, 
  ArrowUpRight, ArrowDownRight, Calendar, Filter, Download
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

const COLORS = ['#F4C2C2', '#6C541E', '#E8D5C4'];

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background p-4 lg:p-10 font-sans text-secondary">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">Executive Dashboard</h1>
            <p className="text-muted-foreground mt-1 font-medium italic">Welcome back, Pranavika. Here's your business at a glance.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 glass rounded-xl border border-border flex items-center gap-2 font-bold text-sm hover:bg-muted transition-all">
              <Calendar className="w-4 h-4" />
              <span>Last 7 Days</span>
            </button>
            <button className="px-5 py-2.5 bg-secondary text-background rounded-xl flex items-center gap-2 font-bold text-sm hover:shadow-lg transition-all active:scale-95">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Revenue', value: '$24,560.00', change: '+12.5%', icon: TrendingUp, color: 'primary' },
            { label: 'Active Orders', value: '48', change: '+8%', icon: ShoppingBag, color: 'secondary' },
            { label: 'Repeat Customers', value: '82%', change: '+5.4%', icon: Users, color: 'accent' },
            { label: 'Low Stock Items', value: '5', change: '-2', icon: AlertTriangle, color: 'destructive' }
          ].map((kpi, i) => (
            <div key={i} className="group relative p-8 rounded-[2rem] glass border border-border shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex justify-between items-start mb-6">
                 <div className={cn("p-4 rounded-2xl bg-muted/50 group-hover:scale-110 transition-transform", 
                   kpi.color === 'primary' && "text-primary bg-primary/10",
                   kpi.color === 'secondary' && "text-secondary bg-secondary/10",
                   kpi.color === 'accent' && "text-accent-foreground bg-accent/20",
                   kpi.color === 'destructive' && "text-destructive bg-destructive/10"
                 )}>
                   <kpi.icon className="w-6 h-6" />
                 </div>
                 <div className={cn("flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full",
                   kpi.change.startsWith('+') ? "text-emerald-600 bg-emerald-50" : "text-destructive bg-destructive/50"
                 )}>
                   {kpi.change.startsWith('+') ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                   {kpi.change}
                 </div>
               </div>
               <p className="text-muted-foreground font-medium text-sm tracking-widest uppercase">{kpi.label}</p>
               <h3 className="text-3xl font-serif font-bold mt-2">{kpi.value}</h3>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sales Performance (Line Chart) */}
          <div className="lg:col-span-2 p-8 rounded-[2.5rem] glass border border-border shadow-xl">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-serif font-bold">Sales Performance</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary" /> <span className="text-xs font-bold opacity-60">Boutique</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-secondary" /> <span className="text-xs font-bold opacity-60">Bakery</span></div>
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E2D6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B5E4F', fontSize: 12, fontWeight: 600}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B5E4F', fontSize: 12, fontWeight: 600}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', background: 'white'}}
                    itemStyle={{fontWeight: 700}}
                  />
                  <Line type="monotone" dataKey="boutique" stroke="#F4C2C2" strokeWidth={5} dot={{ r: 6, fill: '#F4C2C2' }} activeDot={{ r: 10, strokeWidth: 0 }} />
                  <Line type="monotone" dataKey="bakery" stroke="#6C541E" strokeWidth={5} dot={{ r: 6, fill: '#6C541E' }} activeDot={{ r: 10, strokeWidth: 0 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Insights (Pie Chart) */}
          <div className="p-8 rounded-[2.5rem] glass border border-border shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-serif font-bold mb-10 text-center">Revenue Share</h3>
            <div className="h-[300px]">
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
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {salesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 text-center">
               <p className="text-sm font-medium text-muted-foreground italic">Boutique leads with <span className="text-secondary font-bold">45%</span> of total monthly share.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Inventory & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Inventory Status Table */}
          <div className="p-8 rounded-[2.5rem] glass border border-border shadow-xl">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-2xl font-serif font-bold">Inventory Alerts</h3>
               <button className="text-sm font-bold text-primary hover:underline">View All</button>
             </div>
             <div className="space-y-4">
                {[
                  { name: 'Silk Ribbon (Pink)', stock: 12, status: 'Low', color: 'primary' },
                  { name: 'Belgium Cocoa', stock: 5, status: 'Critical', color: 'destructive' },
                  { name: 'Gift Box Large', stock: 45, status: 'Healthy', color: 'accent' },
                  { name: 'Floral Thread', stock: 8, status: 'Low', color: 'primary' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/40 border border-border/30 hover:shadow-md transition-all">
                     <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border border-border/50 shadow-sm transition-all", 
                          item.color === 'primary' && "bg-primary/5 text-primary",
                          item.color === 'destructive' && "bg-destructive/10 text-destructive",
                          item.color === 'accent' && "bg-accent/20 text-accent-foreground"
                        )}>
                          {item.stock}
                        </div>
                        <div>
                          <p className="font-bold text-secondary">{item.name}</p>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.status} Stock</p>
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <button className="px-4 py-2 bg-secondary text-background rounded-lg text-xs font-bold hover:scale-105 transition-all">Restock</button>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Top Products (Bar Chart) */}
          <div className="p-8 rounded-[2.5rem] glass border border-border shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-10">Top Selling Products</h3>
            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} layout="vertical" margin={{ left: 40, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#2D1B08', fontSize: 13, fontWeight: 700}} width={100} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)'}} />
                  <Bar dataKey="sales" fill="#F4C2C2" radius={[0, 15, 15, 0]} barSize={35}>
                    {topProducts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.category === 'Boutique' ? '#F4C2C2' : entry.category === 'Bakery' ? '#6C541E' : '#E8D5C4'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Dashboard Footer / Actions */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 font-bold hover:text-primary transition-colors"><Filter className="w-5 h-5" /> Filter Views</button>
            <button className="flex items-center gap-2 font-bold hover:text-primary transition-colors"><Users className="w-5 h-5" /> Staff Access</button>
          </div>
          <p className="text-sm font-medium tracking-widest uppercase">Pranavika’s Sweet & Chic • Admin Portal v1.0.4</p>
        </div>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Quicksand', sans-serif; }
      `}</style>
    </div>
  );
}
