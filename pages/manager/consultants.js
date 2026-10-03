import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone', hideOnMobile: true },
  { key: 'email', label: 'Email' },
  { key: 'country', label: 'Country', hideOnMobile: true },
];

export default function ManagerConsultants() {
  return (
    <DashboardShell role="manager" title="Consultants" subtitle="The consultants on your team and the countries they cover.">
      <EntityTable endpoint="/manager/consultants" columns={columns} noun="consultant" />
    </DashboardShell>
  );
}
