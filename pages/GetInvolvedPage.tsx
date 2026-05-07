import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react'

const membershipTypes = [
  {
    title: 'Individual Member',
    desc: 'Join as an individual supporter and receive updates on campaign activities.',
    benefits: ['Campaign updates', 'Event invitations', 'Voting rights in party activities'],
  },
  {
    title: 'City Boys Member',
    desc: 'Join the youth movement and be part of grassroots mobilization.',
    benefits: ['Access to local chapter events', 'Leadership opportunities', 'Networking with youth leaders'],
  },
  {
    title: 'Diaspora Member',
    desc: 'For Nigerians abroad who want to support from outside the country.',
    benefits: ['UK chapter access', 'Diaspora events', 'Remote volunteering options'],
  },
  {
    title: 'Volunteer',
    desc: 'Offer your time and skills to support the 2027 campaign efforts.',
    benefits: ['Campaign assignments', 'Skills training', 'Certificate of service'],
  },
]

export default function GetInvolvedPage() {
  const revealRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '', type: 'Individual Member' })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!revealRef.current) return
    const els = revealRef.current.querySelectorAll('.reveal-item')
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.2
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={revealRef} className="pt-16">
      {/* Page Header */}
      <section className="bg-apc-green-dark py-16 lg:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <span className="reveal-item label-style text-apc-gold block mb-3">TAKE ACTION</span>
          <h1 className="reveal-item font-geist font-black text-white text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.03em] max-w-[700px]">
            Get Involved in the 2027 Campaign
          </h1>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="reveal-item label-style text-apc-green block mb-2">HOW TO JOIN</span>
            <h2 className="reveal-item font-geist font-bold text-[clamp(28px,3vw,42px)] text-[#1A1A1A] tracking-[-0.02em]">
              Choose Your Path
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((m, i) => (
              <div
                key={i}
                className="reveal-item bg-[#F5F5F5] rounded-xl p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-apc-green flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{m.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-4">{m.desc}</p>
                <ul className="space-y-1.5">
                  {m.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CheckCircle size={14} className="text-apc-green shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[#F5F5F5]">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-2/5">
              <span className="reveal-item label-style text-apc-green block mb-3">CONTACT US</span>
              <h2 className="reveal-item font-geist font-bold text-[clamp(24px,3vw,36px)] text-[#1A1A1A] tracking-[-0.02em] mb-6">
                Reach Out to APC
              </h2>
              <p className="reveal-item text-[#4B5563] leading-relaxed mb-8">
                Have questions about membership, want to volunteer, or need information about 
                the 2027 campaign? Get in touch with us.
              </p>
              <div className="space-y-5">
                <div className="reveal-item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-apc-green-light flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-apc-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">National Secretariat</p>
                    <p className="text-sm text-[#4B5563]">40 Blantyre Street, Wuse II, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="reveal-item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-apc-green-light flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-apc-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Email</p>
                    <p className="text-sm text-[#4B5563]">info@apc.org.ng</p>
                  </div>
                </div>
                <div className="reveal-item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-apc-green-light flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-apc-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Phone</p>
                    <p className="text-sm text-[#4B5563]">+234 9 123 4567</p>
                  </div>
                </div>
              </div>

              {/* UK Contact */}
              <div className="reveal-item mt-8 p-5 bg-white rounded-xl shadow-subtle">
                <h4 className="font-semibold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-apc-green" /> UK Chapters
                </h4>
                <p className="text-sm text-[#4B5563] mb-2">
                  <span className="font-medium text-[#1A1A1A]">London Chapter:</span> london@cityboymovement.ng
                </p>
                <p className="text-sm text-[#4B5563]">
                  <span className="font-medium text-[#1A1A1A]">Essex Chapter:</span> essex@cityboymovement.ng
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5">
              {submitted ? (
                <div className="reveal-item bg-white rounded-xl p-8 lg:p-12 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-apc-green-light flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-apc-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Thank You!</h3>
                  <p className="text-[#4B5563]">
                    Your message has been received. A member of our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="reveal-item bg-white rounded-xl p-6 lg:p-8 shadow-card">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-6">Send us a message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Full Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Email</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Phone</label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors"
                            placeholder="+234..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Location</label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                          <input
                            type="text"
                            value={form.location}
                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors"
                            placeholder="City, State/Country"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Membership Type</label>
                        <select
                          value={form.type}
                          onChange={(e) => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors bg-white"
                        >
                          {membershipTypes.map((m, i) => (
                            <option key={i} value={m.title}>{m.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">Message</label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-3 top-3 text-[#9CA3AF]" />
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green transition-colors resize-none"
                          placeholder="How would you like to get involved?"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-apc-green text-white font-semibold rounded-lg hover:bg-apc-green-dark transition-colors"
                    >
                      <Send size={16} />
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
