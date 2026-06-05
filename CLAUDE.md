# CLAUDE.md — VibeTrace Arena

You are starting a session on VibeTrace Arena.
Read this file fully before doing anything else.
Then follow the mandatory reading order below before writing a single line of code.

---

## What this project is

VibeTrace Arena is an emotional QA and pre-production testing tool for voice agents.
It runs voice agents through difficult emotional scenarios, detects where the agent
mishandled the user, and generates repaired responses and production-readiness verdicts.
It is not a chatbot, therapy product, or TTS demo.

---

## Mandatory reading order — do not skip

Every session, in this order, before writing any code:

1. Read AGENTS.md in full (all sections). This is the technical authority for this project.
2. Read docs/PRD.md — sections 2, 6, 7, 12 (problem statement, core concept, scenarios, tech preferences).
3. Read docs/features.md — only the section for the feature you are about to build.
4. Open docs/prototype.html — locate the component or screen you are converting.

If you have not read all four, you are not ready to write code.

---

## Project file map

| What | Where |
|---|---|
| Full technical reference | AGENTS.md |
| Product requirements | docs/PRD.md |
| Feature breakdown and priorities | docs/features.md |
| HTML prototype (all screens, all components) | docs/prototype.html |
| Shared TypeScript types | types/index.ts |
| Scenario data and contracts | lib/scenarios.ts |
| Zustand store | lib/store.ts |
| Mock fallback responses | lib/mockResponses.ts |
| Claude system prompts | lib/prompts.ts |
| Environment variable validation | lib/env.ts |
| Shared UI components | components/ |
| Page routes | app/ |
| API route handlers | app/api/ |

---

## How the prototype is structured

docs/prototype.html is a single-file React app running via Babel standalone in the browser.
Every screen and shared component is defined as a named const: `const [Name] = ({...}) => {`

To locate any component, search the file for `const [ComponentName] =`

### Screen components and their Next.js targets

| Prototype component | Converts to |
|---|---|
| Landing | app/page.tsx |
| DomainScreen | app/domain/page.tsx |
| PressureScreen | app/pressure/page.tsx |
| BriefingScreen | app/briefing/page.tsx |
| DrillScreen | app/drill/page.tsx |
| EvalScreen | app/eval/page.tsx |
| RepairScreen | app/repair/page.tsx |
| VerdictScreen | app/verdict/page.tsx |
| ReportScreen | app/report/page.tsx |
| FreeSpeechScreen | app/freespeech/page.tsx |

### Shared components to extract before building any screen

These appear across multiple screens. Extract each to components/[Name].tsx once, then import everywhere.
Do not recreate them inline inside page files.

Logo, TopNav, Stepper, Card, StatusPill, VerdictBadge,
PrimaryButton, SecondaryButton, GhostButton, Icon

### Mock data locations in the prototype

| Prototype constant | Where it moves in Next.js |
|---|---|
| DOMAINS | lib/scenarios.ts |
| PRESSURE_TESTS | lib/scenarios.ts |
| SCENARIOS | lib/scenarios.ts (typed to ScenarioContract) |
| FAILURE_TYPES | lib/scenarios.ts |

### Navigation and state translation

| Prototype pattern | Next.js equivalent |
|---|---|
| go('routename') | useRouter().push('/routename') |
| useState for cross-screen state | useDrillStore() from lib/store.ts |
| useState for local UI state | useState stays as useState |
| Inline SCENARIOS['key'] access | getScenario(key) helper from lib/scenarios.ts |

---

## Session start prompts

Copy the relevant prompt below and run it at the start of each session.

### Starting a new feature

```
Read CLAUDE.md, then AGENTS.md in full, then docs/features.md.
I am starting Feature [N]: [feature name from AGENTS.md section 16].

Before writing any code:
1. List every file you will create and every file you will modify.
2. Confirm each file to be modified already exists. Do not create it if it does.
3. State any assumptions you are making before proceeding.

Then implement Feature [N] and only Feature [N].
After completing, list every file created, every file modified, and confirm
which acceptance criteria from AGENTS.md section 16 now pass.
```

