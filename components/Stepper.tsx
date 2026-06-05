import Icon from '@/components/Icon'

const STEPS = ['Domain', 'Pressure Test', 'Briefing', 'Drill', 'Evaluation', 'Verdict'] as const

type StepState = 'done' | 'active' | 'todo'

interface StepperProps {
  currentStep?: number
}

function getStepState(stepIndex: number, currentStep: number): StepState {
  if (stepIndex < currentStep) {
    return 'done'
  }
  if (stepIndex === currentStep) {
    return 'active'
  }
  return 'todo'
}

export default function Stepper({ currentStep = 0 }: StepperProps) {
  return (
    <div className="bg-white/70 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5">
        <ol className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-thin">
          {STEPS.map((label, stepIndex) => {
            const state = getStepState(stepIndex, currentStep)

            return (
              <li key={label} className="flex items-center gap-1 sm:gap-2 shrink-0">
                <div
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    state === 'active'
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      : state === 'done'
                        ? 'text-indigo-700'
                        : 'text-slate-500'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-bold ${
                      state === 'active'
                        ? 'grad-bg text-white'
                        : state === 'done'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {state === 'done' ? (
                      <Icon name="check" className="w-3 h-3" strokeWidth={3} />
                    ) : (
                      stepIndex + 1
                    )}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </div>
                {stepIndex < STEPS.length - 1 && (
                  <span className="w-3 sm:w-6 h-px bg-slate-200" />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
