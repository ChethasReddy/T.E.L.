import { NextResponse, type NextRequest } from 'next/server'

import { getMockEvalResult } from '@/lib/mockResponses'
import type { EvalResult, TranscriptEntry } from '@/types'

interface EvaluateRequest {
  scenarioId: string
  agentResponse: string
  userLine: string
  conversationHistory: TranscriptEntry[]
}

function isEvaluateRequest(body: unknown): body is EvaluateRequest {
  if (typeof body !== 'object' || body === null) return false
  const candidate = body as Record<string, unknown>
  return (
    typeof candidate.scenarioId === 'string' &&
    typeof candidate.agentResponse === 'string' &&
    typeof candidate.userLine === 'string' &&
    Array.isArray(candidate.conversationHistory)
  )
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<EvalResult | { error: string }>> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!isEvaluateRequest(body)) {
    return NextResponse.json(
      {
        error:
          'Missing required fields: scenarioId, agentResponse, userLine, conversationHistory',
      },
      { status: 400 },
    )
  }

  try {
    const result = getMockEvalResult(body.scenarioId)
    return NextResponse.json(result)
  } catch (error) {
    console.error('[VibeTrace:api/evaluate]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
