import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import NewsTicker from '@/sections/NewsTicker'
import FeaturedSection from '@/sections/FeaturedSection'
import NewsSection from '@/sections/NewsSection'
import PolicyBannerSection from '@/sections/PolicyBannerSection'
import ManifestoSection from '@/sections/ManifestoSection'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 })

    if (headingRef.current) {
      const text = headingRef.current.textContent || ''
      headingRef.current.innerHTML = ''
      const chars: HTMLSpanElement[] = []
      text.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        headingRef.current!.appendChild(span)
        chars.push(span)
      })
      gsap.set(chars, { yPercent: 120 })
      tl.to(chars, {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.2)',
      }, '-=0.1')
    }

    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.4')
    tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
    tl.fromTo(imageRef.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.8')
    tl.fromTo(badgeRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.3')

    return () => { tl.kill() }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full bg-white overflow-hidden pt-16"
      >
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(27,122,61,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center min-h-[calc(100vh-64px)] py-12 lg:py-0">
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <span
              ref={labelRef}
              className="label-style text-apc-green mb-4 opacity-0"
            >
              TINUBU 2027 — RE-ELECTION CAMPAIGN
            </span>

            <h1
              ref={headingRef}
              className="font-geist font-black text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] text-[clamp(40px,6.5vw,80px)] max-w-[650px] mb-6"
            >
              Renewed Hope Continues. Let's Build Together.
            </h1>

            <p
              ref={subtitleRef}
              className="text-[#4B5563] text-base lg:text-lg leading-relaxed max-w-[500px] mb-8 opacity-0"
            >
              President Bola Ahmed Tinubu is seeking your mandate for a second term 
              in January 2027. Join the movement to consolidate the gains and 
              continue Nigeria's path to progress.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <Link
                to="/manifesto"
                className="inline-flex items-center px-7 py-3.5 bg-apc-green text-white font-semibold text-[15px] rounded-xl hover:bg-apc-green-dark hover:scale-[1.02] transition-all duration-200"
              >
                Our Manifesto
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center px-7 py-3.5 bg-white text-apc-green font-semibold text-[15px] rounded-xl border-[1.5px] border-apc-green hover:bg-apc-green hover:text-white transition-all duration-200"
              >
                Join the Campaign
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8 mt-12 opacity-0" ref={(el) => { if (el) gsap.to(el, { opacity: 1, delay: 1.2, duration: 0.5 }) }}>
              <div>
                <p className="text-3xl font-bold text-apc-green">25M+</p>
                <p className="text-sm text-[#4B5563]">Party Members</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-apc-green">36</p>
                <p className="text-sm text-[#4B5563]">States Covered</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-apc-green">774</p>
                <p className="text-sm text-[#4B5563]">Local Govts</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-10 lg:mt-0 relative">
            <div ref={imageRef} className="relative opacity-0">
              <div
                className="absolute -top-4 -left-4 w-full h-full border-[3px] border-apc-green rounded-xl pointer-events-none"
                style={{ maxWidth: '400px' }}
              />
              <img
                src="/images/tinubu-hero.png"
                alt="President Bola Ahmed Tinubu"
                className="w-full max-w-[400px] rounded-xl object-cover shadow-card"
                style={{ aspectRatio: '3/4' }}
              />
              <div
                ref={badgeRef}
                className="absolute -bottom-4 -left-6 bg-white rounded-lg shadow-card px-5 py-3 opacity-0"
              >
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  <span className="text-apc-green">2027</span> Re-Election Campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsTicker />
      <FeaturedSection />
      <NewsSection />
      <PolicyBannerSection />
      <ManifestoSection />
    </div>
  )
}
