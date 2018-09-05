import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTHENTICATION_ROUTES } from './authentication.routes';
import { AuthenticationNavigation } from './shared/navigation/authentication.navigation';

// Modules
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SignupModule } from './signup/signup.module';

// Services
import { UserService } from './shared/data-manager/user.service';

let modules = [
    LoginModule,
    SignupModule,
    HomeModule
];

let services = [
    UserService
];

@NgModule({
    imports: [
        RouterModule.forChild([
            ...AUTHENTICATION_ROUTES
        ]),
        ...modules 
    ],
    declarations: [],
    providers: [
        AuthenticationNavigation,
        ...services
    ]
})
export class AuthenticationModule { }