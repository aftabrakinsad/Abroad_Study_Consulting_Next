import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/lib/api';
import DashboardShell from '@/components/dashboardshell';
import RecordCard from '@/components/recordcard';
import { Alert } from '@/components/ui';

const fields = [
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Address' },
];

export default function AdminProfile() {
  const router = useRouter();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const id = router.query.id;
    if (!id) return;
    api.get('/admin/' + id)
      .then((response) => setData({ id, ...response.data }))
      .catch(() => setData(null));
  }, [router.query.id]);

  return (
    <DashboardShell title="Admin Profile" width="max-w-xl">
      {data === null && <Alert type="error">Error fetching admin data.</Alert>}
      {data && <RecordCard record={data} fields={fields} deleteUrl={`/admin/deleteAdmin/${data.id}`} />}
      <button type="button" onClick={() => router.back()} className="mt-6 block w-full text-center text-sm text-blue-400 hover:underline">
        ← Go back
      </button>
    </DashboardShell>
  );
}
