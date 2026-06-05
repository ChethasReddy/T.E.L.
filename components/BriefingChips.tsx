'use client'

import StatusPill from '@/components/StatusPill'
import { DOMAINS, PRESSURE_TESTS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'

export default function BriefingChips() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)

  if (!hasHydrated) {
    // Skeleton: same footprint as the two pills so the header row does not shift.
    return (
      <div className="flex flex-col gap-2 items-end">
        <div className="h-7 w-32 rounded-full bg-slate-100 animate-pulse" />
        <div className="h-7 w-40 rounded-full bg-slate-100 animate-pulse" />
      </div>
    )
  }

  const domain = storedDomain ?? DOMAINS[0]
  const drill = storedDrill ?? PRESSURE_TESTS[0]

  return (
    <div className="flex flex-col gap-2 items-end">
      <StatusPill tone="indigo">{domain.name}</StatusPill>
      <StatusPill tone="violet">{drill.name}</StatusPill>
    </div>
  )
}
