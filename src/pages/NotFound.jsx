import { Link } from 'react-router-dom'
import { ArrowRight, House } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative bg-ink-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="absolute top-1/3 start-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-500/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-36 text-center">
        <p className="text-8xl md:text-9xl font-black text-grad-primary">404</p>
        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">This page went off line</h1>
        <p className="mt-4 text-ink-300 leading-8">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back somewhere useful.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-ink-950 bg-accent-400 hover:bg-accent-300 transition-colors"
          >
            <House size={16} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/25 hover:border-accent-300 hover:text-accent-300 transition-colors"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}