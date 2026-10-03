import DashboardShell from '@/components/dashboardshell';
import EntityTable from '@/components/entitytable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone', hideOnMobile: true },
  { key: 'email', label: 'Email' },
  { key: 'country', label: 'Country', hideOnMobile: true },
];

export default function ConsultantPage() {
  return (
    <DashboardShell title="All Consultants">
      <EntityTable endpoint="/admin/consultants" deleteEndpoint="/admin/deleteConsultant" columns={columns} addHref="/admin/dashboard/addconsultant" addLabel="Add Consultant" noun="consultant" />
    </DashboardShell>
  );
}
