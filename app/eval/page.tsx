import BackgroundBlobs from '@/components/BackgroundBlobs'
import DeepEvalCard from '@/components/DeepEvalCard'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'

export default function EvalPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={4} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <DeepEvalCard />
      </div>
    </div>
  )
}
