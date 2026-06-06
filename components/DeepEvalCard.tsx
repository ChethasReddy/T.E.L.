'use client'

import { useEffect, useRef } from 'react'

import Card from '@/components/Card'
import GhostButton from '@/components/GhostButton'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import StatusPill from '@/components/StatusPill'
import VerdictBadge, { verdictLabelToTone } from '@/components/VerdictBadge'
import { getMockEvalResult } from '@/lib/mockResponses'
import { DOMAINS, FAILURE_TYPES, PRESSURE_TESTS, SCENARIOS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { EvalResult } from '@/types'

function DeepEvalSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="max-w-2xl space-y-3">
          <div className="h-5 w-44 bg-slate-100 rounded" />
          <div className="h-12 w-96 max-w-full bg-slate-100 rounded" />
          <div className="h-4 w-80 max-w-full bg-slate-100 rounded" />
        </div>
        <div className="h-8 w-36 bg-slate-100 rounded-full" />
      </div>
      <Card padding="p-7" className="mb-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="h-24 bg-slate-100 rounded" />
          <div className="h-24 bg-slate-100 rounded" />
          <div className="h-24 bg-slate-100 rounded" />
        </div>
      </Card>
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 h-56 bg-slate-100 rounded-2xl" />
        <div className="h-56 bg-slate-100 rounded-2xl" />
      </div>
      <div className="h-32 bg-slate-100 rounded-2xl" />
    </div>
  )
}

interface DeepEvalReportProps {
  evalResult: EvalResult
}

