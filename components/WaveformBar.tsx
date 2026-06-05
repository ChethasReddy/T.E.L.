interface WaveformBarProps {
  active: boolean
}

const BAR_COUNT = 32

function getBarHeightPercent(index: number, active: boolean): number {
  if (!active) return 4
  return 20 + Math.abs(Math.sin(index * 0.7)) * 60 + Math.cos(index * 0.3) * 15
}

function getBarOpacity(index: number, active: boolean): number {
  if (!active) return 0.3
  return 0.55 + Math.sin(index) * 0.4
}

export default function WaveformBar({ active }: WaveformBarProps) {
  return (
    <div className="flex items-end justify-center gap-1 h-12">
      {Array.from({ length: BAR_COUNT }).map((_, index) => (
        <div
          key={index}
          className="w-1 grad-bg rounded-full"
          style={{
            height: `${getBarHeightPercent(index, active)}%`,
            opacity: getBarOpacity(index, active),
            transition: 'height 0.4s ease',
          }}
        />
      ))}
    </div>
  )
}
