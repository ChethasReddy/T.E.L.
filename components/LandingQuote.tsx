import Card from '@/components/Card'

export default function LandingQuote() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <Card padding="p-10" className="text-center shadow-lift relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 grad-bg opacity-10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-violet-400 opacity-10 rounded-full blur-3xl" />
          <p className="relative text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
            Sometimes the dangerous behavior is{' '}
            <span className="grad-text">sounding too supportive</span> at the wrong moment.
          </p>
          <p className="relative mt-4 text-sm font-semibold text-muted uppercase tracking-wider">
            Before production users find the failure, VibeTrace does.
          </p>
        </Card>
      </div>
    </section>
  )
}
