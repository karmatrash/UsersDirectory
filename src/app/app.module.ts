import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

const rootRoutes: Routes = [
    { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
    { path: 'roles', loadChildren: 'app/roles/roles.module#RolesModule' },
    { path: '',     redirectTo: 'users', pathMatch: 'full' },
    { path: '**',   redirectTo: 'users' },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes),
        SharedModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
