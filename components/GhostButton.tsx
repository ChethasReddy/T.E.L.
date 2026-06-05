'use client'

import type { ReactNode, MouseEventHandler } from 'react'

type GhostButtonSize = 'sm' | 'md'

interface GhostButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: GhostButtonSize
  className?: string
}

const SIZE_CLASSES: Record<GhostButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
}

export default function GhostButton({
  children,
  onClick,
  size = 'md',
  className = '',
}: GhostButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-ink hover:bg-slate-50 rounded-lg transition-colors ring-focus ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </button>
  )
}
