import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const AUTHENTICATION_ROUTES: Routes = [
    {
        component: LoginComponent,
        path: ''
    },
    {
        component: HomeComponent,
        path: 'home'
    }
];
