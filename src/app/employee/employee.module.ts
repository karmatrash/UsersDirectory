import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRootComponent } from './employee-root.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './pages/employee-create/employee-create.component';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import { EmployeeForm } from './shared/employee.form';

const CustomSelectOptions: INgxSelectOptions = {
    optionValueField: 'id',
    optionTextField: 'name'
};

const employeeRoutes: Routes = [
    {
        path: '',
        component: EmployeeRootComponent,
        children: [
            {path: '', component: EmployeeListComponent},
            {path: 'create', component: EmployeeCreateComponent},
            {path: ':key', component: EmployeeDetailsComponent},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(employeeRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxSelectModule.forRoot(CustomSelectOptions)
    ],
    declarations: [
        EmployeeRootComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent,
        EmployeeCreateComponent,
        EmployeeFormComponent
    ],
    providers: [
        EmployeeForm
    ]
})
export class EmployeeModule {
}
