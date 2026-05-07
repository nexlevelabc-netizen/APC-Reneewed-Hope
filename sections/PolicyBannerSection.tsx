import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function PolicyBannerSection() {
  const revealRef = useScrollReveal<HTMLElement>({ childSelector: '.reveal-child' })

  return (
    <section
      ref={revealRef}
      id="policy"
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/policy-bg.jpg"
          alt="Abuja Cityscape"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,26,26,0.80) 0%, rgba(26,26,26,0.50) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20">
        <h2 className="reveal-child font-geist font-black text-white leading-[0.95] tracking-[-0.03em] text-[clamp(36px,6vw,72px)] mb-4">
          APC&apos;s Policy Vision
        </h2>
        <p className="reveal-child text-white/80 text-base lg:text-lg max-w-[560px] mx-auto mb-8 leading-relaxed">
          Comprehensive strategies for security, economy, infrastructure, and social development
        </p>
        <div className="reveal-child">
          <a
            href="#manifesto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#manifesto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-3.5 bg-white text-apc-green font-semibold text-[15px] rounded-xl hover:bg-apc-green hover:text-white transition-all duration-300"
          >
            Explore Our Policies
          </a>
        </div>
      </div>
    </section>
  )
}
