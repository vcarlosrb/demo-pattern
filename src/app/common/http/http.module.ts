import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularHttp } from './angular-http';

@NgModule(
  {
    imports: [
        HttpModule
    ],
    providers: [
        AngularHttp
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
  }
)
export class DemoHttpModule {}