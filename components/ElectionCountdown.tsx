import { useEffect, useState } from 'react'
import { Timer, Vote } from 'lucide-react'

const ELECTION_DATE = new Date('2027-01-16T00:00:00').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const now = Date.now()
  const diff = ELECTION_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center mx-1.5 sm:mx-3">
      <div className="bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 min-w-[42px] sm:min-w-[56px] text-center">
        <span className="text-white font-black text-lg sm:text-2xl tabular-nums leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/60 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function ElectionCountdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const marqueeText = `\u2605 VOTE TINUBU 2027 \u2605 JANUARY 16, 2027 \u2605 RENEWED HOPE CONTINUES \u2605 APC ALL THE WAY \u2605 VOTE TINUBU 2027 \u2605 JANUARY 16, 2027 \u2605 RENEWED HOPE CONTINUES \u2605 APC ALL THE WAY \u2605 `

  return (
    <div className="relative">
      {/* Sliding marquee background */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 overflow-hidden relative">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-xs"
        >
          &times;
        </button>

        {/* Marquee text */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.07] pointer-events-none">
          <div className="animate-countdown-marquee whitespace-nowrap">
            <span className="text-white text-lg font-bold tracking-widest mx-4">{marqueeText}</span>
            <span className="text-white text-lg font-bold tracking-widest mx-4">{marqueeText}</span>
            <span className="text-white text-lg font-bold tracking-widest mx-4">{marqueeText}</span>
            <span className="text-white text-lg font-bold tracking-widest mx-4">{marqueeText}</span>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 overflow-hidden ${isVisible ? 'max-h-20' : 'max-h-0'}`}>
          <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between relative z-10">
            {/* Left: Label */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 mr-4">
              <Vote size={16} className="text-yellow-300" />
              <div>
                <p className="text-white/80 text-[10px] uppercase tracking-wider font-semibold leading-none">
                  Countdown to
                </p>
                <p className="text-white font-bold text-xs uppercase tracking-wider leading-none mt-0.5">
                  Election Day
                </p>
              </div>
            </div>

            {/* Center/Right: Timer */}
            <div className="flex items-center">
              <Timer size={16} className="text-yellow-300 mr-2 shrink-0" />
              <div className="flex items-center">
                <TimeUnit value={time.days} label="Days" />
                <span className="text-white/40 font-bold text-lg -mt-3">:</span>
                <TimeUnit value={time.hours} label="Hours" />
                <span className="text-white/40 font-bold text-lg -mt-3">:</span>
                <TimeUnit value={time.minutes} label="Mins" />
                <span className="text-white/40 font-bold text-lg -mt-3 hidden sm:inline">:</span>
                <div className="hidden sm:block">
                  <TimeUnit value={time.seconds} label="Secs" />
                </div>
              </div>
            </div>

            {/* Right: Date */}
            <div className="hidden lg:flex items-center gap-2 ml-4 shrink-0">
              <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <p className="text-yellow-300 font-bold text-xs uppercase tracking-wider">
                  Jan 16, 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Re-open button when closed */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed top-16 right-4 z-50 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors animate-pulse"
          title="Show countdown"
        >
          <Timer size={14} />
        </button>
      )}
    </div>
  )
}
