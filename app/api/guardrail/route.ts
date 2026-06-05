import { NextResponse, type NextRequest } from 'next/server'

import { getMockGuardrailResult } from '@/lib/mockResponses'
import type { GuardrailResult } from '@/types'

interface GuardrailRequest {
  scenarioId: string
  agentResponse: string
  userLine: string
}

function isGuardrailRequest(body: unknown): body is GuardrailRequest {
  if (typeof body !== 'object' || body === null) return false
  const candidate = body as Record<string, unknown>
  return (
    typeof candidate.scenarioId === 'string' &&
    typeof candidate.agentResponse === 'string' &&
    typeof candidate.userLine === 'string'
  )
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<GuardrailResult | { error: string }>> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!isGuardrailRequest(body)) {
    return NextResponse.json(
      { error: 'Missing required fields: scenarioId, agentResponse, userLine' },
      { status: 400 },
    )
  }

  try {
    const result = getMockGuardrailResult(body.scenarioId)
    return NextResponse.json(result)
  } catch (error) {
    console.error('[VibeTrace:api/guardrail]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
