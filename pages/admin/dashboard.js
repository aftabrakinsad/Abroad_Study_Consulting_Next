import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import DashboardShell from '@/components/dashboardshell';
import { Card } from '@/components/ui';

const stats = [
  { key: 'users', label: 'Users', endpoint: '/admin/userCount', href: '/admin/dashboard/getUsers', accent: 'bg-purple-500/20 text-purple-300' },
  { key: 'applications', label: 'Applications', endpoint: '/admin/applicationCount', href: '/admin/dashboard/applications', accent: 'bg-pink-500/20 text-pink-300' },
  { key: 'admins', label: 'Admins', endpoint: '/admin/adminCount', href: '/admin/dashboard/getAdmins', accent: 'bg-blue-500/20 text-blue-300' },
  { key: 'managers', label: 'Managers', endpoint: '/admin/managerCount', href: '/admin/dashboard/getManagers', accent: 'bg-green-500/20 text-green-300' },
  { key: 'consultants', label: 'Consultants', endpoint: '/admin/consultantCount', href: '/admin/dashboard/getConsultants', accent: 'bg-amber-500/20 text-amber-300' },
];

const quickActions = [
  { href: '/admin/dashboard/applications', label: 'Assign applications to consultants' },
  { href: '/admin/dashboard/addmanager', label: 'Add a manager' },
  { href: '/admin/dashboard/addconsultant', label: 'Add a consultant' },
  { href: '/admin/dashboard/send-email', label: 'Send an email' },
];

const Dashboard = () => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    Promise.all(stats.map((s) => api.get(s.endpoint)))
      .then((responses) => {
        setCounts(Object.fromEntries(stats.map((s, i) => [s.key, responses[i].data])));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <DashboardShell title="Dashboard" subtitle="An overview of students, applications and staff.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Link key={stat.key} href={stat.href} className="group">
            <Card className="p-5 transition group-hover:border-gray-500">
              <span className={`inline-block rounded-md px-2 py-1 text-xs font-medium ${stat.accent}`}>{stat.label}</span>
              <p className="mt-3 text-3xl font-bold text-white">{counts[stat.key] ?? '–'}</p>
              <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300">View all →</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-6 p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Quick actions</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-lg border border-gray-700 px-4 py-3 text-sm text-gray-200 transition hover:border-blue-500 hover:text-white">
              {action.label}
            </Link>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
};

export default Dashboard;
