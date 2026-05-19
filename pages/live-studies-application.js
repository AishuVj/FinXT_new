import Layout from '../components/Layout';

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] placeholder:text-gray-500 outline-none transition focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20';

const labelClass =
  'mb-1 block text-[15px] font-semibold text-[#0A0F1E]';

const helpClass = 'text-[13px] text-gray-500 mb-2';

function TextInput({
  label,
  help,
  name,
  type = 'text',
  placeholder,
  required = false,
  width = 'full',
}) {
  return (
    <div className={`mb-7 ${width === 'small' ? 'max-w-xs' : 'max-w-xl'}`}>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>

      {help && <p className={helpClass}>{help}</p>}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}
function RadioGroup({ label, help, name, options, required = false }) {
  return (
    <div className="mb-8">
      <p className={labelClass}>{label}</p>

      {help && <p className={helpClass}>{help}</p>}

      <div className="space-y-2 max-w-xs">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3  border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] cursor-pointer hover:border-[#C9A84C] rounded-md transition"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="h-4 w-4 accent-black"
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Checkbox({ name, value, children, required = false }) {
  return (
    <label className="flex items-start gap-4 text-[16px] leading-7 text-[#0A0F1E] mb-4">
      <input type="checkbox" name={name} value={value} required={required} className="mt-1 h-5 w-5 accent-black" />
      <span>{children}</span>
    </label>
  );
}

export default function LiveStudiesApplicationPage() {
  return (
    <Layout>
      <section className="bg-[#0D1B3E] py-12 px-4">
      <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-[#F4F6FB] p-7 shadow-2xl md:p-12">
          <div className="border border-gray-300 p-6 md:p-10 mb-7">
            <p className="mb-3 flex items-center gap-2 text-lg font-bold text-[#0A0F1E]">
            <span>📍</span>
            <span>Leeds, United Kingdom</span>
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A0F1E] mb-6">User study for technology applications</h1>

            <div className="space-y-6 text-[16px] leading-7 text-[#0A0F1E]">
              <div>
                <p><strong>Duration 90 minutes</strong> (estimated) per visit</p>
                <p>Sibling Participants: £120 per person</p>
                <p>Individual Participants: £75per person</p>
              </div>
              
            </div>
          </div>

          <form
            name="live-studies-application"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/Thankyou"
          >
            <input type="hidden" name="form-name" value="live-studies-application" />
            <p className="hidden">
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <h2 className="mb-4 text-2xl font-black tracking-tigh text-[#0A0F1E] md:text-4xl"></h2>
            <p className="text-[17px] mb-7  text-[#0A0F1E]">This is an inclusive study. All genders and races are encouraged to participate. Must be 16+ to participate.</p>

            <TextInput label="Your first name" help="Enter your first name as it appears on your ID" name="first_name" placeholder="Enter your first name" required />
            <TextInput label="Your last name" help="Enter your last name as it appears on your ID" name="last_name" placeholder="Enter your last name" required />
            <TextInput label="Your email address" name="email" type="email" placeholder="Enter your email" required />
            <TextInput label="Your phone number" help="Enter your mobile or home number" name="phone" type="tel" placeholder="Enter the best number to reach you on" required />

            <RadioGroup label="What is your gender" help="Please select the gender you identify with" name="gender" options={['Female', 'Male', 'Non-binay/Prefer to self describe','Prefer not to say']} required />

            <div className="mb-7 max-w-xs">
              <label className={labelClass} htmlFor="ethnicity">Cultural Ethnicity</label>
              <p className={helpClass}>What cultural ethnicity do you identify as? This is NOT your nationality. Please select your family&apos;s heritage.</p>
              <select id="ethnicity" name="ethnicity" required className={fieldClass} defaultValue="">
                <option value="" disabled>Select your ethnicity...</option>
                <option>Asian / Asian British</option>
                <option>Black / African / Caribbean</option>
                <option>Indian</option>
                <option>Mixed / Multiple ethnic groups</option>
                <option>White</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div className="mb-7">
            <p className={labelClass}>
              What would you classify your skin tone as?
            </p>

            <p className={helpClass}>
              Please select from the Fitzpatrick scale below
            </p>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/fitzpatrick-scale-description.jpg"
                alt="Fitzpatrick Scale"
                className="w-full max-w-md md:max-w-lg rounded-lg object-contain"
              />
            </div>

            <div className="space-y-2 max-w-xs">
              {['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6'].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#0A0F1E] cursor-pointer hover:border-[#C9A84C] transition"
                >
                  <input
                    type="radio"
                    name="skin_tone"
                    value={type}
                    required
                    className="h-4 w-4 accent-black"
                  />

                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

            <TextInput label="What is your birth year?" name="birth_year" type="number" placeholder="eg. 1980" width="small" required />
            <RadioGroup label="Your age" help="In which age range do you fit into?" name="age_range" options={['15 - 34', '35 - 49', '50 - 64', '65+']} required />

            <RadioGroup label="Do you have a sibling of the same gender that can attend the study with you?" help="If you are male and have a brother, or if you are female and have a sister, let us know. Each sibling will receive ₹5000 if they complete the user study." name="same_gender_sibling" options={['Yes', 'No']} required />

            <RadioGroup label="Do you have a family member within 20 years of your age who could also participate in this study?" help="If they join, they will receive the same payment amount as a same-gender sibling would in this study." name="family_member_20_years" options={['Yes', 'No']} required />
            <RadioGroup
                label="Do you wear makeup day-to-day?"
                name="makeup_day_to_day"
                options={[
                  "No — I don't wear makeup",
                  'Yes — Light or everyday makeup',
                  'Yes — Heavy or going-out makeup',
                ]}
                required
              />

              <RadioGroup
                label="Do you wear prescription glasses day-to-day?"
                name="wear_glasses"
                options={['Yes', 'No']}
                required
              />

            

            <TextInput label="Your Employer" name="employer" placeholder="Please enter the name of who you work for" />
            <TextInput label="Your Occupation" name="occupation" placeholder="Please enter your occupation" />
            <TextInput label="Were you given a referral code to enter? If so, please enter below" name="referral_code" width="small" placeholder="" />

            <RadioGroup label="Have you participated in a study with Tech Research Studies in the past?" name="participated_before" options={['Yes', 'No']} required />
            <RadioGroup label="How do you prefer to be contacted? (Select one)" name="preferred_contact" options={['Call', 'Email', 'WhatsApp', 'SMS']} required />

            <div className="mb-7">
              <p className={labelClass}>Opt into future studies</p>
              <p className={helpClass}>If you would like us to contact you about future studies in your area, tick the box below.</p>
              <Checkbox name="future_studies_opt_in" value="Yes"> Yes - I would like to be contacted about participating in future studies</Checkbox>
            </div>

            <div className="mb-7">
              <p className="text-2xl font-bold mb-4 text-[#0A0F1E]">Study Terms — please read carefully:</p>
              <ul className="list-disc pl-8 text-[16px] leading-7 mb-6 text-[#0A0F1E]">
                <li>I confirm that I have NOT recently had neck injury, or suffer from arthritis, neck stiffness, or any other condition that causes discomfort when rotating my head.</li>
                <li>If I wear prescription glasses, I will bring them to the user testing.</li>
                <li>I am willing to show my entire face.</li>
                <li>I understand that if I have special headwear, e.g. a hijab, I may wear it during the study.</li>
                <li>I confirm I am not under the age of 16.</li>
                <li>I understand that completing this form does not guarantee eligibility — only those who qualify will be contacted to proceed.</li>
                <li>I confirm that my name and age exactly match those on my valid photo ID, driving licence, or passport. Nicknames are not accepted.</li>
                <li>I understand that only booked participants will be admitted to the study site, and spaces are limited.</li>
                <li>I have read and agree to FinXT UK's Privacy Policy and Terms & Conditions.</li>
              </ul>

              <p className="text-2xl font-bold mb-4 text-[#0A0F1E]">Health & Safety Declaration</p>
              <ul className="list-disc pl-8 text-[16px] leading-7 mb-6 text-[#0A0F1E]">
                <li>I confirm that I do not have any acute or chronic respiratory conditions.</li>
                <li>I do not have flu-like symptoms including fever, cough, shortness of breath, sore throat, or runny nose.</li>
                <li>I have not had close contact with anyone confirmed positive for COVID-19 in the past 14 days.</li>
              </ul>

              <p className="text-2xl font-bold mb-4 text-[#0A0F1E]">Data & GDPR agreement</p>
              <ul className="list-disc pl-8 text-[16px] leading-7 mb-6 text-[#0A0F1E]">
                <li>By submitting this form, you acknowledge that your personal data will be processed by FinXT UK Ltd for the purpose of research study recruitment. Your data will be handled in accordance with UK GDPR and our Privacy Policy. You have the right to withdraw consent at any time by contacting info@finxt.uk. Data will not be shared with third parties except the research study client, under strict NDA.</li>
              </ul>

              <Checkbox name="terms_confirmation" value="Confirmed" required>
                I confirm that I have read, understood and agree to the Terms and Conditions, COVID-19 precautions, and Data residency agreement.
              </Checkbox>
            </div>

            <button
          type="submit"
          className="rounded-lg bg-[#C9A84C] px-8 py-4 text-sm font-bold text-[#0A0F1E] transition hover:bg-[#E8C96A]"
        > Submit</button>
            
          </form>
        </div>
      </section>
    </Layout>
  );
}
