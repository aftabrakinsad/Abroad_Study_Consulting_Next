import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import DashboardShell from '@/components/dashboardshell';
import { Alert, Card, StatusBadge, errorMessage, formatDate } from '@/components/ui';

export default function UserHome() {
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/user/profile').then((response) => setProfile(response.data)).catch(() => {});
    api.get('/user/applications')
      .then((response) => setApplications(response.data))
      .catch((err) => setError(errorMessage(err)));
  }, []);

  return (
    <DashboardShell role="user" title={profile ? `Welcome, ${profile.name}` : 'Welcome'} subtitle="Track your study-abroad applications.">
      <Alert type="error">{error}</Alert>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">My applications</h2>
        <Link href="/user/apply" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          New application
        </Link>
      </div>

      {applications === null && !error && <p className="text-sm text-gray-400">Loading…</p>}

      {applications?.length === 0 && (
        <Card className="p-10 text-center">
          <h3 className="text-lg font-semibold text-white">No applications yet</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
            Tell us where and what you want to study. A consultant who specialises in that country will guide you.
          </p>
          <Link href="/user/apply" className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
            Start your first application
          </Link>
        </Card>
      )}

      <div className="space-y-4">
        {applications?.map((app) => (
          <Card key={app.id} className="p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{app.program} · {app.destinationCountry}</h3>
                <p className="text-sm text-gray-400">{app.studyLevel} · {app.intake} · Applied {formatDate(app.createdAt)}</p>
              </div>
              <StatusBadge status={app.status} />
            </div>
            <div className="mt-4 grid gap-4 border-t border-gray-700 pt-4 text-sm sm:grid-cols-2">
              <div>
                <p className="mb-1 text-gray-400">Your consultant</p>
                {app.consultant ? (
                  <>
                    <p className="text-white">{app.consultant.name}</p>
                    <p className="break-all text-gray-400">{app.consultant.email} · {app.consultant.phone}</p>
                  </>
                ) : (
                  <p className="text-gray-300">A manager will assign a consultant soon.</p>
                )}
              </div>
              <div>
                <p className="mb-1 text-gray-400">Consultant&apos;s note</p>
                <p className="whitespace-pre-line text-gray-100">{app.consultantNote || 'No updates yet.'}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
