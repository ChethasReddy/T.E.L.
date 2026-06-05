'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import Card from '@/components/Card'
import GuardrailPulse from '@/components/GuardrailPulse'
import Icon from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import StatusPill from '@/components/StatusPill'
import Teleprompter from '@/components/Teleprompter'
import WaveformBar from '@/components/WaveformBar'
import { DOMAINS, PRESSURE_TESTS, SCENARIOS } from '@/lib/scenarios'
import { useDrillStore } from '@/lib/store'
import type { Domain, PressureTest, ScenarioContract, TranscriptSpeaker } from '@/types'

interface FeedEntry {
  who: TranscriptSpeaker
  text: string
  t: string
}

const GUARDRAIL_PULSE_DELAY_MS = 600
const SYSTEM_START_TIMESTAMP = '00:00'
const FIRST_USER_TIMESTAMP = '00:03'
const AGENT_TIMESTAMP = '00:07'
const STATIC_HEADER_TIMER = '00:14'

function makeNextUserTimestamp(nextIndex: number): string {
  return `00:${10 + nextIndex * 4}`
}

function makeInitialFeed(firstScriptedLine: string): FeedEntry[] {
  return [
    { who: 'system', text: 'Drill started', t: SYSTEM_START_TIMESTAMP },
    { who: 'user', text: firstScriptedLine, t: FIRST_USER_TIMESTAMP },
  ]
}

function DrillSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <Card padding="p-6" className="min-h-[320px]">
        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-40 bg-slate-100 rounded" />
          <div className="h-24 w-full bg-slate-100 rounded mt-4" />
          <div className="h-12 w-full bg-slate-100 rounded mt-4" />
        </div>
      </Card>
      <Card padding="p-6" className="min-h-[320px]">
        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-40 bg-slate-100 rounded" />
          <div className="h-24 w-full bg-slate-100 rounded mt-4" />
          <div className="h-12 w-full bg-slate-100 rounded mt-4" />
        </div>
      </Card>
    </div>
  )
}

interface DrillBodyProps {
  domain: Domain
  drill: PressureTest
  scenario: ScenarioContract
  demoToggleVisible: boolean
}

