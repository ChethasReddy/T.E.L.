import SectionLabel from '@/components/SectionLabel'

interface Sponsor {
  name: string
  role: string
}

const SPONSORS: readonly Sponsor[] = [
  { name: 'ElevenLabs', role: 'Realistic voice agent and optional replay' },
  { name: 'Frontier Model', role: 'Deep evaluator and repair generator' },
  { name: 'Redis', role: 'Optional emotional memory' },
  { name: 'Tavus', role: 'Optional human-like video layer' },
  { name: 'VerisAI', role: 'Simulation-first framing' },
]

export default function LandingSponsors() {
  return (
    <section className="relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel icon="cpu" className="justify-center">
            Stack
          </SectionLabel>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            Built on the frontier voice and reasoning stack.
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:bg-white hover:border-indigo-100 hover:shadow-card transition-all"
            >
              <div className="text-sm font-bold text-ink">{sponsor.name}</div>
              <div className="text-xs text-muted mt-1 leading-relaxed">{sponsor.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
