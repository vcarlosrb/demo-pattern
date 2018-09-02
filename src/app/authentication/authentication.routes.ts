import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AUTHENTICATION_ROUTES: Routes = [
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: SignupComponent,
        path: 'signup'
    }
];