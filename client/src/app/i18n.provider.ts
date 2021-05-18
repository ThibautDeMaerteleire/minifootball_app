import { ITranslationService } from 'angular-i18next';

export const appInit = (i18next: ITranslationService) => {
  return () => i18next.init({
      whitelist: ['en', 'nl', 'fr', 'de'],
      fallbackLng: 'en',
      debug: true,
      returnEmptyString: false,
      resources: {
        nl: {
        }
      },
      ns: [
        'translation',
        'validation',
        'error'
      ],
    });
};

export const localeIdFactory = (i18next: ITranslationService) => {
  return i18next.language;
};

export const I18N_PROVIDERS = [
// {
//   provide: APP_INITIALIZER,
//   useFactory: appInit,
//   deps: [I18NEXT_SERVICE],
//   multi: true
// },
// {
//   provide: LOCALE_ID,
//   deps: [I18NEXT_SERVICE],
//   useFactory: localeIdFactory
// }
];
