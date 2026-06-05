'use client'

import Link from 'next/link'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import { useDrillStore } from '@/lib/store'

export default function SelectedDomainChip() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const domain = useDrillStore((state) => state.domain)

  if (!hasHydrated || domain === null) {
    // Skeleton: same footprint, no flicker when store rehydrates from localStorage.
    return (
      <Card padding="p-4" className="min-w-[260px]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 animate-pulse" />
          <div className="flex-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Selected domain
            </div>
            <div className="h-4 w-32 mt-1 rounded bg-slate-100 animate-pulse" />
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card padding="p-4" className="min-w-[260px]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
          <Icon name={domain.icon} className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
            Selected domain
          </div>
          <div className="text-sm font-bold text-ink">{domain.name}</div>
        </div>
        <Link
          href="/domain"
          className="ml-auto text-xs font-semibold text-indigo-600 hover:text-indigo-800 ring-focus rounded"
        >
          Change
        </Link>
      </div>
    </Card>
  )
}
