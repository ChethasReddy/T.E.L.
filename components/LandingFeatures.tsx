import Card from '@/components/Card'
import Icon from '@/components/Icon'
import SectionLabel from '@/components/SectionLabel'
import type { IconName } from '@/types'

interface FeatureItem {
  icon: IconName
  title: string
  blurb: string
}

const FEATURES: readonly FeatureItem[] = [
  {
    icon: 'zap',
    title: 'Instant Guardrail Pulse',
    blurb: 'Fast risk signal the moment a response lands. Not the final word, but always first.',
  },
  {
    icon: 'brain',
    title: 'Frontier Evaluation Layer',
    blurb: 'Deep emotional judgment with structured rationale, failure type, and evidence.',
  },
  {
    icon: 'fileText',
    title: 'Scenario Contracts',
    blurb: 'Each drill ships with an expected mode, a do list, and a do-not list.',
  },
  {
    icon: 'award',
    title: 'Production Readiness Verdict',
    blurb: 'A clear ship, review, or block decision for every drill.',
  },
  {
    icon: 'messageCircle',
    title: 'Repaired Response Text',
    blurb: 'Concrete language for what the agent should have said.',
  },
  {
    icon: 'layers',
    title: 'Emotional Regression Memory',
    blurb: 'Failure cases become permanent tests. Past mistakes do not return quietly.',
  },
]

export default function LandingFeatures() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <div className="max-w-2xl">
            <SectionLabel icon="shield">Capabilities</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Task success does not mean emotional success.
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              VibeTrace Arena is an emotional regression test suite. Six capabilities, one
              loop, repeatable across every release.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <Card key={feature.title} hover>
                <div className="w-11 h-11 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  <Icon name={feature.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.blurb}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
