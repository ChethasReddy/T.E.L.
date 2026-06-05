import { Suspense } from 'react'

import DrillContent from '@/components/DrillContent'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'

function DrillSuspenseFallback() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="bg-slate-100 rounded-2xl h-80 animate-pulse" />
      <div className="bg-slate-100 rounded-2xl h-80 animate-pulse" />
    </div>
  )
}

export default function DrillPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={3} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
        {/* Suspense is required because DrillContent uses useSearchParams. */}
        <Suspense fallback={<DrillSuspenseFallback />}>
          <DrillContent />
        </Suspense>

        <div className="mt-6 flex justify-between items-center">
          <GhostButton href="/briefing">
            <Icon name="chevronLeft" className="w-4 h-4" />
            Back to briefing
          </GhostButton>
          <PrimaryButton href="/eval">
            View Deep Evaluation
            <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
