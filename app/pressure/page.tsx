'use client'

import { useRouter } from 'next/navigation'

import BackgroundBlobs from '@/components/BackgroundBlobs'
import Card from '@/components/Card'
import GhostButton from '@/components/GhostButton'
import Icon, { type IconName } from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import StatusPill from '@/components/StatusPill'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'
import { DOMAINS, PRESSURE_TESTS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { PressureTest } from '@/types'

export default function PressurePage() {
  const router = useRouter()
  const storedDomain = useDrillStore((state) => state.domain)
  const setDrill = useDrillStore((state) => state.setDrill)

  // Defensive fallback matching prototype line 984: if the store has not hydrated
  // a domain yet (e.g. direct deep-link to /pressure), render the first domain
  // for visual stability. The store itself remains untouched.
  const domain = storedDomain ?? DOMAINS[0]

  const selectDrill = (drill: PressureTest): void => {
    setDrill(drill)
    router.push('/briefing')
  }

  const startRecommended = (): void => {
    selectDrill(PRESSURE_TESTS[0])
  }

  const goDomain = (): void => {
    router.push('/domain')
  }

  const goFreeSpeech = (): void => {
    router.push('/freespeech')
  }

  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={1} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="max-w-2xl animate-fade-up">
            <SectionLabel icon="sliders">Step 02</SectionLabel>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Pick the <span className="grad-text">pressure test</span>.
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Each drill isolates one failure mode. Start with frustration if this is your first
              run.
            </p>
          </div>
          <Card padding="p-4" className="min-w-[260px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
                {/* safe cast: Domain.icon is string per AGENTS.md §8 spec, but every DOMAINS entry in lib/scenarios.ts uses a valid IconName ('headphones', 'heart'). */}
                <Icon name={domain.icon as IconName} className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Selected domain
                </div>
                <div className="text-sm font-bold text-ink">{domain.name}</div>
              </div>
              <button
                onClick={goDomain}
                className="ml-auto text-xs font-semibold text-indigo-600 hover:text-indigo-800 ring-focus rounded"
              >
                Change
              </button>
            </div>
          </Card>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {PRESSURE_TESTS.map((test) => (
            <Card
              key={test.id}
              hover
              padding="p-7"
              className="relative animate-fade-up"
            >
              {test.recommended && (
                <div className="absolute top-4 right-4">
                  <StatusPill tone="violet">
                    <Icon name="star" className="w-3 h-3" />
                    Recommended
                  </StatusPill>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 shadow-soft">
                {/* safe cast: PressureTest.icon is string per AGENTS.md §8 spec, but every PRESSURE_TESTS entry in lib/scenarios.ts uses a valid IconName ('activity', 'brain', 'globe'). */}
                <Icon name={test.icon as IconName} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-ink tracking-tight">{test.name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{test.blurb}</p>

              <div className="mt-5 rounded-lg bg-amber-50/60 border border-amber-100 p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  Expected failure
                </div>
                <div className="text-sm font-semibold text-ink mt-0.5">{test.failure}</div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <PrimaryButton
                  size="sm"
                  className="w-full"
                  onClick={() => selectDrill(test)}
                >
                  Launch Drill
                  <Icon
                    name="arrowRight"
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </PrimaryButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <GhostButton onClick={goDomain}>
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to domain
          </GhostButton>
          <div className="flex flex-wrap gap-2">
            <SecondaryButton onClick={startRecommended}>Start Recommended Demo</SecondaryButton>
            <SecondaryButton onClick={goFreeSpeech}>
              Switch to Free Speech Mode
              <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
