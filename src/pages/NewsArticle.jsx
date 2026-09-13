import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CalendarDays, Tag } from 'lucide-react'
import { news } from '../content'
import { Reveal, CtaBand } from '../components/ui'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = news.find((n) => n.slug === slug)

  if (!article) return <Navigate to="/news" replace />

  const related = news.filter((n) => n.slug !== article.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
        <div className="absolute -top-40 end-[-8%] w-[36rem] h-[36rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-ink-300 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-accent-400">/</span>
              <Link to="/news" className="hover:text-white transition-colors">News</Link>
              <span className="text-accent-400">/</span>
              <span className="text-white">Article</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-400/15 text-accent-300 text-xs font-bold uppercase tracking-wide">
                <Tag size={12} />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-300">
                <CalendarDays size={13} />
                {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{article.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 max-w-2xl mx-auto leading-8">{article.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="space-y-8">
          {article.body.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="text-base md:text-lg leading-9 text-ink-600">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-ink-50 border border-ink-100 p-6">
            <div className="flex items-center gap-3">
              <img src="/quality-egypt/images/logo-dark.png" alt="Quality" className="h-10 w-auto" loading="lazy" />
              <span className="text-sm font-bold text-ink-700">Quality Egypt — Engineering Projects Co.</span>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-ink-800 border border-ink-200 hover:border-accent-500 hover:text-accent-600 transition-colors"
            >
              <ArrowLeft size={15} />
              All News
            </Link>
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-ink-900 tracking-tight">More Updates</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {related.map((n) => (
              <Reveal key={n.slug} delay={60}>
                <Link
                  to={`/news/${n.slug}`}
                  className="group block h-full rounded-2xl bg-white border border-ink-100 p-5 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-400/15 text-accent-600 text-[0.66rem] font-bold uppercase tracking-wide">
                    {n.category}
                  </span>
                  <h3 className="mt-3 text-[0.95rem] font-bold text-ink-900 leading-snug group-hover:text-accent-600 transition-colors line-clamp-2">
                    {n.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-accent-600">
                    Read
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}