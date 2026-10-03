import { useEffect, useState } from 'react';
import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';
import { isMasterAdmin } from '@/lib/roles';

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address', hideOnMobile: true },
  {
    key: 'isMaster',
    label: 'Role',
    hideOnMobile: true,
    render: (row) => (row.isMaster
      ? <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300">Master</span>
      : <span className="text-gray-400">Admin</span>),
  },
];

export default function AdminsPage() {
  const [master, setMaster] = useState(null);
  useEffect(() => setMaster(isMasterAdmin()), []);

  return (
    <DashboardShell title="All Admins" subtitle={master === false ? 'Only the master admin can add or remove admins.' : undefined}>
      {master !== null && (
        <EntityTable
          endpoint="/admin/index"
          deleteEndpoint={master ? '/admin/deleteAdmin' : undefined}
          columns={columns}
          addHref={master ? '/admin/dashboard/addadmin' : undefined}
          addLabel="Add Admin"
          noun="admin"
        />
      )}
    </DashboardShell>
  );
}
