'use client'

import Link from 'next/link'
import type { ReactNode, MouseEventHandler } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'

interface SecondaryButtonBaseProps {
  children: ReactNode
  size?: ButtonSize
  className?: string
}

type SecondaryButtonProps =
  | (SecondaryButtonBaseProps & {
      href: string
      onClick?: never
      type?: never
    })
  | (SecondaryButtonBaseProps & {
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
  'inline-flex items-center justify-center font-semibold rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 ring-focus'

export default function SecondaryButton(props: SecondaryButtonProps) {
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
