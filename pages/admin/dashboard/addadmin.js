import { useEffect, useState } from 'react';
import DashboardShell from '@/components/dashboardshell';
import EntityForm from '@/components/entityform';
import { Alert } from '@/components/ui';
import { isMasterAdmin } from '@/lib/roles';
import { validateAdmin } from '@/lib/validators';

const fields = [
  { name: 'username', label: 'Username', placeholder: 'e.g. rakin' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com' },
  { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
  { name: 'address', label: 'Address', as: 'textarea', placeholder: 'City, Country' },
];

export default function AddAdminForm() {
  const [master, setMaster] = useState(null);
  useEffect(() => setMaster(isMasterAdmin()), []);

  return (
    <DashboardShell width="max-w-xl" title="Add Admin" subtitle="Create an administrator account and share the credentials with them.">
      {master === false && <Alert type="info">Only the master admin can add admins.</Alert>}
      {master && (
        <EntityForm fields={fields} validate={validateAdmin} endpoint="/admin/addAdmin" submitLabel="Add Admin" successMessage="Admin added. Share the email and password with them so they can sign in." />
      )}
    </DashboardShell>
  );
}
