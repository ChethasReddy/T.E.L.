import BackgroundBlobs from '@/components/BackgroundBlobs'
import ReportContent from '@/components/ReportContent'
import Stepper from '@/components/Stepper'
import TopNav from '@/components/TopNav'

export default function ReportPage() {
  return (
    <div className="min-h-screen relative">
      <TopNav />
      <Stepper currentStep={5} />
      <BackgroundBlobs />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <ReportContent />
      </div>
    </div>
  )
}
