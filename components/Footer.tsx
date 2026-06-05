import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <div className="text-xs text-muted">
          Emotional regression test suite for production voice agents.
        </div>
        <div className="text-xs text-muted">© VibeTrace Arena 2026</div>
      </div>
    </footer>
  )
}
