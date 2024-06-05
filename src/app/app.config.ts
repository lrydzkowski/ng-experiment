import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { BASE_PATH } from 'src/_generated/lexica-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      domain: environment.AUTH0_DOMAIN,
      clientId: environment.AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: environment.AUTH0_REDIRECT_URI,
        scope: environment.AUTH0_SCOPE,
        audience: environment.AUTH0_AUDIENCE,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.LEXICA_API_HOST}/words/*`,
          },
        ],
      },
    }),
    { provide: BASE_PATH, useValue: environment.LEXICA_API_HOST },
  ],
};
