import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from '@/lib/auth';
import { ROLES, isMasterAdmin } from '@/lib/roles';

const adminSections = [
  {
    title: 'Admins',
    links: [
      {
        href: '/admin/dashboard/addadmin',
        label: 'Add Admin',
        icon: (
          <svg fill="currentColor" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/Admin/findAdmins',
        label: 'Find Admins',
        icon: (
          <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/getAdmins',
        label: 'All Admins',
        icon: (
          <svg fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
              </svg>
        ),
      },
    ],
  },
  {
    title: 'Consultants',
    links: [
      {
        href: '/admin/dashboard/addconsultant',
        label: 'Add Consultant',
        icon: (
          <svg fill="currentColor" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/Consultant/findConsultants',
        label: 'Find Consultants',
        icon: (
          <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/getConsultants',
        label: 'All Consultants',
        icon: (
          <svg fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
              </svg>
        ),
      },
    ],
  },
  {
    title: 'Managers',
    links: [
      {
        href: '/admin/dashboard/addmanager',
        label: 'Add Manager',
        icon: (
          <svg fill="currentColor" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/Manager/findManagers',
        label: 'Find Managers',
        icon: (
          <svg aria-hidden="true" className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
        ),
      },
      {
        href: '/admin/dashboard/getManagers',
        label: 'All Managers',
        icon: (
          <svg fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
              </svg>
        ),
      },
    ],
  },
  {
    title: 'Communication',
    links: [
      {
        href: '/admin/dashboard/send-email',
        label: 'Send Emails',
        icon: (
          <svg fill="currentColor" className="h-5 w-5 flex-shrink-0" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
        ),
      },
    ],
  },
];

// Managers and consultants reuse the admin icons: people list, single person, envelope
const peopleIcon = adminSections[0].links[2].icon;
const personIcon = adminSections[0].links[1].icon;
const mailIcon = adminSections[3].links[0].icon;
const addIcon = adminSections[0].links[0].icon;
const documentIcon = (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

// Users and their applications sit above staff management in the admin menu
adminSections.unshift(
  {
    title: 'Users',
    links: [
      { href: '/admin/dashboard/User/findUsers', label: 'Find Users', icon: personIcon },
      { href: '/admin/dashboard/getUsers', label: 'All Users', icon: peopleIcon },
    ],
  },
  {
    title: 'Applications',
    links: [{ href: '/admin/dashboard/applications', label: 'All Applications', icon: documentIcon }],
  },
);

const sectionsByRole = {
  user: [
    { title: 'Applications', links: [{ href: '/user/apply', label: 'New Application', icon: addIcon }] },
    { title: 'Account', links: [{ href: '/user/profile', label: 'My Profile', icon: personIcon }] },
  ],
  admin: adminSections,
  manager: [
    { title: 'Students', links: [{ href: '/manager/applications', label: 'Applications', icon: documentIcon }] },
    { title: 'Team', links: [{ href: '/manager/consultants', label: 'Consultants', icon: peopleIcon }] },
    { title: 'Account', links: [{ href: '/manager/profile', label: 'My Profile', icon: personIcon }] },
    { title: 'Communication', links: [{ href: '/manager/send-email', label: 'Send Emails', icon: mailIcon }] },
  ],
  consultant: [
    { title: 'Students', links: [{ href: '/consultant/applications', label: 'My Students', icon: documentIcon }] },
    { title: 'Team', links: [{ href: '/consultant/managers', label: 'Managers', icon: peopleIcon }] },
    { title: 'Account', links: [{ href: '/consultant/profile', label: 'My Profile', icon: personIcon }] },
    { title: 'Communication', links: [{ href: '/consultant/send-email', label: 'Send Emails', icon: mailIcon }] },
  ],
};

export default function Sidebar({ role = 'admin', open, onClose }) {
  const router = useRouter();
  const home = ROLES[role].home;
  const [master, setMaster] = useState(false);
  useEffect(() => setMaster(isMasterAdmin()), []);
  // Only the master admin sees "Add Admin"
  const sections = sectionsByRole[role].map((section) => ({
    ...section,
    links: section.links.filter((link) => master || link.href !== '/admin/dashboard/addadmin'),
  }));

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-black/50 sm:hidden" onClick={onClose} aria-hidden="true" />
      )}
      <aside
        className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-gray-700 bg-gray-800 px-3 py-6 transition-transform sm:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Dashboard navigation">
        <Link
          href={home}
          onClick={onClose}
          className={`mb-4 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            router.pathname === home ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-700'
          }`}>
          <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          Overview
        </Link>
        {sections.map((section) => (
          <div key={section.title} className="mb-4">
            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">{section.title}</p>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      router.pathname === link.href
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}>
                    <span className="text-gray-400">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* On phones the top navbar menu is hidden, so its links live here */}
        <div className="mt-6 space-y-1 border-t border-gray-700 pt-4 sm:hidden">
          <Link href="/" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">About Us</Link>
          <Link href={ROLES[role].profile} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Update Profile</Link>
          <button
            type="button"
            onClick={() => signOut(router)}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-red-400 hover:bg-gray-700">
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
