'use client'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import SumRow from '@/components/SumRow'
import VerdictBadge, { verdictLabelToTone, type VerdictBadgeTone } from '@/components/VerdictBadge'
import { getMockEvalResult } from '@/lib/mockResponses'
import { DOMAINS, PRESSURE_TESTS, SCENARIOS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { Domain, EvalResult, PressureTest } from '@/types'

function getRiskLabel(tone: VerdictBadgeTone): string {
  if (tone === 'blocked' || tone === 'danger') return 'High'
  return 'Medium'
}

function VerdictSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mt-10 h-72 bg-slate-100 rounded-2xl" />
      <div className="mt-6 h-44 bg-slate-100 rounded-2xl" />
    </div>
  )
}

interface VerdictBodyProps {
  domain: Domain
  drill: PressureTest
  evalResult: EvalResult
}

function VerdictBody({ domain, drill, evalResult }: VerdictBodyProps) {
  const { verdict, deepEval } = evalResult
  const tone = verdictLabelToTone(verdict.label)

  return (
    <>
      {/* HERO VERDICT CARD */}
      <Card padding="p-8 sm:p-10" className="mt-10 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-400 opacity-10 rounded-full blur-3xl" />
        <div className="relative grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <VerdictBadge tone={tone} label={verdict.label} large />
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Reason
                </div>
                <div className="text-base text-ink mt-1.5 leading-relaxed">{verdict.reason}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Required fix
                </div>
                <div className="text-base text-ink mt-1.5 leading-relaxed">
                  {verdict.requiredFix}
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Recommended next action
                </div>
                <div className="text-base text-ink mt-1.5 leading-relaxed">{verdict.nextStep}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Scenario summary
            </div>
            <div className="mt-3 space-y-2.5 text-sm">
              <SumRow label="Domain" value={domain.name} />
              <SumRow label="Drill" value={drill.name} />
              <SumRow label="Failure" value={deepEval.failureType} />
              <SumRow label="Risk" value={getRiskLabel(tone)} />
              <SumRow label="Confidence" value={`${deepEval.confidence}%`} />
            </div>
          </div>
        </div>
      </Card>

      {/* Checklist */}
      <Card padding="p-7" className="mt-6">
        <h3 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
          <Icon name="check" className="w-4 h-4 text-indigo-600" strokeWidth={2.5} />
          What to change before production
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {verdict.checklist.map((item) => (
            <label
              key={item}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/60 border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <span className="mt-0.5 w-5 h-5 rounded-md border-2 border-slate-300 flex items-center justify-center shrink-0 group-hover:border-indigo-400" />
              <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
            </label>
          ))}
        </div>
      </Card>
    </>
  )
}

export default function VerdictDetails() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)
  const storedEvalResult = useDrillStore((state) => state.evalResult)

  if (!hasHydrated) {
    return <VerdictSkeleton />
  }

  // Silent fallback matches the prototype's `state.domain || DOMAINS[0]` pattern.
  const domain = storedDomain ?? DOMAINS[0]
  const drill = storedDrill ?? PRESSURE_TESTS[0]
  const scenarioKey = `${domain.id}_${drill.id}`
  const scenario = SCENARIOS[scenarioKey] ?? SCENARIOS.support_frustration
  // Prefer the evaluator's result (Feature 8); fall back to the scenario-derived
  // mock so /verdict still produces a verdict even if every API call failed (§19.7).
  const evalResult = storedEvalResult ?? getMockEvalResult(scenario.id)

  return <VerdictBody domain={domain} drill={drill} evalResult={evalResult} />
}
