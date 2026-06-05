import BackgroundBlobs from '@/components/BackgroundBlobs'
import BriefingChips from '@/components/BriefingChips'
import BriefingContent from '@/components/BriefingContent'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'

export default function BriefingPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={2} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10 animate-fade-up">
          <div className="max-w-2xl">
            <SectionLabel icon="fileText">Drill Briefing</SectionLabel>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Read the contract.{' '}
              <span className="grad-text">Then begin the drill.</span>
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The contract defines what a passing response looks like. Pulse and deep
              evaluation will judge against this.
            </p>
          </div>
          <BriefingChips />
        </div>

        <BriefingContent />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <GhostButton href="/pressure">
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to Pressure Tests
          </GhostButton>
          <div className="flex gap-3">
            <SecondaryButton href="/eval">Preview Expected Failure</SecondaryButton>
            <PrimaryButton size="lg" href="/drill">
              Begin Drill
              <Icon
                name="arrowRight"
                className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform"
              />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
