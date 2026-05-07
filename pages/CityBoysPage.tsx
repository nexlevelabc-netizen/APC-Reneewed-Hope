import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Users, Globe, MapPin, HandHeart, Calendar, ArrowRight } from 'lucide-react'

const chapters = [
  {
    name: 'London Chapter',
    location: 'London, United Kingdom',
    image: '/images/city-boys-london.jpg',
    members: '5,000+',
    events: 'Monthly meetups & quarterly rallies',
    coordinator: 'Adebayo Johnson',
    description: 'The London chapter serves as the UK headquarters of the City Boys Movement, connecting Nigerian diaspora professionals, students, and families who support President Tinubu\'s Renewed Hope Agenda.',
  },
  {
    name: 'Essex Chapter',
    location: 'Essex, United Kingdom',
    image: '/images/city-boys-essex.jpg',
    members: '2,000+',
    events: 'Bi-weekly community gatherings',
    coordinator: 'Ngozi Okonkwo',
    description: 'The Essex chapter brings together the vibrant Nigerian community in Essex, organizing grassroots mobilization and community support programs for the 2027 re-election campaign.',
  },
]

const activities = [
  { icon: Users, title: 'Community Outreach', desc: 'Door-to-door campaigns and community events across the UK' },
  { icon: Globe, title: 'Diaspora Engagement', desc: 'Connecting Nigerians abroad with the party\'s vision and goals' },
  { icon: HandHeart, title: 'Fundraising', desc: 'Supporting campaign efforts through diaspora contributions' },
  { icon: Calendar, title: 'Events & Rallies', desc: 'Regular gatherings to mobilize support for the 2027 campaign' },
]

const testimonials = [
  {
    quote: "The City Boys Movement gave me a way to contribute to Nigeria's progress from here in London. We're making a real difference.",
    name: 'Chinedu Okafor',
    role: 'London Chapter Member',
  },
  {
    quote: "Being part of the Essex chapter has connected me with fellow Nigerians who share the same vision for our country's future.",
    name: 'Funmi Adeleke',
    role: 'Essex Chapter Coordinator',
  },
  {
    quote: "We may be miles away, but our hearts are with Nigeria. The City Boys Movement bridges that gap beautifully.",
    name: 'Ibrahim Hassan',
    role: 'London Chapter Volunteer',
  },
]

export default function CityBoysPage() {
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
      <section className="relative bg-apc-green-dark py-16 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/city-boys-nigeria.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="reveal-item label-style text-apc-gold block mb-3">YOUTH MOVEMENT</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em] max-w-[700px] mb-4">
            City Boys Movement
          </h1>
          <p className="reveal-item text-white/80 text-lg max-w-xl">
            A youth-driven political movement bridging the gap between young people and 
            leadership. United for progress, powered by the people.
          </p>
        </div>
      </section>

      {/* About City Boys */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/images/city-boys-nigeria.jpg"
                alt="City Boys Movement Nigeria"
                className="reveal-item rounded-xl shadow-card w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="lg:w-1/2">
              <span className="reveal-item label-style text-apc-green block mb-3">WHO WE ARE</span>
              <h2 className="reveal-item font-geist font-bold text-[clamp(24px,3vw,36px)] text-[#1A1A1A] tracking-[-0.02em] mb-4">
                The Voice of Nigeria's Youth
              </h2>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-4">
                The City Boys Movement is a youth-driven political mobilization group dedicated to 
                supporting President Bola Ahmed Tinubu's Renewed Hope Agenda and his re-election 
                bid in 2027. Founded on the principles of unity, progress, and active citizenship, 
                the movement has grown into a formidable grassroots organization.
              </p>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-6">
                With over 50,000 registered members across all 351 wards in Oyo State alone, 
                the City Boys Movement represents the energy and aspirations of Nigeria's young 
                population. The movement is now expanding globally, with active chapters in the 
                United Kingdom connecting the Nigerian diaspora to the homeland's political future.
              </p>
              <div className="reveal-item flex flex-wrap gap-3">
                <span className="bg-apc-green-light text-apc-green text-sm font-medium px-4 py-2 rounded-full">
                  50,000+ Members in Nigeria
                </span>
                <span className="bg-apc-green-light text-apc-green text-sm font-medium px-4 py-2 rounded-full">
                  351 Wards Covered
                </span>
                <span className="bg-apc-green-light text-apc-green text-sm font-medium px-4 py-2 rounded-full">
                  UK Chapters Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">WHAT WE DO</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Our Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={i}
                  className="reveal-item bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-apc-green flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{a.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{a.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* UK Chapters */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">UNITED KINGDOM</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em] mb-2">
              UK Chapters
            </h2>
            <p className="reveal-item text-[#4B5563] max-w-xl mx-auto">
              The City Boys Movement has established vibrant chapters across the United Kingdom, 
              uniting the Nigerian diaspora in support of the Renewed Hope Agenda.
            </p>
          </div>

          <div className="space-y-8">
            {chapters.map((chapter, i) => (
              <div
                key={i}
                className="reveal-item bg-[#F5F5F5] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-[45%] overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={chapter.image}
                      alt={chapter.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:w-[55%] p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-apc-green" />
                      <span className="text-sm text-apc-green font-medium">{chapter.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{chapter.name}</h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">{chapter.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="bg-white rounded-lg px-4 py-2">
                        <p className="text-lg font-bold text-apc-green">{chapter.members}</p>
                        <p className="text-xs text-[#4B5563]">Members</p>
                      </div>
                      <div className="bg-white rounded-lg px-4 py-2">
                        <p className="text-sm font-semibold text-[#1A1A1A]">{chapter.coordinator}</p>
                        <p className="text-xs text-[#4B5563]">Coordinator</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#9CA3AF] flex items-center gap-1">
                      <Calendar size={14} /> {chapter.events}
                    </p>
                    <div className="mt-4">
                      <Link
                        to="/get-involved"
                        className="inline-flex items-center gap-1 text-apc-green font-medium text-sm hover:gap-2 transition-all"
                      >
                        Join this chapter <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-apc-green-light">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">TESTIMONIALS</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Voices from the Movement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal-item bg-white rounded-xl p-6 shadow-card">
                <p className="text-[#4B5563] leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-apc-green text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-apc-green">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="reveal-item font-geist font-bold text-white text-[clamp(24px,3vw,36px)] mb-4">
            Join the City Boys Movement
          </h2>
          <p className="reveal-item text-white/80 max-w-xl mx-auto mb-8">
            Whether you're in Nigeria or the UK, there's a place for you in the City Boys Movement. 
            Together, we can drive the change Nigeria needs.
          </p>
          <div className="reveal-item flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center px-8 py-3.5 bg-white text-apc-green font-semibold rounded-xl hover:bg-apc-gold-light transition-colors"
            >
              Become a Member
            </Link>
            <a
              href="https://www.cityboymovement.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-apc-green transition-colors"
            >
              Visit Official Site
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
