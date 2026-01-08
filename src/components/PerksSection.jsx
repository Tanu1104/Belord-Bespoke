const Perks = () => {
  const perks = [
    { title: "Shield Protocol", sub: "2 Year Warranty", icon: "🛡️" },
    { title: "Neural Print", sub: "Custom Engraving", icon: "🖋️" },
    { title: "Prime Access", sub: "Loyalty Rewards", icon: "💎" },
    { title: "Rapid Deploy", sub: "Free Shipping", icon: "🚚" }
  ];

  return (
    <div className="bg-black py-16 px-10 border-b border-zinc-900">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {perks.map((perk, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="text-2xl mb-3 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{perk.icon}</div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-1">{perk.title}</h4>
            <p className="text-zinc-600 text-[10px] uppercase font-bold">{perk.sub}</p>
            <div className="h-0.5 w-0 bg-cyan-500 mt-2 group-hover:w-12 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};