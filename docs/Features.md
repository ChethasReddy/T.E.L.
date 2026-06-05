# VibeTrace Arena Feature Breakdown

**Product:** VibeTrace Arena  
**Version:** MVP 1.0  
**Purpose:** Break the MVP into buildable features and small tasks for a hackathon implementation.

---

## 1. MVP Build Strategy

The MVP should be built around one reliable core loop:

```text
Scenario selection -> Guided drill -> Agent response -> Instant guardrail -> Deep evaluation -> Repaired response text -> Production verdict -> Drill report
```

The first priority is to make the guided drill flow work for two scenarios: Frustration Drill and Sycophancy Trap. Accent & Language Stress should be included as a preview or third scenario only after the first two flows are stable.

---

## 2. Priority Levels

| Priority | Meaning |
|---|---|
| P0 | Must be completed for the demo to work |
| P1 | Important polish or useful functionality if time allows |
| P2 | Nice-to-have feature that can be added after the core demo |
| Optional | Sponsor or advanced feature that should not block the MVP |

---

## 3. Feature 1: Product Shell and Visual Identity

### Goal
Create the cinematic product container that makes VibeTrace feel like a serious simulation arena, not a generic dashboard.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 1.1 | Create app shell with dark cinematic layout | P0 | All screens share consistent navigation, background, spacing, and typography |
| 1.2 | Add product title, tagline, and core positioning | P0 | Landing clearly states “Find the exact second your voice agent lost the human” |
| 1.3 | Add main navigation states | P0 | User can move through landing, domain selection, pressure test selection, drill, report |
| 1.4 | Create reusable cards and panels | P0 | Trial cards, reports, verdicts, and guardrail panels look consistent |
| 1.5 | Add cinematic failure styling | P1 | Failure state feels dramatic but not childish |
| 1.6 | Add sponsor usage strip or subtle footer | P2 | Sponsors are visible without making the UI look like an ad |

---

## 4. Feature 2: Landing Page

### Goal
Explain the product in under 30 seconds.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 2.1 | Add hero headline | P0 | “Voice agents pass demos. They fail humans.” is visible |
| 2.2 | Add subheading | P0 | User understands VibeTrace drills agents against frustration, sycophancy, and accent/language stress |
| 2.3 | Add primary CTA | P0 | “Start Arena Drill” begins the main flow |
| 2.4 | Add secondary CTA | P1 | “View Demo Scenarios” moves to scenario overview |
| 2.5 | Add threat labels | P1 | UI shows Frustration, Sycophancy, Accent Stress, Wrong Tone, Missed Handoff |

---

## 5. Feature 3: Business Domain Selection

### Goal
Let the user choose what type of voice agent they are testing.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 3.1 | Create Support Agent card | P0 | Card includes refunds, billing, account issues, complaints, escalations |
| 3.2 | Create Healthcare Agent card | P0 | Card includes appointment scheduling, intake, patient confusion, sensitive moments |
| 3.3 | Store selected domain in app state | P0 | Later screens show the selected domain |
| 3.4 | Add recommended demo path indicator | P1 | Support Agent can be marked as recommended for the live demo |

---

## 6. Feature 4: Pressure Test Selection

### Goal
Let the user select which emotional pressure to test.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 4.1 | Create Frustration Drill card | P0 | Card explains empathy mismatch and procedural coldness |
| 4.2 | Create Sycophancy Trap card | P0 | Card explains harmful validation and over-agreement |
| 4.3 | Create Accent & Language Stress card | P0 | Card explains multilingual comprehension and accent handling |
| 4.4 | Store selected pressure test | P0 | Drill Briefing receives selected pressure test |
| 4.5 | Add difficulty labels | P1 | Each card has difficulty and expected failure type |
| 4.6 | Add “Start Recommended Demo” | P1 | Recommended demo launches Support + Frustration first |

---

## 7. Feature 5: Scenario Contracts

### Goal
Define what good behavior looks like for each drill.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 5.1 | Create Frustration Drill contract | P0 | Includes user state, expected mode, should/should-not behavior |
| 5.2 | Create Sycophancy Trap contract | P0 | Includes warm-but-bounded expected behavior |
| 5.3 | Create Accent & Language Stress contract | P0 | Includes patient clarification and no accent-as-anger assumptions |
| 5.4 | Map contract to UI briefing | P0 | Drill Briefing displays selected contract |
| 5.5 | Map contract to evaluator input | P0 | Deep evaluator receives contract context |
| 5.6 | Add failure-type mapping | P0 | Each contract maps to likely failure types |
| 5.7 | Add expected mode labels | P1 | Expected mode appears throughout drill and report |

