import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <section className="grid grid-cols-2 border-y border-[#1E2D50] bg-[#0D1B3E] md:grid-cols-4">
        {[
          ['8', 'Service Verticals'],
          ['30+', 'Countries Reached'],
          ['100%', 'Client Retention'],
          ['5+', 'Years of Expertise'],
        ].map(([num, label]) => (
          <div key={label} className="border-[#1E2D50] p-8 text-center md:border-r">
            <div className="text-4xl font-black tracking-tight text-[#C9A84C] md:text-5xl">{num}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#6B7FA3]">{label}</div>
          </div>
        ))}
      </section>
      <ServicesSection />
      <AboutSection />
    </Layout>
  );
}
