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
export function SectionHeading({ eyebrow, title, desc, align = 'start', dark = false, index }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className={`eyebrow ${align === 'center' ? '' : ''}`}>{eyebrow}</span>
          {index && (
            <span className={`font-display text-2xl italic leading-none ${dark ? 'text-accent-300/40' : 'text-gold-500/70'}`}>
              {index}
            </span>
          )}
        </div>
        <h2
          className={`mt-4 ${align === 'center' ? 'mx-auto' : ''} max-w-3xl text-4xl md:text-5xl leading-[1.12] font-semibold ${
            dark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={80}>
          <p className={`mt-5 ${align === 'center' ? 'mx-auto' : 'max-w-xl'} text-base md:text-[1.05rem] leading-8 ${dark ? 'text-ink-200' : 'text-ink-500'}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/* Hero band for inner pages */
export function PageHero({ title, desc, crumb }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white bg-noise">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="absolute -top-32 end-[-10%] w-[34rem] h-[34rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 start-[-8%] w-[30rem] h-[30rem] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <span className="absolute top-0 end-0 h-[3px] w-1/2 bg-gradient-to-l from-accent-400 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-28">
        <Reveal>
          <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gold-500">/</span>
            <span className="text-white">{crumb}</span>
          </div>
        </Reveal>
        <h1 className="text-5xl md:text-6xl xl:text-7xl leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {desc && (
          <Reveal delay={80}>
            <p className="mt-8 text-lg md:text-xl leading-9 text-ink-200 max-w-2xl">{desc}</p>
          </Reveal>
        )}
        <div className="mt-12 h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}

/* CTA band reused across pages */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white bg-noise">
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="absolute -top-40 end-0 w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-44 start-[-6%] w-[30rem] h-[30rem] rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <span className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28 text-center">
        <Reveal>
          <span className="eyebrow on-dark justify-center">{`Let's Build Together`}</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto">
            Ready to engineer your next landmark project?
          </h2>
          <p className="mt-6 text-ink-200 text-lg md:text-xl max-w-xl mx-auto">
            Talk to our engineering team about your requirements — from single systems to fully integrated builds.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <ArrowRight size={15} />
            </Link>
            <Link to="/references" className="btn btn-ghost-light">
              View Our References
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}