'use client'

import { useRouter } from 'next/navigation'

import SecondaryButton from '@/components/SecondaryButton'
import { PRESSURE_TESTS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'

export default function StartRecommendedButton() {
  const router = useRouter()
  const setDrill = useDrillStore((state) => state.setDrill)

  const handleClick = (): void => {
    setDrill(PRESSURE_TESTS[0])
    router.push('/briefing')
  }

  return <SecondaryButton onClick={handleClick}>Start Recommended Demo</SecondaryButton>
}
