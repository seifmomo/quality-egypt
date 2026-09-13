import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Layers,
  Building,
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

/* ── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-white text-ink-900">
      <div className="absolute inset-0 bg-grid-light opacity-70" aria-hidden="true" />
      <div className="absolute -top-48 end-[-8%] w-[34rem] h-[34rem] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 start-[-6%] w-[28rem] h-[28rem] rounded-full bg-gold-400/25 blur-3xl" aria-hidden="true" />
      <span className="absolute top-0 end-0 h-[3px] w-1/2 bg-gradient-to-l from-gold-500 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <Reveal>
              <span className="eyebrow justify-start">Since {site.founded} — Egyptian Engineering Projects Co.</span>
              <h1 className="mt-5 text-4xl sm:text-5xl xl:text-[3.5rem] leading-tight font-extrabold">
                Creating Integrated
                <span className="block text-grad-primary">Innovative Systems</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 text-base md:text-lg leading-8 text-ink-600 max-w-xl">
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-ink-800 border border-ink-200 hover:border-accent-500 hover:text-accent-600 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
                {homeStats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-accent-600">
                      {s.value}
                      <span className="text-gold-500">{s.suffix}</span>
                    </span>
                    <span className="mt-1.5 text-xs font-semibold text-ink-500 uppercase tracking-wide">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image panel */}
          <div className="hidden lg:block relative">
            <Reveal delay={120}>
              <div className="group relative rounded-[2rem] overflow-hidden shadow-lift ring-1 ring-ink-100">
                <img
                  src="/quality-egypt/images/hero-gem.jpg"
                  alt="Grand Egyptian Museum entrance"
                  className="w-full h-[30rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute top-6 end-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400 text-ink-950 text-[0.78rem] font-bold shadow-card">
                  Est. {site.founded}
                </span>
                <div className="absolute bottom-6 start-6 end-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-[0.78rem] font-bold text-white ring-1 ring-white/20">
                    <Building size={15} className="text-gold-300" />
                    {homeStats[1].value}+ landmark projects delivered
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Services grid ───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="bg-ink-50 bg-grid-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Engineering That Powers Landmarks"
          desc="End-to-end delivery — from the first sketch to lifetime maintenance — on Egypt’s most complex ELV and integrated systems projects."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] || Layers
            return (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group h-full bg-white rounded-2xl p-6 shadow-card border border-ink-100/60 hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/40 transition-all"
                >
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-card mb-5">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 group-hover:text-accent-600 transition-colors">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500 line-clamp-3">{s.summary}</p>
                  <span className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-accent-600 group-hover:translate-x-[-3px] transition-transform">
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
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-ink-900 text-white group-hover:bg-accent-500 transition-colors shadow-sm">
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
                className="group block h-full bg-ink-50 rounded-2xl p-6 shadow-card border border-ink-100/50 hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/30 transition-all"
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
                <p className="mt-3 text-sm leading-6 text-ink-500 line-clamp-2">{n.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-accent-600 group-hover:translate-x-[-3px] transition-transform">
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