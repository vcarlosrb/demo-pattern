import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const AUTHENTICATION_ROUTES: Routes = [
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: SignupComponent,
        path: 'signup'
    },
    {
        component: HomeComponent,
        path: 'home'
    }
];
