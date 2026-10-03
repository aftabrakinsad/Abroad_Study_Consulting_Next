import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address', hideOnMobile: true },
];

export default function ManagersPage() {
  return (
    <DashboardShell title="All Managers">
      <EntityTable endpoint="/admin/managers" deleteEndpoint="/admin/deleteManager" columns={columns} addHref="/admin/dashboard/addmanager" addLabel="Add Manager" noun="manager" />
    </DashboardShell>
  );
}
