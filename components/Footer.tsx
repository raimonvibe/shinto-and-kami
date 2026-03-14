import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-indigo text-mountain-mist">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-white">
              Shinto: The Way of the Kami
            </p>
            <p className="mt-1 text-sm opacity-90">
              A living tradition of harmony with nature and spirit.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link href="/what-is-shinto" className="text-sm hover:text-white transition-colors">
              What is Shinto?
            </Link>
            <Link href="/kami" className="text-sm hover:text-white transition-colors">
              Kami
            </Link>
            <Link href="/how-to-practice" className="text-sm hover:text-white transition-colors">
              How to Practice
            </Link>
            <Link href="/sacred-places" className="text-sm hover:text-white transition-colors">
              Sacred Places
            </Link>
            <Link href="/symbols" className="text-sm hover:text-white transition-colors">
              Symbols
            </Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-white/20 pt-8 text-center text-sm opacity-75">
          © {new Date().getFullYear()} — Educational resource on Shinto tradition.
        </p>
      </div>
    </footer>
  )
}