---

## 8. Feature 6: Drill Briefing Screen

### Goal
Prepare the tester before the scenario begins.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 6.1 | Show selected domain and pressure test | P0 | User always knows what scenario is running |
| 6.2 | Show user persona | P0 | Persona explains who the tester is pretending to be |
| 6.3 | Show expected agent mode | P0 | Example: Empathy + ownership, Warm but bounded |
| 6.4 | Show failure to watch for | P0 | User sees the emotional failure being tested |
| 6.5 | Show scripted user lines | P0 | User can read exact lines during the demo |
| 6.6 | Add Begin Drill button | P0 | Button launches Live Drill screen |
| 6.7 | Add Preview Expected Failure | P1 | User can view a sample bad response before starting |

---

## 9. Feature 7: Live Agent vs User Drill

### Goal
Run the actual test in a clear two-sided layout.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 7.1 | Create Agent Under Test panel | P0 | Shows agent name, status, transcript/current response |
| 7.2 | Create Human Tester panel | P0 | Shows persona, emotional target, scripted lines |
| 7.3 | Create conversation feed | P0 | Shows user and agent turns clearly |
| 7.4 | Add Start Drill button | P0 | Starts the guided scenario |
| 7.5 | Add Next Line button | P0 | Advances through scripted user lines |
| 7.6 | Add Trigger Agent Response button | P0 | Lets tester trigger or simulate agent response |
| 7.7 | Add Switch to Free Speech button | P1 | Moves to Free Speech Stress Test |
| 7.8 | Add End Drill button | P1 | Ends current drill and moves to report or verdict |
| 7.9 | Add live status labels | P1 | Agent states include Listening, Responding, Evaluating, Failed |

---

## 10. Feature 8: Voice Agent Under Test

### Goal
Connect or simulate the production-style agent being tested.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 8.1 | Define demo agent behavior | P0 | Agent can produce controlled bad responses for required scenarios |
| 8.2 | Display agent response text | P0 | Response appears in conversation feed |
| 8.3 | Support live or simulated agent mode | P0 | Demo can work even if live voice is unreliable |
| 8.4 | Integrate ElevenLabs voice agent if stable | P1 | Voice agent can respond during drill |
| 8.5 | Add fallback scripted response mode | P0 | If voice agent fails, demo can continue with prewritten responses |
| 8.6 | Label agent as “Agent Under Test” | P0 | Users understand this is the evaluated production-style agent |

---

## 11. Feature 9: Instant Guardrail Pulse

### Goal
Show immediate failure risk without waiting for the frontier evaluator.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 9.1 | Create inline guardrail panel | P0 | Warning appears below risky agent response, not as a popup |
| 9.2 | Add Frustration Drill guardrail | P0 | Flags procedural response before emotional acknowledgment |
| 9.3 | Add Sycophancy Trap guardrail | P0 | Flags agreement with harmful behavior |
| 9.4 | Add Accent & Language guardrail | P1 | Flags likely intent mismatch or failed clarification |
| 9.5 | Use cautious wording | P0 | Uses Potential/Likely Failure, not Confirmed |
| 9.6 | Add “Deep evaluation running” status | P0 | User sees deeper evaluator is processing |
| 9.7 | Add confidence label | P1 | Shows Watch, Potential Failure, or Likely Failure |

---

## 12. Feature 10: Frontier Evaluation Layer

### Goal
Produce the detailed diagnosis and repaired response.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 10.1 | Prepare evaluator input format | P0 | Input includes scenario contract, recent exchange, expected mode, user state, agent response |
| 10.2 | Request pass/fail judgment | P0 | Evaluator returns whether the agent failed |
| 10.3 | Classify failure type | P0 | Failure type maps to taxonomy |
| 10.4 | Identify failed sentence | P0 | UI can show exact sentence that failed |
| 10.5 | Explain why it failed | P0 | Explanation is human-readable and scenario-specific |
| 10.6 | Compare expected mode vs actual mode | P0 | Report shows mismatch clearly |
| 10.7 | Generate repaired response text | P0 | Repaired response is specific and useful |
| 10.8 | Assign production-readiness verdict | P0 | Verdict is Safe, Needs Review, Not Safe, Blocked, or Handoff Required |
| 10.9 | Add fallback mock evaluation | P0 | Demo still works if API is slow or unavailable |

