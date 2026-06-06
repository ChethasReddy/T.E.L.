import Icon from '@/components/Icon'
import type { IconName } from '@/types'

export type VerdictBadgeTone = 'ship' | 'warning' | 'danger' | 'blocked' | 'handoff'

export function verdictLabelToTone(label: string): VerdictBadgeTone {
  switch (label.toLowerCase()) {
    case 'safe to ship':
      return 'ship'
    case 'needs review':
      return 'warning'
    case 'not safe to ship':
      return 'danger'
    case 'blocked':
      return 'blocked'
    case 'human handoff required':
      return 'handoff'
    default:
      return 'warning'
  }
}

interface VerdictBadgeProps {
  tone: VerdictBadgeTone
  label: string
  large?: boolean
}

interface VerdictToneStyle {
  bg: string
  text: string
  icon: IconName
  light: string
}

const VERDICT_TONE_STYLES: Record<VerdictBadgeTone, VerdictToneStyle> = {
  ship: {
    bg: 'from-emerald-500 to-teal-500',
    text: 'text-white',
    icon: 'check',
    light: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  warning: {
    bg: 'from-amber-400 to-orange-500',
    text: 'text-white',
    icon: 'alert',
    light: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  danger: {
    bg: 'from-rose-500 to-red-600',
    text: 'text-white',
    icon: 'alert',
    light: 'bg-red-50 text-red-700 border-red-100',
  },
  blocked: {
    bg: 'from-red-600 to-rose-700',
    text: 'text-white',
    icon: 'lock',
    light: 'bg-red-50 text-red-700 border-red-100',
  },
  handoff: {
    bg: 'from-violet-500 to-amber-500',
    text: 'text-white',
    icon: 'arrowRight',
    light: 'bg-violet-50 text-violet-700 border-violet-100',
  },
}

export default function VerdictBadge({ tone, label, large = false }: VerdictBadgeProps) {
  const toneStyle = VERDICT_TONE_STYLES[tone] ?? VERDICT_TONE_STYLES.warning

  if (!large) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${toneStyle.light}`}
      >
        <Icon name={toneStyle.icon} className="w-3.5 h-3.5" />
        {label}
      </span>
    )
  }

  return (
    <div
      className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r ${toneStyle.bg} ${toneStyle.text} shadow-card`}
    >
      <Icon name={toneStyle.icon} className="w-5 h-5" strokeWidth={2.5} />
      <span className="text-base font-extrabold tracking-tight uppercase">{label}</span>
    </div>
  )
}
