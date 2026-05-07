import { useScrollReveal } from '@/hooks/useScrollReveal'
import { MapPin, Users, Heart, GraduationCap, Building, Star, Crown, Landmark } from 'lucide-react'

const structures = [
  { icon: MapPin, label: 'State Chapters' },
  { icon: Users, label: 'National Working Committee' },
  { icon: Heart, label: 'Women Wing' },
  { icon: GraduationCap, label: 'Youth Wing' },
  { icon: Building, label: 'Progressive Governors Forum' },
  { icon: Star, label: 'National Caucus' },
  { icon: Crown, label: 'Elders Council' },
  { icon: Landmark, label: 'National Secretariat' },
]

export default function PartyStructureSection() {
  const revealRef = useScrollReveal<HTMLElement>({ childSelector: '.reveal-child', stagger: 0.06 })

  return (
    <section ref={revealRef} id="structure" className="w-full bg-apc-green-light py-16 lg:py-20">
      <div className="section-container">
        {/* Header */}
        <div className="reveal-child text-center mb-12">
          <h2 className="font-geist font-bold text-[clamp(28px,3.5vw,42px)] text-[#1A1A1A] tracking-[-0.02em] mb-1">
            Our Structure
          </h2>
          <span className="label-style text-apc-green">TEAM</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-[900px] mx-auto">
          {structures.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="reveal-child flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-card flex items-center justify-center mb-3 group-hover:scale-[1.08] group-hover:shadow-card-hover transition-all duration-300">
                  <Icon size={28} className="text-apc-green group-hover:text-apc-green-dark transition-colors" />
                </div>
                <span className="text-sm font-medium text-[#1A1A1A] max-w-[100px] leading-tight">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
