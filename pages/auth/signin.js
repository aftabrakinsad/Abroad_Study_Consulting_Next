import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import api from '@/lib/api';
import { saveSession } from '@/lib/auth';
import { DEMO_PASSWORD, ROLES, currentRole } from '@/lib/roles';
import MyLayout from '@/components/layout';
import RoleTabs from '@/components/roletabs';
import { Alert, Button, Card, Field, errorMessage } from '@/components/ui';

export default function SignIn() {
  const router = useRouter();
  // On client-side navigation the query is already known, so start on the right tab without a flicker
  const [role, setRole] = useState(() => (ROLES[router.query.role] ? router.query.role : 'user'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const myRole = currentRole();
    if (myRole) {
      router.replace(ROLES[myRole].home);
    } else if (ROLES[router.query.role]) {
      setRole(router.query.role);
    }
  }, [router.isReady, router.query.role]);

  const changeRole = (newRole) => {
    setRole(newRole);
    setError('');
  };

  const validateForm = () => {
    if (!email && !password) {
      setError('Please enter a email and password');
      return false;
    }
    else if (!email) {
      setError('Please enter a email');
      return false;
    }
    else if (!password) {
      setError('Please enter a password');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await api.post(`${ROLES[role].api}/signin`, { email, password });
      saveSession(response.data);
      router.push(ROLES[response.data.role].home);
    } catch (error) {
      setError(errorMessage(error, 'Invalid login'));
    } finally {
      setLoading(false);
    }
  };

  const demoEmail = ROLES[role].demoEmail;

  return (
    <MyLayout title="Sign In">
      <section className="flex justify-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-md">
          <Card className="p-6 sm:p-8">
            <h1 className="mb-1 text-center text-2xl font-bold text-white">Welcome back</h1>
            <p className="mb-6 text-center text-sm text-gray-400">Sign in to your {ROLES[role].label.toLowerCase()} account</p>
            <RoleTabs value={role} onChange={changeRole} />
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {router.query.registered && !error && <Alert type="success">Registration successful. You can sign in now.</Alert>}
              <Alert type="error">{error}</Alert>
              <Field label="Email" name="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              <Field label="Password" name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in…' : `Sign in as ${ROLES[role].label}`}
              </Button>
            </form>
            {role === 'user' ? (
              <p className="mt-6 text-center text-sm text-gray-400">
                Don&apos;t have an account?{' '}
                <Link href="/auth/registration" className="font-medium text-blue-400 hover:underline">Register</Link>
              </p>
            ) : (
              <p className="mt-6 text-center text-sm text-gray-400">
                {ROLES[role].label} accounts are created by the administrator.
              </p>
            )}
          </Card>

          <div className="mt-4 rounded-xl border border-blue-500/40 bg-blue-500/10 p-5 text-sm text-gray-200">
            <p className="mb-2 font-semibold text-white">Just looking around? Use the demo {ROLES[role].label.toLowerCase()} account:</p>
            <p>Email: <span className="break-all font-mono text-blue-200">{demoEmail}</span></p>
            <p>Password: <span className="font-mono text-blue-200">{DEMO_PASSWORD}</span></p>
            <button
              type="button"
              className="mt-3 font-medium text-blue-300 hover:underline"
              onClick={() => { setEmail(demoEmail); setPassword(DEMO_PASSWORD); setError(''); }}>
              Fill in demo credentials →
            </button>
          </div>
        </div>
      </section>
    </MyLayout>
  );
}
