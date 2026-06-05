'use client'

import Link from 'next/link'
import type { ReactNode, MouseEventHandler } from 'react'

type GhostButtonSize = 'sm' | 'md'

interface GhostButtonBaseProps {
  children: ReactNode
  size?: GhostButtonSize
  className?: string
}

type GhostButtonProps =
  | (GhostButtonBaseProps & { href: string; onClick?: never })
  | (GhostButtonBaseProps & { href?: never; onClick?: MouseEventHandler<HTMLButtonElement> })

const SIZE_CLASSES: Record<GhostButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
}

const BASE_CLASSES =
  'inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-ink hover:bg-slate-50 rounded-lg transition-colors ring-focus'

export default function GhostButton(props: GhostButtonProps) {
  const { children, size = 'md', className = '' } = props
  const fullClassName = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${className}`

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={fullClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={props.onClick} className={fullClassName}>
      {children}
    </button>
  )
}
