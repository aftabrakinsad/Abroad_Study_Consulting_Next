import DashboardShell from '@/components/dashboardshell';
import ProfileForm from '@/components/profileform';

const fields = [
  { name: 'username', label: 'Username' },
  { name: 'address', label: 'Address', as: 'textarea' },
];

export default function UpdateAdminForm() {
  return (
    <DashboardShell width="max-w-xl" title="Update Profile" subtitle="Change your username, address or password.">
      <ProfileForm loadEndpoint="/admin/profile" saveEndpoint="/admin/updateAdmin" fields={fields} />
    </DashboardShell>
  );
}
