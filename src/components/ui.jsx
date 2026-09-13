import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/* Scroll-reveal wrapper */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.01 },
    )
    io.observe(el)

    const t = setTimeout(() => setShown(true), 2500)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* Section heading block */
export function SectionHeading({ eyebrow, title, desc, align = 'start', dark = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <span className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</span>
        <h2
          className={`mt-3 text-3xl md:text-4xl font-extrabold tracking-tight ${
            dark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={80}>
          <p className={`mt-4 text-base md:text-lg leading-8 ${dark ? 'text-ink-200' : 'text-ink-500'}`}>{desc}</p>
        </Reveal>
      )}
    </div>
  )
}

/* Hero band for inner pages */
export function PageHero({ title, desc, crumb }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="absolute -top-32 end-[-10%] w-[34rem] h-[34rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 start-[-8%] w-[30rem] h-[30rem] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <span className="absolute top-0 end-0 h-[3px] w-1/2 bg-gradient-to-l from-accent-400 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-24">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-300 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-accent-400">/</span>
            <span className="text-white">{crumb}</span>
          </div>
        </Reveal>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight max-w-3xl">
          {title}
        </h1>
        {desc && (
          <Reveal delay={80}>
            <p className="mt-6 text-lg md:text-xl leading-9 text-ink-200 max-w-2xl">{desc}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

/* CTA band reused across pages */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-accent-600 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <span className="absolute top-0 start-0 h-full w-1 bg-gradient-to-b from-accent-400 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <span className="eyebrow justify-center">{`Let's Build Together`}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Ready to engineer your next landmark project?
          </h2>
          <p className="mt-5 text-ink-200 text-lg max-w-xl mx-auto">
            Talk to our engineering team about your requirements — from single systems to fully integrated builds.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 shadow-glow transition-colors"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/references"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/25 hover:border-accent-300 hover:text-accent-300 transition-colors"
            >
              View Our References
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}