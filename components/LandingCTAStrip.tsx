import Link from 'next/link'

import Icon from '@/components/Icon'

export default function LandingCTAStrip() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl grad-bg p-10 sm:p-14 shadow-lift">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Find the exact second your voice agent lost the human.
              </h2>
              <p className="mt-3 text-indigo-100 leading-relaxed">
                Run a drill in under two minutes. No backend setup. Realistic personas,
                structured verdicts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href="/domain"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold shadow-lg hover:-translate-y-0.5 transition-all ring-focus"
              >
                Start Arena Drill
                <Icon name="arrowRight" className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/freespeech"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur text-white border border-white/30 font-bold hover:bg-white/20 transition-all ring-focus"
              >
                Try Free Speech Mode
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
