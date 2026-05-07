import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const leaders = [
  {
    name: 'Bola Ahmed Tinubu',
    role: 'President, Federal Republic of Nigeria',
    image: '/images/tinubu-hero.png',
    bio: 'The 16th President of Nigeria, Asiwaju Bola Ahmed Tinubu, is a visionary leader with decades of experience in public service. Former Governor of Lagos State (1999-2007), he is the architect of the Renewed Hope Agenda and seeks re-election in 2027 to consolidate Nigeria\'s transformation.',
    featured: true,
  },
  {
    name: 'Kashim Shettima',
    role: 'Vice President',
    image: '/images/featured-3.jpg',
    bio: 'Vice President Kashim Shettima brings extensive governance experience from his time as Governor of Borno State.',
  },
  {
    name: 'Dr. Abdullahi Ganduje',
    role: 'National Chairman, APC',
    image: '/images/hero-portrait.jpg',
    bio: 'Dr. Ganduje serves as the National Chairman of the APC, steering the party towards the 2027 elections.',
  },
  {
    name: 'Hope Uzodimma',
    role: 'Chairman, Progressive Governors Forum',
    image: '/images/featured-1.jpg',
    bio: 'Governor of Imo State and Chairman of the Progressive Governors Forum, leading APC governors nationwide.',
  },
]

const achievements = [
  { number: '16th', label: 'President of Nigeria' },
  { number: '2x', label: 'Governor of Lagos State' },
  { number: '2013', label: 'APC Co-Founder' },
  { number: '2023', label: 'Elected President' },
]

export default function LeadershipPage() {
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
          <span className="reveal-item label-style text-apc-gold block mb-3">OUR LEADERSHIP</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em] max-w-[700px]">
            Meet the Leaders Driving Change
          </h1>
        </div>
      </section>

      {/* Featured Leader - Tinubu */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-[45%]">
              <div className="reveal-item relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-[3px] border-apc-green rounded-xl" />
                <img
                  src={leaders[0].image}
                  alt={leaders[0].name}
                  className="w-full max-w-[420px] rounded-xl shadow-card object-cover"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute -bottom-3 -right-3 bg-apc-green text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  2027 Candidate
                </div>
              </div>
            </div>
            <div className="lg:w-[55%]">
              <span className="reveal-item label-style text-apc-green block mb-2">PRESIDENT & COMMANDER-IN-CHIEF</span>
              <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3.5vw,48px)] text-[#1A1A1A] tracking-[-0.02em] mb-4">
                {leaders[0].name}
              </h2>
              <p className="reveal-item text-apc-green font-medium mb-6">{leaders[0].role}</p>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-8 text-lg">
                {leaders[0].bio}
              </p>
              <div className="reveal-item grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((a, i) => (
                  <div key={i} className="bg-[#F5F5F5] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-apc-green">{a.number}</p>
                    <p className="text-xs text-[#4B5563] mt-1">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tinubu Campaign Speech Quote */}
      <section className="py-16 lg:py-24 bg-apc-green-light">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="reveal-item">
              <p className="font-serif italic text-[clamp(22px,3vw,32px)] text-[#1A1A1A] leading-relaxed mb-6">
                "I did not seek this office to take the easy path. I sought it to take the 
                right path — the path of reform, of difficult but necessary decisions, of 
                building a Nigeria that works for every single citizen."
              </p>
              <footer className="text-apc-green font-semibold">
                — President Bola Ahmed Tinubu
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Leaders Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">THE TEAM</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Key Party Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, i) => (
              <div
                key={i}
                className="reveal-item bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{leader.name}</h3>
                  <p className="text-apc-green text-sm font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
