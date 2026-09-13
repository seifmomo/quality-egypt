import { Link } from 'react-router-dom'
import { Mail, ArrowRight, Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { site, jobs } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

export default function Jobs() {
  return (
    <>
      <PageHero
        crumb="Job Vacancies"
        title="Build a Career in Engineering Excellence"
        desc="Join the team behind Egypt’s most iconic systems — engineers, technicians and specialists who love what they do."
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {jobs.length === 0 ? (
          <Reveal>
            <div className="rounded-3xl bg-ink-50 border border-ink-100 p-10 text-center">
              <h3 className="text-xl font-bold text-ink-900">Openings coming soon</h3>
              <p className="mt-3 text-ink-500">
                We’re always looking for great engineers. Send your CV to{' '}
                <a href={`mailto:${site.email}`} className="font-bold text-accent-600" dir="ltr">{site.email}</a>.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="space-y-5">
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 60}>
                <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card hover:shadow-lift transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="grid place-items-center h-12 w-12 rounded-full bg-accent-400/15 text-accent-600 shrink-0">
                        <Briefcase size={21} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-ink-900">{j.title}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-ink-500">
                          <span className="inline-flex items-center gap-1.5">
                            <TagPill>{j.type}</TagPill>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={13} className="text-accent-500" />
                            Cairo, Egypt
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={13} className="text-accent-500" />
                            {new Date(j.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(j.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-ink-900 hover:bg-ink-800 transition-colors"
                    >
                      Apply by Email
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal>
          <div className="mt-12 rounded-3xl bg-accent-400/10 border border-accent-400/25 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-accent-400 text-ink-950 shrink-0">
                <Mail size={21} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink-900">Don’t see your role?</h3>
                <p className="mt-1.5 text-sm text-ink-500">
                  Send your CV to <span className="font-bold" dir="ltr">{site.email}</span> — we’ll reach out when the right opportunity opens.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors shrink-0"
            >
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}

function TagPill({ children }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full bg-ink-900 text-white text-[0.68rem] font-bold uppercase tracking-wide">
      {children}
    </span>
  )
}