import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useScrollReveal<T extends HTMLElement>(
  options?: {
    y?: number
    duration?: number
    delay?: number
    stagger?: number
    childSelector?: string
  }
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const y = options?.y ?? 40
    const duration = options?.duration ?? 0.6
    const delay = options?.delay ?? 0
    const stagger = options?.stagger ?? 0.08
    const childSelector = options?.childSelector

    const targets = childSelector ? el.querySelectorAll(childSelector) : el

    gsap.set(targets, { opacity: 0, y })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease: 'power2.out',
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
