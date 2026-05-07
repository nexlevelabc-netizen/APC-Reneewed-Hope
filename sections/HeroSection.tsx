import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Label fade in
    tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 })

    // Heading character animation
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
      tl.to(chars, {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.2)',
      }, '-=0.1')
      gsap.set(chars, { yPercent: 120 })
    }

    // Subtitle
    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.4')

    // CTAs
    tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')

    // Image
    tl.fromTo(imageRef.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.8')

    // Floating card
    tl.fromTo(cardRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.3')

    // Scroll line
    tl.fromTo(lineRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full bg-white overflow-hidden pt-16"
    >
      {/* Subtle gradient wash */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[60%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(27,122,61,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center min-h-[calc(100vh-64px)] py-12 lg:py-0">
        {/* Left Column - Text */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <span
            ref={labelRef}
            className="label-style text-apc-green mb-6 opacity-0"
          >
            ALL PROGRESSIVES CONGRESS
          </span>

          <h1
            ref={headingRef}
            className="font-geist font-black text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] text-[clamp(42px,7vw,84px)] max-w-[600px] mb-6"
          >
            Building a Nigeria that works for all.
          </h1>

          <p
            ref={subtitleRef}
            className="text-[#4B5563] text-base lg:text-lg leading-relaxed max-w-[480px] mb-8 opacity-0"
          >
            United in purpose. Committed to progress. Dedicated to every Nigerian.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
            <a
              href="#manifesto"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#manifesto')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-7 py-3.5 bg-apc-green text-white font-semibold text-[15px] rounded-xl hover:bg-apc-green-dark hover:scale-[1.02] transition-all duration-200"
            >
              Our Manifesto
            </a>
            <a
              href="#structure"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#structure')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-7 py-3.5 bg-white text-apc-green font-semibold text-[15px] rounded-xl border-[1.5px] border-apc-green hover:bg-apc-green hover:text-white transition-all duration-200"
            >
              Join the Party
            </a>
          </div>

          {/* Scroll indicator */}
          <div ref={lineRef} className="hidden lg:block mt-16 opacity-0">
            <div className="w-[2px] h-10 bg-apc-green animate-pulse-line mx-0" />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-10 lg:mt-0 relative">
          <div ref={imageRef} className="relative opacity-0">
            {/* Green border frame */}
            <div
              className="absolute -top-4 -left-4 w-full h-full border-[3px] border-apc-green rounded-xl pointer-events-none"
              style={{ maxWidth: '380px' }}
            />
            <img
              src="/images/hero-portrait.jpg"
              alt="APC Leadership"
              className="w-full max-w-[380px] rounded-xl object-cover shadow-card"
              style={{ aspectRatio: '3/4' }}
            />

            {/* Floating card */}
            <div
              ref={cardRef}
              className="absolute -bottom-4 -left-6 bg-white rounded-lg shadow-card px-5 py-3 opacity-0"
            >
              <p className="text-sm font-semibold text-[#1A1A1A]">
                Est. 2013 <span className="text-apc-green mx-1">|</span> 25M+ Members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
