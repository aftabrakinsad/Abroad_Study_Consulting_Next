import DashboardShell from '@/components/dashboardshell';
import FindRecord from '@/components/findrecord';

const fields = [
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address' },
];

export default function FindManagers() {
  return (
    <DashboardShell title="Find Managers" width="max-w-xl">
      <FindRecord endpoint="/admin/manager" deleteEndpoint="/admin/deleteManager" fields={fields} noun="manager" />
    </DashboardShell>
  );
}
