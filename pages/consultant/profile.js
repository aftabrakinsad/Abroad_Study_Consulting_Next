import DashboardShell from '@/components/dashboardshell';
import ProfileForm from '@/components/profileform';

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'country', label: 'Country of expertise' },
];

export default function ConsultantProfile() {
  return (
    <DashboardShell role="consultant" width="max-w-xl" title="My Profile" subtitle="Change your details or password.">
      <ProfileForm loadEndpoint="/consultant/profile" saveEndpoint="/consultant/profile" fields={fields} />
    </DashboardShell>
  );
}
