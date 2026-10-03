import { useEffect, useState } from 'react';
import DashboardShell from '@/components/dashboardshell';
import FindRecord from '@/components/findrecord';
import { isMasterAdmin } from '@/lib/roles';

const fields = [
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address' },
];

export default function FindAdmins() {
  const [master, setMaster] = useState(false);
  useEffect(() => setMaster(isMasterAdmin()), []);

  return (
    <DashboardShell title="Find Admins" width="max-w-xl">
      <FindRecord endpoint="/admin" deleteEndpoint={master ? '/admin/deleteAdmin' : undefined} fields={fields} noun="admin" />
    </DashboardShell>
  );
}
