import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
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
import { site, stats as homeStats, services, activities, featuredProjects, news, partners } from '../content'
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
  { image: '/quality-egypt/images/hero-gem.jpg', name: 'Grand Egyptian Museum', category: 'Museums' },
  { image: '/quality-egypt/images/p-ramsis.jpg', name: 'GEM — Galleries & Interpretation', category: 'Museums' },
  { image: '/quality-egypt/images/p-nmec.jpg', name: 'National Museum of Egyptian Civilization', category: 'Museums' },
  { image: '/quality-egypt/images/p-manara.jpg', name: 'Al Manara Conference Center', category: 'Conference Centers' },
  { image: '/quality-egypt/images/p-league.jpg', name: 'The Arab League', category: 'Conference Technology' },
  { image: '/quality-egypt/images/p-stadium.jpg', name: 'Cairo Stadium', category: 'Stadiums & Sports Facilities' },
]

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % count), 6000)
    return () => clearInterval(t)
  }, [paused, active, count])

  const go = (dir) => setActive((a) => (a + dir + count) % count)

  return (
    <section
      className="relative overflow-hidden bg-ink-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="absolute top-0 inset-x-0 z-20 h-[3px] bg-gradient-to-r from-accent-400 via-accent-600 to-gold-400" aria-hidden="true" />

      {/* Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.image}
              alt={s.name}
              className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
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
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[40rem] md:min-h-[min(88vh,46rem)] flex flex-col justify-center py-24 md:py-28">
        <Reveal>
          <span className="eyebrow on-dark justify-start">Since {site.founded} — Egyptian Engineering Projects Co.</span>
          <h1 className="mt-5 text-4xl sm:text-5xl xl:text-[3.6rem] leading-tight font-extrabold max-w-2xl">
            Creating Integrated
            <span className="block text-grad-hero">Innovative Systems</span>
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 text-base md:text-lg leading-8 text-ink-200 max-w-xl">
            Engineering, procurement, installation and maintenance for Egypt’s most demanding landmark projects —
            powered by a globally partnered, owner-operated team.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/references"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 shadow-glow transition-colors"
            >
              View Our References
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/25 hover:border-accent-300 hover:text-accent-300 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 max-w-xl rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-7">
            {homeStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-black text-accent-300">
                  {s.value}
                  <span className="text-gold-400">{s.suffix}</span>
                </span>
                <span className="mt-1.5 text-[0.68rem] font-semibold text-ink-200 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Slider controls + caption */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <Reveal delay={280}>
            <p className="text-xs font-semibold text-ink-200">
              <span className="text-accent-300 font-bold">
                {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </span>
              <span className="mx-2 text-white/30">|</span>
              {heroSlides[active].name}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.image}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Show slide ${i + 1}: ${s.name}`}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-accent-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous slide"
                  className="grid place-items-center h-10 w-10 rounded-full ring-1 ring-white/25 text-white hover:bg-white/15 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next slide"
                  className="grid place-items-center h-10 w-10 rounded-full ring-1 ring-white/25 text-white hover:bg-white/15 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Services grid ───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Engineering That Powers Landmarks"
          desc="End-to-end delivery — from the first sketch to lifetime maintenance — on Egypt’s most complex ELV and integrated systems projects."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] || Layers
            return (
              <Reveal key={s.slug} delay={i * 50} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col bg-white rounded-2xl p-6 border border-ink-100 shadow-card hover:shadow-lift transition-shadow"
                >
                  <div className="grid place-items-center h-12 w-12 rounded-full bg-accent-400/15 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-900 group-hover:text-accent-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{s.summary}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 underline underline-offset-4 decoration-accent-300 group-hover:decoration-accent-700">
                    Learn more
                    <ArrowRight size={14} />
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

/* ── Featured Projects ───────────────────────────────────────── */
function ProjectsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="Selected References"
          title="Landmark Projects We've Delivered"
          desc="From the Grand Egyptian Museum to Cairo Stadium — systems engineering for Egypt’s most high-profile venues."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <Link to="/references" className="group block relative h-[26rem] rounded-2xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <span className="inline-block px-3 py-1 mb-3 rounded-full bg-accent-400/15 text-accent-300 text-[0.68rem] font-bold uppercase tracking-wide backdrop-blur-md">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-200 line-clamp-2">{p.scope}</p>
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
    <section className="bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="Scope of Work"
          title="16 Disciplines Under One Roof"
          desc="From audio-visual and security to planetarium projection and VR, we engineer every discipline your project needs."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {activities.map((a, i) => {
            const Icon = activityIcons[i] || Layers
            return (
              <Reveal key={a.slug} delay={i * 30}>
                <Link
                  to="/activities"
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-ink-100/60 shadow-card hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/30 transition-all text-center"
                >
                  <div className="grid place-items-center h-11 w-11 rounded-full bg-accent-400/15 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[0.78rem] font-bold text-ink-700 group-hover:text-accent-600 transition-colors leading-tight">{a.title}</span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Partner marquee ─────────────────────────────────────────── */
function PartnersMarquee() {
  const allPartners = partners.flatMap((p) => p.members)
  return (
    <section className="bg-ink-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-4 text-center">
        <SectionHeading
          eyebrow="Our Partners"
          title="World-Class Technology, Delivered Locally"
          desc="We represent more than 120 leading global brands across every discipline — bringing proven technology to Egypt’s most demanding projects."
          align="center"
          dark
        />
      </div>
      <div className="marquee-mask mt-16">
        <div className="animate-q-marquee flex gap-6 w-max">
          {[...allPartners, ...allPartners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center justify-center h-14 px-7 rounded-full bg-white/10 border border-white/10 text-[0.82rem] font-bold tracking-wide text-ink-200 whitespace-nowrap backdrop-blur-md"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center pt-6 pb-20 md:pb-24">
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white border border-white/20 hover:border-accent-300 hover:text-accent-300 transition-colors"
        >
          View All Partners
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

/* ── Latest News ─────────────────────────────────────────────── */
function NewsSection() {
  const latest = news.slice(0, 3)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="Latest Updates"
          title="News & Insights"
          desc="The latest from our team — project launches, events, partnerships and industry milestones."
          align="center"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {latest.map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}>
              <Link
                to={`/news/${n.slug}`}
                className="group flex h-full flex-col bg-ink-50 rounded-2xl p-6 border border-ink-100/50 shadow-card hover:shadow-lift transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-400/15 text-accent-600 text-[0.68rem] font-bold uppercase tracking-wide">
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    <CalendarDays size={13} />
                    {new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 group-hover:text-accent-600 transition-colors leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-500">{n.excerpt}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 underline underline-offset-4 decoration-accent-300 group-hover:decoration-accent-700">
                  Read article
                  <ArrowRight size={14} />
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
      <ServicesSection />
      <ProjectsSection />
      <ActivitiesStrip />
      <PartnersMarquee />
      <NewsSection />
      <CtaBand />
    </>
  )
}