import Link from 'next/link';

export default function AboutSection() {
  const cards = [
    ['01', 'Integrated Model', 'Eight services under one roof. No vendor juggling, no communication gaps — just seamless end-to-end delivery.'],
    ['02', 'UK & European Stronghold', 'On-ground teams and established networks across Germany, France, Netherlands, Spain, Poland and the Nordics.'],
    ['03', 'Globally Scalable', 'The same delivery standard whether you are running a UK pilot or a 30-country rollout.'],
  ];

  return (
    <section className="bg-[#F4F6FB] px-6 py-20 text-[#2D3748]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="finxt-label mb-4 text-[#A07D30]">Why FinXT UK</p>
          <h2 className="finxt-heading text-4xl text-[#0A0F1E] md:text-5xl">The partner built for operational complexity.</h2>
          <p className="mt-5 text-lg leading-8">
            FinXT UK combines programme management, research operations, logistics, staffing, and reward payments into one accountable delivery partner.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(([num, title, desc]) => (
            <div key={title} className="rounded-2xl border-l-4 border-[#C9A84C] bg-white p-8 shadow-sm">
              <div className="mb-4 text-5xl font-black text-[#C9A84C]/25">{num}</div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0F1E]">{title}</h3>
              <p className="text-sm leading-7 text-[#2D3748]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-[#C9A84C] p-8 text-center text-[#0A0F1E] md:p-12">
          <h3 className="text-3xl font-extrabold">Interested in participating in a research study?</h3>
          <p className="mt-3 text-[#0D1B3E]/80">Apply for live technology research studies and get rewarded for your time.</p>
          <Link href="/live-studies-application" className="mt-7 inline-block rounded-lg bg-[#0A0F1E] px-7 py-4 text-sm font-bold text-white">
            Apply as a Participant →
          </Link>
        </div>
      </div>
    </section>
  );
}
