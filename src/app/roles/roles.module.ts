import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { RolesComponent } from './roles.component';

const rolesRoutes: Routes = [
    {path: '', component: RolesComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(rolesRoutes),
        SharedModule
    ],
    declarations: [
        RolesComponent
    ]
})
export class RolesModule {
}
