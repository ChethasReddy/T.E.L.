import Card from '@/components/Card'
import Icon from '@/components/Icon'
import SectionLabel from '@/components/SectionLabel'
import type { IconName } from '@/types'

interface HowItWorksStep {
  n: string
  icon: IconName
  title: string
  blurb: string
}

const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    n: '01',
    icon: 'layers',
    title: 'Choose business domain',
    blurb: 'Support or healthcare. Each domain ships with realistic personas and stakes.',
  },
  {
    n: '02',
    icon: 'sliders',
    title: 'Choose pressure test',
    blurb:
      'Frustration, sycophancy, or accent stress. Each isolates a distinct failure mode.',
  },
  {
    n: '03',
    icon: 'activity',
    title: 'Run emotional drill',
    blurb: 'A scripted user pushes the agent. Pulse fires instantly when risk appears.',
  },
  {
    n: '04',
    icon: 'award',
    title: 'Get production verdict',
    blurb: 'A clear ship, review, or block decision with required fix and next test.',
  },
]

export default function LandingHowItWorks() {
  return (
    <section className="relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="max-w-2xl">
          <SectionLabel icon="layers">How it works</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Fast guardrail pulse first. Deep emotional evaluation second.
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Every drill follows the same loop. Instant signal lands first so you do not wait.
            Frontier evaluation lands second and explains exactly where the agent lost the
            human.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <Card key={step.n} hover padding="p-6" className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <Icon name={step.icon} className="w-5 h-5" />
                </div>
                <div className="text-xs font-extrabold text-slate-300 tracking-widest">
                  {step.n}
                </div>
              </div>
              <h3 className="text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.blurb}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
