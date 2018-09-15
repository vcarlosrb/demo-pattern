import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTHENTICATION_ROUTES } from './authentication.routes';
import { AuthenticationNavigation } from './shared/navigation/authentication.navigation';

// Modules
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

// Services
import { ProductService } from './shared/data-manager/product.service';

let modules = [
    LoginModule,
    HomeModule
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
        ProductService
    ]
})
export class AuthenticationModule { }