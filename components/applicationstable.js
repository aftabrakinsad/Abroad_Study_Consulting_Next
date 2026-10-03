import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Alert, Card, StatusBadge, errorMessage, formatDate, inputClass } from './ui';

// All student applications, with a dropdown to assign each one to a consultant.
// `api` is the role's API prefix (/admin or /manager).
export default function ApplicationsTable({ apiPrefix }) {
  const [applications, setApplications] = useState(null);
  const [consultants, setConsultants] = useState([]);
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState({ type: '', message: '' });

  const load = () =>
    api.get(`${apiPrefix}/applications`)
      .then((response) => setApplications(response.data))
      .catch((err) => setStatus({ type: 'error', message: errorMessage(err) }));

  useEffect(() => {
    load();
    api.get(`${apiPrefix}/consultants`).then((response) => setConsultants(response.data)).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiPrefix]);

  const assign = async (app, consultantId) => {
    try {
      const response = await api.put(`${apiPrefix}/applications/${app.id}/assign`, { consultantId: consultantId || null });
      setStatus({ type: 'success', message: `Application #${app.id}: ${response.data.message}.` });
      load();
    } catch (err) {
      setStatus({ type: 'error', message: errorMessage(err) });
    }
  };

  const consultantSelect = (app, className = '') => (
    <select
      aria-label={`Consultant for application ${app.id}`}
      value={app.consultant?.id || ''}
      onChange={(e) => assign(app, e.target.value)}
      className={`${inputClass} py-2 ${className}`}>
      <option value="">Unassigned</option>
      {consultants.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name} ({c.country}){c.country === app.destinationCountry ? ' ✓' : ''}
        </option>
      ))}
    </select>
  );

  const shown = (applications || []).filter((app) => filter === 'all' || (filter === 'unassigned' ? !app.consultant : app.consultant));

  return (
    <div className="space-y-4">
      <Alert type={status.type}>{status.message}</Alert>
      <Card className="overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-gray-700 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-gray-400">
            {applications === null ? 'Loading…' : `${shown.length} application${shown.length === 1 ? '' : 's'}`}
          </p>
          <div className="flex gap-1 rounded-lg bg-gray-900 p-1 text-sm">
            {['all', 'unassigned', 'assigned'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-md px-3 py-1 capitalize ${filter === f ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        {/* Phones get stacked cards; the table needs more width */}
        <ul className="divide-y divide-gray-700 md:hidden">
          {shown.map((app) => (
            <li key={app.id} className="space-y-3 px-4 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium text-white">{app.student?.name}</p>
                  <p className="break-all text-xs text-gray-400">{app.student?.email}</p>
                </div>
                <StatusBadge status={app.status} />
              </div>
              <p className="text-sm text-gray-200">
                {app.program} <span className="text-gray-400">· {app.studyLevel} · {app.destinationCountry} · {app.intake}</span>
              </p>
              {consultantSelect(app, 'w-full')}
            </li>
          ))}
          {applications !== null && shown.length === 0 && <li className="px-4 py-10 text-center text-gray-400">No applications here.</li>}
        </ul>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900/50 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-4 py-3 sm:px-6">Student</th>
                <th className="px-4 py-3 sm:px-6">Wants to study</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 sm:px-6">Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {shown.map((app) => (
                <tr key={app.id} className="align-top text-gray-200">
                  <td className="px-4 py-4 sm:px-6">
                    <p className="font-medium text-white">{app.student?.name}</p>
                    <p className="break-all text-xs text-gray-400">{app.student?.email}</p>
                    <p className="mt-1 text-xs text-gray-500">Applied {formatDate(app.createdAt)}</p>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <p className="text-white">{app.program}</p>
                    <p className="text-xs text-gray-400">{app.studyLevel} · {app.destinationCountry} · {app.intake}</p>
                  </td>
                  <td className="px-4 py-4"><StatusBadge status={app.status} /></td>
                  <td className="px-4 py-4 sm:px-6">
                    {consultantSelect(app, 'min-w-[11rem]')}
                  </td>
                </tr>
              ))}
              {applications !== null && shown.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-gray-400">No applications here.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
      <p className="text-xs text-gray-500">✓ marks consultants who specialise in the student&apos;s destination country.</p>
    </div>
  );
}
