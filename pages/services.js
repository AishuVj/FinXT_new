import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      icon: '👥',
      title: 'Crowdsourcing Solutions',
      text: 'Access to a vetted, diverse pool of participants across 30+ countries. We handle end-to-end recruitment, screening, scheduling, and coordination — delivering the right people, at the right time, anywhere in the world.',
      points: [
        'Geo-targeted participant recruitment',
        'Demographic and linguistic profiling',
        'GDPR-compliant data handling',
        'Rapid mobilisation — 50 to 5,000+ participants',
        'Multi-lingual support across European markets',
        'Fully managed or component-based delivery',
      ],
    },
    {
      icon: '⚙️',
      title: 'Programme Management',
      text: 'Structured, outcome-focused oversight of complex multi-workstream programmes. Our experienced PMs bring discipline, rigour, and real-world cross-sector experience to every engagement.',
      points: [
        'Governance frameworks and RAID management',
        'Budget tracking and financial reporting',
        'Stakeholder communication plans',
        'Agile and waterfall delivery methodologies',
        'Vendor and partner coordination',
        'Executive dashboards and KPI reporting',
      ],
    },
    {
      icon: '🚚',
      title: 'Logistics & Secure Shipment',
      text: 'Reliable transport of equipment and sensitive assets across the UK, Europe, and beyond — with full chain-of-custody, bonded warehousing, and complete insurance.',
      points: [
        'Same-day, next-day and scheduled freight',
        'High-value and sensitive asset handling',
        'Bonded warehouse and secure storage',
        'Full tracking and audit trail',
        'White-glove delivery for research equipment',
        'Cross-border customs clearance support',
      ],
    },
    {
      icon: '📋',
      title: 'ATA Carnet Handling',
      text: 'Simplify international temporary import/export with expert carnet management — reducing delays, duties, and administrative burden across 87+ signatory countries.',
      points: [
        'Carnet preparation and documentation',
        'Customs authority liaison',
        'Trade show, production, and research applications',
        'Cross-border equipment loans',
        'Post-event re-exportation management',
        'Compliance with international carnet standards',
      ],
    },
    {
      icon: '🏗️',
      title: 'Site Setup & Deployment',
      text: 'From site survey to teardown — we deploy operational sites, testing labs, and pop-up research environments with speed and precision across multiple locations simultaneously.',
      points: [
        'End-to-end site survey and logistics planning',
        'IT infrastructure and network configuration',
        'Equipment provisioning and staging',
        'Multi-site parallel deployments',
        'On-site technical support during operations',
        'Post-project teardown and asset return',
      ],
    },
    {
      icon: '👔',
      title: 'Staffing Solutions, Payroll & EOR',
      text: 'Flexible workforce solutions — from skilled project personnel to full Employer of Record and payroll management services across UK and EU markets.',
      points: [
        'Technical, operational, and research staffing',
        'Short-term project and long-term embedded teams',
        'Employer of Record — hire without a local entity',
        'Payroll management across multiple countries',
        'Rapid onboarding with full compliance',
        'Benefits, contracts, and tax management',
      ],
    },
    {
      icon: '🔬',
      title: 'User Study & Research Support',
      text: 'Full-cycle facilitation of user research — from participant recruitment through moderated sessions to actionable insights delivery, in multiple languages and markets.',
      points: [
        'Participant recruitment',
        'Screener design and qualification',
        'Moderated and unmoderated session support',
        'Data collection and analysis',
        'Multi-lingual and multi-country research',
        'Professional participant coordination',
      ],
    },
    {
      icon: '💳',
      title: 'Payment & Reward Solutions',
      text: 'Secure, compliant, and cost-effective payment systems managing rewards, reimbursements, and vendor payments across multiple countries and currencies — with a 100% success rate.',
      points: [
        'Participant reward distribution',
        'Multi-currency payment processing',
        'Vendor payment management',
        'Research study reimbursements',
        'Compliant with payment regulations',
        'Full audit trail and reporting',
      ],
    },
  ];

  return (
    <Layout>
      <section className="bg-[linear-gradient(135deg,#050912,#0A0F1E,#0D1B3E)] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="finxt-label mb-5">Our Services</p>

          <h1 className="finxt-heading max-w-4xl text-3xl md:text-5xl leading-tight">
            End-to-End Operational Excellence Across{' '}
            <span className="text-[#C9A84C]">8 Domains</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            All services are available standalone or as a fully integrated
            managed solution — one partner, total delivery.
          </p>
        </div>
      </section>

      <section className="bg-[#0D1B3E] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl space-y-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-[#162444] p-6 shadow-xl md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A84C]/30 bg-white/10 text-3xl">
                  {service.icon}
                </div>

                <div>
                  

                  <h2 className="mb-3 text-xl font-semibold tracking-tight md:text-2xl">
                    {service.title}
                  </h2>

                  <p className="max-w-5xl text-sm md:text-base leading-7 text-white/70">
                    {service.text}
                  </p>

                  <ul className="mt-7 divide-y divide-white/10 text-[14px]text-white/75">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 py-3">
                        <span className="font-bold text-[#C9A84C]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F6FB] px-6 py-20 text-center text-[#0A0F1E]">
        <h2 className="text-2xl font-black tracking-tight md:text-4xl">
          Ready to Discuss Your Requirements?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#2D3748]">
          Our team will build a bespoke proposal tailored to your programme
          needs.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
        >
          Request a Proposal →
        </a>
      </section>
    </Layout>
  );
}