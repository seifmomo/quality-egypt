import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { site, nav } from '../content'

const footerGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Engineering & Design', to: '/services/engineering-design' },
      { label: 'Product Choice & Procurement', to: '/services/procurement' },
      { label: 'Project Engineering Management', to: '/services/project-management' },
      { label: 'Installation, Testing & Commissioning', to: '/services/testing' },
      { label: 'Training & Certification', to: '/services/training' },
      { label: 'Maintenance & Technical Support', to: '/services/maintenance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Scope of Activities', to: '/activities' },
      { label: 'Our Partners', to: '/partners' },
      { label: 'Selected References', to: '/references' },
      { label: 'News', to: '/news' },
      { label: 'Job Vacancies', to: '/jobs' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-200">
      <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-accent-400 via-accent-600 to-gold-400" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <span className="flex items-center gap-3">
              <img src="/quality-egypt/images/logo-light.png" alt="" className="h-10 w-auto" loading="lazy" />
              <span className="leading-none">
                <span className="block font-black text-lg text-white tracking-tight">{site.name}</span>
                <span className="block mt-1 text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-ink-400">
                  Engineering Projects Co.
                </span>
              </span>
            </span>
            <p className="mt-5 text-sm leading-7 text-ink-300 max-w-sm">
              A leading ELV systems integrator and commercial contractor since {site.founded} — engineering,
              procuring, installing and maintaining the systems behind Egypt’s most iconic landmarks.
            </p>
            <div className="mt-6 flex gap-2.5">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-ink-300 hover:text-ink-950 hover:bg-accent-400 hover:border-accent-400 transition-colors"
                >
                  <span className="text-sm font-bold">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-bold text-white tracking-wide">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-ink-300 hover:text-accent-300 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wide">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-300">
              <li className="flex gap-3">
                <MapPin size={17} className="shrink-0 text-accent-400 mt-0.5" />
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors">
                  {site.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="shrink-0 text-accent-400 mt-0.5" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-accent-300 transition-colors" dir="ltr">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="shrink-0 text-accent-400 mt-0.5" />
                <a href={`mailto:${site.email}`} className="hover:text-accent-300 transition-colors" dir="ltr">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            {nav.slice(1).map((n) => (
              <Link key={n.to} to={n.to} className="text-ink-300 hover:text-accent-300 transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid place-items-center h-10 w-10 rounded-full border border-white/10 text-ink-300 hover:text-ink-950 hover:bg-accent-400 transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}