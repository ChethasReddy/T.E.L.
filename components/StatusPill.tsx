import type { ReactNode } from 'react'

type StatusPillTone = 'indigo' | 'violet' | 'amber' | 'red' | 'emerald' | 'slate'

interface StatusPillProps {
  tone?: StatusPillTone
  children: ReactNode
  dot?: boolean
}

const TONE_CLASSES: Record<StatusPillTone, string> = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  red: 'bg-red-50 text-red-700 border-red-100',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  slate: 'bg-slate-50 text-slate-700 border-slate-200',
}

const DOT_COLORS: Record<StatusPillTone, string> = {
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  emerald: 'bg-emerald-500',
  slate: 'bg-slate-400',
}

export default function StatusPill({
  tone = 'indigo',
  children,
  dot = false,
}: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${TONE_CLASSES[tone]}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tone]} animate-live-dot`} />
      )}
      {children}
    </span>
  )
}
