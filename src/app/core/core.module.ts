import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { EmployeeService } from '../employee/shared/employee.service';
import { RolesService } from '../roles/roles.service';

import { AppNavComponent } from './app-nav/app-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        AngularFirestoreModule
    ],
    exports: [
        AppNavComponent,
        FooterComponent
    ],
    declarations: [
        AppNavComponent,
        FooterComponent
    ],
    providers: [
        RolesService,
        EmployeeService
    ]
})
export class CoreModule {
}
