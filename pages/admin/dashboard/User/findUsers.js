import DashboardShell from '@/components/dashboardshell';
import FindRecord from '@/components/findrecord';

const fields = [
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
];

export default function FindUsers() {
  return (
    <DashboardShell title="Find Users" width="max-w-xl">
      <FindRecord endpoint="/admin/user" deleteEndpoint="/admin/deleteUser" fields={fields} noun="user" />
    </DashboardShell>
  );
}
