import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,.18),transparent_35%),linear-gradient(135deg,#050912_0%,#0A0F1E_50%,#0D1B3E_100%)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="finxt-label mb-5">Trusted by Global Enterprises</p>
        <h1 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
          Powering Global Programs with <span className="text-[#C9A84C]">Precision, Speed</span> and <span className="text-[#C9A84C]">Scale</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"> 
          FinXT UK is the integrated delivery partner for organisations running complex, multi-country operations — from logistics and staffing to research and payments.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="rounded-lg bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]">
            Explore Our Services →
          </Link>
          <Link href="/contact" className="rounded-lg border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
            Schedule a Call
          </Link>
        </div>
        <div className="mt-14 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm text-white/60">
          {['Operational in UK & Europe', 'Trusted by Global Enterprises', '30+ Countries', '100% Client Retention'].map((item) => (
            <span key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
