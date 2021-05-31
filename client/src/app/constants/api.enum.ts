export const API_BASE_URL = 'http://localhost:8000/api';
// export const API_BASE_URL = 'http://api.footy.thibautdemaerteleire.be/api';

export enum apiRoutes {
  'login' = '/login',
  'register' = '/register',
  'forgot-password' = '/forgot-password',
  'change-password' = '/change-password',
  'sanctum-crsf' = '/csrf-cookie',
  'dashboard' = '/dashboard',
  'me' = '/me',
}
