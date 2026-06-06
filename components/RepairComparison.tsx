'use client'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import SecondaryButton from '@/components/SecondaryButton'
import StatusPill from '@/components/StatusPill'
import { getMockEvalResult } from '@/lib/mockResponses'
import { DOMAINS, PRESSURE_TESTS, SCENARIOS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { EvalResult, ScenarioContract } from '@/types'

function RepairSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mt-10 grid lg:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
        <div className="h-72 bg-slate-100 rounded-2xl" />
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-slate-100" />
        </div>
        <div className="h-72 bg-slate-100 rounded-2xl" />
      </div>
      <div className="mt-8 h-40 bg-slate-100 rounded-2xl" />
    </div>
  )
}

interface RepairBodyProps {
  scenario: ScenarioContract
  evalResult: EvalResult
}

function RepairBody({ scenario, evalResult }: RepairBodyProps) {
  const { deepEval, repairedResponse, whatChanged } = evalResult

  return (
    <>
      {/* Before / After */}
      <div className="mt-10 grid lg:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
        {/* BEFORE */}
        <Card padding="p-6" className="border-red-100 bg-gradient-to-br from-white to-red-50/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-100 border border-red-200 text-red-700 flex items-center justify-center">
                <Icon name="x" className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold text-ink">Original response</span>
            </div>
            <StatusPill tone="red">Failed</StatusPill>
          </div>
          <div className="rounded-xl bg-white border border-red-100 p-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
              What the agent said
            </div>
            <div className="text-base text-ink italic leading-relaxed">
              &ldquo;{scenario.badResponse}&rdquo;
            </div>
          </div>
          <div className="mt-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
              Why it failed
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{deepEval.whyItFailed}</p>
          </div>
          <div className="mt-4 flex gap-2">
            <StatusPill tone="red">Mode: {deepEval.actualMode}</StatusPill>
          </div>
        </Card>

        {/* Arrow */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
          <div className="w-12 h-12 rounded-full grad-bg shadow-card flex items-center justify-center text-white">
            <Icon name="arrowRight" className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
        </div>
        <div className="lg:hidden flex justify-center py-2">
          <div className="w-10 h-10 rounded-full grad-bg shadow-card flex items-center justify-center text-white">
            <Icon name="arrowDown" className="w-5 h-5" />
          </div>
        </div>

        {/* AFTER */}
        <Card
          padding="p-6"
          className="border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg grad-bg text-white flex items-center justify-center">
                <Icon name="check" className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold text-ink">Repaired response</span>
            </div>
            <StatusPill tone="indigo">Suggested</StatusPill>
          </div>
          <div className="rounded-xl bg-white border border-indigo-100 p-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
              What it should say
            </div>
            <div className="text-base text-ink italic leading-relaxed">
              &ldquo;{repairedResponse}&rdquo;
            </div>
          </div>
          <div className="mt-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
              Expected response mode
            </div>
            <StatusPill tone="emerald">{deepEval.expectedMode}</StatusPill>
          </div>
          <div className="mt-4">
            <SecondaryButton size="sm" className="w-full">
              <Icon name="volume2" className="w-4 h-4 mr-1.5" />
              Play Repaired Voice
              <span className="ml-2 text-[10px] text-muted">optional</span>
            </SecondaryButton>
          </div>
        </Card>
      </div>

      {/* What changed */}
      <Card padding="p-7" className="mt-8">
        <h3 className="text-base font-bold text-ink mb-4 flex items-center gap-2">
          <Icon name="sparkles" className="w-4 h-4 text-indigo-600" />
          What changed
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {whatChanged.map((change, index) => (
            <div
              key={change}
              className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/60 border border-slate-100"
            >
              <span className="w-6 h-6 rounded-md grad-bg text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <span className="text-sm text-slate-700 leading-relaxed">{change}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default function RepairComparison() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)
  const storedEvalResult = useDrillStore((state) => state.evalResult)

  if (!hasHydrated) {
    return <RepairSkeleton />
  }

  // Silent fallback matches the prototype's `state.domain || DOMAINS[0]` pattern.
  const domain = storedDomain ?? DOMAINS[0]
  const drill = storedDrill ?? PRESSURE_TESTS[0]
  const scenarioKey = `${domain.id}_${drill.id}`
  const scenario = SCENARIOS[scenarioKey] ?? SCENARIOS.support_frustration
  // Prefer the evaluator's result (Feature 8); fall back to the scenario-derived
  // mock so /repair still renders if the user deep-links without visiting /eval.
  const evalResult = storedEvalResult ?? getMockEvalResult(scenario.id)

  return <RepairBody scenario={scenario} evalResult={evalResult} />
}
