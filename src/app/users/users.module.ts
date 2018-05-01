import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersService } from './shared/users.service';
import { UsersComponent } from './users.component';
import { UserForms } from './shared/user.forms';
import { INgxSelectOptions, NgxSelectModule } from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
    optionValueField: 'id',
    optionTextField: 'name'
};

const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {path: '', component: UsersListComponent},
            {path: 'create', component: UserCreateComponent},
            {path: ':key', component: UserDetailsComponent},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(usersRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxSelectModule.forRoot(CustomSelectOptions)
    ],
    declarations: [
        UsersComponent,
        UsersListComponent,
        UserDetailsComponent,
        UserCreateComponent,
        UserFormComponent
    ],
    providers: [
        UserForms
    ]
})
export class UsersModule {
}
