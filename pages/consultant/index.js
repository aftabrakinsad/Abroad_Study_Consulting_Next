import RoleHome from '@/components/rolehome';

export default function ConsultantHome() {
  return (
    <RoleHome
      role="consultant"
      profileEndpoint="/consultant/profile"
      team={{ label: 'Managers', endpoint: '/consultant/managers', href: '/consultant/managers' }}
      details={[
        { key: 'phone', label: 'Phone' },
        { key: 'country', label: 'Country of expertise' },
      ]}
      actions={[
        { href: '/consultant/applications', label: 'Review your students' },
        { href: '/consultant/managers', label: 'View managers' },
        { href: '/consultant/send-email', label: 'Send an email' },
        { href: '/consultant/profile', label: 'Edit your profile' },
      ]}
    />
  );
}
