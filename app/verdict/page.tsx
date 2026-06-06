import BackgroundBlobs from '@/components/BackgroundBlobs'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'
import VerdictDetails from '@/components/VerdictDetails'

export default function VerdictPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={5} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="max-w-3xl animate-fade-up">
          <SectionLabel icon="award">Production readiness verdict</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Is this agent <span className="grad-text">ready to ship</span>?
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Verdict reflects this drill only. Run adjacent drills before changing release status.
          </p>
        </div>

        <VerdictDetails />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <GhostButton href="/repair">
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to repair
          </GhostButton>
          <div className="flex flex-wrap gap-2">
            <SecondaryButton>
              <Icon name="flag" className="w-4 h-4 mr-1.5" />
              Save Failure
            </SecondaryButton>
            <SecondaryButton href="/report">View Drill Report</SecondaryButton>
            <PrimaryButton href="/domain">
              Run Next Drill
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
