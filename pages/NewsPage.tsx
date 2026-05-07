import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const categories = ['All', 'Campaign', 'Policies', 'Press Releases', 'Statements']

const allNews = [
  {
    image: '/images/tinubu-speech.png',
    category: 'Campaign',
    date: 'May 8, 2026',
    title: 'President Tinubu submits APC expression of interest and nomination forms for 2027 re-election bid',
  },
  {
    image: '/images/featured-2.jpg',
    category: 'Policies',
    date: 'May 7, 2026',
    title: 'President commissions new Abuja light rail project, hails APC infrastructure vision',
  },
  {
    image: '/images/news-1.jpg',
    category: 'Policies',
    date: 'May 6, 2026',
    title: 'APC launches Agricultural Revolution Initiative targeting 2 million farmers nationwide',
  },
  {
    image: '/images/featured-1.jpg',
    category: 'Press Releases',
    date: 'May 6, 2026',
    title: 'APC governors forum meets in Lagos to discuss economic development strategies for 2027',
  },
  {
    image: '/images/news-2.jpg',
    category: 'Policies',
    date: 'May 5, 2026',
    title: 'Education reform summit: APC commits to digital classrooms in all 774 LGAs',
  },
  {
    image: '/images/news-3.jpg',
    category: 'Policies',
    date: 'May 5, 2026',
    title: 'Healthcare transformation: 50 new primary health centers commissioned across Nigeria',
  },
  {
    image: '/images/featured-3.jpg',
    category: 'Statements',
    date: 'May 4, 2026',
    title: 'National Security Council commends progress in counter-insurgency operations',
  },
  {
    image: '/images/news-4.jpg',
    category: 'Statements',
    date: 'May 3, 2026',
    title: 'Vice President Shettima calls on all Nigerians to support Tinubu\'s 2027 re-election',
  },
  {
    image: '/images/city-boys-nigeria.jpg',
    category: 'Campaign',
    date: 'May 2, 2026',
    title: 'City Boys Movement targets one million votes for Tinubu in Oyo State, receives 5 campaign buses',
  },
]

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!revealRef.current) return
    const els = revealRef.current.querySelectorAll('.reveal-item')
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out', delay: 0.2
    })
  }, [])

  const filtered = activeFilter === 'All'
    ? allNews
    : allNews.filter((n) => n.category === activeFilter)

  return (
    <div ref={revealRef} className="pt-16">
      {/* Page Header */}
      <section className="bg-apc-green-dark py-16 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="reveal-item label-style text-apc-gold block mb-3">LATEST UPDATES</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em]">
            News & Updates
          </h1>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 lg:py-20 bg-[#F5F5F5]">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          {/* Filter */}
          <div className="reveal-item flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-5 py-2 rounded-full text-[12px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === c
                    ? 'bg-apc-green text-white'
                    : 'bg-white text-[#4B5563] hover:bg-apc-green-light hover:text-apc-green'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {activeFilter === 'All' && (
            <div className="reveal-item bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 mb-8 group cursor-pointer">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={allNews[0].image}
                    alt={allNews[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-apc-green text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {allNews[0].category}
                    </span>
                    <span className="text-xs text-[#9CA3AF]">{allNews[0].date}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#1A1A1A] leading-snug mb-4">
                    {allNews[0].title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
                    President Bola Tinubu on Thursday submitted his duly completed N100 million worth 
                    All Progressives Congress expression of interest and nomination forms to seek the 
                    party's ticket to contest for a second term at the 2027 general election.
                  </p>
                  <span className="inline-flex items-center gap-1 text-apc-green text-sm font-medium">
                    Read more <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeFilter === 'All' ? filtered.slice(1) : filtered).map((item, i) => (
              <div
                key={i}
                className="reveal-item bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-apc-green-light text-apc-green text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF]">{item.date}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
