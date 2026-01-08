import React from 'react';
import './App.css';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-[#0f1115]/90 backdrop-blur-xl border-b border-cyan-500/10 px-6 lg:px-12 py-4 flex items-center justify-between">
    <div className="flex items-center gap-10">
      <h1 className="text-2xl font-black italic tracking-tighter text-white group cursor-pointer">
        NEON<span className="text-cyan-400 group-hover:text-fuchsia-500 transition-colors">SONIC</span>
      </h1>
      <div className="hidden lg:flex gap-8 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Neural Audio</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Tactical Gear</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">The Hub</a>
      </div>
    </div>
    
    <div className="flex items-center gap-6">
      <button className="px-5 py-1.5 border border-fuchsia-500 text-fuchsia-500 font-bold text-[10px] uppercase tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all">
        Cart [0]
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
    {/* Subtle grid for texture */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center relative z-10">
      <div className="w-full lg:w-3/5 text-left">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
          <span className="text-cyan-400 font-black text-[10px] uppercase tracking-widest">Live Drop: Series X-1</span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black italic leading-[0.85] uppercase mb-8 tracking-tighter text-white">
          AUDIO <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">EVOLVED.</span>
        </h2>
        
        <p className="text-zinc-400 max-w-md mb-10 text-sm uppercase tracking-widest leading-relaxed border-l-2 border-fuchsia-500 pl-6">
          Zero-latency neural synchronization. <br /> Built for the digital elite.
        </p>

        <div className="flex gap-4">
          <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-tighter hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Initialize Order
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/5 mt-16 lg:mt-0 relative">
        <div className="absolute -inset-10 bg-cyan-500/10 blur-[80px] rounded-full"></div>
        <img 
          src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=1000" 
          alt="Product" 
          className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(6,182,212,0.2)] grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  </section>
);

const Perks = () => {
  const perks = [
    { title: "Shield Protocol", sub: "2 Year Warranty" },
    { title: "Neural Print", sub: "Custom Engraving" },
    { title: "Prime Access", sub: "Loyalty Credits" },
    { title: "Rapid Deploy", sub: "Free Shipping" }
  ];

  return (
    <div className="py-20 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {perks.map((perk, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all group">
            <h4 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-1 group-hover:text-white transition-colors">{perk.title}</h4>
            <p className="text-zinc-500 text-[10px] uppercase font-bold">{perk.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-cyan-500 text-black py-1.5 text-center text-[9px] font-black tracking-[0.3em] uppercase">
        System Notice: 5% Credits back on all Prepaid Orders // Code: NEONHEAD
      </div>
      <Navbar />
      <Hero />
      <div className="bg-white text-black py-4 overflow-hidden border-y border-white">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-2xl font-black uppercase italic">
           <span>Neural Sync Drivers — Zero Lag — 60H Battery — Titanium Shell — </span>
           <span>Neural Sync Drivers — Zero Lag — 60H Battery — Titanium Shell — </span>
        </div>
      </div>
      <Perks />
    </div>
  );
}