import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DemoHttpModule } from './common/http/http.module';
import { APP_ROUTES } from './app.routes';
import { ComponentsModule } from './common/components/components.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';

let modules = [
  AuthenticationModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DemoHttpModule,
    RouterModule.forRoot(APP_ROUTES),
    ComponentsModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
