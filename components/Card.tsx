import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: string
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'p-6',
}: CardProps) {
  return (
    <div
      className={`bg-white border border-slate-100 rounded-2xl shadow-card ${hover ? 'hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200' : ''} ${padding} ${className}`}
    >
      {children}
    </div>
  )
}
