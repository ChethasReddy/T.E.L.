import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import StoreHydrator from '@/components/StoreHydrator'

import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VibeTrace Arena — Emotional QA for Voice Agents',
  description: 'Pre-production emotional drill arena for voice agents.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">
        <StoreHydrator />
        {children}
      </body>
    </html>
  )
}
