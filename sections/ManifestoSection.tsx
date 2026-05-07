import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { Shield, TrendingUp, Building2, BookOpen, Heart, Sprout, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const manifestoCards = [
  { title: 'Security & Stability', desc: 'Comprehensive national security framework ensuring peace and safety across all 36 states.', icon: Shield, color1: '#1B7A3D', color2: '#0D4D24' },
  { title: 'Economic Growth', desc: 'Diversified economic strategies to drive GDP growth, job creation, and industrialization.', icon: TrendingUp, color1: '#B8860B', color2: '#8B6914' },
  { title: 'Infrastructure', desc: 'Modern transportation networks, power generation, and digital connectivity nationwide.', icon: Building2, color1: '#1E3A5F', color2: '#0F1F33' },
  { title: 'Education', desc: 'Universal quality education from primary to tertiary, with digital literacy for all.', icon: BookOpen, color1: '#5B2C6F', color2: '#3D1A4E' },
  { title: 'Healthcare', desc: 'Accessible, affordable healthcare for every Nigerian through upgraded facilities.', icon: Heart, color1: '#922B21', color2: '#6B1D16' },
  { title: 'Agriculture', desc: 'Modernized farming, food security, and agro-industrial value chains.', icon: Sprout, color1: '#27AE60', color2: '#1B7A3D' },
]

const bgWords = ['PROGRESS', 'UNITY', 'CHANGE', 'PROGRESS', 'UNITY', 'CHANGE', 'PROGRESS', 'UNITY', 'CHANGE']
const bgPositions = [
  { top: '0%', left: '-5%' }, { top: '0%', left: '30%' }, { top: '0%', left: '65%' },
  { top: '40%', left: '-5%' }, { top: '40%', left: '30%' }, { top: '40%', left: '65%' },
  { top: '80%', left: '-5%' }, { top: '80%', left: '30%' }, { top: '80%', left: '65%' },
]
const bgDelays = [0, 2, 4, 4, 0, 2, 2, 4, 0]

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cardsWrapperRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  // Three.js dust particles
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const particleCount = 40
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = Math.random() * 100 - 50
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 3,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    let animId: number
    const animateDust = () => {
      const posArray = particles.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] -= 0.02
        posArray[i * 3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.02
        if (posArray[i * 3] < -50) posArray[i * 3] = 50
      }
      particles.geometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
      animId = requestAnimationFrame(animateDust)
    }
    animateDust()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  // Card stack scroll animation
  useEffect(() => {
    if (!sectionRef.current || !cardsWrapperRef.current) return

    const cards = cardsRef.current.filter(Boolean)
    if (cards.length === 0) return

    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: `+=${window.innerHeight * 5}`,
        scrub: 0.5,
      },
    })

    // Brightness flash
    tl.fromTo(sectionRef.current,
      { filter: 'brightness(2)' },
      { filter: 'brightness(0.6)', duration: 1 },
      0
    )

    // First card fly in
    tl.fromTo(cards[0],
      { z: 3000, scale: 2, rotateZ: 2, yPercent: 30 },
      { z: 0, scale: 1, rotateZ: -2, yPercent: 0, duration: 1 },
      0
    )

    // Cards wrapper rotation
    tl.fromTo(cardsWrapperRef.current,
      { rotateX: 70, rotateZ: 40 },
      { rotateX: 0, rotateZ: -5, duration: 1 },
      0.3
    )

    // Remaining cards
    cards.forEach((card, i) => {
      if (i === 0) return
      const delay = i * 0.8

      tl.fromTo(card, { yPercent: 100 }, { yPercent: 0, duration: 1 }, delay)
      tl.fromTo(card, { rotateZ: 10 }, { rotateZ: -2, duration: 1.2, ease: 'back.out(1.2)' }, delay)

      if (cards[i - 1]) {
        tl.to(cards[i - 1], { yPercent: -10, duration: 1.2 }, delay)
      }
    })

    // Settle animation for each card
    cards.forEach((card) => {
      tl.to(card, { rotateZ: 0, duration: 1.5, ease: 'power1.inOut' }, '-=0.5')
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) st.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative w-full min-h-screen bg-[#1A1A1A] overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-[0.04]">
        {bgWords.map((word, i) => (
          <div
            key={i}
            className="absolute font-geist font-black text-white whitespace-nowrap leading-[0.8] animate-float"
            style={{
              fontSize: '18vw',
              top: bgPositions[i].top,
              left: bgPositions[i].left,
              animationDelay: `${bgDelays[i]}s`,
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Cards Wrapper */}
      <div
        ref={cardsWrapperRef}
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {manifestoCards.map((card, i) => {
          const Icon = card.icon
          return (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el }}
              className="card absolute"
              style={{
                width: '340px',
                height: '440px',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              <div
                className="card-content relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${card.color1}, ${card.color2})`,
                }}
              >
                {/* Border glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* Card text */}
                <div className="absolute bottom-10 left-7 right-7 z-10 text-white">
                  <Icon size={40} className="mb-4 opacity-90" />
                  <h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-85 mb-4">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold opacity-90 hover:opacity-100 cursor-pointer group">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Section title */}
      <div className="absolute top-8 left-0 right-0 z-30 text-center pointer-events-none">
        <span className="label-style text-white/50">OUR MANIFESTO</span>
        <h2 className="font-geist font-bold text-white text-2xl mt-1">Policy Pillars</h2>
      </div>
    </section>
  )
}
