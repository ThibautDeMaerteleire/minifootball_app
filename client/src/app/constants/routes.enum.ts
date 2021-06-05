export enum baseRoutesEnum {
  landing = '',
  home = 'home',
  features = 'features',
  pricing = 'pricing',
  about = 'about',
  contact = 'contact',
  faq = 'faq',
  privacy_policy = 'privacy-policy',
  terms_of_service = 'terms-of-service',
  login = 'login',
  register = 'register',
  forgotPassword = 'forgot-password',
  app = 'app',
  error = 'error/:id',
  all_routes = '**'
}

export enum appRoutesEnum {
  dashboard = 'dashboard',
  teams = 'teams',
  matches = 'matches',
  messages = 'messages',
  birthdays = 'birthdays',
  updates = 'updates',
  tutorials = 'tutorials'
}

export enum teamRoutesEnum {
  overview = 'overview',
  create = 'create',
  specific = ':id/overview',
  info = ':id/info',
  players = ':id/players',
  matches = ':id/matches',
  searchTeam = 'search',
}