import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppNavComponent } from './app-nav/app-nav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AppNavComponent
    ],
    declarations: [
        AppNavComponent
    ]
})
export class CoreModule {
}
