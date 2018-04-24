import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppNavComponent } from './app-nav/app-nav.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
    apiKey: 'AIzaSyCQJY0AC9950t7QmhgpHjgQ5X_USiEyWe4',
    authDomain: 'users-directory.firebaseapp.com',
    databaseURL: 'https://users-directory.firebaseio.com',
    projectId: 'users-directory',
    storageBucket: 'users-directory.appspot.com',
    messagingSenderId: '1076393203749'
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        AngularFireModule.initializeApp(firebaseConfig),
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
