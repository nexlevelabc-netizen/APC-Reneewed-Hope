import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Shield, TrendingUp, Building2, BookOpen, Heart, Sprout, ArrowRight } from 'lucide-react'

const policies = [
  {
    icon: Shield,
    title: 'Security & Stability',
    desc: 'Comprehensive national security framework ensuring peace and safety across all 36 states. Our administration has made significant investments in modernizing the armed forces and enhancing intelligence capabilities.',
    points: ['Counter-terrorism operations in North-East', 'Community policing initiative', 'Border security modernization', 'Intelligence sharing framework'],
    color: 'from-[#1B7A3D] to-[#0D4D24]',
  },
  {
    icon: TrendingUp,
    title: 'Economic Growth',
    desc: 'Diversified economic strategies to drive GDP growth, job creation, and industrialization. The Renewed Hope Agenda is delivering tangible economic reforms.',
    points: ['Fuel subsidy removal & savings reinvestment', 'Tax reforms for business growth', 'Support for MSMEs', '$1 trillion economy target'],
    color: 'from-[#B8860B] to-[#8B6914]',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    desc: 'Modern transportation networks, power generation, and digital connectivity nationwide. Building the backbone for a modern Nigerian economy.',
    points: ['Lagos-Calabar coastal highway', 'Lagos-Kano railway modernization', 'Rural road construction', '5G broadband rollout'],
    color: 'from-[#1E3A5F] to-[#0F1F33]',
  },
  {
    icon: BookOpen,
    title: 'Education',
    desc: 'Universal quality education from primary to tertiary, with digital literacy for all. Investing in Nigeria\'s greatest resource — our youth.',
    points: ['Student loan fund (NELFUND)', 'Digital classrooms in all LGAs', 'Technical & vocational training', 'Teacher recruitment & training'],
    color: 'from-[#5B2C6F] to-[#3D1A4E]',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    desc: 'Accessible, affordable healthcare for every Nigerian through upgraded facilities and expanded health insurance coverage.',
    points: ['50+ new primary health centers', 'National Health Insurance expansion', 'Medical equipment upgrade', 'Healthcare worker training'],
    color: 'from-[#922B21] to-[#6B1D16]',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    desc: 'Modernized farming, food security, and agro-industrial value chains. Transforming Nigeria into an agricultural powerhouse.',
    points: ['Fertilizer subsidy program', 'Modern farming equipment', 'Agro-processing zones', 'Food security initiative'],
    color: 'from-[#27AE60] to-[#1B7A3D]',
  },
]

export default function ManifestoPage() {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!revealRef.current) return
    const els = revealRef.current.querySelectorAll('.reveal-item')
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.2
    })
  }, [])

  return (
    <div ref={revealRef} className="pt-16">
      {/* Page Header */}
      <section className="bg-apc-green-dark py-16 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="reveal-item label-style text-apc-gold block mb-3">RENEWED HOPE AGENDA</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em] max-w-[700px]">
            Our Manifesto for Nigeria's Future
          </h1>
        </div>
      </section>

      {/* Manifesto Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal-item font-geist font-bold text-[clamp(24px,3vw,36px)] text-[#1A1A1A] tracking-[-0.02em] mb-6">
              Six Pillars of Progress
            </h2>
            <p className="reveal-item text-[#4B5563] leading-relaxed text-lg">
              The APC manifesto is built on six foundational policy pillars designed to transform 
              Nigeria into a prosperous, secure, and inclusive nation. Each pillar represents our 
              commitment to delivering tangible results for every Nigerian.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="py-8 lg:py-16 bg-[#F5F5F5]">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {policies.map((policy, i) => {
              const Icon = policy.icon
              return (
                <div
                  key={i}
                  className="reveal-item bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${policy.color}`} />
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center shrink-0`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{policy.title}</h3>
                        <p className="text-[#4B5563] text-sm leading-relaxed">{policy.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {policy.points.map((point, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-apc-green shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="ml-16 mt-4">
                      <span className="inline-flex items-center gap-1 text-apc-green text-sm font-medium cursor-pointer group-hover:gap-2 transition-all">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-apc-green">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="reveal-item font-geist font-bold text-white text-[clamp(24px,3vw,36px)] mb-4">
            Join the Movement for Progress
          </h2>
          <p className="reveal-item text-white/80 max-w-xl mx-auto mb-8">
            Together, we can build a Nigeria that works for everyone. Your support 
            is crucial to the success of the Renewed Hope Agenda.
          </p>
          <div className="reveal-item flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="inline-flex items-center px-8 py-3.5 bg-white text-apc-green font-semibold rounded-xl hover:bg-apc-gold-light transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/city-boys"
              className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-apc-green transition-colors"
            >
              Join City Boys
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
