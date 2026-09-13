import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, Wrench, Server, Shield, BookOpen, Hammer } from 'lucide-react'
import { services } from '../content'
import { Reveal, CtaBand } from '../components/ui'

const serviceIcons = {
  'engineering-design': Layers,
  procurement: Wrench,
  'project-management': Server,
  testing: Shield,
  training: BookOpen,
  maintenance: Hammer,
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const idx = services.findIndex((s) => s.slug === slug)
  const service = services[idx]

  if (!service) return <Navigate to="/services" replace />

  const Icon = serviceIcons[slug] || Layers
  const others = services.filter((s) => s.slug !== slug)

  return (
    <>
      {/* Detail hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute -top-40 end-[-8%] w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-accent-400">/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-accent-400">/</span>
              <span className="text-white">{service.title}</span>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <Reveal>
                <div className="grid place-items-center h-16 w-16 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-accent-300 mb-7">
                  <Icon size={30} />
                </div>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] max-w-3xl">{service.title}</h1>
                <p className="mt-6 text-lg leading-9 text-ink-200 max-w-2xl">{service.summary}</p>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <div className="flex lg:flex-col gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors">
                  Request This Service
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white border border-white/25 hover:border-accent-300 transition-colors">
                  <ArrowLeft size={16} />
                  All Services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
          <div className="space-y-6 text-base md:text-lg leading-9 text-ink-500">
            {service.body.map((p) => (
              <Reveal key={p.slice(0, 24)}>
                <p>{p}</p>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-10 rounded-3xl bg-ink-50 border border-ink-100 p-8">
                <h2 className="text-xl font-bold text-ink-900">What you get</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm font-semibold text-ink-700">
                      <CheckCircle2 size={17} className="shrink-0 text-accent-500 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <Reveal delay={80}>
              <div className="rounded-3xl bg-ink-900 text-white p-7">
                <h3 className="text-sm font-bold uppercase tracking-wide text-accent-300">Other Services</h3>
                <ul className="mt-5 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`/services/${o.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-ink-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {o.title}
                        <ArrowLeft size={15} className="shrink-0 opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}