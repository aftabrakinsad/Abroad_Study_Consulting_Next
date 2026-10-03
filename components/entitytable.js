import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { Alert, Card, errorMessage } from './ui';

// Lists records from `endpoint`; with `deleteEndpoint` each row gets a delete action
export default function EntityTable({ endpoint, deleteEndpoint, columns, addHref, addLabel, noun }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(endpoint)
      .then((response) => setRows(response.data))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [endpoint]);

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete ${noun} "${row[columns[0].key]}"?`)) return;
    try {
      await api.delete(`${deleteEndpoint}/${row.id}`);
      setRows((prevRows) => prevRows.filter((r) => r.id !== row.id));
    } catch (err) {
      setError(errorMessage(err));
    }
  };

  return (
    <div className="space-y-4">
      <Alert type="error">{error}</Alert>
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3 sm:px-6">
          <p className="text-sm text-gray-400">{loading ? 'Loading…' : `${rows.length} ${noun}${rows.length === 1 ? '' : 's'}`}</p>
          {addHref && (
            <Link href={addHref} className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
              {addLabel}
            </Link>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-900/50 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-4 py-3 sm:px-6">ID</th>
                {columns.map((col) => (
                  <th key={col.key} className={`whitespace-nowrap px-4 py-3 sm:px-6 ${col.hideOnMobile ? 'hidden md:table-cell' : ''}`}>{col.label}</th>
                ))}
                {deleteEndpoint && <th className="px-4 py-3 text-right sm:px-6">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {rows.map((row) => (
                <tr key={row.id} className="text-gray-200 hover:bg-gray-700/40">
                  <td className="px-4 py-3 text-gray-400 sm:px-6">{row.id}</td>
                  {columns.map((col) => (
                    <td key={col.key} className={`px-4 py-3 sm:px-6 ${col.key === 'email' ? 'break-all md:break-normal' : 'whitespace-nowrap'} ${col.hideOnMobile ? 'hidden md:table-cell' : ''}`}>{col.render ? col.render(row) : row[col.key]}</td>
                  ))}
                  {deleteEndpoint && (
                  <td className="px-4 py-3 text-right sm:px-6">
                    <button
                      type="button"
                      onClick={() => handleDelete(row)}
                      className="rounded-md px-2 py-1 font-medium text-red-400 hover:bg-red-900/30 hover:text-red-300">
                      Delete
                    </button>
                  </td>
                  )}
                </tr>
              ))}
              {!loading && rows.length === 0 && (
                <tr>
                  <td colSpan={columns.length + (deleteEndpoint ? 2 : 1)} className="px-6 py-10 text-center text-gray-400">
                    No {noun}s yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
