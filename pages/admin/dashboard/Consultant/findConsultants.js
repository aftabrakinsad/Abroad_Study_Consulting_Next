import DashboardShell from '@/components/dashboardshell';
import FindRecord from '@/components/findrecord';

const fields = [
  { key: 'phone', label: 'Phone' },
  { key: 'email', label: 'Email' },
  { key: 'country', label: 'Country' },
];

export default function FindConsultants() {
  return (
    <DashboardShell title="Find Consultants" width="max-w-xl">
      <FindRecord endpoint="/admin/consultant" deleteEndpoint="/admin/deleteConsultant" fields={fields} noun="consultant" />
    </DashboardShell>
  );
}
