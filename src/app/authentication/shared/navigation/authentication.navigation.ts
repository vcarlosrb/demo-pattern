import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationNavigation {
    constructor(
        private _router: Router
    ) { }

    presentLoginView(): void {
        this._router.navigate(['/login']);
    }

    presentSignupView(): void {
        this._router.navigate(['/signup']);
    }

    presentHomeView(): void {
        this._router.navigate(['/']);
    }

}
