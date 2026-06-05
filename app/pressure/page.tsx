import BackgroundBlobs from '@/components/BackgroundBlobs'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PressureTestCard from '@/components/PressureTestCard'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import SelectedDomainChip from '@/components/SelectedDomainChip'
import StartRecommendedButton from '@/components/StartRecommendedButton'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'
import { PRESSURE_TESTS } from '@/lib/scenarios'

export default function PressurePage() {
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
          <SelectedDomainChip />
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {PRESSURE_TESTS.map((test) => (
            <PressureTestCard key={test.id} test={test} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <GhostButton href="/domain">
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to domain
          </GhostButton>
          <div className="flex flex-wrap gap-2">
            <StartRecommendedButton />
            <SecondaryButton href="/freespeech">
              Switch to Free Speech Mode
              <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
