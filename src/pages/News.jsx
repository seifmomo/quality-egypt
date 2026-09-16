import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { news } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

const categories = ['All', ...new Set(news.map((n) => n.category))]

export default function News() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? news : news.filter((n) => n.category === active)

  return (
    <>
      <PageHero
        crumb="News"
        title="News & Insights"
        desc="Project launches, events, partnerships and milestones from the Quality Egypt team."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal>
          <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Filter news by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  active === c
                    ? 'bg-ink-900 text-white shadow-card'
                    : 'bg-ink-50 border border-ink-100 text-ink-600 hover:border-accent-400 hover:text-accent-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 50}>
              <Link
                to={`/news/${n.slug}`}
                className="group flex h-full flex-col rounded-2xl bg-ink-50 border border-ink-100/50 p-6 shadow-card hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-400/15 text-accent-600 text-[0.68rem] font-bold uppercase tracking-wide">
                    {n.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink-500">
                    <CalendarDays size={13} />
                    {new Date(n.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 group-hover:text-accent-600 transition-colors leading-snug">{n.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-500 flex-1 line-clamp-2">{n.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-5 text-xs font-bold text-accent-600 group-hover:translate-x-[-3px] transition-transform">
                  Read article
                  <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}