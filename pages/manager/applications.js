import DashboardShell from '@/components/dashboardshell';
import ApplicationsTable from '@/components/applicationstable';

export default function ManagerApplications() {
  return (
    <DashboardShell role="manager" title="Student Applications" subtitle="Match each student with a consultant for their destination country.">
      <ApplicationsTable apiPrefix="/manager" />
    </DashboardShell>
  );
}
