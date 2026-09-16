import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './SocialIcons'
import { site, nav } from '../content'

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, LinkedIn: LinkedInIcon }

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
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <span className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <img src="/quality-egypt/images/logo-light.png" alt={site.name} className="h-11 w-auto" loading="lazy" />
            <p className="mt-6 text-sm leading-8 text-ink-300 max-w-sm">
              A leading ELV systems integrator and commercial contractor since {site.founded} — engineering,
              procuring, installing and maintaining the systems behind Egypt’s most iconic landmarks.
            </p>
            <div className="mt-7 flex gap-2.5">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label] || FacebookIcon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center h-10 w-10 rounded-full border border-white/15 text-ink-300 hover:text-ink-950 hover:bg-gold-400 hover:border-gold-400 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-lg text-white">{g.title}</h3>
              <span className="mt-3 block h-px w-8 bg-gold-500/70" aria-hidden="true" />
              <ul className="mt-6 space-y-3.5">
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
            <h3 className="font-display text-lg text-white">Contact</h3>
            <span className="mt-3 block h-px w-8 bg-gold-500/70" aria-hidden="true" />
            <ul className="mt-6 space-y-5 text-sm text-ink-300">
              <li className="flex gap-3">
                <MapPin size={17} className="shrink-0 text-gold-400 mt-0.5" />
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors">
                  {site.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="shrink-0 text-gold-400 mt-0.5" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-accent-300 transition-colors" dir="ltr">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="shrink-0 text-gold-400 mt-0.5" />
                <a href={`mailto:${site.email}`} className="hover:text-accent-300 transition-colors" dir="ltr">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            <span className="block mt-1.5">
              Website crafted by{' '}
              <a
                href={site.developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink-200 hover:text-accent-300 transition-colors"
              >
                {site.developer.name}
              </a>
              <span className="mx-1.5 text-ink-500">·</span>
              <a href={site.developer.github} target="_blank" rel="noreferrer" className="text-ink-300 hover:text-accent-300 transition-colors" dir="ltr">
                @seifmomo
              </a>
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            {nav.slice(1).map((n) => (
              <Link key={n.to} to={n.to} className="text-ink-300 hover:text-accent-300 transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid place-items-center h-11 w-11 rounded-full border border-white/15 text-ink-200 hover:text-ink-950 hover:bg-gold-400 transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Giant watermark */}
      <div className="relative pointer-events-none select-none" aria-hidden="true">
        <span className="block font-display italic text-center text-[19vw] leading-[0.8] text-white/[0.025] tracking-tight">
          Quality
        </span>
      </div>
    </footer>
  )
}