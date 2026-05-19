import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-[#F7F7F4] px-6 py-20 text-[#1E2430] md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-[#151922] md:text-6xl">Contact form</h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4A5568]">
              If you have any questions regarding our studies please fill in the form provided and we will be happy to help.
            </p>
            <p className="mt-2 text-sm font-semibold italic text-[#C70039]">
              Fields marked with an asterisk (*) are required.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            netlify-honeypot="bot-field"
            className="space-y-7"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-base font-extrabold text-[#202633]">First name *</label>
                <input id="firstName" type="text" name="firstName" className="contact-clean-input" required />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-base font-extrabold text-[#202633]">Last name *</label>
                <input id="lastName" type="text" name="lastName" className="contact-clean-input" required />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-base font-extrabold text-[#202633]">Email *</label>
                <input id="email" type="email" name="email" className="contact-clean-input" required />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-base font-extrabold text-[#202633]">Phone number</label>
                <input id="phone" type="tel" name="phone" className="contact-clean-input" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-base font-extrabold text-[#202633]">How can we help?</label>
              <textarea id="message" name="message" rows={4} className="contact-clean-input min-h-[86px] resize-y" />
            </div>

            <div data-netlify-recaptcha="true" />

            <button type="submit" className="mt-7 rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] hover:bg-[#E8C96A]">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
