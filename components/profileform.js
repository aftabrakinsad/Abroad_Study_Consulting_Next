import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { checkPassword } from '@/lib/validators';
import { Alert, Button, Card, Field, errorMessage } from './ui';

// Edit-your-own-profile form. `fields` lists the editable inputs; email is always read-only.
// Leaving the password empty keeps the current one.
export default function ProfileForm({ loadEndpoint, saveEndpoint, fields }) {
  const empty = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [formData, setFormData] = useState({ ...empty, email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(loadEndpoint)
      .then((response) => setFormData((prevData) => ({
        ...prevData,
        email: response.data.email,
        ...Object.fromEntries(fields.map((f) => [f.name, response.data[f.name] || ''])),
      })))
      .catch((error) => setStatus({ type: 'error', message: errorMessage(error) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadEndpoint]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    fields.forEach((f) => {
      if (formData[f.name].trim() === '') newErrors[f.name] = `Please fill the ${f.label.toLowerCase()}.`;
    });
    if (formData.password) checkPassword(formData, newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await api.put(saveEndpoint, formData);
      setStatus({ type: 'success', message: 'Profile updated successfully.' });
      setFormData((prevData) => ({ ...prevData, password: '' }));
    } catch (error) {
      setStatus({ type: 'error', message: errorMessage(error) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <Alert type={status.type}>{status.message}</Alert>
        <Field label="Email address" name="email" value={formData.email} readOnly />
        {fields.map((f) => (
          <Field
            key={f.name}
            label={f.label}
            name={f.name}
            as={f.as}
            rows={f.as === 'textarea' ? 3 : undefined}
            type={f.type || 'text'}
            value={formData[f.name]}
            onChange={handleInputChange}
            error={errors[f.name]}
          />
        ))}
        <Field
          label="New password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          placeholder="Leave empty to keep your current password"
          autoComplete="new-password"
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Saving…' : 'Save changes'}
        </Button>
      </form>
    </Card>
  );
}
