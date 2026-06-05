import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type {
  Domain,
  PressureTest,
  TranscriptEntry,
  GuardrailResult,
  EvalResult,
} from '@/types'

interface DrillState {
  domain: Domain | null
  drill: PressureTest | null
  scenarioKey: string | null
  transcripts: TranscriptEntry[]
  agentResponse: string | null
  guardrailResult: GuardrailResult | null
  evalResult: EvalResult | null
  setDomain: (domain: Domain) => void
  setDrill: (drill: PressureTest) => void
  setScenarioKey: (key: string) => void
  addTranscript: (entry: TranscriptEntry) => void
  setAgentResponse: (response: string) => void
  setGuardrailResult: (result: GuardrailResult) => void
  setEvalResult: (result: EvalResult) => void
  reset: () => void
}

const INITIAL_STATE = {
  domain: null,
  drill: null,
  scenarioKey: null,
  transcripts: [],
  agentResponse: null,
  guardrailResult: null,
  evalResult: null,
}

export const useDrillStore = create<DrillState>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,
      setDomain: (domain) => set({ domain }),
      setDrill: (drill) => set({ drill }),
      setScenarioKey: (scenarioKey) => set({ scenarioKey }),
      addTranscript: (entry) =>
        set((state) => ({ transcripts: [...state.transcripts, entry] })),
      setAgentResponse: (agentResponse) => set({ agentResponse }),
      setGuardrailResult: (guardrailResult) => set({ guardrailResult }),
      setEvalResult: (evalResult) => set({ evalResult }),
      reset: () => set(INITIAL_STATE),
    }),
    { name: 'vibetrace-drill' },
  ),
)
