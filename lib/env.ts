interface EnvConfig {
  anthropicApiKey: string | null
  elevenLabsApiKey: string | null
  agentIdCold: string | null
  agentIdAgreeable: string | null
  demoMode: boolean
  mockMode: boolean
}

const SERVER_REQUIRED = [
  'ANTHROPIC_API_KEY',
  'ELEVENLABS_API_KEY',
  'ELEVENLABS_AGENT_ID_COLD',
  'ELEVENLABS_AGENT_ID_AGREEABLE',
] as const

function loadEnv(): EnvConfig {
  const isServer = typeof window === 'undefined'
  const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

  const read = (key: string): string | null => {
    const value = process.env[key]
    return value && value.length > 0 ? value : null
  }

  const config: EnvConfig = {
    anthropicApiKey: read('ANTHROPIC_API_KEY'),
    elevenLabsApiKey: read('ELEVENLABS_API_KEY'),
    agentIdCold: read('ELEVENLABS_AGENT_ID_COLD'),
    agentIdAgreeable: read('ELEVENLABS_AGENT_ID_AGREEABLE'),
    demoMode,
    mockMode: false,
  }

  if (isServer) {
    const missing = SERVER_REQUIRED.filter((key) => !process.env[key])
    if (missing.length > 0) {
      console.warn(
        `[VibeTrace:env] Missing env vars, mock mode enabled: ${missing.join(', ')}`,
      )
    }
    config.mockMode = demoMode || missing.length > 0
  } else {
    config.mockMode = demoMode
  }

  return config
}

export const env = loadEnv()
