import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersService } from './shared/users.service';
import { UsersComponent } from './users.component';
import { UserForms } from './shared/user.forms';

const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {path: '', component: UsersListComponent},
            {path: ':id', component: UserDetailsComponent},
            {path: 'new', component: UserCreateComponent},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(usersRoutes),
        SharedModule
    ],
    declarations: [
        UsersComponent,
        UsersListComponent,
        UserDetailsComponent,
        UserCreateComponent
    ],
    providers: [
        UsersService,
        UserForms
    ]
})
export class UsersModule {
}
