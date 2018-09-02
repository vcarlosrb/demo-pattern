import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './common/components/components.module';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';

let modules = [
  HomeModule,
  AuthenticationModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ComponentsModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