function DeepEvalReport({ evalResult }: DeepEvalReportProps) {
  const { deepEval, repairedResponse, verdict } = evalResult
  const failureBlurb = FAILURE_TYPES.find((failure) => failure.name === deepEval.failureType)?.blurb
  const verdictTone = verdictLabelToTone(verdict.label)

  return (
    <>
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 animate-fade-up">
        <div className="max-w-2xl">
          <SectionLabel icon="brain">Deep evaluation report</SectionLabel>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Emotional failure <span className="grad-text">confirmed</span>.
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Frontier evaluator has reviewed the exchange against the scenario contract. Here is
            what it found.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <VerdictBadge tone={verdictTone} label={verdict.label} />
          <div className="text-xs text-muted">
            Confidence <span className="font-bold text-ink">{deepEval.confidence}%</span>
          </div>
        </div>
      </div>

      {/* Summary card */}
      <Card padding="p-7" className="mb-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Failure type
            </div>
            <div className="text-xl font-extrabold text-ink mt-1 tracking-tight">
              {deepEval.failureType}
            </div>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{failureBlurb}</p>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Failed sentence
            </div>
            <div className="mt-1 rounded-lg bg-red-50/60 border border-red-100 p-3 text-sm text-ink italic leading-relaxed">
              &ldquo;{deepEval.failedSentence}&rdquo;
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-emerald-50/60 border border-emerald-100 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Expected mode
              </div>
              <div className="text-sm font-bold text-ink mt-1">{deepEval.expectedMode}</div>
            </div>
            <div className="rounded-lg bg-red-50/60 border border-red-100 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-red-700">
                Actual mode
              </div>
              <div className="text-sm font-bold text-ink mt-1">{deepEval.actualMode}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Why + Risk + Evidence */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        <Card padding="p-6" className="lg:col-span-2">
          <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
            <Icon name="brain" className="w-4 h-4 text-indigo-600" />
            Why it failed
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">{deepEval.whyItFailed}</p>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
              <Icon name="fileText" className="w-4 h-4 text-indigo-600" />
              Evidence from transcript
            </h3>
            <ul className="space-y-2.5">
              {deepEval.evidence.map((evidenceItem, evidenceIndex) => (
                <li
                  key={evidenceItem}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="w-5 h-5 rounded-md grad-bg-soft border border-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {evidenceIndex + 1}
                  </span>
                  <span className="leading-relaxed">{evidenceItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card padding="p-6">
          <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
            <Icon name="alert" className="w-4 h-4 text-amber-600" />
            Risk
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">{deepEval.risk}</p>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
              <Icon name="award" className="w-4 h-4 text-violet-600" />
              Production readiness
            </h3>
            <VerdictBadge tone={verdictTone} label={verdict.label} />
            <div className="mt-3 text-xs text-muted leading-relaxed">{verdict.reason}</div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
              <Icon name="target" className="w-4 h-4 text-indigo-600" />
              Confidence
            </h3>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-extrabold grad-text">{deepEval.confidence}%</div>
              <div className="text-xs text-muted">frontier judgment</div>
            </div>
            <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full grad-bg rounded-full" style={{ width: `${deepEval.confidence}%` }} />
            </div>
          </div>
        </Card>
      </div>

      {/* Repaired response preview */}
      <Card
        padding="p-6"
        className="mb-8 bg-gradient-to-br from-white to-indigo-50/30 border-indigo-100"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-ink flex items-center gap-2">
            <Icon name="sparkles" className="w-4 h-4 text-indigo-600" />
            Repaired response
          </h3>
          <StatusPill tone="indigo">Suggested by frontier</StatusPill>
        </div>
        <p className="text-base text-ink italic leading-relaxed">&ldquo;{repairedResponse}&rdquo;</p>
        <div className="mt-4">
          <SecondaryButton size="sm" href="/repair">
            Show full repair comparison
            <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
          </SecondaryButton>
        </div>
      </Card>

      {/* Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <GhostButton href="/drill">
          <Icon name="chevronLeft" className="w-4 h-4" />
          Back to drill
        </GhostButton>
        <div className="flex flex-wrap gap-2">
          <SecondaryButton href="/repair">Show Repaired Response</SecondaryButton>
          <SecondaryButton>
            <Icon name="flag" className="w-4 h-4 mr-1.5" />
            Mark as Regression Case
          </SecondaryButton>
          <PrimaryButton href="/verdict">
            View Production Verdict
            <Icon
              name="arrowRight"
              className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
            />
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default function DeepEvalCard() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)
  const storedAgentResponse = useDrillStore((state) => state.agentResponse)
  const transcripts = useDrillStore((state) => state.transcripts)
  const evalResult = useDrillStore((state) => state.evalResult)
  const setEvalResult = useDrillStore((state) => state.setEvalResult)
  const fetchStartedRef = useRef(false)

  useEffect(() => {
    if (!hasHydrated || evalResult !== null || fetchStartedRef.current) {
      return
    }
    fetchStartedRef.current = true

    // Silent fallback matches the prototype's `state.domain || DOMAINS[0]` pattern.
    const domain = storedDomain ?? DOMAINS[0]
    const drill = storedDrill ?? PRESSURE_TESTS[0]
    const scenarioKey = `${domain.id}_${drill.id}`
    const scenario = SCENARIOS[scenarioKey] ?? SCENARIOS.support_frustration
    const lastScriptedLine = scenario.scriptedLines[scenario.scriptedLines.length - 1]

    const runEvaluation = async (): Promise<void> => {
      try {
        const evaluateResponse = await fetch('/api/evaluate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            scenarioId: scenario.id,
            agentResponse: storedAgentResponse ?? scenario.badResponse,
            userLine: lastScriptedLine,
            conversationHistory: transcripts,
          }),
        })
        if (!evaluateResponse.ok) {
          throw new Error(`/api/evaluate returned ${evaluateResponse.status}`)
        }
        const result: EvalResult = await evaluateResponse.json()
        setEvalResult(result)
      } catch (error) {
        console.error('[VibeTrace:eval] evaluation fetch failed, using mock fallback', error)
        setEvalResult(getMockEvalResult(scenario.id))
      }
    }

    void runEvaluation()
  }, [hasHydrated, evalResult, storedDomain, storedDrill, storedAgentResponse, transcripts, setEvalResult])

  if (!hasHydrated || evalResult === null) {
    return <DeepEvalSkeleton />
  }

  return <DeepEvalReport evalResult={evalResult} />
}