---

## 13. Feature 11: Deep Evaluation Report Screen

### Goal
Show confirmed failure diagnosis clearly.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 11.1 | Create report layout | P0 | Report includes all required fields |
| 11.2 | Show failure type | P0 | Example: Empathy Mismatch, Sycophantic Validation |
| 11.3 | Show failed sentence | P0 | Exact agent sentence is highlighted |
| 11.4 | Show expected mode | P0 | Expected emotional strategy is visible |
| 11.5 | Show actual mode | P0 | Agent’s actual behavior is summarized |
| 11.6 | Show reason | P0 | Explanation is clear and specific |
| 11.7 | Show risk | P1 | Risk communicates likely user/business impact |
| 11.8 | Add Show Repaired Response button | P0 | Leads to Repaired Response screen |
| 11.9 | Add Mark as Regression Case button | P1 | Saves or visually marks the failure |

---

## 14. Feature 12: Repaired Response Screen

### Goal
Show what the agent should have said.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 12.1 | Show original response | P0 | Original failed agent response is visible |
| 12.2 | Show why it failed | P0 | Short explanation remains visible |
| 12.3 | Show repaired response text | P0 | Repaired response is the default output |
| 12.4 | Show expected response mode badge | P0 | Example: Warm but bounded |
| 12.5 | Add optional Play Repaired Voice button | Optional | Button can be hidden or disabled if not implemented |
| 12.6 | Add Compare with Original toggle | P1 | User can compare original and repaired text side-by-side |

---

## 15. Feature 13: Production Readiness Verdict

### Goal
Make the product feel like a real pre-production QA system.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 13.1 | Create verdict screen | P0 | Screen gives clear final verdict |
| 13.2 | Support verdict categories | P0 | Safe to Ship, Needs Review, Not Safe to Ship, Blocked, Human Handoff Required |
| 13.3 | Show reason | P0 | Verdict explains why the agent passed or failed |
| 13.4 | Show required fix | P0 | User sees what must change before shipping |
| 13.5 | Add Run Next Drill button | P0 | User can continue demo flow |
| 13.6 | Add Save Failure button | P1 | Failure can be saved if memory is implemented |
| 13.7 | Add View Drill Report button | P0 | Leads to summary report |

---

## 16. Feature 14: Drill Report and Scorecard

### Goal
Summarize the outcome of a completed drill.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 14.1 | Create Drill Report screen | P0 | Summarizes scenario, agent response, failure, repair, verdict |
| 14.2 | Add scorecard | P1 | Shows Intent Understanding, Emotion Recognition, Response Mode Match, Safety Judgment, Tone Fit |
| 14.3 | Add overall status | P0 | Shows Passed, Failed, Needs Review, or Blocked |
| 14.4 | Add Export Report button | P1 | Can export or copy report text |
| 14.5 | Add Try Free Speech Mode button | P1 | Moves to bonus testing flow |
| 14.6 | Add Return to Arena button | P0 | Returns to pressure test selection or home |

---

## 17. Feature 15: Free Speech Stress Test

### Goal
Let users test open-ended interactions after the guided demo works.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 15.1 | Create Free Speech screen | P1 | User can enter or speak free-form text |
| 15.2 | Evaluate latest turn | P1 | System can run guardrail + deep evaluation on latest exchange |
| 15.3 | Support emotional mismatch detection | P1 | Can flag adaptation mismatch or unsafe validation |
| 15.4 | Support accent/language notes | P2 | User can mark language/accent context manually if needed |
| 15.5 | Generate repaired response | P1 | Free-speech mode returns repair text |
| 15.6 | Return to Guided Drills | P0 | User can exit bonus mode safely |

---

## 18. Feature 16: Optional Emotional Memory / Redis

### Goal
Save failures and retrieve similar patterns if time allows.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 16.1 | Create visual Emotional Memory panel | Optional | UI shows saved failures and similar cases |
| 16.2 | Save failure reports | Optional | Failure type, scenario, failed sentence, repair, verdict can be saved |
| 16.3 | Show similar failures | Optional | User sees previous related failures |
| 16.4 | Add regression case list | Optional | Marked failures appear in a regression list |
| 16.5 | Add Redis-backed storage | Optional | Memory can use Redis if time allows |

---

## 19. Feature 17: Optional Repaired Voice Playback

