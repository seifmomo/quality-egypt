import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Wrench, Server, Shield, BookOpen, Hammer, CheckCircle2 } from 'lucide-react'
import { services } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

const serviceIcons = [Layers, Wrench, Server, Shield, BookOpen, Hammer]

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Services Engineered Around Your Project"
        desc="Six integrated disciplines, one accountable team — taking your project from concept through procurement, installation and lifetime support."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] || Layers
            return (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white border border-ink-100/70 p-7 shadow-card hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid place-items-center h-13 w-13 p-3.5 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-card">
                      <Icon size={24} />
                    </div>
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-ink-50 text-ink-500 group-hover:bg-accent-400 group-hover:text-ink-950 transition-colors">
                      <ArrowRight size={15} />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink-900 group-hover:text-accent-600 transition-colors">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500 flex-1">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-ink-50 pt-5">
                    {s.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[0.82rem] font-semibold text-ink-600">
                        <CheckCircle2 size={14} className="shrink-0 text-accent-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaBand />
    </>
  )
}