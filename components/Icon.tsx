import type { ReactNode } from 'react'

import type { IconName } from '@/types'

interface IconProps {
  name: IconName
  className?: string
  strokeWidth?: number
}

const ICON_PATHS: Record<IconName, ReactNode> = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  chevronRight: <path d="m9 18 6-6-6-6" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </>
  ),
  shield: <path d="M20 13c0 5-3.5 7.5-8 8.5-4.5-1-8-3.5-8-8.5V6l8-3 8 3v7Z" />,
  headphones: (
    <>
      <path d="M3 14a9 9 0 1 1 18 0" />
      <path d="M21 14v3a3 3 0 0 1-3 3h-1v-7h1a3 3 0 0 1 3 3z" transform="translate(0 -3)" />
      <path d="M3 14v3a3 3 0 0 0 3 3h1v-7H6a3 3 0 0 0-3 3z" transform="translate(0 -3)" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 17.5 4 5 5 0 0 0 12 7a5 5 0 0 0-5.5-3A4.5 4.5 0 0 0 2 8.5C2 12 5 14.5 12 21c7-6.5 10-9 10-13" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  brain: (
    <path d="M12 5a3 3 0 0 0-5.4-1.8A3 3 0 0 0 3 7a3 3 0 0 0 1 5.7 3 3 0 0 0 .8 5.5 3 3 0 0 0 5.2 1.3A3 3 0 0 0 12 21V5Zm0 0a3 3 0 0 1 5.4-1.8A3 3 0 0 1 21 7a3 3 0 0 1-1 5.7 3 3 0 0 1-.8 5.5 3 3 0 0 1-5.2 1.3A3 3 0 0 1 12 21" />
  ),
  fileText: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </>
  ),
  play: <path d="m7 4 12 8-12 8V4Z" />,
  pause: (
    <>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </>
  ),
  mic: (
    <>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </>
  ),
  barChart: (
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" rx="0.5" />
      <rect x="12" y="8" width="3" height="10" rx="0.5" />
      <rect x="17" y="5" width="3" height="13" rx="0.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="m9 14-2 7 5-3 5 3-2-7" />
    </>
  ),
  messageCircle: <path d="M21 12a9 9 0 1 1-3.6-7.2L21 3l-1.2 3.6A9 9 0 0 1 21 12Z" />,
  volume2: (
    <>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </>
  ),
  alert: (
    <>
      <path d="m10.3 3.86-8 13.86A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.28l-8-13.86a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  arena: (
    <>
      <path d="M3 12c0-5 4-9 9-9s9 4 9 9" />
      <path d="M3 12c0 5 4 9 9 9s9-4 9-9" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  layers: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </>
  ),
  flag: (
    <>
      <path d="M4 21V4h12l-2 4 2 4H4" />
      <path d="M4 4v17" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
      <path d="M12 3v4" />
      <path d="M9 19v2" />
      <path d="M15 19v2" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M9 2h6" />
    </>
  ),
  sliders: (
    <>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="9" cy="6" r="2" fill="white" />
      <circle cx="15" cy="12" r="2" fill="white" />
      <circle cx="8" cy="18" r="2" fill="white" />
    </>
  ),
  cpu: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3" />
      <path d="M15 2v3" />
      <path d="M9 19v3" />
      <path d="M15 19v3" />
      <path d="M2 9h3" />
      <path d="M2 15h3" />
      <path d="M19 9h3" />
      <path d="M19 15h3" />
    </>
  ),
  waveform: (
    <>
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 8v8" />
      <path d="M18 11v2" />
      <path d="M22 12h-2" transform="translate(-1 0)" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  arrowUp: (
    <>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 5v14" />
    </>
  ),
  arrowDown: (
    <>
      <path d="m19 12-7 7-7-7" />
      <path d="M12 19V5" />
    </>
  ),
  book: (
    <>
      <path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" />
    </>
  ),
  star: <polygon points="12 2 15 9 22 9.3 17 14 18.5 21 12 17 5.5 21 7 14 2 9.3 9 9 12 2" />,
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  arrowRightCircle: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8 4 4-4 4" />
      <path d="M8 12h8" />
    </>
  ),
}

export default function Icon({
  name,
  className = 'w-5 h-5',
  strokeWidth = 1.75,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name] ?? null}
    </svg>
  )
}
