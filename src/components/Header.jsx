import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { nav, site } from '../content'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-card'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-accent-400 via-accent-600 to-gold-400" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-[4.5rem]">
          <Link to="/" aria-label={site.name}>
            <Wordmark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-[0.85rem] font-semibold transition-colors ${
                    isActive ? 'text-accent-600 bg-accent-400/10' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden xl:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 shadow-card transition-colors"
            >
              Start a Project
              <ArrowRight size={15} />
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
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-[0.95rem] font-semibold ${
                    isActive ? 'text-accent-600 bg-accent-400/10' : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-white bg-accent-500"
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