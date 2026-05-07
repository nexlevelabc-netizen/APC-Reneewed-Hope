import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: "Today's APC",
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Security', href: '/manifesto' },
      { label: 'Economy', href: '/manifesto' },
      { label: 'Infrastructure', href: '/manifesto' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Join APC', href: '/get-involved' },
      { label: 'City Boys', href: '/city-boys' },
      { label: 'Volunteer', href: '/get-involved' },
      { label: 'Donate', href: '/get-involved' },
    ],
  },
  {
    title: 'City Boys UK',
    links: [
      { label: 'London Chapter', href: '/city-boys' },
      { label: 'Essex Chapter', href: '/city-boys' },
      { label: 'Join a Chapter', href: '/get-involved' },
    ],
  },
  {
    title: '2027 Campaign',
    links: [
      { label: 'Tinubu 2027', href: '/leadership' },
      { label: 'Renewed Hope', href: '/manifesto' },
      { label: 'Get Involved', href: '/get-involved' },
    ],
  },
  {
    title: 'Media',
    links: [
      { label: 'Press Releases', href: '/news' },
      { label: 'Campaign Updates', href: '/news' },
      { label: 'Events', href: '/city-boys' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-apc-green-dark pt-16 lg:pt-20 pb-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-3 mb-10">
          <img src="/images/apc-logo.png" alt="APC" className="h-12 w-auto" />
          <div>
            <p className="text-white font-semibold text-sm">All Progressives Congress</p>
            <p className="text-white/50 text-xs">Building a Nigeria that works for all</p>
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4
                className="text-[11px] font-semibold uppercase tracking-wider text-white mb-4 pl-3"
                style={{ borderLeft: '3px solid #C8A45C' }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/50">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">Site Policy</a>
            <span>|</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">Accessibility</a>
            <span>|</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/80 transition-colors">Terms</a>
          </div>
          <p className="text-[11px] text-white/50 text-center">
            &copy; {new Date().getFullYear()} All Progressives Congress. All Rights Reserved.<br />
            <span className="text-apc-gold/60">Tinubu 2027 — Renewed Hope Continues</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
