import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const featuredItems = [
  {
    image: '/images/featured-1.jpg',
    tag: 'Press Conference',
    title: 'National Chairman Addresses Media on Party Reforms and 2027 Strategy',
    date: 'May 7, 2026',
    excerpt: 'The All Progressives Congress outlines comprehensive reforms ahead of the next electoral cycle.',
  },
  {
    image: '/images/featured-2.jpg',
    tag: 'Infrastructure',
    title: 'Second Niger Bridge Project Reaches 85% Completion Milestone',
    date: 'May 5, 2026',
    excerpt: 'Major infrastructure projects across the nation continue to advance under APC leadership.',
  },
  {
    image: '/images/featured-3.jpg',
    tag: 'Leadership',
    title: 'NWC Inaugurates New Committee on Party Discipline and Welfare',
    date: 'May 3, 2026',
    excerpt: 'The National Working Committee strengthens internal party governance structures.',
  },
]

export default function FeaturedSection() {
  const revealRef = useScrollReveal<HTMLElement>({ childSelector: '.reveal-child' })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section ref={revealRef} className="w-full bg-white py-16 lg:py-20">
      <div className="section-container">
        {/* Header */}
        <div className="reveal-child flex items-center justify-between mb-8">
          <h2 className="font-geist font-bold text-[clamp(28px,3.5vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
            Updates
          </h2>
          <a
            href="#news"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-apc-green hover:underline transition-all"
          >
            View All <span className="text-lg">&rarr;</span>
          </a>
        </div>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredItems.map((item, i) => (
              <div
                key={i}
                className="reveal-child min-w-[300px] sm:min-w-[360px] lg:min-w-0 lg:flex-1 bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 snap-start cursor-pointer group"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-apc-green text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-semibold text-[#1A1A1A] leading-snug mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mb-2">{item.date}</p>
                  <p className="text-sm text-[#4B5563] line-clamp-2 leading-relaxed">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows (desktop only) */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-5 top-[30%] w-10 h-10 bg-apc-green text-white rounded-full items-center justify-center shadow-lg hover:bg-apc-green-dark transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-5 top-[30%] w-10 h-10 bg-apc-green text-white rounded-full items-center justify-center shadow-lg hover:bg-apc-green-dark transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
