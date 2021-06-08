export const BASE_URL = 'http://localhost:8000';
export const ASSETS_BASE_URL = BASE_URL + '/storage/';
export const API_BASE_URL = BASE_URL + '/api';
// export const API_BASE_URL = 'http://api.footy.thibautdemaerteleire.be/api';

export enum apiRoutes {
  'login' = '/login',
  'register' = '/register',
  'forgot-password' = '/forgot-password',
  'change-password' = '/change-password',
  'sanctum-crsf' = '/csrf-cookie',
  'dashboard' = '/dashboard',
  'teams' = '/teams',
  'me' = '/me',
  'upload-image' = '/upload/image',
  'create-team' = '/create-team',
  'search-teams' = '/search-teams',
  'search-players' = '/search-players',
  'all-functions' = '/all-functions',
  'search-tutorials' = '/search-tutorials',
  'birthdays' = '/birthdays',
}
