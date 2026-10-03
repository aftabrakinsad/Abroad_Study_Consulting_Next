import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import DashboardShell from './dashboardshell';
import { Card } from './ui';

// Home page for managers and consultants: their profile, team size and shortcuts
export default function RoleHome({ role, profileEndpoint, team, details, actions }) {
  const [profile, setProfile] = useState(null);
  const [teamCount, setTeamCount] = useState(null);

  useEffect(() => {
    api.get(profileEndpoint).then((response) => setProfile(response.data)).catch(() => {});
    api.get(team.endpoint).then((response) => setTeamCount(response.data.length)).catch(() => {});
  }, [profileEndpoint, team.endpoint]);

  return (
    <DashboardShell role={role} title={profile ? `Welcome, ${profile.name}` : 'Welcome'} subtitle="Here's an overview of your account.">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5 md:col-span-2">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold uppercase text-white">
              {profile?.name?.[0]}
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-white">{profile?.name || '…'}</p>
              <p className="truncate text-sm text-gray-400">{profile?.email}</p>
            </div>
          </div>
          <dl className="space-y-3 border-t border-gray-700 pt-4 text-sm">
            {details.map((d) => (
              <div key={d.key} className="flex justify-between gap-4">
                <dt className="text-gray-400">{d.label}</dt>
                <dd className="text-right text-gray-100">{profile?.[d.key] || '—'}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Link href={team.href} className="group">
          <Card className="h-full p-5 transition group-hover:border-gray-500">
            <span className="inline-block rounded-md bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-300">{team.label}</span>
            <p className="mt-3 text-3xl font-bold text-white">{teamCount ?? '–'}</p>
            <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300">View all →</p>
          </Card>
        </Link>
      </div>

      <Card className="mt-6 p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">Quick actions</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {actions.map((action) => (
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
}
