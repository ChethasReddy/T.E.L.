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
  hasHydrated: boolean
  setDomain: (domain: Domain) => void
  setDrill: (drill: PressureTest) => void
  setScenarioKey: (key: string) => void
  addTranscript: (entry: TranscriptEntry) => void
  setAgentResponse: (response: string) => void
  setGuardrailResult: (result: GuardrailResult) => void
  setEvalResult: (result: EvalResult) => void
  setHasHydrated: (hasHydrated: boolean) => void
  reset: () => void
}

const INITIAL_DRILL_STATE = {
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
      ...INITIAL_DRILL_STATE,
      hasHydrated: false,
      setDomain: (domain) => set({ domain }),
      // Selecting a new drill starts a fresh run: clear all downstream results
      // so the next drill never shows the previous drill's transcripts, guardrail
      // pulse, or evaluation.
      setDrill: (drill) =>
        set({
          drill,
          transcripts: [],
          agentResponse: null,
          guardrailResult: null,
          evalResult: null,
        }),
      setScenarioKey: (scenarioKey) => set({ scenarioKey }),
      addTranscript: (entry) =>
        set((state) => ({ transcripts: [...state.transcripts, entry] })),
      setAgentResponse: (agentResponse) => set({ agentResponse }),
      setGuardrailResult: (guardrailResult) => set({ guardrailResult }),
      setEvalResult: (evalResult) => set({ evalResult }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      reset: () => set(INITIAL_DRILL_STATE),
    }),
    {
      name: 'vibetrace-drill',
      skipHydration: true,
      // hasHydrated is a runtime flag, not persisted state — exclude from storage.
      partialize: (state) => ({
        domain: state.domain,
        drill: state.drill,
        scenarioKey: state.scenarioKey,
        transcripts: state.transcripts,
        agentResponse: state.agentResponse,
        guardrailResult: state.guardrailResult,
        evalResult: state.evalResult,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    },
  ),
)
