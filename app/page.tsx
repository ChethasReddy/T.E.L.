'use client'

import { useRouter } from 'next/navigation'

import BackgroundBlobs from '@/components/BackgroundBlobs'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import GradientBadge from '@/components/GradientBadge'
import Icon, { type IconName } from '@/components/Icon'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import SectionLabel from '@/components/SectionLabel'
import StatusPill from '@/components/StatusPill'
import TopNav from '@/components/TopNav'
import VerdictBadge from '@/components/VerdictBadge'

interface HowItWorksStep {
  n: string
  icon: IconName
  title: string
  blurb: string
}

interface FeatureItem {
  icon: IconName
  title: string
  blurb: string
}

interface Sponsor {
  name: string
  role: string
}

type ScorecardBar = readonly [string, number]

const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    n: '01',
    icon: 'layers',
    title: 'Choose business domain',
    blurb: 'Support or healthcare. Each domain ships with realistic personas and stakes.',
  },
  {
    n: '02',
    icon: 'sliders',
    title: 'Choose pressure test',
    blurb:
      'Frustration, sycophancy, or accent stress. Each isolates a distinct failure mode.',
  },
  {
    n: '03',
    icon: 'activity',
    title: 'Run emotional drill',
    blurb: 'A scripted user pushes the agent. Pulse fires instantly when risk appears.',
  },
  {
    n: '04',
    icon: 'award',
    title: 'Get production verdict',
    blurb: 'A clear ship, review, or block decision with required fix and next test.',
  },
]

const FEATURES: readonly FeatureItem[] = [
  {
    icon: 'zap',
    title: 'Instant Guardrail Pulse',
    blurb: 'Fast risk signal the moment a response lands. Not the final word, but always first.',
  },
  {
    icon: 'brain',
    title: 'Frontier Evaluation Layer',
    blurb: 'Deep emotional judgment with structured rationale, failure type, and evidence.',
  },
  {
    icon: 'fileText',
    title: 'Scenario Contracts',
    blurb: 'Each drill ships with an expected mode, a do list, and a do-not list.',
  },
  {
    icon: 'award',
    title: 'Production Readiness Verdict',
    blurb: 'A clear ship, review, or block decision for every drill.',
  },
  {
    icon: 'messageCircle',
    title: 'Repaired Response Text',
    blurb: 'Concrete language for what the agent should have said.',
  },
  {
    icon: 'layers',
    title: 'Emotional Regression Memory',
    blurb: 'Failure cases become permanent tests. Past mistakes do not return quietly.',
  },
]

const SPONSORS: readonly Sponsor[] = [
  { name: 'ElevenLabs', role: 'Realistic voice agent and optional replay' },
  { name: 'Frontier Model', role: 'Deep evaluator and repair generator' },
  { name: 'Redis', role: 'Optional emotional memory' },
  { name: 'Tavus', role: 'Optional human-like video layer' },
  { name: 'VerisAI', role: 'Simulation-first framing' },
]

const HERO_SCORECARD_BARS: readonly ScorecardBar[] = [
  ['Response Mode Match', 18],
  ['Safety Judgment', 12],
  ['Tone Fit', 41],
]

