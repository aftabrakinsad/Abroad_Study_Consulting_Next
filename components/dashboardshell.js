import { useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import SessionCheck from './sessioncheck';
import { PageHeader } from './ui';

// Shell for every role's dashboard pages: navbar, collapsible sidebar, and a consistent content column
export default function DashboardShell({ role = 'admin', title, subtitle, width = 'max-w-5xl', children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SessionCheck role={role} />
      <Header title={title} />
      <Navbar onToggleSidebar={() => setSidebarOpen((open) => !open)} />
      <Sidebar role={role} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen flex-col pt-16 sm:ml-64">
        <main className="flex-1 px-4 py-8 sm:px-8">
          <div className={`mx-auto ${width}`}>
            <PageHeader title={title} subtitle={subtitle} />
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
