import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-extrabold grad-text">VibeTrace Arena</h1>
      <p className="text-muted max-w-md">
        Scaffold ready. The landing experience is implemented in Feature 2.
      </p>
      <Link
        href="/domain"
        className="mt-2 px-5 py-2.5 rounded-lg grad-bg text-white font-semibold shadow-card hover:shadow-card-hover transition-shadow"
      >
        Continue to domain selection
      </Link>
    </main>
  )
}
