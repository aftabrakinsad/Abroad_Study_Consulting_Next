import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { signOut } from '@/lib/auth';
import { ROLES, currentRole } from '@/lib/roles';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
];

export default function Navbar({ onToggleSidebar }) {
  const router = useRouter();
  const [role, setRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setRole(currentRole());
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  const handleSignOut = () => {
    setRole(null);
    signOut(router);
  };

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      router.pathname === href ? 'text-blue-400' : 'text-gray-200 hover:bg-gray-700 hover:text-white'
    }`;
  const buttonClass = 'rounded-lg px-4 py-2 text-sm font-medium transition text-center';
  const primary = `${buttonClass} bg-blue-600 text-white hover:bg-blue-700`;
  const secondary = `${buttonClass} border border-gray-600 text-gray-100 hover:bg-gray-700`;

  const accountLinks = role ? (
    <>
      <Link href={ROLES[role].home} className={secondary}>Dashboard</Link>
      <Link href={ROLES[role].profile} className={secondary}>Update Profile</Link>
      <button type="button" onClick={handleSignOut} className={primary}>Sign out</button>
    </>
  ) : (
    <>
      <Link href="/auth/signin" className={secondary}>Sign In</Link>
      <Link href="/auth/registration" className={primary}>Register</Link>
    </>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 border-b border-gray-700 bg-gray-800/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="rounded-lg p-2 text-gray-300 hover:bg-gray-700 sm:hidden"
              aria-label="Open dashboard menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
              </svg>
            </button>
          )}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/ico.png" alt="" width={40} height={40} priority />
            <span className="whitespace-nowrap text-xl font-semibold text-white">Abroad Study</span>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(link.href)}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">{accountLinks}</div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`rounded-lg p-2 text-gray-300 hover:bg-gray-700 md:hidden ${onToggleSidebar ? 'hidden sm:block' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-b border-gray-700 bg-gray-800 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`block ${linkClass(link.href)}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">{accountLinks}</div>
        </div>
      )}
    </nav>
  );
}
