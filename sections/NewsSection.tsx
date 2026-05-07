import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const filters = ['All', 'Policies', 'Press Releases', 'Statements', 'Activities']

const newsItems = [
  {
    image: '/images/news-1.jpg',
    category: 'Policies',
    date: 'May 7, 2026',
    title: 'APC launches Agricultural Revolution Initiative targeting 2 million farmers nationwide',
  },
  {
    image: '/images/news-2.jpg',
    category: 'Activities',
    date: 'May 6, 2026',
    title: 'Education reform summit: APC commits to digital classrooms in all 774 LGAs',
  },
  {
    image: '/images/news-3.jpg',
    category: 'Press Releases',
    date: 'May 5, 2026',
    title: 'Healthcare transformation: 50 new primary health centers commissioned across Nigeria',
  },
  {
    image: '/images/news-4.jpg',
    category: 'Statements',
    date: 'May 4, 2026',
    title: 'National Security Council commends progress in counter-insurgency operations',
  },
]

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const revealRef = useScrollReveal<HTMLElement>({ childSelector: '.reveal-child' })

  const filtered = activeFilter === 'All'
    ? newsItems
    : newsItems.filter((n) => n.category === activeFilter)

  return (
    <section ref={revealRef} id="news" className="w-full bg-[#F5F5F5] py-16 lg:py-20">
      <div className="section-container">
        {/* Header */}
        <div className="reveal-child mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="font-geist font-bold text-[clamp(28px,3.5vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
                News
              </h2>
              <span className="label-style text-apc-green">NEWS</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-apc-green text-white'
                    : 'bg-apc-green-light text-apc-green hover:bg-apc-green/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="reveal-child bg-white border border-[#E5E5E5] rounded-lg overflow-hidden hover:border-apc-green hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
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

        {/* View All */}
        <div className="reveal-child text-center mt-10">
          <a
            href="#news"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1 text-apc-green font-medium text-sm hover:underline transition-all"
          >
            View All News <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
