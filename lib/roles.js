// Everything that differs between the kinds of accounts.
// Users (students) register themselves; staff accounts are created by admins.
export const ROLES = {
  user: {
    label: 'User',
    api: '/user',
    home: '/user',
    profile: '/user/profile',
    demoEmail: process.env.NEXT_PUBLIC_DEMO_USER_EMAIL || 'user.demo@abroadstudy.com',
  },
  admin: {
    label: 'Admin',
    api: '/admin',
    home: '/admin/dashboard',
    profile: '/admin/dashboard/Admin/update',
    demoEmail: process.env.NEXT_PUBLIC_DEMO_EMAIL || 'demo@abroadstudy.com',
  },
  manager: {
    label: 'Manager',
    api: '/manager',
    home: '/manager',
    profile: '/manager/profile',
    demoEmail: process.env.NEXT_PUBLIC_DEMO_MANAGER_EMAIL || 'manager.demo@abroadstudy.com',
  },
  consultant: {
    label: 'Consultant',
    api: '/consultant',
    home: '/consultant',
    profile: '/consultant/profile',
    demoEmail: process.env.NEXT_PUBLIC_DEMO_CONSULTANT_EMAIL || 'consultant.demo@abroadstudy.com',
  },
};

export const DEMO_PASSWORD = process.env.NEXT_PUBLIC_DEMO_PASSWORD || 'Demo@1234';

// Only the master admin can create, edit or delete other admins
export function isMasterAdmin() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('role') === 'admin' && localStorage.getItem('master') === 'true';
}

export function currentRole() {
  if (typeof window === 'undefined') return null;
  // Sessions from before roles existed were always admins
  return localStorage.getItem('token') ? localStorage.getItem('role') || 'admin' : null;
}
