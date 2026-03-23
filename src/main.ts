
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Importa le rotte da app.routes.ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
  ]
};