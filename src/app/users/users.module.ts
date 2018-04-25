import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersService } from './shared/users.service';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';

const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {path: '', component: UsersListComponent},
            {path: ':id', component: UserDetailsComponent},
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
        UserDetailsComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {
}
