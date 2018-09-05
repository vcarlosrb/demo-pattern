import { Component } from '@angular/core';
import { authConfig } from '../../common/auth/auth.config';
import { OAuthService } from 'angular-oauth2-oidc';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFailed: boolean = false;
  userProfile: object;
  access_token: string;

  constructor(
    private oauthService: OAuthService,
    private socialAuthService: AuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit() {
    this.access_token = this.oauthService.getAccessToken();
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
      }
    );
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
