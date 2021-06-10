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
  player = 'player/:id',
  me = 'me',
  tutorials = 'tutorials',
  team = 'team/:id',
}

export enum teamRoutesEnum {
  overview = 'overview',
  create = 'create',
  searchTeam = 'search',
}

export enum detailTeamRoutesEnum {
  overview = 'overview',
  ranking = 'ranking',
  matches = 'matches',
  practice_matches = 'practice-matches',
  'line-ups' = 'line-ups',
  players = 'players',
  add_players = 'add-players',
  settings = 'settings',
}
