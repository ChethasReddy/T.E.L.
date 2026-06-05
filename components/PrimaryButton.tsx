'use client'

import Link from 'next/link'
import type { ReactNode, MouseEventHandler } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'

interface PrimaryButtonBaseProps {
  children: ReactNode
  size?: ButtonSize
  className?: string
}

type PrimaryButtonProps =
  | (PrimaryButtonBaseProps & {
      href: string
      onClick?: never
      type?: never
    })
  | (PrimaryButtonBaseProps & {
      href?: never
      onClick?: MouseEventHandler<HTMLButtonElement>
      type?: 'button' | 'submit' | 'reset'
    })

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const BASE_CLASSES =
  'group inline-flex items-center justify-center font-semibold rounded-full text-white grad-bg shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 ring-focus'

export default function PrimaryButton(props: PrimaryButtonProps) {
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
    <button type={props.type ?? 'button'} onClick={props.onClick} className={fullClassName}>
      {children}
    </button>
  )
}