function DrillBody({ domain, drill, scenario, demoToggleVisible }: DrillBodyProps) {
  const [lineIndex, setLineIndex] = useState(0)
  const [agentSpoke, setAgentSpoke] = useState(false)
  const [pulseVisible, setPulseVisible] = useState(false)
  const [feed, setFeed] = useState<FeedEntry[]>(() =>
    makeInitialFeed(scenario.scriptedLines[0]),
  )
  const [scriptedOnly, setScriptedOnly] = useState(true)
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight
    }
  }, [feed.length])

  const triggerAgent = (): void => {
    if (agentSpoke) return
    setFeed((current) => [
      ...current,
      { who: 'agent', text: scenario.badResponse, t: AGENT_TIMESTAMP },
    ])
    setAgentSpoke(true)
    setTimeout(() => setPulseVisible(true), GUARDRAIL_PULSE_DELAY_MS)
  }

  const advanceLine = (): void => {
    if (lineIndex >= scenario.scriptedLines.length - 1) return
    const next = lineIndex + 1
    setLineIndex(next)
    setFeed((current) => [
      ...current,
      { who: 'user', text: scenario.scriptedLines[next], t: makeNextUserTimestamp(next) },
    ])
  }

  // Repeat Line is inert until live mic mode (Feature 13) wires replay.
  const repeatLine = (): void => {}

  const toggleScriptedOnly = (): void => {
    setScriptedOnly((value) => !value)
  }

  return (
    <>
      {/* Drill header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-live-dot" />
            <span className="text-xs font-bold uppercase tracking-wider">Live drill</span>
          </div>
          <div className="text-sm text-muted hidden sm:flex items-center gap-2">
            <span className="font-semibold text-ink">{domain.name}</span>
            <Icon name="chevronRight" className="w-3.5 h-3.5" />
            <span className="font-semibold text-ink">{drill.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {demoToggleVisible && (
            <button
              type="button"
              onClick={toggleScriptedOnly}
              aria-pressed={scriptedOnly}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors ring-focus ${
                scriptedOnly
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  scriptedOnly ? 'bg-indigo-500' : 'bg-slate-400'
                }`}
              />
              Scripted only
            </button>
          )}
          <StatusPill tone="slate">
            <Icon name="clock" className="w-3 h-3" />
            {STATIC_HEADER_TIMER}
          </StatusPill>
          <SecondaryButton size="sm" href="/briefing">
            End Drill
          </SecondaryButton>
        </div>
      </div>

      {/* Two-column */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* AGENT PANEL */}
        <Card padding="p-6" className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl grad-bg flex items-center justify-center text-white shadow-card">
                <Icon name="bot" className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">
                  Agent under test
                </div>
                <div className="text-base font-bold text-ink">VoiceAgent v2.4</div>
              </div>
            </div>
            <StatusPill tone="indigo" dot>
              ElevenLabs
            </StatusPill>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 min-h-[120px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2">
              Current response
            </div>
            {agentSpoke ? (
              <div className="text-base text-ink font-medium leading-relaxed">
                &ldquo;{scenario.badResponse}&rdquo;
              </div>
            ) : (
              <div className="text-sm text-slate-400 italic">Listening...</div>
            )}
          </div>

          <div className="mt-4">
            <WaveformBar active={agentSpoke} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <PrimaryButton size="sm" onClick={triggerAgent} className="w-full">
              <Icon name="play" className="w-4 h-4 mr-1.5" />
              Trigger Agent Response
            </PrimaryButton>
            <SecondaryButton size="sm" onClick={triggerAgent} className="w-full">
              <Icon name="volume2" className="w-4 h-4 mr-1.5" />
              Replay
            </SecondaryButton>
          </div>
        </Card>

        {/* HUMAN TESTER PANEL */}
        <Card padding="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                <Icon name="user" className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">
                  Human tester
                </div>
                <div className="text-base font-bold text-ink">Persona loaded</div>
              </div>
            </div>
            <StatusPill tone="amber" dot>
              {scenario.expectedMode}
            </StatusPill>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted font-medium">Persona:</span>{' '}
              <span className="text-ink">{scenario.persona}</span>
            </div>
            <div>
              <span className="text-muted font-medium">Emotional target:</span>{' '}
              <span className="text-ink">{scenario.state}</span>
            </div>
            {scenario.languageTarget && (
              <div>
                <span className="text-muted font-medium">Language target:</span>{' '}
                <span className="text-ink">{scenario.languageTarget}</span>
              </div>
            )}
          </div>

          <div className="mt-5">
            <Teleprompter
              scriptedLines={scenario.scriptedLines}
              currentIndex={lineIndex}
              onNext={advanceLine}
              onRepeat={repeatLine}
            />
          </div>
        </Card>
      </div>

      {/* GUARDRAIL PULSE inline */}
      {pulseVisible && (
        <div className="mt-5 animate-fade-up">
          <GuardrailPulse
            label={scenario.pulseLabel}
            type={scenario.pulseType}
            signal={scenario.pulseSignal}
            viewDeepHref="/eval"
          />
        </div>
      )}

      {/* Conversation feed */}
      <Card padding="p-6" className="mt-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-ink">Conversation feed</h3>
          <SecondaryButton size="sm" href="/freespeech">
            <Icon name="mic" className="w-4 h-4 mr-1.5" />
            Switch to Free Speech
          </SecondaryButton>
        </div>
        <div
          ref={feedRef}
          className="space-y-3 max-h-72 overflow-y-auto scrollbar-thin pr-2"
        >
          {feed.map((entry, index) => (
            <div
              key={`${entry.t}-${index}`}
              className={`flex items-start gap-3 ${entry.who === 'system' ? 'opacity-60' : ''}`}
            >
              <span className="text-[10px] font-mono text-muted mt-1.5 w-10 shrink-0">
                {entry.t}
              </span>
              {entry.who === 'user' && (
                <div className="flex items-start gap-2 max-w-2xl">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Icon name="user" className="w-3.5 h-3.5" />
                  </div>
                  <div className="rounded-lg bg-amber-50/60 border border-amber-100 px-3.5 py-2 text-sm text-ink italic">
                    &ldquo;{entry.text}&rdquo;
                  </div>
                </div>
              )}
              {entry.who === 'agent' && (
                <div className="flex items-start gap-2 max-w-2xl">
                  <div className="w-7 h-7 rounded-lg grad-bg flex items-center justify-center text-white shrink-0">
                    <Icon name="bot" className="w-3.5 h-3.5" />
                  </div>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 px-3.5 py-2 text-sm text-ink">
                    &ldquo;{entry.text}&rdquo;
                  </div>
                </div>
              )}
              {entry.who === 'system' && (
                <div className="text-xs text-muted italic">{entry.text}</div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default function DrillContent() {
  const hasHydrated = useDrillStore((state) => state.hasHydrated)
  const storedDomain = useDrillStore((state) => state.domain)
  const storedDrill = useDrillStore((state) => state.drill)
  const searchParams = useSearchParams()
  const demoToggleVisible = searchParams.get('demo') === 'true'

  if (!hasHydrated) {
    return <DrillSkeleton />
  }

  // Silent fallback matches the prototype's `state.domain || DOMAINS[0]` pattern.
  const domain = storedDomain ?? DOMAINS[0]
  const drill = storedDrill ?? PRESSURE_TESTS[0]
  const scenarioKey = `${domain.id}_${drill.id}`
  const scenario = SCENARIOS[scenarioKey] ?? SCENARIOS.support_frustration

  // key forces a fresh mount of DrillBody (and its useState initializers) when
  // the user re-enters with a different scenario.
  return (
    <DrillBody
      key={scenarioKey}
      domain={domain}
      drill={drill}
      scenario={scenario}
      demoToggleVisible={demoToggleVisible}
    />
  )
}
