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
  error = 'error/:id'
}

export enum appRoutesEnum {
  dashboard = 'dashboard',
  teams = 'teams',
  team_info = 'teams/:id/info',
  team_specific = 'team/:id/overview',
  matches = 'matches',
  messages = 'messages',
  birthdays = 'birthdays',
  updates = 'updates',
  tutorials = 'tutorials'
}
