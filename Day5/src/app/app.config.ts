import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)]
};



// control-flow - ngIf, ngFor - @if @for
// standalone components - angular 19 standalone by default
// injection context, injec method (instead of constructor)
// signal - signal set, get , update, compouted, effect
// signalStore
// input, input.required, output
// model (use moder for 2 ways data binding)
