import Card from '@/components/Card'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

interface GuardrailPulseProps {
  label: string
  type: string
  signal: string
  latency?: string
  viewDeepHref: string
}

export default function GuardrailPulse({
  label,
  type,
  signal,
  latency = '0.2s',
  viewDeepHref,
}: GuardrailPulseProps) {
  return (
    <Card padding="p-0" className="overflow-hidden border-amber-200/70 shadow-card">
      <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />
      <div className="p-6 grid lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-amber-400/40 rounded-full blur-xl animate-soft-pulse" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center text-amber-700 shadow-soft">
              <Icon name="alert" className="w-6 h-6" />
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                Instant guardrail pulse
              </span>
              <span className="text-[10px] text-muted">{latency}</span>
            </div>
            <div className="text-base font-extrabold text-ink tracking-tight">{label}</div>
            <div className="text-sm font-semibold text-ink mt-0.5">Type: {type}</div>
            <div className="text-sm text-slate-600 mt-1 leading-relaxed">{signal}</div>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-live-dot" />
              Deep evaluation running...
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:items-stretch">
          <PrimaryButton size="sm" href={viewDeepHref}>
            Wait for Deep Evaluation
            <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
          </PrimaryButton>
          <SecondaryButton size="sm">View Signal</SecondaryButton>
        </div>
      </div>
    </Card>
  )
}
