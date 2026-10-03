import Link from 'next/link';
import Image from 'next/image';
import MyLayout from '@/components/layout';

const services = [
  {
    title: 'University Selection',
    text: 'Shortlist universities and programs that match your grades, budget and career goals.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
    ),
  },
  {
    title: 'Application Support',
    text: 'Get your SOP, CV and recommendation letters reviewed before you hit submit.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
    ),
  },
  {
    title: 'Scholarships & Funding',
    text: 'Find scholarships, assistantships and tuition waivers you are eligible for.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
    ),
  },
  {
    title: 'Visa Guidance',
    text: 'Prepare your documents and practice for the interview with an experienced consultant.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
    ),
  },
  {
    title: 'Test Preparation',
    text: 'Plan your IELTS, TOEFL, GRE or SAT preparation with a clear timeline.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
    ),
  },
  {
    title: 'Pre-departure Briefing',
    text: 'Accommodation, banking, part-time work rules: know what to expect before you fly.',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </svg>
    ),
  },
];

const steps = [
  { title: 'Free consultation', text: 'Tell us your goals, budget and preferred countries.' },
  { title: 'Plan & apply', text: 'We shortlist programs and help you prepare every application.' },
  { title: 'Visa & departure', text: 'Get your visa approved and fly with confidence.' },
];

export default function Home() {
  return (
    <MyLayout title="Home">
      <section className="mx-auto grid max-w-screen-xl items-center gap-10 px-4 py-12 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <span className="mb-4 inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            Admissions · Scholarships · Visa
          </span>
          <h1 className="mb-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
            Study Abroad Consulting
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-400 lg:text-xl">
            Open your mind to a new whole world – learn something new, experience world-class education and develop a global perspective.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/registration" className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-700">
              Get started
            </Link>
            <Link href="/about" className="rounded-lg border border-gray-600 px-6 py-3 text-center font-medium text-gray-100 transition hover:bg-gray-800">
              Learn more about us
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <Image src="/home.png" alt="Graduates celebrating" width={600} height={480} className="h-auto w-full" priority />
        </div>
      </section>

      <section className="border-y border-gray-800 bg-gray-800/40">
        <div className="mx-auto max-w-screen-xl px-4 py-16">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Everything you need to study abroad</h2>
            <p className="text-lg text-gray-400">
              From choosing the right university to landing at your new campus, our consultants guide you through every step.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-gray-700 bg-gray-800 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-400">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white">How it works</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-center">
              <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">{i + 1}</span>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-gray-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </MyLayout>
  );
}
