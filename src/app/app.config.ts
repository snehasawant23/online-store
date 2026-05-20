import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Global browser error handling
    provideBrowserGlobalErrorListeners(),

    // Optimize Angular change detection performance
    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    // Configure Angular Router
    provideRouter(
      routes,

      // Automatically bind route parameters to component inputs
      withComponentInputBinding(),

      // Enable scroll restoration and anchor scrolling
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    )
  ]
};