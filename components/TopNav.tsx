import Link from 'next/link'

import Icon from '@/components/Icon'
import Logo from '@/components/Logo'
import PrimaryButton from '@/components/PrimaryButton'

const NAV_ITEMS = [
  { id: 'product', label: 'Product' },
  { id: 'scenarios', label: 'Scenarios' },
  { id: 'reports', label: 'Reports' },
  { id: 'memory', label: 'Memory' },
] as const

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="ring-focus rounded-lg" aria-label="VibeTrace Arena home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-ink hover:bg-slate-50 rounded-lg ring-focus transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-live-dot" />
            Eval mode
          </span>
          <PrimaryButton size="sm" href="/domain">
            Start Drill
            <Icon name="arrowRight" className="w-4 h-4 ml-1.5" />
          </PrimaryButton>
        </div>
      </div>
    </header>
  )
}
