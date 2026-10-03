import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Alert, Button, Card, errorMessage } from './ui';

// Shows one admin/manager/consultant with a delete action
export default function RecordCard({ record, fields, deleteUrl, onDeleted }) {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
    setIsMe(record.email && record.email === localStorage.getItem('email'));
  }, [record.email]);

  const title = record.username || record.name;

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${title}"?`)) return;
    try {
      await api.delete(deleteUrl);
      setStatus({ type: 'success', message: 'Deleted successfully.' });
      onDeleted?.();
    } catch (error) {
      setStatus({ type: 'error', message: errorMessage(error, 'Delete failed.') });
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold uppercase text-white">
          {title?.[0]}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-400">ID #{record.id}</p>
        </div>
      </div>
      <dl className="space-y-3 border-t border-gray-700 pt-4 text-sm">
        {fields.map((field) => (
          <div key={field.key} className="flex justify-between gap-4">
            <dt className="text-gray-400">{field.label}</dt>
            <dd className="break-all text-right text-gray-100">{record[field.key] || '—'}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex gap-3">
        {isMe && (
          <Link
            href="/admin/dashboard/Admin/update"
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700">
            Update
          </Link>
        )}
        {deleteUrl && (
          <Button variant="secondary" className="flex-1" onClick={handleDelete} disabled={status.type === 'success'}>
            Delete
          </Button>
        )}
      </div>
      {status.message && (
        <div className="mt-4">
          <Alert type={status.type}>{status.message}</Alert>
        </div>
      )}
    </Card>
  );
}