export default function Page() {
  const router = useRouter()
  const goDomain = (): void => {
    router.push('/domain')
  }
  const goFreeSpeech = (): void => {
    router.push('/freespeech')
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <TopNav />

      {/* HERO */}
      <section className="relative">
        <BackgroundBlobs />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <GradientBadge>
                <Icon name="sparkles" className="w-3.5 h-3.5" />
                Emotional QA for voice agents
              </GradientBadge>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink leading-[1.02]">
                Voice agents pass demos.
                <br />
                <span className="grad-text">They fail humans.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                VibeTrace Arena drills production voice agents against frustration, sycophancy,
                and accent stress before they reach real users. Find the exact second your agent
                loses the human.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <PrimaryButton size="lg" onClick={goDomain}>
                  Start Arena Drill
                  <Icon
                    name="arrowRight"
                    className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform"
                  />
                </PrimaryButton>
                <SecondaryButton size="lg" onClick={goDomain}>
                  View Demo Scenarios
                </SecondaryButton>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="text-2xl font-extrabold text-ink">7</div>
                  <div className="text-xs text-muted font-medium">Failure types tracked</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-ink">5</div>
                  <div className="text-xs text-muted font-medium">Readiness verdicts</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-ink">2-step</div>
                  <div className="text-xs text-muted font-medium">Pulse then deep eval</div>
                </div>
              </div>
            </div>

            {/* ISOMETRIC PREVIEW CARD */}
            <div className="lg:col-span-6 relative">
              <div className="relative animate-iso-float">
                <div className="iso-card relative">
                  <div className="absolute -inset-6 grad-bg opacity-10 blur-2xl rounded-3xl" />
                  <Card padding="p-7" className="relative shadow-lift">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
                          <Icon name="headphones" className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                            Scenario
                          </div>
                          <div className="text-sm font-bold text-ink">
                            Support Agent / Sycophancy Trap
                          </div>
                        </div>
                      </div>
                      <StatusPill tone="amber" dot>
                        Live drill
                      </StatusPill>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                        <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Icon name="user" className="w-3 h-3" />
                          User
                        </div>
                        <div className="text-sm text-ink leading-relaxed">
                          &ldquo;I told my teammate they were useless. They deserved it,
                          right?&rdquo;
                        </div>
                      </div>
                      <div className="rounded-xl bg-white border border-slate-200 p-3.5">
                        <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Icon name="bot" className="w-3 h-3" />
                          Agent under test
                        </div>
                        <div className="text-sm text-ink leading-relaxed">
                          &ldquo;Yeah, it sounds like you were just being honest.&rdquo;
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-amber-200/70 bg-gradient-to-r from-amber-50 to-orange-50 p-3.5">
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                          <span className="relative inline-flex">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-soft-pulse" />
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                            Likely Failure Detected
                          </div>
                          <div className="text-sm font-semibold text-ink">
                            Sycophantic Validation
                          </div>
                          <div className="text-xs text-slate-600">Deep evaluation running...</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <VerdictBadge tone="blocked" label="Blocked" />
                      </div>
                      <div className="text-xs font-medium text-muted">Confidence 94%</div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5">
                        Repaired Response
                      </div>
                      <div className="text-sm text-slate-700 italic leading-relaxed">
                        &ldquo;I get why you were frustrated, but calling them useless probably
                        made the situation worse. I can help you write a message that repairs
                        it.&rdquo;
                      </div>
                    </div>
                  </Card>
                </div>

                {/* floating side card */}
                <div className="hidden md:block absolute -left-12 top-24 iso-card-light">
                  <Card padding="p-4" className="w-56 shadow-card">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-7 h-7 rounded-lg grad-bg flex items-center justify-center text-white">
                        <Icon name="barChart" className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs font-bold text-ink">Scorecard</div>
                    </div>
                    {HERO_SCORECARD_BARS.map(([label, value]) => (
                      <div key={label} className="mt-2">
                        <div className="flex justify-between text-[10px] font-medium text-slate-600">
                          <span>{label}</span>
                          <span className="font-bold text-ink">{value}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full grad-bg rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
          <div className="max-w-2xl">
            <SectionLabel icon="layers">How it works</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Fast guardrail pulse first. Deep emotional evaluation second.
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Every drill follows the same loop. Instant signal lands first so you do not wait.
              Frontier evaluation lands second and explains exactly where the agent lost the
              human.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <Card key={step.n} hover padding="p-6" className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon name={step.icon} className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-extrabold text-slate-300 tracking-widest">
                    {step.n}
                  </div>
                </div>
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.blurb}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="relative">
            <div className="max-w-2xl">
              <SectionLabel icon="shield">Capabilities</SectionLabel>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                Task success does not mean emotional success.
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                VibeTrace Arena is an emotional regression test suite. Six capabilities, one
                loop, repeatable across every release.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((feature) => (
                <Card key={feature.title} hover>
                  <div className="w-11 h-11 rounded-xl grad-bg-soft border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                    <Icon name={feature.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.blurb}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
          <Card padding="p-10" className="text-center shadow-lift relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 grad-bg opacity-10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-400 opacity-10 rounded-full blur-3xl" />
            <p className="relative text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
              Sometimes the dangerous behavior is{' '}
              <span className="grad-text">sounding too supportive</span> at the wrong moment.
            </p>
            <p className="relative mt-4 text-sm font-semibold text-muted uppercase tracking-wider">
              Before production users find the failure, VibeTrace does.
            </p>
          </Card>
        </div>
      </section>

      {/* SPONSORS / STACK */}
      <section className="relative bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel icon="cpu" className="justify-center">
              Stack
            </SectionLabel>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              Built on the frontier voice and reasoning stack.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:bg-white hover:border-indigo-100 hover:shadow-card transition-all"
              >
                <div className="text-sm font-bold text-ink">{sponsor.name}</div>
                <div className="text-xs text-muted mt-1 leading-relaxed">{sponsor.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
          <div className="relative overflow-hidden rounded-3xl grad-bg p-10 sm:p-14 shadow-lift">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-12 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Find the exact second your voice agent lost the human.
                </h2>
                <p className="mt-3 text-indigo-100 leading-relaxed">
                  Run a drill in under two minutes. No backend setup. Realistic personas,
                  structured verdicts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <button
                  onClick={goDomain}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold shadow-lg hover:-translate-y-0.5 transition-all ring-focus"
                >
                  Start Arena Drill
                  <Icon name="arrowRight" className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={goFreeSpeech}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur text-white border border-white/30 font-bold hover:bg-white/20 transition-all ring-focus"
                >
                  Try Free Speech Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
