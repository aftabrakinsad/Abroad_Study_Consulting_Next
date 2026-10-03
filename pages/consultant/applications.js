import { useEffect, useState } from 'react';
import api from '@/lib/api';
import DashboardShell from '@/components/dashboardshell';
import { APPLICATION_STATUSES, Alert, Button, Card, StatusBadge, errorMessage, formatDate, inputClass } from '@/components/ui';

function ApplicationReview({ app, onSaved }) {
  const [status, setStatus] = useState(app.status);
  const [note, setNote] = useState(app.consultantNote);
  const [result, setResult] = useState({ type: '', message: '' });
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await api.put(`/consultant/applications/${app.id}`, { status, consultantNote: note });
      setResult({ type: 'success', message: 'Saved. The student can see this update.' });
      onSaved();
    } catch (err) {
      setResult({ type: 'error', message: errorMessage(err) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{app.student?.name}</h3>
          <p className="break-all text-sm text-gray-400">{app.student?.email} · {app.student?.phone}</p>
        </div>
        <StatusBadge status={app.status} />
      </div>
      <dl className="mt-4 grid gap-3 border-t border-gray-700 pt-4 text-sm sm:grid-cols-2">
        <div><dt className="text-gray-400">Wants to study</dt><dd className="text-white">{app.program} ({app.studyLevel})</dd></div>
        <div><dt className="text-gray-400">Where & when</dt><dd className="text-white">{app.destinationCountry} · {app.intake}</dd></div>
        <div className="sm:col-span-2">
          <dt className="text-gray-400">Student&apos;s message</dt>
          <dd className="whitespace-pre-line text-gray-100">{app.message || '—'}</dd>
        </div>
        <div className="text-xs text-gray-500 sm:col-span-2">Applied {formatDate(app.createdAt)}</div>
      </dl>
      <div className="mt-4 space-y-3 border-t border-gray-700 pt-4">
        <div className="grid gap-3 sm:grid-cols-[12rem,1fr]">
          <div>
            <label htmlFor={`status-${app.id}`} className="mb-1.5 block text-sm font-medium text-gray-200">Status</label>
            <select id={`status-${app.id}`} value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass}>
              {APPLICATION_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`note-${app.id}`} className="mb-1.5 block text-sm font-medium text-gray-200">Note to the student</label>
            <textarea id={`note-${app.id}`} rows={2} value={note} onChange={(e) => setNote(e.target.value)} className={inputClass} placeholder="Next steps, documents needed…" />
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save update'}</Button>
          {result.message && <div className="flex-1"><Alert type={result.type}>{result.message}</Alert></div>}
        </div>
      </div>
    </Card>
  );
}

export default function ConsultantApplications() {
  const [applications, setApplications] = useState(null);
  const [error, setError] = useState('');

  const load = () =>
    api.get('/consultant/applications')
      .then((response) => setApplications(response.data))
      .catch((err) => setError(errorMessage(err)));

  useEffect(() => { load(); }, []);

  return (
    <DashboardShell role="consultant" title="My Students" subtitle="Applications assigned to you. Update their status and leave notes for the student.">
      <Alert type="error">{error}</Alert>
      {applications === null && !error && <p className="text-sm text-gray-400">Loading…</p>}
      {applications?.length === 0 && (
        <Card className="p-10 text-center text-gray-400">No students have been assigned to you yet.</Card>
      )}
      <div className="space-y-4">
        {applications?.map((app) => <ApplicationReview key={app.id} app={app} onSaved={load} />)}
      </div>
    </DashboardShell>
  );
}
