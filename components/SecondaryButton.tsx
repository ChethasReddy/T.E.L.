'use client'

import type { ReactNode, MouseEventHandler } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'

interface SecondaryButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: ButtonSize
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

export default function SecondaryButton({
  children,
  onClick,
  size = 'md',
  className = '',
  type = 'button',
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 ring-focus ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </button>
  )
}
