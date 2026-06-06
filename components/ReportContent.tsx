'use client'

import { useRouter } from 'next/navigation'

import Card from '@/components/Card'
import Field from '@/components/Field'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import ScoreCard from '@/components/ScoreCard'
import SecondaryButton from '@/components/SecondaryButton'
import StatusPill from '@/components/StatusPill'
import VerdictBadge, { verdictLabelToTone, type VerdictBadgeTone } from '@/components/VerdictBadge'
import { getMockEvalResult } from '@/lib/mockResponses'
import { DOMAINS, PRESSURE_TESTS, SCENARIOS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { Domain, EvalResult, PressureTest, ScenarioContract } from '@/types'

type TimelineTone = 'slate' | 'amber' | 'red' | 'emerald' | 'violet'

interface TimelineEntry {
  t: string
  label: string
  desc: string
  tone: TimelineTone
}

const TIMELINE_DOT_COLORS: Record<TimelineTone, string> = {
  slate: 'bg-slate-400',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
  emerald: 'bg-emerald-500',
  violet: 'bg-violet-500',
}

const TOP_EVIDENCE_COUNT = 3

function getVerdictTimelineTone(tone: VerdictBadgeTone): TimelineTone {
  if (tone === 'ship') return 'emerald'
  if (tone === 'warning') return 'amber'
  return 'red'
}

function buildTimeline(scenario: ScenarioContract, evalResult: EvalResult): TimelineEntry[] {
  const tone = verdictLabelToTone(evalResult.verdict.label)
  return [
    { t: '00:00', label: 'Drill start', desc: 'Scenario contract loaded', tone: 'slate' },
    {
      t: '00:03',
      label: 'User frustration rising',
      desc: 'First scripted line delivered',
      tone: 'amber',
    },
    {
      t: '00:07',
      label: 'Agent response',
      desc: 'Procedural intake, no acknowledgement',
      tone: 'red',
    },
    {
      t: '00:07',
      label: 'Instant guardrail pulse',
      desc: `${scenario.pulseType} flagged`,
      tone: 'amber',
    },
    {
      t: '00:11',
      label: 'Deep evaluation complete',
      desc: `Confidence ${evalResult.deepEval.confidence}%`,
      tone: 'violet',
    },
    {
      t: '00:13',
      label: 'Production verdict',
      desc: evalResult.verdict.label,
      tone: getVerdictTimelineTone(tone),
    },
  ]
}

function ReportSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-slate-100 rounded" />
          <div className="h-9 w-80 max-w-full bg-slate-100 rounded" />
        </div>
        <div className="h-8 w-32 bg-slate-100 rounded-full" />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-56 bg-slate-100 rounded-2xl" />
          <div className="h-64 bg-slate-100 rounded-2xl" />
        </div>
        <div className="space-y-6">
          <div className="h-48 bg-slate-100 rounded-2xl" />
          <div className="h-40 bg-slate-100 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

interface ReportBodyProps {
  domain: Domain
  drill: PressureTest
  scenario: ScenarioContract
  evalResult: EvalResult
  onRunNextDrill: () => void
  onReturnToArena: () => void
}

function ReportBody({
  domain,
  drill,
  scenario,
  evalResult,
  onRunNextDrill,
  onReturnToArena,
}: ReportBodyProps) {
  const { deepEval, verdict, repairedResponse, scorecard, overall } = evalResult
  const tone = verdictLabelToTone(verdict.label)
  const runId = `${domain.id}_${drill.id}`.toUpperCase()
  const timeline = buildTimeline(scenario, evalResult)
  const topEvidence = deepEval.evidence.slice(0, TOP_EVIDENCE_COUNT)

  return (
    <>
      {/* Report header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 animate-fade-up">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-muted">Drill report</div>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink leading-tight">
            {drill.name} — {domain.name}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted">
            <span>Run ID: VTA-{runId}-0142</span>
            <span>·</span>
            <span>Today, 14:32 UTC</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <VerdictBadge tone={tone} label={verdict.label} />
          <SecondaryButton size="sm">
            <Icon name="download" className="w-4 h-4 mr-1.5" />
            Export Report
          </SecondaryButton>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT col: summary + scorecard + timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary */}
          <Card padding="p-7">
            <h3 className="text-sm font-bold text-ink mb-4">Summary</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Business domain" value={domain.name} />
              <Field label="Pressure test" value={drill.name} />
              <Field label="User persona" value={scenario.persona} full />
              <Field label="Agent response" value={`"${scenario.badResponse}"`} full />
              <Field label="Failure type" value={deepEval.failureType} />
              <Field label="Failed sentence" value={`"${deepEval.failedSentence}"`} />
              <Field label="Repaired response" value={`"${repairedResponse}"`} full />
            </div>
          </Card>

          {/* Scorecard */}
          <ScoreCard scorecard={scorecard} overall={overall} />

          {/* Timeline */}
          <Card padding="p-7">
            <h3 className="text-sm font-bold text-ink mb-5 flex items-center gap-2">
              <Icon name="timer" className="w-4 h-4 text-indigo-600" />
              Timeline
            </h3>
            <ol className="relative border-l-2 border-slate-100 ml-3 space-y-5 py-1">
              {timeline.map((entry, index) => (
                <li key={`${entry.t}-${index}`} className="ml-5 relative">
                  <span
                    className={`absolute -left-[26px] top-1 w-3 h-3 rounded-full ${TIMELINE_DOT_COLORS[entry.tone]} ring-4 ring-white shadow-sm`}
                  />
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-[11px] font-mono text-muted">{entry.t}</span>
                    <span className="text-sm font-bold text-ink">{entry.label}</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">{entry.desc}</div>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        {/* RIGHT col: verdict, evidence, actions */}
        <div className="space-y-6">
          <Card padding="p-6">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Production verdict
            </div>
            <div className="mt-3">
              <VerdictBadge tone={tone} label={verdict.label} large />
            </div>
            <p className="text-sm text-slate-700 mt-4 leading-relaxed">{verdict.reason}</p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1">
                Required fix
              </div>
              <div className="text-sm text-ink leading-relaxed">{verdict.requiredFix}</div>
            </div>
          </Card>

          <Card padding="p-6">
            <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
              <Icon name="eye" className="w-4 h-4 text-indigo-600" />
              Top evidence
            </h3>
            <ul className="space-y-2.5">
              {topEvidence.map((evidenceItem) => (
                <li
                  key={evidenceItem}
                  className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{evidenceItem}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card padding="p-6">
            <h3 className="text-sm font-bold text-ink mb-4">Actions</h3>
            <div className="space-y-2">
              <PrimaryButton size="sm" className="w-full" onClick={onRunNextDrill}>
                Run Next Drill
                <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
              </PrimaryButton>
              <SecondaryButton size="sm" className="w-full">
                <Icon name="download" className="w-4 h-4 mr-1.5" />
                Export Report
              </SecondaryButton>
              <SecondaryButton size="sm" className="w-full" href="/freespeech">
                <Icon name="mic" className="w-4 h-4 mr-1.5" />
                Try Free Speech Mode
              </SecondaryButton>
              <SecondaryButton size="sm" className="w-full" onClick={onReturnToArena}>
                Return to Arena
              </SecondaryButton>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default function ReportContent() {
  const router = useRouter()
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)
  const storedEvalResult = useDrillStore((state) => state.evalResult)
  const reset = useDrillStore((state) => state.reset)

  const runNextDrill = (): void => {
    reset()
    router.push('/pressure')
  }

  const returnToArena = (): void => {
    reset()
    router.push('/domain')
  }

  if (!hasHydrated) {
    return <ReportSkeleton />
  }

  // Silent fallback matches the prototype's `state.domain || DOMAINS[0]` pattern.
  const domain = storedDomain ?? DOMAINS[0]
  const drill = storedDrill ?? PRESSURE_TESTS[0]
  const scenarioKey = `${domain.id}_${drill.id}`
  const scenario = SCENARIOS[scenarioKey] ?? SCENARIOS.support_frustration
  // Prefer the evaluator's result (Feature 8); fall back to the scenario-derived
  // mock so the report still renders if the user deep-links here (§19.7).
  const evalResult = storedEvalResult ?? getMockEvalResult(scenario.id)

  return (
    <ReportBody
      domain={domain}
      drill={drill}
      scenario={scenario}
      evalResult={evalResult}
      onRunNextDrill={runNextDrill}
      onReturnToArena={returnToArena}
    />
  )
}
