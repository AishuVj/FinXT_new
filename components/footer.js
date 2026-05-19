import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050912] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-[#1E2D50] pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4C430] text-sm font-extrabold text-black shadow-md">
                FX
              </div>

              <div className="flex items-end gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Fin<span className="text-[#F4C430]">XT</span>
                </span>

                <span className="mb-0.5 text-xs font-light tracking-wide text-[#B8BDC7]">
                  UK
                </span>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-6 text-[#A9B6D3]">
              Powering global programs with precision, speed and scale. Trusted
              by world-class enterprises across the UK, Europe, and beyond.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-[#C9A84C]/60 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#F4C430]">
                🇬🇧 London HQ
              </span>

              <span className="rounded-md border border-[#C9A84C]/60 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#F4C430]">
                🇪🇺 European Network
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:items-end lg:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#A9B6D3]">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/live-studies-application" className="hover:text-white">
                Live Studies
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </nav>

            <div className="flex flex-col gap-2 text-sm text-[#A9B6D3] sm:flex-row sm:flex-wrap sm:gap-x-5 lg:justify-end">
              <a
                href="mailto:info@finxt.uk"
                className="flex items-center gap-2 hover:text-white"
              >
                <span className="text-white/90">✉</span>
                info@finxt.uk
              </a>

              <a
                href="tel:+447837851544"
                className="flex items-center gap-2 hover:text-white"
              >
                <span className="text-white/90">☎</span>
                +44 7837 851 544
              </a>

              <span className="flex items-center gap-2">
                <span className="text-white/90">📍</span>
                London, UK
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-[#6B7FA3] lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p>© {new Date().getFullYear()} FinXT UK Ltd. All rights reserved.</p>

            <p className="mt-2 leading-5">
              FinXT UK Ltd is registered in England and Wales. FinXT UK is not a
              regulated financial institution and does not provide regulated
              financial advice or banking services. All payment services are
              managed through authorised third-party providers. Registered
              address: London, United Kingdom.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 whitespace-nowrap">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}