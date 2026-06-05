import Icon from '@/components/Icon'

type LogoSize = 'md' | 'lg'

interface LogoProps {
  size?: LogoSize
}

export default function Logo({ size = 'md' }: LogoProps) {
  const dotSize = size === 'lg' ? 'w-9 h-9' : 'w-8 h-8'
  const textSize = size === 'lg' ? 'text-xl' : 'text-lg'

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${dotSize} rounded-xl grad-bg flex items-center justify-center shadow-card relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
        <Icon name="waveform" className="w-4 h-4 text-white relative" strokeWidth={2.25} />
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`${textSize} font-extrabold tracking-tight text-ink`}>VibeTrace</span>
        <span className={`${textSize} font-medium text-muted`}>Arena</span>
      </div>
    </div>
  )
}
