import Layout from '../components/Layout';
import Link from 'next/link';

export default function LiveStudies() {
  const studies = [
    {
      country: 'Leeds',
      image: '/images/gb.png',
      payment: '£100 per person',
      lang: 'en',
    },
    {
      country: 'Poland',
      image: '/images/poland.png',
      payment: '285 Polish Zloty per person',
      lang: 'pl',
    },
    {
      country: 'Spain',
      image: '/images/es.png',
      payment: '€100 per person',
      lang: 'es',
    },
    {
      country: 'USA',
      image: '/images/us.png',
      payment: '$100 per person',
      lang: 'en',
    },
    {
      country: 'Mexico',
      image: '/images/mx.png',
      payment: '1200 Pesos per person',
      lang: 'es',
    },
    {
      country: 'India',
      image: '/images/in.png',
      payment: '₹5000 per person',
      lang: 'en',
    },
  ];

  return (
    <Layout>
    <section className="relative overflow-hidden bg-[#050912] px-4 py-20 text-white md:px-6 md:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/livestudies_banner.png')",
          backgroundSize: window.innerWidth >= 768 ? '70% auto' : 'cover',
          backgroundPosition: 'right center',
        }}
      />

      {/* Dark overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050912] via-[#050912]/80 to-[#050912]/20" />
      {/* Desktop */}
        <div
          className="absolute inset-0 hidden md:block bg-no-repeat"
          style={{
            backgroundImage: "url('/images/livestudies_banner.png')",
            backgroundSize: '70% auto',
            backgroundPosition: 'right center',
          }}
        />

        {/* Mobile */}
        <div
          className="absolute inset-0 md:hidden bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/livestudies_banner.png')",
            backgroundSize: '185% auto',
            backgroundPosition: '68% center',
          }}
        />

        {/* Content */}
        

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="finxt-label mb-5 text-[#C9A84C]">
            Research Opportunities
          </p>

          <h2 className="finxt-heading max-w-4xl text-3xl leading-tight md:text-5xl">
            Live Studies
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            Participate in global user studies and research programmes. Explore
            opportunities currently available in your country.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#C9A84C]/20 bg-[#050912] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.08),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(56,111,255,0.13),transparent_30%),linear-gradient(180deg,#071126_0%,#050912_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="finxt-label mb-5 text-[#C9A84C]">
              Available Locations
            </p>

            <h2 className="text-2xl font-black leading-tight tracking-tight md:text-4xl">
              Apply for live technology research studies.
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#C9A84C]" />

            <p className="mt-8 text-sm leading-7 text-white/70 md:text-base">
              Select your location and complete the application form. Eligible
              participants are rewarded for their time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <article
                key={study.country}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/45 hover:shadow-[0_25px_80px_rgba(201,168,76,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70" />
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C9A84C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#081126]">
                  <img
                    src={study.image}
                    alt={`${study.country} flag`}
                    className="h-48 w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/70 via-transparent to-transparent" />
                </div>

                <h2 className="text-2xl font-black text-white">
                  {study.country}
                </h2>

                <p className="mt-4 text-lg font-black leading-snug text-white">
                  User study for technology applications.
                </p>

                <p className="mt-5 text-base text-white/70">
                  <span className="font-black text-[#E8C96A]">Session:</span>{' '}
                  {study.payment}
                </p>

                <Link
                  href={`/live-studies-application?country=${study.country.toLowerCase()}&lang=${study.lang}`}
                  className="mt-7 inline-flex w-fit rounded-2xl border border-[#C9A84C]/35 bg-[#C9A84C]/10 px-6 py-4 text-sm font-bold text-[#E8C96A] transition hover:-translate-y-1 hover:bg-[#C9A84C] hover:text-[#050912]"
                >
                  Apply Now →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}