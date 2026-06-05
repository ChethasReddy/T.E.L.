'use client'

import type { ReactNode, MouseEventHandler } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'

interface PrimaryButtonProps {
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

export default function PrimaryButton({
  children,
  onClick,
  size = 'md',
  className = '',
  type = 'button',
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center font-semibold rounded-full text-white grad-bg shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 ring-focus ${SIZE_CLASSES[size]} ${className}`}
    >
      {children}
    </button>
  )
}
