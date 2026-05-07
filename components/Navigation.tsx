import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Manifesto', href: '/manifesto' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'News', href: '/news' },
  { label: 'City Boys', href: '/city-boys' },
  { label: 'Get Involved', href: '/get-involved' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-subtle'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/apc-logo.png"
              alt="APC Logo"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-[11px] font-bold text-apc-green uppercase tracking-[0.12em] block leading-tight">All Progressives</span>
              <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.12em] block leading-tight">Congress</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 pb-1 ${
                  location.pathname === link.href
                    ? 'text-apc-green'
                    : 'text-[#1A1A1A] hover:text-apc-green'
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-apc-green" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
              <Search size={18} className="text-[#1A1A1A]" />
            </button>
            <Link
              to="/get-involved"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-apc-green text-white text-[12px] font-semibold rounded-lg hover:bg-apc-green-dark transition-colors duration-200"
            >
              Join APC
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} className="text-[#1A1A1A]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img src="/images/apc-logo.png" alt="APC" className="h-8 w-auto" />
              <span className="text-sm font-bold text-apc-green">Menu</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-3 text-[14px] font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? 'bg-apc-green text-white'
                    : 'text-[#1A1A1A] hover:bg-apc-green-light hover:text-apc-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100">
            <Link
              to="/get-involved"
              className="block w-full text-center px-5 py-3 bg-apc-green text-white text-sm font-semibold rounded-lg hover:bg-apc-green-dark transition-colors"
            >
              Join APC
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
