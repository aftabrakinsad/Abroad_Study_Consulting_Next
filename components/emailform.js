import { useState } from 'react';
import api from '@/lib/api';
import { Alert, Button, Card, Field, errorMessage } from './ui';

export default function EmailForm({ endpoint }) {
  const [formData, setFormData] = useState({ email: '', subject: '', text: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(endpoint, formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ email: '', subject: '', text: '' });
    } catch (error) {
      setStatus({ type: 'error', message: errorMessage(error, 'Failed to send email') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <form onSubmit={handleFormSubmit} className="space-y-5">
        <Alert type={status.type}>{status.message}</Alert>
        <Field label="Recipient's email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="name@example.com" required />
        <Field label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Your application update" required />
        <Field label="Message" name="text" as="textarea" rows={6} value={formData.text} onChange={handleInputChange} placeholder="Write your message…" required />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending…' : 'Send Email'}
        </Button>
      </form>
    </Card>
  );
}
