import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import api from '@/lib/api';
import { validateUser } from '@/lib/validators';
import MyLayout from '@/components/layout';
import { Alert, Button, Card, Field, errorMessage } from '@/components/ui';

const fields = [
  { name: 'name', label: 'Full name', autoComplete: 'name' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password' },
];

// Only users (students) can register; staff accounts are created by the admin
const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateUser(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      setLoading(true);
      setError('');
      await api.post('/user/signup', formData);
      router.push('/auth/signin?registered=1&role=user');
    } catch (err) {
      setError(errorMessage(err, 'Registration failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <MyLayout title="Register">
      <section className="flex justify-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-md">
          <Card className="p-6 sm:p-8">
            <h1 className="mb-1 text-center text-2xl font-bold text-white">Create your account</h1>
            <p className="mb-6 text-center text-sm text-gray-400">Register to apply for study-abroad consultation</p>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Alert type="error">{error}</Alert>
              {fields.map((f) => (
                <Field
                  key={f.name}
                  label={f.label}
                  name={f.name}
                  type={f.type || 'text'}
                  value={formData[f.name]}
                  onChange={handleInputChange}
                  error={errors[f.name]}
                  autoComplete={f.autoComplete}
                />
              ))}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Creating account…' : 'Register'}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/auth/signin" className="font-medium text-blue-400 hover:underline">Sign in</Link>
            </p>
          </Card>
          <p className="mt-4 text-center text-xs text-gray-500">
            Admins, managers and consultants don&apos;t register here. Their accounts are created by the administrator.
          </p>
        </div>
      </section>
    </MyLayout>
  );
};
export default RegistrationForm;