### Goal
Make the repaired response audible if time allows, without making it a demo dependency.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 17.1 | Add Play Repaired Voice button | Optional | Button appears on repaired response screen |
| 17.2 | Generate repaired voice through ElevenLabs | Optional | Audio plays if integration is implemented |
| 17.3 | Add fallback disabled state | P1 | If not implemented, UI labels it optional/not enabled |
| 17.4 | Ensure product is not positioned as TTS demo | P0 | Main value remains evaluation and verdict |

---

## 20. Feature 18: Optional Tavus Visual Layer

### Goal
Add a human-like visual layer only after the core MVP works.

| ID | Task | Priority | Acceptance Criteria |
|---|---|---:|---|
| 18.1 | Add avatar/video placeholder | P2 | UI can visually represent a video agent |
| 18.2 | Add Tavus integration or demo recording | Optional | One scenario can include video if stable |
| 18.3 | Use Tavus only for sycophancy wow moment | Optional | Video highlights how warm validation can feel more persuasive |
| 18.4 | Maintain fallback audio/text flow | P0 | Core demo works without Tavus |

---

## 21. Demo Data Requirements

### Required Demo Scripts

| Scenario | User Line | Bad Agent Response | Expected Failure |
|---|---|---|---|
| Support + Frustration | “I’ve already called twice...” | “Please provide your account number.” | Empathy Mismatch |
| Support + Sycophancy | “I told my teammate they were useless...” | “Sometimes people need to hear the truth.” | Sycophantic Validation |
| Accent/Language Preview | User wants to reschedule | “I can cancel your appointment.” | Accent Comprehension Failure |

### Required Repaired Responses

| Scenario | Repaired Response |
|---|---|
| Frustration Drill | “I get why you’re frustrated. You should not have to explain this again...” |
| Sycophancy Trap | “I get why you were frustrated, but calling them useless probably made the situation worse...” |
| Accent/Language Stress | “I want to make sure I understood correctly. Are you trying to reschedule...” |

---

## 22. MVP Build Order

### Phase 1: Core Screens

1. Landing page.
2. Business domain selection.
3. Pressure test selection.
4. Drill briefing.
5. Live drill screen.

### Phase 2: Failure Loop

1. Instant Guardrail Pulse.
2. Deep Evaluation Report.
3. Repaired Response screen.
4. Production Readiness Verdict.
5. Drill Report.

### Phase 3: Demo Scenarios

1. Frustration Drill.
2. Sycophancy Trap.
3. Accent & Language Stress preview.

### Phase 4: Reliability and Fallbacks

1. Mock evaluator fallback.
2. Scripted agent response fallback.
3. Loading states.
4. Error states.
5. Demo reset button.

### Phase 5: Polish

1. Cinematic failure animation.
2. Scorecard visuals.
3. Export report.
4. Optional Free Speech Stress Test.
5. Optional voice replay.
6. Optional memory panel.

---

## 23. Acceptance Criteria for MVP Completion

The MVP is complete when:

1. A user can start from the landing page and complete a full Frustration Drill.
2. The agent response can be displayed reliably.
3. Instant Guardrail Pulse appears for the scripted failure.
4. Deep Evaluation Report appears with failure type, failed sentence, reason, expected/actual mode, repaired response, and verdict.
5. The user can run the Sycophancy Trap and receive a Blocked verdict.
6. Accent & Language Stress is available as a preview or third drill.
7. Repaired response is shown as text by default.
8. Repaired voice playback is not required for demo success.
9. The final report makes the product feel like emotional pre-production QA.
10. The demo can be completed even if optional integrations fail.

---

## 24. Team Task Split Suggestion

| Role | Main Ownership |
|---|---|
| Product/Design | Screen flow, UX copy, visual identity, demo script |
| Frontend Builder | App shell, screens, state flow, report UI, animations |
| Voice/Agent Builder | Agent under test, response capture, scripted fallback |
| Evaluation Builder | Scenario contracts, instant guardrail layer, frontier evaluator prompt/output |
| Demo Lead | Scenario rehearsal, judging pitch, fallback plan, final flow timing |

---

## 25. Final Scope Recommendation

For the hackathon, ship this exact scope first:

1. Landing page.
2. 2 x 3 scenario matrix.
3. Guided drill for Support + Frustration.
4. Guided drill for Support + Sycophancy.
5. Accent & Language Stress preview.
6. Instant Guardrail Pulse.
7. Frontier Evaluation Report.
8. Repaired response text.
9. Production Readiness Verdict.
10. Drill Report.

Only add Redis, Tavus, repaired voice playback, or full free-speech testing after this core loop is stable.
