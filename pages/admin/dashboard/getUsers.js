import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';
import { formatDate } from '@/components/ui';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone', hideOnMobile: true },
  { key: 'createdAt', label: 'Joined', hideOnMobile: true, render: (row) => formatDate(row.createdAt) },
];

export default function UsersPage() {
  return (
    <DashboardShell title="All Users" subtitle="Students who registered on the site. Deleting a user also deletes their applications.">
      <EntityTable endpoint="/admin/users" deleteEndpoint="/admin/deleteUser" columns={columns} noun="user" />
    </DashboardShell>
  );
}
