import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';
import { StaticTranslateLoader } from './i18n/static-translate.loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      lang: 'fr',
      fallbackLang: 'fr',
      // Fabrique plutôt que classe : ngx-translate détecte une classe par son code source,
      // ce qui échoue une fois le code minifié (« class{ » sans espace).
      loader: provideTranslateLoader(() => new StaticTranslateLoader())
    })
  ]
};
