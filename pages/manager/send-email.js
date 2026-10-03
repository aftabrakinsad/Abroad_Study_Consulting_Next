import DashboardShell from '@/components/dashboardshell';
import EmailForm from '@/components/emailform';

export default function ManagerEmail() {
  return (
    <DashboardShell role="manager" width="max-w-xl" title="Send Email" subtitle="Email a student or a consultant.">
      <EmailForm endpoint="/manager/email" />
    </DashboardShell>
  );
}
