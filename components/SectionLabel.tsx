import type { ReactNode } from 'react'

import Icon from '@/components/Icon'
import type { IconName } from '@/types'

interface SectionLabelProps {
  children: ReactNode
  icon?: IconName
  className?: string
}

export default function SectionLabel({ children, icon, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {icon && (
        <div className="w-6 h-6 rounded-md grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
          <Icon name={icon} className="w-3.5 h-3.5" strokeWidth={2} />
        </div>
      )}
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {children}
      </span>
    </div>
  )
}
