import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address', hideOnMobile: true },
];

export default function ConsultantManagers() {
  return (
    <DashboardShell role="consultant" title="Managers" subtitle="Reach out to a manager for help with a student's case.">
      <EntityTable endpoint="/consultant/managers" columns={columns} noun="manager" />
    </DashboardShell>
  );
}
