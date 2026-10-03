import RoleHome from '@/components/rolehome';

export default function ManagerHome() {
  return (
    <RoleHome
      role="manager"
      profileEndpoint="/manager/profile"
      team={{ label: 'Consultants', endpoint: '/manager/consultants', href: '/manager/consultants' }}
      details={[{ key: 'address', label: 'Address' }]}
      actions={[
        { href: '/manager/applications', label: 'Assign student applications' },
        { href: '/manager/consultants', label: 'View your consultants' },
        { href: '/manager/send-email', label: 'Send an email' },
        { href: '/manager/profile', label: 'Edit your profile' },
      ]}
    />
  );
}
