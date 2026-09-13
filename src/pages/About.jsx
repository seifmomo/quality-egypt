import { Link } from 'react-router-dom'
import { ArrowRight, Award, Eye, Target, Users, ShieldCheck, HeartHandshake, Lightbulb } from 'lucide-react'
import { site, services } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

const values = [
  { icon: ShieldCheck, title: 'Technical Integrity', desc: 'Every system engineered to spec, tested to standard, and documented without shortcuts.' },
  { icon: Users, title: 'Owner-Driven Team', desc: 'A permanent, experienced team of consultants and engineers who take personal ownership.' },
  { icon: HeartHandshake, title: 'Long-Term Partnerships', desc: 'Relationships with clients and manufacturers built over 40 years of delivery.' },
  { icon: Lightbulb, title: 'Innovation by Default', desc: 'Pushing for the newest technology that genuinely improves how our systems perform.' },
]

const milestones = [
  { year: '1985', text: 'Quality founded in Cairo to serve the growing demand for specialized electronic systems engineering.' },
  { year: '1990s', text: 'Established as a trusted subcontractor across government, banking and hotel projects.' },
  { year: '2000s', text: 'Expanded into conference technology, staging, security and networking at institutional scale.' },
  { year: '2010s', text: 'Delivered landmark cultural and sporting venues — museums, stadiums, opera houses and airports.' },
  { year: '2020s', text: '40 years of engineering — and the launch of Quality Saudi for regional expansion.' },
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Four Decades of Engineering Landmarks"
        desc="A leading ELV systems integrator and commercial contractor, delivering engineering excellence since 1985."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-lift">
                <img src="/quality-egypt/images/about.jpg" alt="Quality engineering team at work" className="w-full h-[26rem] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -end-6 hidden sm:block rounded-2xl bg-ink-900 text-white px-7 py-5 shadow-lift">
                <span className="block text-3xl font-black text-accent-400">{site.founded}</span>
                <span className="block mt-1 text-xs font-semibold uppercase tracking-wide text-ink-300">When it all began</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-ink-900">
                {site.legalName}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 space-y-5 text-base leading-8 text-ink-500">
                <p>
                  Founded in {site.founded} to meet the rising demand for highly specialized services, Quality is a leading ELV
                  systems integrator and commercial contractor with a wealth of expertise in advanced systems engineering for the
                  construction sector.
                </p>
                <p>
                  The company’s edge lies in its qualified team of technical consultants and experienced engineers who work
                  around the clock to design and implement comprehensive engineering systems tailored to each project’s needs.
                </p>
                <p>
                  From engineering and procurement to installation and maintenance, Quality guarantees an unparalleled world of
                  cutting-edge services — empowering every aspect of your project to grow beyond its potential.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-ink-900 hover:bg-ink-800 transition-colors">
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
                <Link to="/references" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-ink-800 border border-ink-200 hover:border-accent-500 hover:text-accent-600 transition-colors">
                  See Our References
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <SectionHeadingRow />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { icon: Eye, title: 'Our Vision', text: 'Unlocking a world of business opportunities for clients by professionally addressing project complexities through in-depth technical knowledge and a strict code of business ethics — giving projects the driven freedom to flourish in design.' },
              { icon: Target, title: 'Our Mission', text: 'Providing reliable engineering solutions in the ELV field through a professional environment supported by a highly experienced team, renowned for a distinctive approach and unrivalled technical expertise.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-card border border-ink-100/60">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-card mb-5">
                    <c.icon size={21} />
                  </div>
                  <h3 className="text-xl font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal>
          <span className="eyebrow justify-center">The Journey</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-center text-ink-900">Milestones Along the Way</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 60}>
              <div className="relative h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all">
                <span className="inline-block px-3 py-1 rounded-full bg-ink-900 text-white text-xs font-bold">{m.year}</span>
                <p className="mt-4 text-sm leading-7 text-ink-500">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-ink-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
        <div className="absolute top-0 start-0 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <Reveal>
            <span className="eyebrow justify-center">What We Stand For</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-center">The Principles Behind the Work</h2>
          </Reveal>
          <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-accent-400/15 text-accent-300 mb-5">
                    <v.icon size={20} />
                  </div>
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-300">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services mini */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <Reveal>
              <span className="eyebrow">End-to-End</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-ink-900">Comprehensive Services</h2>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-500">
              All Services
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link to={`/services/${s.slug}`} className="group flex items-start justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/40 transition-all">
                <div>
                  <h3 className="font-bold text-ink-900 group-hover:text-accent-600 transition-colors">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500 line-clamp-2">{s.summary}</p>
                </div>
                <Award className="shrink-0 text-accent-500 mt-1 group-hover:rotate-12 transition-transform" size={20} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function SectionHeadingRow() {
  return (
    <Reveal>
      <span className="eyebrow justify-center">Purpose</span>
      <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-center text-ink-900">Vision & Mission</h2>
    </Reveal>
  )
}