import Card from '@/components/Card'
import Icon from '@/components/Icon'
import StatusPill from '@/components/StatusPill'
import type { OverallResult, Scorecard } from '@/types'

interface ScoreCardProps {
  scorecard: Scorecard
  overall: OverallResult
}

const SCORE_HIGH_THRESHOLD = 70
const SCORE_MID_THRESHOLD = 50

function getScoreBarClass(value: number): string {
  if (value >= SCORE_HIGH_THRESHOLD) return 'from-emerald-400 to-teal-500'
  if (value >= SCORE_MID_THRESHOLD) return 'from-amber-400 to-orange-500'
  return 'from-rose-500 to-red-600'
}

function getOverallTone(overall: OverallResult): 'red' | 'emerald' {
  return overall === 'FAILED' ? 'red' : 'emerald'
}

export default function ScoreCard({ scorecard, overall }: ScoreCardProps) {
  return (
    <Card padding="p-7">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-bold text-ink flex items-center gap-2">
          <Icon name="barChart" className="w-4 h-4 text-indigo-600" />
          Scorecard
        </h3>
        <StatusPill tone={getOverallTone(overall)}>Overall: {overall}</StatusPill>
      </div>
      <div className="space-y-4">
        {Object.entries(scorecard).map(([metric, value]) => (
          <div key={metric}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-semibold text-ink">{metric}</span>
              <span className="font-bold text-ink tabular-nums">
                {value}
                <span className="text-muted font-medium">/100</span>
              </span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${getScoreBarClass(value)}`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
