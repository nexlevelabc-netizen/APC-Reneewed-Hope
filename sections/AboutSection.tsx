import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '@/hooks/useScrollReveal'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const revealRef = useScrollReveal<HTMLElement>({ childSelector: '.reveal-child' })
  const collageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!collageRef.current) return
    const images = collageRef.current.querySelectorAll('.collage-img')

    const triggers: ScrollTrigger[] = []

    images.forEach((img, i) => {
      const st = ScrollTrigger.create({
        trigger: img,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(img,
            { opacity: 0, y: 60, scale: 1.05 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.15, ease: 'power2.out' }
          )
        },
        once: true,
      })
      triggers.push(st)
    })

    return () => triggers.forEach((st) => st.kill())
  }, [])

  return (
    <section ref={revealRef} id="about" className="w-full bg-white py-20 lg:py-24">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="w-full lg:w-[45%]">
            <span className="reveal-child label-style text-apc-green block mb-4">
              ABOUT APC
            </span>
            <h2 className="reveal-child font-geist font-bold text-[clamp(28px,3.5vw,42px)] text-[#1A1A1A] tracking-[-0.02em] mb-6">
              A Party of Progress
            </h2>

            <blockquote className="reveal-child border-l-[3px] border-apc-green pl-5 mb-6">
              <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-[#2D2D2D] leading-relaxed">
                &ldquo;Progress for all Nigerians, guided by unity, integrity, and service.&rdquo;
              </p>
            </blockquote>

            <p className="reveal-child text-[#4B5563] leading-relaxed mb-6 max-w-[440px]">
              Founded in 2013 through the merger of Nigeria&apos;s major opposition parties, the All Progressives Congress
              has grown into a movement representing millions of Nigerians. Our philosophy is rooted in social democracy,
              progressive governance, and inclusive development for every citizen.
            </p>

            <a
              href="#about"
              onClick={(e) => e.preventDefault()}
              className="reveal-child inline-flex items-center gap-1 text-apc-green font-medium text-sm hover:underline transition-all"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>

          {/* Right - Photo Collage */}
          <div ref={collageRef} className="w-full lg:w-[55%] relative h-[400px] lg:h-[500px]">
            <div
              className="collage-img absolute top-0 left-0 w-[60%] rounded-lg shadow-card overflow-hidden opacity-0"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="/images/about-collage-1.jpg"
                alt="APC Rally"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="collage-img absolute bottom-0 right-0 w-[50%] rounded-lg shadow-card overflow-hidden opacity-0 z-10"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src="/images/about-collage-2.jpg"
                alt="Unity"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="collage-img absolute top-[35%] right-[10%] w-[40%] rounded-lg shadow-card overflow-hidden opacity-0 z-20"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src="/images/about-collage-3.jpg"
                alt="National Assembly"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
