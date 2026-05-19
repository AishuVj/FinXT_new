import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    ['👥', 'Crowdsourcing Solutions', 'Scalable participant pools across 30+ countries.'],
    ['⚙️', 'Programme Management', 'Structured oversight of complex, multi-workstream programmes.'],
    ['🚚', 'Logistics & Secure Shipment', 'Reliable movement of equipment and assets across borders.'],
    ['📋', 'ATA Carnet Handling', 'Temporary import/export documentation and support.'],
    ['🏗️', 'Site Setup & Deployment', 'Testing labs and operational sites deployed with precision.'],
    ['👔', 'Staffing, Payroll & EOR', 'Skilled personnel and compliant workforce solutions.'],
    ['🔬', 'User Study & Research', 'Full-cycle research support from recruitment to insights.'],
    ['💳', 'Payment & Reward Solutions', 'Secure multi-currency rewards and reimbursements.'],
  ];

  return (
    <section className="bg-[#0D1B3E] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div >
          <p className="finxt-label mb-5">What We Deliver</p>
          <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">Eight integrated services. One trusted partner.</h2>
          <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />
          <p className="mt-8 space-y-5 text-sm leading-7 text-white/70 md:text-base">Every service is available standalone or as part of a fully managed end-to-end solution.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([icon, title, desc]) => (
            <div key={title} className="finxt-card p-7 transition hover:-translate-y-1 hover:border-[#C9A84C]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/10 text-2xl">{icon}</div>
              <h3 className="mb-3 text-lg font-bold">{title}</h3>
              <p className="text-sm leading-7 text-white/60">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-block rounded-lg bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0A0F1E]">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
