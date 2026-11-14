import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { withHashLocation, withInMemoryScrolling, provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }))
  ]
};
