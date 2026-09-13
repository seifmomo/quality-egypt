import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { references } from '../content'
import { Reveal, CtaBand } from '../components/ui'

export default function ReferenceCategory() {
  const { slug } = useParams()
  const ref = references.find((r) => r.slug === slug)

  if (!ref) return <Navigate to="/references" replace />

  const others = references.filter((r) => r.slug !== slug)

  return (
    <>
      {/* Category hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute -top-40 end-[-8%] w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-accent-400">/</span>
              <Link to="/references" className="hover:text-white transition-colors">References</Link>
              <span className="text-accent-400">/</span>
              <span className="text-white">{ref.title}</span>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <Reveal>
                <span className="eyebrow text-accent-300">Selected References</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">{ref.title}</h1>
                <p className="mt-6 text-lg leading-9 text-ink-200 max-w-xl">
                  Representative projects where Quality engineered, supplied and integrated the systems.
                </p>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <div className="rounded-[1.75rem] overflow-hidden shadow-lift ring-1 ring-white/10">
                <img src={ref.image} alt={ref.title} className="w-full h-64 object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12">
          <div className="space-y-6">
            {ref.projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card hover:shadow-lift transition-all">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center h-9 w-9 rounded-lg bg-ink-900 text-white text-sm font-black">{i + 1}</span>
                    <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-ink-500">{p.scope}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-2xl bg-accent-400/10 border border-accent-400/20 p-5 flex items-start gap-3 text-sm text-ink-700">
                <CheckCircle2 size={18} className="shrink-0 text-accent-600 mt-0.5" />
                These are representative highlights. For a detailed project reference list, contact our team.
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit">
            <Reveal delay={80}>
              <div className="rounded-3xl bg-ink-900 text-white p-7">
                <h3 className="text-sm font-bold uppercase tracking-wide text-accent-300">More Categories</h3>
                <ul className="mt-5 space-y-1.5">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`/references/${o.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-ink-200 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {o.title}
                        <ArrowLeft size={15} className="shrink-0 opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-5 w-full justify-center px-6 py-3.5 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}