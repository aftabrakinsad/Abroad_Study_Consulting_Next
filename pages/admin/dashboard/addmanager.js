import DashboardShell from '@/components/dashboardshell';
import EntityForm from '@/components/entityform';
import { validateManager } from '@/lib/validators';

const fields = [
  { name: 'name', label: 'Name', placeholder: 'Full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com' },
  { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
  { name: 'address', label: 'Address', as: 'textarea', placeholder: 'City, Country' },
];

export default function AddManagerForm() {
  return (
    <DashboardShell width="max-w-xl" title="Add Manager" subtitle="Managers oversee consultants and student applications.">
      <EntityForm fields={fields} validate={validateManager} endpoint="/admin/addManager" submitLabel="Add Manager" successMessage="Manager added. Share the email and password with them so they can sign in." />
    </DashboardShell>
  );
}
