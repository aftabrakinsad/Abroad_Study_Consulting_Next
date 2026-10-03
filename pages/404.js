import Link from 'next/link';
import MyLayout from '@/components/layout';

export default function NotFound() {
  return (
    <MyLayout title="Page not found">
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-6xl font-extrabold text-blue-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
        <p className="mt-2 text-gray-400">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          Back to home
        </Link>
      </section>
    </MyLayout>
  );
}
