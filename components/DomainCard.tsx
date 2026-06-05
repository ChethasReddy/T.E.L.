'use client'

import { useRouter } from 'next/navigation'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import StatusPill from '@/components/StatusPill'
import { useDrillStore } from '@/lib/store'
import type { Domain } from '@/types'

interface DomainCardProps {
  domain: Domain
  pillLabel: string
}

export default function DomainCard({ domain, pillLabel }: DomainCardProps) {
  const router = useRouter()
  const setDomain = useDrillStore((state) => state.setDomain)

  const handleSelect = (): void => {
    setDomain(domain)
    router.push('/pressure')
  }

  return (
    <Card hover padding="p-8" className="animate-fade-up">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-soft">
          <Icon name={domain.icon} className="w-7 h-7" strokeWidth={1.75} />
        </div>
        <StatusPill tone="indigo">{pillLabel}</StatusPill>
      </div>
      <h2 className="text-2xl font-extrabold tracking-tight text-ink">{domain.name}</h2>
      <p className="mt-2 text-slate-600 leading-relaxed">{domain.blurb}</p>

      <div className="mt-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
          Example tests
        </div>
        <div className="flex flex-wrap gap-2">
          {domain.examples.map((example) => (
            <span
              key={example}
              className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="text-xs text-muted">
          <span className="font-bold text-ink">3 pressure tests</span> available
        </div>
        <PrimaryButton onClick={handleSelect}>
          Select {domain.name.split(' ')[0]}
          <Icon
            name="arrowRight"
            className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
          />
        </PrimaryButton>
      </div>
    </Card>
  )
}
