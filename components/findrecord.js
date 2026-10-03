import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/lib/api';
import RecordCard from './recordcard';
import { Alert, Button, Card, inputClass } from './ui';

// Search box + result card; the searched ID lives in the URL (?inputValue=) so results can be linked
export default function FindRecord({ endpoint, deleteEndpoint, fields, noun }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = router.query.inputValue;
    if (!id) return;
    setInputValue(id);
    setLoading(true);
    setNotFound(false);
    api.get(`${endpoint}/${id}`)
      .then((response) => setData({ id, ...response.data }))
      .catch(() => { setData(null); setNotFound(true); })
      .finally(() => setLoading(false));
  }, [router.query.inputValue, endpoint]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    router.push({ pathname: router.pathname, query: { inputValue: inputValue.trim() } });
  };

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="search" className="sr-only">Search by ID</label>
          <div className="relative flex-1">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="search"
              type="number"
              min="1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`${inputClass} pl-10`}
              placeholder={`Enter ${noun} ID, e.g. 1`}
              required
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </Card>

      {loading && <p className="text-center text-sm text-gray-400">Searching…</p>}
      {!loading && notFound && <Alert type="error">No {noun} found with ID {router.query.inputValue}.</Alert>}
      {!loading && data && (
        <RecordCard key={data.id} record={data} fields={fields} deleteUrl={deleteEndpoint ? `${deleteEndpoint}/${data.id}` : undefined} />
      )}
      {!router.query.inputValue && (
        <p className="text-center text-sm text-gray-400">Search for a {noun} by their ID to see their details.</p>
      )}
    </div>
  );
}
