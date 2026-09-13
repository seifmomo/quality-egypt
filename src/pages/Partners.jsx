import { Link } from 'react-router-dom'
import { ArrowRight, Globe2 } from 'lucide-react'
import { partners } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

export default function Partners() {
  return (
    <>
      <PageHero
        crumb="Partners"
        title="A Global Network Behind Every System"
        desc="We represent more than 120 leading manufacturing brands — the technology backbone of every project we deliver."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="space-y-12">
          {partners.map((group) => (
            <div key={group.group}>
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <span className="grid place-items-center h-8 w-8 rounded-lg bg-ink-900 text-white">
                    <Globe2 size={15} />
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-ink-900">{group.group}</h2>
                  <span className="h-px flex-1 bg-ink-100" aria-hidden="true" />
                </div>
              </Reveal>
              <Reveal delay={40}>
                <div className="flex flex-wrap gap-3">
                  {group.members.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center px-5 py-2.5 rounded-full bg-ink-50 border border-ink-100 text-[0.85rem] font-bold text-ink-700 whitespace-nowrap hover:border-accent-400 hover:text-accent-600 hover:-translate-y-0.5 shadow-sm transition-all"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 text-white p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Want your technology represented by Quality?</h3>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              We’re always expanding our portfolio with manufacturers who share our standard of excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 px-8 py-4 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors"
            >
              Become a Partner
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}