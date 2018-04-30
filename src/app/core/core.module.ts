import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppNavComponent } from './app-nav/app-nav.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        AngularFirestoreModule
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
