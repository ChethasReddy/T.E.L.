import { NextResponse, type NextRequest } from 'next/server'

import { getMockAgentResponse, type MockAgentResponse } from '@/lib/mockResponses'

interface AgentRequest {
  scenarioId: string
  lineIndex: number
  userTranscript: string
}

function isAgentRequest(body: unknown): body is AgentRequest {
  if (typeof body !== 'object' || body === null) return false
  const candidate = body as Record<string, unknown>
  return (
    typeof candidate.scenarioId === 'string' &&
    typeof candidate.lineIndex === 'number' &&
    typeof candidate.userTranscript === 'string'
  )
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<MockAgentResponse | { error: string }>> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!isAgentRequest(body)) {
    return NextResponse.json(
      { error: 'Missing required fields: scenarioId, lineIndex, userTranscript' },
      { status: 400 },
    )
  }

  try {
    const result = getMockAgentResponse(body.scenarioId)
    return NextResponse.json(result)
  } catch (error) {
    console.error('[VibeTrace:api/agent]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
