import { useState } from 'react';
import api from '@/lib/api';
import { Alert, Button, Card, Field, errorMessage } from './ui';

// Generic create form: `fields` describe the inputs, `validate` returns { field: message }
export default function EntityForm({ fields, validate, endpoint, submitLabel = 'Submit', successMessage }) {
  const empty = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [formData, setFormData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await api.post(endpoint, formData);
      setStatus({ type: 'success', message: successMessage || response.data.message });
      setFormData(empty);
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
        {fields.map((field) => (
          <Field
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type || 'text'}
            as={field.as}
            rows={field.as === 'textarea' ? 3 : undefined}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            error={errors[field.name]}
            autoComplete={field.type === 'password' ? 'new-password' : 'off'}
          />
        ))}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Saving…' : submitLabel}
        </Button>
      </form>
    </Card>
  );
}
