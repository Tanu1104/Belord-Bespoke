const Hero = () => (
  <section className="relative h-[85vh] bg-[#050505] flex items-center overflow-hidden border-b border-zinc-900">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

    <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center relative z-10">
      <div className="w-full lg:w-1/2 text-left">
        <div className="bg-cyan-500 text-black inline-block px-3 py-1 font-black text-[10px] uppercase tracking-tighter mb-6">
          Limited Drop: Series 01
        </div>
        <h2 className="text-6xl md:text-8xl font-black italic leading-[0.8] uppercase mb-6 tracking-tighter text-white">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">UPGRADE</span> <br /> IS HERE.
        </h2>
        <p className="text-zinc-500 max-w-sm mb-8 text-sm uppercase tracking-widest leading-relaxed">
          Low latency neural drivers. <br /> Built for the digital elite.
        </p>
        <button className="group relative px-10 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-black uppercase tracking-widest overflow-hidden transition-all hover:text-black">
          <span className="absolute inset-0 bg-cyan-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10">Initialize Sync →</span>
        </button>
      </div>

      <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
        <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full"></div>
        {/* Placeholder for your earbud/watch image */}
        <img 
          src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000" 
          alt="Product" 
          className="relative z-10 w-full h-auto drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        />
      </div>
    </div>
  </section>
);