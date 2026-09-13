import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Wrench,
  BookOpen,
  Shield,
  Hammer,
  Headphones,
  MonitorSpeaker,
  Lightbulb,
  Network,
  Server,
  Presentation,
  Lock,
  Siren,
  SquareParking,
  Cog,
  Bus,
  Trophy,
  Globe,
  Telescope,
  Glasses,
  Armchair,
  Waves,
  CalendarDays,
} from 'lucide-react'
import { site, services, activities, featuredProjects, news, partners } from '../content'
import { Reveal, SectionHeading, CtaBand } from '../components/ui'

/* ── Activity icon map ───────────────────────────────────────── */
const activityIcons = {
  0: MonitorSpeaker,
  1: Headphones,
  2: Presentation,
  3: Lock,
  4: Siren,
  5: SquareParking,
  6: Lightbulb,
  7: Cog,
  8: Network,
  9: Trophy,
  10: Globe,
  11: Bus,
  12: Telescope,
  13: Glasses,
  14: Armchair,
  15: Waves,
}

const serviceIcons = [Layers, Wrench, Server, Shield, BookOpen, Hammer]

/* ── Hero slider ─────────────────────────────────────────────── */
const heroSlides = [
  { image: '/quality-egypt/images/hero-gem.jpg', name: 'The Grand Egyptian Museum', category: 'Museums' },
  { image: '/quality-egypt/images/p-ramsis.jpg', name: 'GEM — Galleries & Interpretation', category: 'Museums' },
  { image: '/quality-egypt/images/p-nmec.jpg', name: 'National Museum of Egyptian Civilization', category: 'Museums' },
  { image: '/quality-egypt/images/p-manara.jpg', name: 'Al Manara Conference Center', category: 'Conference Centers' },
  { image: '/quality-egypt/images/p-league.jpg', name: 'The Arab League', category: 'Conference Technology' },
  { image: '/quality-egypt/images/p-stadium.jpg', name: 'Cairo Stadium', category: 'Stadiums & Sports' },
]

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const [py, setPy] = useState(0)
  const count = heroSlides.length

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % count), 6000)
    return () => clearInterval(t)
  }, [paused, active, count])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPy(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const go = (dir) => setActive((a) => (a + dir + count) % count)

  return (
    <section
      className="relative overflow-hidden bg-ink-950 text-white bg-noise"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="absolute top-0 inset-x-0 z-20 h-px bg-gradient-to-r from-transparent via-gold-500/80 to-transparent" aria-hidden="true" />

      {/* Slides */}
      <div
        className="absolute inset-0 scale-[1.08]"
        style={{ transform: `translate3d(0, ${py * 0.14}px, 0) scale(1.08)` }}
        aria-hidden="true"
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.image}
              alt={s.name}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`h-full w-full object-cover transition-transform duration-[9000ms] ease-out ${
                i === active ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/75 sm:via-ink-950/55 to-ink-950/20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/40" aria-hidden="true" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[42rem] md:min-h-[min(90vh,50rem)] flex flex-col justify-center py-24 md:py-28 ${
          ready ? 'hero-in' : ''
        }`}
      >
        <div className="cin" style={{ animationDelay: '0ms' }}>
          <span className="eyebrow on-dark justify-start">Since {site.founded} — Egyptian Engineering Projects Co.</span>
        </div>

        <div className="cin" style={{ animationDelay: '120ms' }}>
          <h1 className="mt-6 text-5xl sm:text-6xl xl:text-[4.3rem] leading-[1.02] max-w-3xl font-semibold">
            Creating Integrated
            <span className="block italic text-grad-hero">
              Innovative Systems
              <span className="not-italic text-gold-400">.</span>
            </span>
          </h1>
        </div>

        <div className="cin" style={{ animationDelay: '240ms' }}>
          <p className="mt-8 text-base md:text-lg leading-8 text-ink-200 max-w-xl">
            Engineering, procurement, installation and maintenance for Egypt’s most demanding landmark projects —
            powered by a globally partnered, owner-operated team.
          </p>
        </div>

        <div className="cin" style={{ animationDelay: '360ms' }}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/references" className="btn btn-primary">
              View Our References
              <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn btn-ghost-light">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="cin" style={{ animationDelay: '480ms' }}>
          <div className="mt-14 max-w-2xl rounded-2xl bg-white/[0.07] backdrop-blur-md ring-1 ring-white/15 p-7 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-9">
            {[{ value: 40, suffix: '+', label: 'Years of Experience' }, { value: 300, suffix: '+', label: 'Landmark Projects' }, { value: 16, suffix: '', label: 'Systems & Disciplines' }, { value: 120, suffix: '+', label: 'Global Partners' }].map((s, i) => (
              <div key={s.label} className={i > 0 ? 'md:border-s md:border-white/15 md:ps-6' : ''}>
                <span className="font-display text-3xl md:text-4xl font-semibold text-accent-300">
                  {s.value}
                  <span className="text-gold-400">{s.suffix}</span>
                </span>
                <span className="mt-2 block text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink-200">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <div className="cin mt-12 flex flex-wrap items-center justify-between gap-6" style={{ animationDelay: '600ms' }}>
          <p className="text-xs font-semibold text-ink-200">
            <span className="font-display italic text-gold-400 text-base">
              {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <span className="mx-3 text-white/25">|</span>
            {heroSlides[active].name}
          </p>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
              {heroSlides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show slide ${i + 1}: ${s.name}`}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 bg-gold-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="grid place-items-center h-10 w-10 rounded-full ring-1 ring-white/25 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next slide"
                className="grid place-items-center h-10 w-10 rounded-full ring-1 ring-white/25 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Trust / certification bar ───────────────────────────────── */
function TrustBar() {
  const items = [
    { top: 'Since 1985', text: 'Egyptian Engineering Projects Co.' },
    { top: '300+ Projects', text: 'Delivered Nationwide' },
    { top: '120+ Partners', text: 'Leading Global Brands' },
    { top: '6 Service Lines', text: 'From Design to Maintenance' },
  ]
  return (
    <section className="border-b border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100">
          {items.map((it) => (
            <div key={it.top} className="bg-white px-7 py-9">
              <span className="font-display text-2xl font-semibold text-ink-900">{it.top}</span>
              <span className="mt-2 block text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ink-400">
                {it.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Services grid ───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeading
            index="01"
            eyebrow="What We Do"
            title="Six disciplines, one integrated standard of excellence."
            desc="End-to-end delivery — from the first sketch to lifetime maintenance — on Egypt’s most complex ELV and integrated systems projects."
          />
          <Reveal delay={120}>
            <Link to="/services" className="btn btn-outline !py-3.5">
              All Services
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] || Layers
            return (
              <Reveal key={s.slug} delay={i * 60} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-gold-500/40 hover:shadow-lift transition-all overflow-hidden"
                >
                  <span
                    className="pointer-events-none absolute -top-2 end-4 font-display italic text-[4.5rem] leading-none text-ink-100 group-hover:text-gold-500/25 transition-colors"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative grid place-items-center h-14 w-14 rounded-full bg-accent-400/15 text-accent-700 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="relative mt-6 text-[1.35rem] leading-snug text-ink-900 group-hover:text-accent-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-ink-500">{s.summary}</p>
                  <span className="relative mt-auto pt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-700">
                    <span className="h-px w-6 bg-gold-500 transition-all group-hover:w-10" aria-hidden="true" />
                    Learn more
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Editorial projects ──────────────────────────────────────── */
function ProjectsSection() {
  const picks = featuredProjects.slice(0, 3)
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeading
            index="02"
            eyebrow="Selected References"
            title="The landmarks we were trusted to complete."
            desc="From the Grand Egyptian Museum to Cairo Stadium — engineering for Egypt’s most high-profile venues."
            dark={false}
          />
          <Reveal delay={120}>
            <Link to="/references" className="btn btn-outline !py-3.5">
              All References
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20">
          {picks.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <Link
                to="/references"
                className={`group grid md:grid-cols-12 gap-8 md:gap-14 items-center ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
              >
                <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" aria-hidden="true" />
                  <span
                    className="absolute bottom-5 start-6 font-display italic text-2xl text-white/90"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-5 [direction:ltr]">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl leading-[1.1] text-ink-900 group-hover:text-accent-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-ink-500">{p.scope}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-700">
                    Enter the project
                    <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Activities strip ────────────────────────────────────────── */
function ActivitiesStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Scope of Work"
          title="Sixteen disciplines, one integrated standard."
          desc="From audio-visual and security to planetarium projection and VR, we engineer every discipline your project needs."
          align="center"
        />
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {activities.map((a, i) => {
            const Icon = activityIcons[i] || Layers
            return (
              <Reveal key={a.slug} delay={i * 35}>
                <Link
                  to="/activities"
                  className="group flex flex-col items-center gap-4 p-6 h-full rounded-2xl bg-ink-50 border border-ink-100 hover:border-gold-500/40 hover:shadow-lift transition-all text-center"
                >
                  <div className="grid place-items-center h-12 w-12 rounded-full bg-accent-400/15 text-accent-700 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    <Icon size={21} />
                  </div>
                  <span className="font-display text-[0.82rem] leading-tight text-ink-800">{a.title}</span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Partner logo wall ───────────────────────────────────────── */
function PartnersWall() {
  const names = partners.flatMap((p) => p.members)
  const show = names.slice(0, 16)
  const styles = [
    'font-display text-[1.1rem] font-semibold text-ink-800',
    'font-display italic text-[1.05rem] font-medium text-ink-700',
    'uppercase tracking-[0.2em] text-[0.72rem] font-semibold text-ink-600',
    'font-display text-[1.05rem] font-semibold text-accent-700',
    'uppercase tracking-[0.14em] font-bold text-[0.82rem] text-ink-800',
  ]
  return (
    <section className="border-t border-ink-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeading
            index="04"
            eyebrow="Our Partners"
            title="The world’s most trusted brands, engineered locally."
            desc="We represent more than 120 leading global manufacturers across every discipline — bringing proven technology to Egypt’s most demanding projects."
          />
          <Reveal delay={120}>
            <Link to="/partners" className="btn btn-outline !py-3.5">
              View All Partners
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-100 border border-ink-100">
          {show.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="group flex items-center justify-center h-28 bg-white px-5 text-center hover:bg-ink-50 transition-colors"
            >
              <span className={`${styles[i % styles.length]} group-hover:text-gold-600 transition-colors`}>{name}</span>
            </div>
          ))}
          <div className="flex items-center justify-center h-28 px-5 text-center bg-ink-950">
            <span className="font-display italic text-white/85 text-sm">
              … and <span className="text-gold-400">100+</span> more brands worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Latest news ─────────────────────────────────────────────── */
function NewsSection() {
  const latest = news.slice(0, 3)
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <SectionHeading
            index="05"
            eyebrow="The Journal"
            title="News & milestones from the field."
            align="start"
          />
          <Reveal delay={120}>
            <Link to="/news" className="btn btn-outline !py-3.5">
              All Journal
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {latest.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80} className="h-full">
              <Link
                to={`/news/${n.slug}`}
                className="group flex h-full flex-col border-t border-gold-500 bg-white p-7 shadow-card hover:shadow-lift transition-shadow"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display italic text-sm text-gold-600">{n.category}</span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-400">
                    <CalendarDays size={13} />
                    {new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.3rem] leading-snug text-ink-900 group-hover:text-accent-700 transition-colors">
                  {n.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-500">{n.excerpt}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-700">
                  <span className="h-px w-6 bg-gold-500 transition-all group-hover:w-10" aria-hidden="true" />
                  Read article
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Home Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProjectsSection />
      <ActivitiesStrip />
      <PartnersWall />
      <NewsSection />
      <CtaBand />
    </>
  )
}