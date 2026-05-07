import { Routes, Route } from 'react-router-dom'
import { useLenis } from '@/hooks/useLenis'
import Navigation from '@/components/Navigation'
import ElectionCountdown from '@/components/ElectionCountdown'
import Footer from '@/sections/Footer'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ManifestoPage from '@/pages/ManifestoPage'
import NewsPage from '@/pages/NewsPage'
import LeadershipPage from '@/pages/LeadershipPage'
import CityBoysPage from '@/pages/CityBoysPage'
import GetInvolvedPage from '@/pages/GetInvolvedPage'

export default function App() {
  useLenis()

  return (
    <div className="relative">
      <ElectionCountdown />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/city-boys" element={<CityBoysPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
