import DashboardShell from '@/components/dashboardshell';
import EmailForm from '@/components/emailform';

export default function SendEmail() {
  return (
    <DashboardShell width="max-w-xl" title="Send Email" subtitle="Email a student, consultant or manager.">
      <EmailForm endpoint="/admin/send-email" />
    </DashboardShell>
  );
}
