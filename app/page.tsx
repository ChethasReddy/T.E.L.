import Footer from '@/components/Footer'
import LandingCTAStrip from '@/components/LandingCTAStrip'
import LandingFeatures from '@/components/LandingFeatures'
import LandingHero from '@/components/LandingHero'
import LandingHowItWorks from '@/components/LandingHowItWorks'
import LandingQuote from '@/components/LandingQuote'
import LandingSponsors from '@/components/LandingSponsors'
import TopNav from '@/components/TopNav'

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <TopNav />
      <LandingHero />
      <LandingHowItWorks />
      <LandingFeatures />
      <LandingQuote />
      <LandingSponsors />
      <LandingCTAStrip />
      <Footer />
    </div>
  )
}
