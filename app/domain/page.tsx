'use client'

import { useRouter } from 'next/navigation'

import BackgroundBlobs from '@/components/BackgroundBlobs'
import Card from '@/components/Card'
import GhostButton from '@/components/GhostButton'
import Icon, { type IconName } from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SectionLabel from '@/components/SectionLabel'
import StatusPill from '@/components/StatusPill'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'
import { DOMAINS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { Domain } from '@/types'

const RECOMMENDED_PILL_LABEL = 'Most tested'
const SECONDARY_PILL_LABEL = 'Sensitive context'

function getDomainPillLabel(index: number): string {
  return index === 0 ? RECOMMENDED_PILL_LABEL : SECONDARY_PILL_LABEL
}

export default function DomainPage() {
  const router = useRouter()
  const setDomain = useDrillStore((state) => state.setDomain)

  const selectDomain = (domain: Domain): void => {
    setDomain(domain)
    router.push('/pressure')
  }

  const goHome = (): void => {
    router.push('/')
  }

  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={0} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="max-w-2xl animate-fade-up">
          <SectionLabel icon="layers">Step 01</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            What kind of agent are you <span className="grad-text">testing</span>?
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Pick the business domain. Each domain ships with realistic personas, scenario
            contracts, and a tuned regression baseline.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {DOMAINS.map((domain, index) => (
            <Card key={domain.id} hover padding="p-8" className="animate-fade-up">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-soft">
                  {/* safe cast: Domain.icon is string per AGENTS.md §8 spec, but every DOMAINS entry in lib/scenarios.ts uses a valid IconName ('headphones', 'heart'). */}
                  <Icon
                    name={domain.icon as IconName}
                    className="w-7 h-7"
                    strokeWidth={1.75}
                  />
                </div>
                <StatusPill tone="indigo">{getDomainPillLabel(index)}</StatusPill>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">{domain.name}</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">{domain.blurb}</p>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Example tests
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="text-xs text-muted">
                  <span className="font-bold text-ink">3 pressure tests</span> available
                </div>
                <PrimaryButton onClick={() => selectDomain(domain)}>
                  Select {domain.name.split(' ')[0]}
                  <Icon
                    name="arrowRight"
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </PrimaryButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <GhostButton onClick={goHome}>
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to home
          </GhostButton>
          <div className="text-xs text-muted hidden sm:block">
            Tip: support agents face the broadest emotional surface area.
          </div>
        </div>
      </div>
    </div>
  )
}
