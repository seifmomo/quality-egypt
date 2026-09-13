import {
  MonitorSpeaker,
  Headphones,
  Presentation,
  Lock,
  Siren,
  ParkingSquare,
  Lightbulb,
  Cog,
  Network,
  Trophy,
  Globe,
  Bus,
  Telescope,
  Glasses,
  Armchair,
  Waves,
  Layers,
} from 'lucide-react'
import { activities, partners } from '../content'
import { Reveal, PageHero, CtaBand } from '../components/ui'

const activityIcons = [
  MonitorSpeaker,
  Headphones,
  Presentation,
  Lock,
  Siren,
  ParkingSquare,
  Lightbulb,
  Cog,
  Network,
  Trophy,
  Globe,
  Bus,
  Telescope,
  Glasses,
  Armchair,
  Waves,
]

export default function Activities() {
  return (
    <>
      <PageHero
        crumb="Scope of Activities"
        title="Sixteen Disciplines. One Accountable Partner."
        desc="From sound and security to planetarium projection and VR, we design, supply and integrate every discipline a modern building demands."
      />

      <section className="bg-ink-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((a, i) => {
              const Icon = activityIcons[i] || Layers
              return (
                <Reveal key={a.slug} delay={(i % 4) * 60}>
                  <div className="group h-full rounded-2xl bg-white border border-ink-100/70 p-6 shadow-card hover:shadow-lift hover:-translate-y-1 hover:border-accent-400/40 transition-all">
                    <div className="grid place-items-center h-12 w-12 rounded-full bg-accent-400/15 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink-900">{a.title}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-ink-500">{a.blurb}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Manufacturers note */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="rounded-3xl bg-ink-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center px-8 py-12 md:px-14 md:py-16">
            <Reveal>
              <span className="eyebrow text-accent-300">Backed by Global Leaders</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Every discipline is delivered with the world’s best technology</h2>
              <p className="mt-5 text-ink-200 leading-8 max-w-xl">
                Our partner network spans more than 120 global manufacturers across {partners.length} technology groups —
                meaning your project always gets proven, certified, best-in-class systems.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <span className="text-5xl font-black text-accent-400">{partners.length}</span>
                <span className="text-sm font-bold text-ink-200 leading-snug">
                  Technology Groups
                  <span className="block mt-1 text-ink-500 text-xs font-semibold">
                    more than {partners.reduce((n, p) => n + p.members.length, 0)} brands
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}