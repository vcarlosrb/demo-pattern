import { Component } from '@angular/core';
import { authConfig } from '../../common/auth/auth.config';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFailed: boolean = false;
  userProfile: object;
  access_token: string;

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit() {
    this.access_token = this.oauthService.getAccessToken();
  }

  login() {
    this.oauthService.initImplicitFlow('/some-state;p1=1;p2=2');
    // the parameter here is optional. It's passed around and can be used after logging in
  }

  logout() {
    this.oauthService.logOut();
  }

  loadUserProfile(): void {
    this.oauthService.loadUserProfile().then(up => (this.userProfile = up));
  }

}
