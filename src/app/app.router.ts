import { provideRouter, RouterConfig  } from '@angular/router';
import { ViewComponent } from './view';

export  const routes: RouterConfig = [
    { path: '', component: ViewComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];