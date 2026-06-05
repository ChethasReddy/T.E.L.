import type { ReactNode } from 'react'

interface GradientBadgeProps {
  children: ReactNode
  className?: string
}

export default function GradientBadge({ children, className = '' }: GradientBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 text-indigo-700 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  )
}
