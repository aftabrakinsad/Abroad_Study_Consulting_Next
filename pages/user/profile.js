import DashboardShell from '@/components/dashboardshell';
import ProfileForm from '@/components/profileform';

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'phone', label: 'Phone', type: 'tel' },
];

export default function UserProfile() {
  return (
    <DashboardShell role="user" width="max-w-xl" title="My Profile" subtitle="Change your details or password.">
      <ProfileForm loadEndpoint="/user/profile" saveEndpoint="/user/profile" fields={fields} />
    </DashboardShell>
  );
}
