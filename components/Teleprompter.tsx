'use client'

import Icon from '@/components/Icon'
import SecondaryButton from '@/components/SecondaryButton'

interface TeleprompterProps {
  scriptedLines: readonly string[]
  currentIndex: number
  onNext: () => void
  onRepeat?: () => void
}

export default function Teleprompter({
  scriptedLines,
  currentIndex,
  onNext,
  onRepeat,
}: TeleprompterProps) {
  const previousLine = currentIndex > 0 ? scriptedLines[currentIndex - 1] : null
  const upcomingLine =
    currentIndex < scriptedLines.length - 1 ? scriptedLines[currentIndex + 1] : null

  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-2">
        Current user line ({currentIndex + 1} / {scriptedLines.length})
      </div>

      {previousLine && (
        <div className="text-sm text-slate-400 italic truncate mb-2">
          &ldquo;{previousLine}&rdquo;
        </div>
      )}

      <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/40 border border-amber-100 p-4">
        <div className="text-base text-ink font-medium italic leading-relaxed">
          &ldquo;{scriptedLines[currentIndex]}&rdquo;
        </div>
      </div>

      {upcomingLine && (
        <div className="text-sm text-slate-400 italic truncate mt-2">
          &ldquo;{upcomingLine}&rdquo;
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <SecondaryButton size="sm" className="w-full" onClick={onNext}>
          <Icon name="arrowRight" className="w-4 h-4 mr-1.5" />
          Next Line
        </SecondaryButton>
        <SecondaryButton size="sm" className="w-full" onClick={onRepeat}>
          <Icon name="refresh" className="w-4 h-4 mr-1.5" />
          Repeat Line
        </SecondaryButton>
      </div>
    </div>
  )
}
