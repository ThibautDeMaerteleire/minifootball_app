export const BASE_URL = 'https://api.footy.thibautdemaerteleire.be';
// export const BASE_URL = 'http://localhost:8000';
export const ASSETS_BASE_URL = BASE_URL + '/storage/';
export const API_BASE_URL = BASE_URL + '/api';


export enum apiRoutes {
  'login' = '/login',
  'register' = '/register',
  'forgot-password' = '/forgot-password',
  'change-password' = '/change-password',
  'sanctum-crsf' = '/csrf-cookie',
  'dashboard' = '/dashboard',
  'teams' = '/teams',
  'me' = '/me',
  'player' = '/player/',
  'team' = '/team/',
  'upload-image' = '/upload/image',
  'create-team' = '/create-team',
  'search-teams' = '/search-teams',
  'add-teammembers' = '/add-teammembers',
  'teammembers' = '/teammembers/',
  'search-players' = '/search-players',
  'all-functions' = '/all-functions',
  'search-tutorials' = '/search-tutorials',
  'birthdays' = '/birthdays',
  'updates' = '/updates',
  'practice-matches' = '/practice-matches/',
  'accept-practice-match-request' = '/practice-match/accept-request',
  'create-practice-match' = '/create-practice-match',
  'get-lineups' = '/line-ups/',
  'lineup' = '/line-up',
}
