import { Component } from '@angular/core';
import { ProductService } from '../shared/data-manager/product.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'dp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any;
  login = false;
  products: any[] = [];

  constructor(
    private socialAuthService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit() {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      this.login = true;
      this.user = userData;
    });
  }

  searchProduct(product: string): void {
    this.productService.search(product).then((result)=> {
      console.log(result, 'result');
      this.products = result.data;
    });
  }

  logout() {
    this.login = false;
  }
}
