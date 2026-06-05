'use client'

import { useRouter } from 'next/navigation'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import StatusPill from '@/components/StatusPill'
import { useDrillStore } from '@/lib/store'
import type { PressureTest } from '@/types'

interface PressureTestCardProps {
  test: PressureTest
}

export default function PressureTestCard({ test }: PressureTestCardProps) {
  const router = useRouter()
  const setDrill = useDrillStore((state) => state.setDrill)

  const handleLaunch = (): void => {
    setDrill(test)
    router.push('/briefing')
  }

  return (
    <Card hover padding="p-7" className="relative animate-fade-up">
      {test.recommended && (
        <div className="absolute top-4 right-4">
          <StatusPill tone="violet">
            <Icon name="star" className="w-3 h-3" />
            Recommended
          </StatusPill>
        </div>
      )}
      <div className="w-12 h-12 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 shadow-soft">
        <Icon name={test.icon} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-extrabold text-ink tracking-tight">{test.name}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{test.blurb}</p>

      <div className="mt-5 rounded-lg bg-amber-50/60 border border-amber-100 p-3">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
          Expected failure
        </div>
        <div className="text-sm font-semibold text-ink mt-0.5">{test.failure}</div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100">
        <PrimaryButton size="sm" className="w-full" onClick={handleLaunch}>
          Launch Drill
          <Icon
            name="arrowRight"
            className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
          />
        </PrimaryButton>
      </div>
    </Card>
  )
}
