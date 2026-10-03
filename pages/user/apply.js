import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/lib/api';
import { DESTINATIONS, STUDY_LEVELS, upcomingIntakes } from '@/lib/options';
import { validateApplication } from '@/lib/validators';
import DashboardShell from '@/components/dashboardshell';
import { Alert, Button, Card, Field, errorMessage } from '@/components/ui';

function SelectField({ label, name, options, value, onChange, error }) {
  return (
    <Field as="select" label={label} name={name} value={value} onChange={onChange} error={error}>
      <option value="">Select…</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </Field>
  );
}

export default function Apply() {
  const router = useRouter();
  const [formData, setFormData] = useState({ destinationCountry: '', studyLevel: '', program: '', intake: '', message: '' });
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
    const newErrors = validateApplication(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      await api.post('/user/applications', formData);
      router.push('/user');
    } catch (err) {
      setError(errorMessage(err));
      setLoading(false);
    }
  };

  return (
    <DashboardShell role="user" width="max-w-xl" title="New Application" subtitle="Tell us your plans and we'll match you with a consultant.">
      <Card className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <Alert type="error">{error}</Alert>
          <SelectField label="Destination country" name="destinationCountry" options={DESTINATIONS} value={formData.destinationCountry} onChange={handleInputChange} error={errors.destinationCountry} />
          <SelectField label="Study level" name="studyLevel" options={STUDY_LEVELS} value={formData.studyLevel} onChange={handleInputChange} error={errors.studyLevel} />
          <Field label="Program / field of study" name="program" value={formData.program} onChange={handleInputChange} error={errors.program} placeholder="e.g. Computer Science" />
          <SelectField label="Preferred intake" name="intake" options={upcomingIntakes()} value={formData.intake} onChange={handleInputChange} error={errors.intake} />
          <Field label="Anything else we should know? (optional)" name="message" as="textarea" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Your grades, test scores, budget, preferred universities…" />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting…' : 'Submit application'}
          </Button>
        </form>
      </Card>
    </DashboardShell>
  );
}
