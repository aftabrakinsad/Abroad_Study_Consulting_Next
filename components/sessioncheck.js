import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROLES, currentRole } from '@/lib/roles';

// Sends visitors to sign in, and signed-in users away from other roles' pages
export default function SessionCheck({ role }) {
  const router = useRouter();

  useEffect(() => {
    const myRole = currentRole();
    if (!myRole) {
      router.push('/auth/signin');
    } else if (role && myRole !== role) {
      router.replace(ROLES[myRole].home);
    }
  }, [role, router]);
  return null;
}
