import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { EmployeeRootComponent } from './employee/employee-root.component';
import { EmployeeListComponent } from './employee/pages/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/pages/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './employee/pages/employee-create/employee-create.component';

const rootRoutes: Routes = [
    { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
    { path: 'roles', loadChildren: 'app/roles/roles.module#RolesModule' },
    { path: 'employees', loadChildren: 'app/employee/employee.module#EmployeeModule' },
    { path: '',     redirectTo: 'employees', pathMatch: 'full' },
    { path: '**',   redirectTo: 'employees' },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes),
        CoreModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    exports: [
        CoreModule
    ],
    providers: [AngularFireDatabase],
    bootstrap: [AppComponent]
})
export class AppModule {
}
