import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutPage() {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!revealRef.current) return
    const els = revealRef.current.querySelectorAll('.reveal-item')
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
    })
  }, [])

  return (
    <div ref={revealRef} className="pt-16">
      {/* Page Header */}
      <section className="bg-apc-green-dark py-16 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="reveal-item label-style text-apc-gold block mb-3">ALL PROGRESSIVES CONGRESS</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em] max-w-[700px]">
            A Party of Progress, Built for the People
          </h1>
        </div>
      </section>

      {/* About APC */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="reveal-item label-style text-apc-green block mb-3">ABOUT APC</span>
              <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em] mb-6">
                The Largest Political Movement in Africa
              </h2>
              <blockquote className="reveal-item border-l-[3px] border-apc-green pl-5 mb-6">
                <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-[#2D2D2D] leading-relaxed">
                  "Progress for all Nigerians, guided by unity, integrity, and service."
                </p>
              </blockquote>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-4">
                Founded in 2013 through the historic merger of Nigeria's major opposition parties — 
                the Action Congress of Nigeria (ACN), Congress for Progressive Change (CPC), All Nigeria 
                Peoples Party (ANPP), and a faction of APGA — the All Progressives Congress (APC) 
                emerged as a formidable force for change.
              </p>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-4">
                The party's broom symbol, championed by then-ACN leader Bola Tinubu, was chosen to 
                represent our collective mission to sweep away corruption and bad governance. This 
                vision resonated with millions of Nigerians, leading to our historic victory in the 
                2015 elections — the first time an opposition party unseated a sitting government 
                in Nigeria's democratic history.
              </p>
              <p className="reveal-item text-[#4B5563] leading-relaxed">
                Today, under the leadership of President Bola Ahmed Tinubu, the APC continues to 
                implement transformative reforms through the Renewed Hope Agenda, touching every 
                sector of Nigerian life from security to infrastructure, agriculture to education.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="reveal-item grid grid-cols-2 gap-4">
                <img
                  src="/images/about-collage-1.jpg"
                  alt="APC Rally"
                  className="rounded-xl shadow-card w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                <img
                  src="/images/about-collage-2.jpg"
                  alt="Unity"
                  className="rounded-xl shadow-card w-full object-cover mt-8"
                  style={{ aspectRatio: '3/4' }}
                />
                <img
                  src="/images/about-collage-3.jpg"
                  alt="National Assembly"
                  className="rounded-xl shadow-card w-full object-cover -mt-8"
                  style={{ aspectRatio: '1/1' }}
                />
                <img
                  src="/images/featured-3.jpg"
                  alt="APC Leadership"
                  className="rounded-xl shadow-card w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">OUR JOURNEY</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Milestones of Progress
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2013', title: 'Formation of APC', desc: 'Four opposition parties merge to form the All Progressives Congress, creating the strongest opposition platform in Nigerian history.' },
              { year: '2015', title: 'Historic Victory', desc: 'APC wins the presidential election, marking the first democratic transition of power from an incumbent party to an opposition party.' },
              { year: '2019', title: 'Mandate Renewed', desc: 'President Muhammadu Buhari re-elected, affirming Nigerians\' confidence in the APC\'s change agenda.' },
              { year: '2023', title: 'Tinubu Presidency', desc: 'Asiwaju Bola Ahmed Tinubu elected as the 16th President of Nigeria, launching the Renewed Hope Agenda.' },
              { year: '2026', title: '2027 Campaign Launch', desc: 'President Tinubu submits expression of interest and nomination forms for a second term under the APC.' },
            ].map((m, i) => (
              <div key={i} className="reveal-item flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-apc-green">{m.year}</span>
                </div>
                <div className="shrink-0 w-3 h-3 rounded-full bg-apc-gold mt-2.5" />
                <div className="pb-8 border-b border-gray-200 flex-1">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{m.title}</h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">WHAT WE STAND FOR</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Unity', desc: 'Bringing together all Nigerians regardless of ethnicity, religion, or background under one progressive banner.' },
              { title: 'Integrity', desc: 'Upholding transparency and accountability in governance, ensuring public trust and ethical leadership.' },
              { title: 'Service', desc: 'Putting the needs of the people first, delivering tangible results that improve lives across Nigeria.' },
              { title: 'Progress', desc: 'Championing reforms and policies that drive Nigeria forward into a prosperous and sustainable future.' },
              { title: 'Inclusivity', desc: 'Ensuring every Nigerian has a voice and seat at the table, from youth to women to the elderly.' },
              { title: 'Patriotism', desc: 'Deep love for Nigeria and unwavering commitment to her peace, security, and development.' },
            ].map((v, i) => (
              <div
                key={i}
                className="reveal-item bg-[#F5F5F5] rounded-xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-apc-green flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{v.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
