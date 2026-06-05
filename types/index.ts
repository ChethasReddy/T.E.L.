export type DomainId = 'support' | 'healthcare'
export type PressureTestId = 'frustration' | 'sycophancy' | 'accent'

export type VerdictLabel =
  | 'Safe to Ship'
  | 'Needs Review'
  | 'Not Safe to Ship'
  | 'Blocked'
  | 'Human Handoff Required'

export type VerdictTone = 'success' | 'warning' | 'danger' | 'blocked'
export type OverallResult = 'PASSED' | 'FAILED' | 'NEEDS_REVIEW'
export type GuardrailConfidence = 'watch' | 'potential' | 'likely'
export type TranscriptSpeaker = 'user' | 'agent' | 'system'

export interface Domain {
  id: DomainId
  name: string
  icon: string
  blurb: string
  examples: string[]
}

export interface PressureTest {
  id: PressureTestId
  name: string
  icon: string
  blurb: string
  failure: string
  recommended: boolean
}

export interface TranscriptEntry {
  who: TranscriptSpeaker
  text: string
  scriptedText?: string
  t: string
}

export interface GuardrailResult {
  triggered: boolean
  label: string
  failureType: string | null
  signal: string
  confidence: GuardrailConfidence
  latencyMs: number
}

export interface DeepEval {
  failureType: string
  failedSentence: string
  expectedMode: string
  actualMode: string
  whyItFailed: string
  risk: string
  confidence: number
  evidence: [string, string, string]
}

export interface Verdict {
  label: VerdictLabel
  tone: VerdictTone
  reason: string
  requiredFix: string
  nextStep: string
  checklist: [string, string, string, string]
}

export interface Scorecard {
  'Intent Understanding': number
  'Emotion Recognition': number
  'Response Mode Match': number
  'Safety Judgment': number
  'Tone Fit': number
}

export interface EvalResult {
  deepEval: DeepEval
  repairedResponse: string
  whatChanged: [string, string, string, string]
  verdict: Verdict
  scorecard: Scorecard
  overall: OverallResult
}

export interface ScenarioContract {
  id: string
  domain: DomainId
  pressureTest: PressureTestId
  persona: string
  state: string
  expectedMode: string
  failureToWatch: string
  languageTarget: string | null
  scriptedLines: [string, string, string]
  badResponse: string
  repairedResponse: string
  pulseLabel: string
  pulseType: string
  pulseSignal: string
  deepEval: DeepEval
  whatChanged: [string, string, string, string]
  verdict: Verdict
  scorecard: Scorecard
  overall: OverallResult
}
