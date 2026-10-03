import DashboardShell from '@/components/dashboardshell';
import ProfileForm from '@/components/profileform';

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'address', label: 'Address', as: 'textarea' },
];

export default function ManagerProfile() {
  return (
    <DashboardShell role="manager" width="max-w-xl" title="My Profile" subtitle="Change your name, address or password.">
      <ProfileForm loadEndpoint="/manager/profile" saveEndpoint="/manager/profile" fields={fields} />
    </DashboardShell>
  );
}
