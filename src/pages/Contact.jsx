import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/SocialIcons'
import { site } from '../content'
import { Reveal, PageHero } from '../components/ui'

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, LinkedIn: LinkedInIcon }

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const inputCls =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3.5 text-sm font-medium text-ink-900 outline-none placeholder:text-ink-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-400/30 transition-all'

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in Touch With Our Team"
        desc="Tell us about your project, your requirements, or the role you’re interested in — we’ll respond quickly."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
          {/* Form */}
          <Reveal>
            <div className="rounded-3xl border border-ink-100 bg-white p-8 md:p-10 shadow-card">
              {sent ? (
                <div className="py-16 text-center">
                  <span className="grid place-items-center h-16 w-16 rounded-full bg-accent-400/15 text-accent-600 mx-auto mb-6">
                    <CheckCircle2 size={30} />
                  </span>
                  <h2 className="text-2xl font-extrabold text-ink-900 tracking-tight">Message received!</h2>
                  <p className="mt-3 text-ink-500 max-w-sm mx-auto">
                    Thanks for reaching out, {form.name || 'friend'}. Our team will get back to you at{' '}
                    <span className="font-bold" dir="ltr">{form.email || site.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false)
                      setForm({ name: '', email: '', phone: '', message: '' })
                    }}
                    className="mt-8 inline-flex items-center px-7 py-3 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold text-ink-900 tracking-tight">Start a conversation</h2>
                  <p className="mt-2 text-sm text-ink-500">You can also email us directly at {site.email}.</p>
                  <form onSubmit={submit} className="mt-8 grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-ink-700 mb-2">Full name</label>
                      <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-ink-700 mb-2">Email</label>
                      <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" className={inputCls} dir="ltr" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-ink-700 mb-2">Phone</label>
                      <input id="phone" value={form.phone} onChange={update('phone')} placeholder="+20 ..." className={inputCls} dir="ltr" />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-xs font-bold text-ink-700 mb-2">I’m interested in</label>
                      <select id="project" defaultValue="Engineering & Design" className={inputCls}>
                        {['Engineering & Design', 'Product Choice & Procurement', 'Project Management', 'Installation, Testing & Commissioning', 'Training & Certification', 'Maintenance & Support', 'Other'].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-xs font-bold text-ink-700 mb-2">Message</label>
                      <textarea id="message" required rows={5} value={form.message} onChange={update('message')} placeholder="Tell us about your project..." className={`${inputCls} resize-none`} />
                    </div>
                    <div className="sm:col-span-2">
                      <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-ink-900 hover:bg-ink-800 shadow-card transition-colors">
                        Send Message
                        <Send size={15} />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div className="space-y-5">
            <Reveal delay={60}>
              <div className="rounded-3xl bg-ink-950 text-white p-8">
                <span className="eyebrow text-accent-300">Head Office</span>
                <ul className="mt-6 space-y-5 text-sm text-ink-200">
                  <li className="flex gap-4">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/10 text-accent-300 shrink-0">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-ink-500 mb-1">Address</span>
                      <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors leading-6">
                        {site.address}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/10 text-accent-300 shrink-0">
                      <Phone size={18} />
                    </span>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wide text-ink-500 mb-1">Phone</span>
                      <a href={`tel:${site.phoneHref}`} className="hover:text-accent-300 transition-colors" dir="ltr">{site.phone}</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/10 text-accent-300 shrink-0">
                      <Mail size={18} />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wide text-ink-500 mb-1">Email</span>
                      <a href={`mailto:${site.email}`} className="hover:text-accent-300 transition-colors break-all" dir="ltr">{site.email}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card">
                <h3 className="text-lg font-bold text-ink-900">Follow our work</h3>
                <div className="mt-5 flex gap-3">
                  {site.socials.map((s) => {
                    const Icon = socialIcons[s.label] || Linkedin
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid place-items-center h-12 w-12 rounded-full bg-accent-400/15 text-accent-600 hover:bg-accent-500 hover:text-white transition-colors"
                      >
                        <Icon size={19} />
                      </a>
                    )
                  })}
                </div>
                <p className="mt-4 text-sm text-ink-500">Regular updates on our projects, partners and events.</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-3xl border border-ink-100 bg-ink-50 p-8 shadow-card overflow-hidden">
                <iframe
                  title="Quality Egypt office location"
                  src="https://www.google.com/maps?q=13+El+Obour+Buildings+Salah+Salem+St+Cairo&output=embed"
                  className="w-full h-48 rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}