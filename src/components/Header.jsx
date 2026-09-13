import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { nav, site, services, references } from '../content'

const subMenus = {
  '/services': services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
  '/references': references.map((r) => ({ label: r.title, to: `/references/${r.slug}` })),
}

function Wordmark({ dark = false }) {
  return (
    <img
      src={dark ? '/quality-egypt/images/logo-light.png' : '/quality-egypt/images/logo-dark.png'}
      alt={site.name}
      className="h-9 w-auto"
      loading="lazy"
    />
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSub = (to) => setSub((prev) => (prev === to ? null : to))

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-card'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <span className="absolute top-0 inset-x-0 z-20 h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" aria-hidden="true" />
      <div
        className={`hidden xl:block bg-ink-950 text-white overflow-hidden transition-all duration-300 ${
          scrolled ? 'h-0' : 'h-9'
        }`}
      >
          <div className="mx-auto max-w-7xl px-8 h-9 flex items-center justify-between text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-200">
            <span>
              Since {site.founded} — Egyptian Engineering Projects Co.
            </span>
            <div className="flex items-center gap-8">
              <a href={`tel:${site.phoneHref}`} className="hover:text-white transition-colors" dir="ltr">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors" dir="ltr">
                {site.email}
              </a>
            </div>
          </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-[4.5rem]">
          <Link to="/" aria-label={site.name}>
            <Wordmark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {nav.map((item) => {
              const children = subMenus[item.to]
              if (!children) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative px-3.5 py-2 rounded-lg text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-px after:bg-gold-500 after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
                        isActive ? 'text-accent-600 after:scale-x-100' : 'text-ink-600 hover:text-ink-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              }
              return (
                <div key={item.to} className="relative group">
                  <NavLink
                    to={item.to}
                    end={false}
                    className={({ isActive }) =>
                      `relative inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-px after:bg-gold-500 after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
                        isActive ? 'text-accent-600 after:scale-x-100' : 'text-ink-600 hover:text-ink-900'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown size={13} className="text-ink-400 group-hover:text-accent-500 transition-colors" />
                  </NavLink>

                  <div
                    className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 translate-y-1 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
                  >
                    <div className="w-80 rounded-2xl bg-white shadow-lift ring-1 ring-ink-100 p-2 max-h-[70vh] overflow-y-auto">
                      <Link
                        to={item.to}
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-900 hover:text-accent-700 hover:bg-accent-400/10 transition-colors"
                      >
                        View all
                        <ArrowRight size={13} />
                      </Link>
                      <div className="h-px bg-ink-100 mx-3 my-1.5" aria-hidden="true" />
                      {children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-2.5 rounded-xl font-display text-[0.95rem] text-ink-700 hover:text-accent-700 hover:bg-accent-400/10 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>

          <div className="hidden xl:flex items-center">
            <Link
              to="/contact"
              className="btn btn-dark !px-5 !py-2.5 !text-[0.72rem]"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="xl:hidden grid place-items-center w-11 h-11 rounded-xl text-ink-800 hover:bg-ink-100/70"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-ink-100 bg-white shadow-card">
          <div className="px-4 py-4 space-y-1">
            {nav.map((item) => {
              const children = subMenus[item.to]
              if (!children) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl font-display text-[1.05rem] font-medium ${
                        isActive ? 'text-accent-600 bg-accent-400/10' : 'text-ink-700 hover:bg-ink-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              }
              return (
                <div key={item.to} className="rounded-xl overflow-hidden">
                  <div className="flex items-center">
                    <NavLink
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 px-4 py-3 rounded-xl font-display text-[1.05rem] font-medium ${
                          isActive ? 'text-accent-600 bg-accent-400/10' : 'text-ink-700'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => toggleSub(item.to)}
                      aria-expanded={sub === item.to}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="me-2 grid place-items-center h-10 w-10 rounded-xl text-ink-500 hover:bg-ink-50"
                    >
                      <ChevronDown size={18} className={`transition-transform duration-200 ${sub === item.to ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {sub === item.to && (
                    <div className="mt-1 ps-4 pe-3 pb-2 space-y-0.5 border-s-2 border-accent-400/30 ms-4">
                      {children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2.5 rounded-xl font-display text-[0.95rem] text-ink-600 hover:text-accent-700 hover:bg-accent-400/10"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-dark w-full"
              >
                Start a Project
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}