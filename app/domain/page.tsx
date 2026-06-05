import BackgroundBlobs from '@/components/BackgroundBlobs'
import DomainCard from '@/components/DomainCard'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import SectionLabel from '@/components/SectionLabel'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'
import { DOMAINS } from '@/lib/scenarios'

const PILL_LABELS = ['Most tested', 'Sensitive context'] as const

export default function DomainPage() {
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
            <DomainCard
              key={domain.id}
              domain={domain}
              pillLabel={PILL_LABELS[index] ?? PILL_LABELS[1]}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <GhostButton href="/">
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
