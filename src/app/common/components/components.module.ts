import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

let components = [
    HeaderComponent
];

@NgModule({
    imports: [],
    declarations: [
        ...components
    ],
    exports: [
        ...components
    ]
})
export class ComponentsModule { }
