import DashboardShell from '@/components/dashboardshell';
import EntityForm from '@/components/entityform';
import { validateConsultant } from '@/lib/validators';

const fields = [
  { name: 'name', label: 'Name', placeholder: 'Full name' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '01XXXXXXXXX' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com' },
  { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
  { name: 'country', label: 'Country of expertise', placeholder: 'e.g. Canada' },
];

export default function AddConsultantForm() {
  return (
    <DashboardShell width="max-w-xl" title="Add Consultant" subtitle="Consultants guide students for a specific destination country.">
      <EntityForm fields={fields} validate={validateConsultant} endpoint="/admin/addConsultant" submitLabel="Add Consultant" successMessage="Consultant added. Share the email and password with them so they can sign in." />
    </DashboardShell>
  );
}
