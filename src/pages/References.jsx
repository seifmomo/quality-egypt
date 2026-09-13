import { Link } from 'react-router-dom'
import { ArrowRight, Building } from 'lucide-react'
import { references } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

export default function References() {
  return (
    <>
      <PageHero
        crumb="Selected References"
        title="Trusted by the Landmarks of Egypt"
        desc="A selection of the government, cultural, sporting and commercial venues where our systems operate every day."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 60}>
              <Link
                to={`/references/${r.slug}`}
                className="group relative block h-72 rounded-2xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 inset-x-0 flex items-end justify-between gap-3 p-6">
                  <div>
                    <span className="inline-block mb-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[0.68rem] font-bold uppercase tracking-wide text-accent-300">
                      {r.projects.length} Projects
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{r.title}</h3>
                  </div>
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-accent-400 text-ink-950 shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex items-center justify-center gap-3 text-sm text-ink-500">
            <Building size={18} className="text-accent-500" />
            Over 300 landmark projects delivered across Egypt since {new Date().getFullYear() - 40}.
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}