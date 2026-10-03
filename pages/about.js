import Link from 'next/link';
import MyLayout from '@/components/layout';

const values = [
  { title: 'Honest advice', text: 'We recommend programs that fit you, not the ones that pay the highest commission.' },
  { title: 'One consultant, start to finish', text: 'The same consultant follows your case from the first meeting to your flight.' },
  { title: 'Transparent pricing', text: 'You know every fee up front. No surprises halfway through your application.' },
];

const destinations = ['Canada', 'United States', 'United Kingdom', 'Australia', 'Germany', 'Japan', 'Malaysia', 'Finland'];

export default function About() {
  return (
    <MyLayout title="About Us">
      <section className="mx-auto max-w-screen-xl px-4 py-12 lg:py-20">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            About Us
          </span>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Helping students reach the world&apos;s best universities
          </h1>
          <p className="text-lg text-gray-400">
            Abroad Study is a consultancy that guides students through university admissions, scholarships and student visas.
            Our team of managers and country-specialist consultants works with each student individually, so every application
            is built around their goals.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-800 bg-gray-800/40">
        <div className="mx-auto grid max-w-screen-xl gap-12 px-4 py-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white">What we stand for</h2>
            <ul className="space-y-5">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white">Where we send students</h2>
            <div className="flex flex-wrap gap-2">
              {destinations.map((country) => (
                <span key={country} className="rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-gray-200">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-8 md:p-10">
          <h2 className="mb-3 text-2xl font-bold text-white">About this project</h2>
          <p className="mb-6 max-w-3xl text-gray-400">
            This site was built as a university course project at American International University-Bangladesh (AIUB). Students register and apply;
            managers assign each application to a consultant, who updates its status. A master admin creates the staff accounts
            and manages everything, backed by a REST API with role-based access control.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT + role-based auth'].map((tech) => (
              <span key={tech} className="rounded-md bg-blue-500/20 px-3 py-1 text-sm text-blue-300">{tech}</span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/signin" className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700">
              Try the demo dashboard
            </Link>
            <a href="https://github.com/aftabrakinsad/Abroad_Study_Consulting_Next" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-600 px-5 py-2.5 text-center text-sm font-medium text-gray-100 hover:bg-gray-700">
              Frontend code
            </a>
            <a href="https://github.com/aftabrakinsad/Abroad_Study_Consulting_Nest" target="_blank" rel="noreferrer" className="rounded-lg border border-gray-600 px-5 py-2.5 text-center text-sm font-medium text-gray-100 hover:bg-gray-700">
              Backend code
            </a>
          </div>
        </div>
      </section>
    </MyLayout>
  );
}
