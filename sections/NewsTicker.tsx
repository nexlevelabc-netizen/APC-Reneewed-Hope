const tickerItems = [
  { date: 'May 8, 2026', headline: 'APC National Working Committee holds emergency session on party restructuring' },
  { date: 'May 7, 2026', headline: 'President commissions new Abuja light rail project, hails APC infrastructure vision' },
  { date: 'May 6, 2026', headline: 'APC governors forum meets in Lagos to discuss economic development strategies' },
  { date: 'May 5, 2026', headline: 'National Chairman inaugurates new state chapter offices across six geopolitical zones' },
  { date: 'May 4, 2026', headline: 'APC launches nationwide agricultural support program for 500,000 farmers' },
  { date: 'May 3, 2026', headline: 'Party leadership welcomes new defectors from opposition parties in South-East' },
]

export default function NewsTicker() {
  const duplicated = [...tickerItems, ...tickerItems]

  return (
    <section className="w-full bg-apc-green-dark h-14 flex items-center overflow-hidden">
      <div className="ticker-wrapper flex items-center animate-ticker hover:[animation-play-state:paused] whitespace-nowrap">
        {duplicated.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-apc-gold shrink-0" />
            <span className="text-[11px] font-medium text-apc-gold uppercase tracking-wider shrink-0">
              {item.date}
            </span>
            <span className="text-sm text-white/90 font-normal">
              {item.headline}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
