import DashboardShell from '@/components/dashboardshell';
import EmailForm from '@/components/emailform';

export default function ConsultantEmail() {
  return (
    <DashboardShell role="consultant" width="max-w-xl" title="Send Email" subtitle="Email a student or a manager.">
      <EmailForm endpoint="/consultant/email" />
    </DashboardShell>
  );
}
