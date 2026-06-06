import BackgroundBlobs from '@/components/BackgroundBlobs'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import RepairComparison from '@/components/RepairComparison'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'

export default function RepairPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={4} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="max-w-3xl animate-fade-up">
          <SectionLabel icon="sparkles">Repaired response</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            What the agent <span className="grad-text">should have said</span>.
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Text first. Voice playback optional. The repair is what would have moved this drill
            toward a passing verdict.
          </p>
        </div>

        <RepairComparison />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <GhostButton href="/eval">
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to evaluation
          </GhostButton>
          <div className="flex flex-wrap gap-2">
            <SecondaryButton href="/drill">Re-run Drill</SecondaryButton>
            <PrimaryButton href="/verdict">
              View Production Verdict
              <Icon
                name="arrowRight"
                className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
              />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