### Extracting shared components from the prototype (run this first, before any screen)

```
Read CLAUDE.md and docs/prototype.html.

Extract the following shared components from docs/prototype.html
into individual files in the components/ directory:
Logo, TopNav, Stepper, Card, StatusPill, VerdictBadge,
PrimaryButton, SecondaryButton, GhostButton, Icon

For each component:
- Search docs/prototype.html for `const [Name] =` to locate it
- Create components/[Name].tsx
- Keep all Tailwind classes, animations, and visual styling exactly as in the prototype
- Add a TypeScript props interface above the component function
- Add a default export at the bottom

Do not build any page yet. Only the shared components.
After completing, list every file created.
```

### Converting a single screen from the prototype

```
Read CLAUDE.md, AGENTS.md, and docs/prototype.html.

Locate the [ComponentName] component in docs/prototype.html
by searching for `const [ComponentName] =`

Convert it to [app/route/page.tsx].

Before writing code, answer these four questions:
1. Which shared components does this screen use?
   Which already exist in components/ and which still need to be created?
2. Which Zustand store fields from lib/store.ts does this screen read and write?
3. What does each button or interactive element navigate to?
4. Which inline data references (SCENARIOS, DOMAINS, PRESSURE_TESTS)
   need to be replaced with imports from lib/scenarios.ts?

Then convert the screen following the conversion rules in CLAUDE.md.
Do not change the visual appearance or behavior of the screen.
After completing, list every file created and every file modified.
```

### Resuming mid-feature after a rate limit (switching from Cursor back to Claude Code)

```
Read CLAUDE.md and AGENTS.md in full.

I was mid-way through Feature [N]: [feature name].
Here is the current state of the relevant files:

[paste file contents here]

The following acceptance criteria from AGENTS.md section 16 are already passing:
[list what is done]

The following are still failing or incomplete:
[list what remains]

Continue from where it left off.
Do not re-implement what is already done.
Do not modify files that are already complete.
```

### Handing off to Cursor when rate limited (save this context before switching)

Before switching to Cursor, run this in your current session to generate the handoff:

```
Summarize the current state of Feature [N] for handoff to another AI coding session.
Include:
1. Every file created so far and its current contents
2. Every file modified and what changed
3. Which acceptance criteria pass and which do not yet
4. Exactly where to continue
```

Paste that summary into Cursor with: "Read AGENTS.md. Continue Feature [N] from this state: [paste]"

---

## Conversion rules for every screen

These apply every time you convert a component from docs/prototype.html to Next.js.

1. Do not change what the screen looks like. Match the prototype exactly.
2. Keep all Tailwind class names exactly as written, including custom ones like
   grad-bg, grad-text, grid-bg, blob, iso-card.
3. Keep all animation class names exactly: fade-up, soft-pulse, iso-float, live-dot.
4. Replace go('route') with useRouter().push('/route') from next/navigation.
5. Replace cross-screen state (domain, drill, transcripts, evalResult) with useDrillStore().
6. Keep local UI state (pulseVisible, lineIndex, agentSpoke) as useState.
7. Replace all SCENARIOS['key'] inline accesses with getScenario(key) from lib/scenarios.ts.
8. Replace DOMAINS and PRESSURE_TESTS inline arrays with named imports from lib/scenarios.ts.
9. The Icon component uses a paths lookup object and inline SVG — keep it exactly as-is.
10. Do not replace className strings with CSS modules or styled-components.

---

## What done looks like for any task

A task is complete when all of these are true:
- No TypeScript errors in the modified files
- No unused imports anywhere
- No dead code, no commented-out blocks
- Every acceptance criterion for the feature passes (see AGENTS.md section 16)
- Visual output matches the prototype
- Navigation to and from the screen works correctly
- A list of every created and modified file has been provided

---

## Demo emergency reset

If the demo breaks during a presentation:
Navigate to /?reset=true in the browser.
This clears the Zustand store and redirects to /domain.
