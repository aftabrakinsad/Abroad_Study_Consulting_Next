import api from './api';
import { ROLES } from './roles';

export function saveSession(data) {
  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.email);
  localStorage.setItem('role', data.role);
  localStorage.setItem('master', data.master ? 'true' : 'false');
}

export async function signOut(router) {
  const role = localStorage.getItem('role') || 'admin';
  try {
    await api.post(`${ROLES[role].api}/signout`);
  } catch (error) {
    console.error(error);
  }
  // Signing out only needs the token gone, even if the request above failed
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  localStorage.removeItem('master');
  router.push('/auth/signin');
}
