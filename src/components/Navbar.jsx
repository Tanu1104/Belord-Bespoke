const Navbar = () => (
  <nav className="sticky top-0 z-[100] bg-black/80 backdrop-blur-lg border-b border-cyan-500/30 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-12">
      <h1 className="text-2xl font-black italic tracking-tighter text-white">
        CYBER<span className="text-cyan-400 drop-shadow-[0_0_5px_cyan]">GEAR</span>
      </h1>
      <div className="hidden lg:flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Neural Audio</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Tactical Gear</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Drop Zone</a>
      </div>
    </div>
    
    <div className="flex items-center gap-6">
      <div className="relative hidden md:block">
        <input type="text" placeholder="SEARCH SYSTEM..." className="bg-zinc-900 border border-zinc-800 py-1 px-4 text-[10px] w-64 focus:border-cyan-500 outline-none transition-all"/>
        <span className="absolute right-3 top-1.5 text-zinc-600 text-[10px]">CMD+K</span>
      </div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:text-cyan-400 text-zinc-400 font-bold text-xs uppercase">Login</span>
        <div className="relative border-l border-zinc-700 pl-4">
            <span className="text-cyan-400 font-bold text-xs">CART [01]</span>
        </div>
      </div>
    </div>
  </nav>
);