import DashboardShell from '@/components/dashboardshell';
import ApplicationsTable from '@/components/applicationstable';

export default function AdminApplications() {
  return (
    <DashboardShell title="All Applications" subtitle="Every student application, and the consultant handling it.">
      <ApplicationsTable apiPrefix="/admin" />
    </DashboardShell>
  );
}
