import { getScenario } from '@/lib/scenarios'
import type { EvalResult, GuardrailResult } from '@/types'

const MOCK_GUARDRAIL_LATENCY_MS = 420

export function getMockGuardrailResult(scenarioId: string): GuardrailResult {
  const scenario = getScenario(scenarioId)
  const confidence = scenario.pulseLabel.startsWith('LIKELY') ? 'likely' : 'potential'
  return {
    triggered: true,
    label: scenario.pulseLabel,
    failureType: scenario.deepEval.failureType,
    signal: scenario.pulseSignal,
    confidence,
    latencyMs: MOCK_GUARDRAIL_LATENCY_MS,
  }
}

export function getMockEvalResult(scenarioId: string): EvalResult {
  const scenario = getScenario(scenarioId)
  return {
    deepEval: scenario.deepEval,
    repairedResponse: scenario.repairedResponse,
    whatChanged: scenario.whatChanged,
    verdict: scenario.verdict,
    scorecard: scenario.scorecard,
    overall: scenario.overall,
  }
}

export interface MockAgentResponse {
  responseText: string
  audioUrl: string | null
  agentId: string
}

export function getMockAgentResponse(scenarioId: string): MockAgentResponse {
  const scenario = getScenario(scenarioId)
  return {
    responseText: scenario.badResponse,
    audioUrl: null,
    agentId: `mock_${scenario.pressureTest}`,
  }
}
