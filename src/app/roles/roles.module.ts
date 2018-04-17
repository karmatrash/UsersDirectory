import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RolesComponent } from './roles.component';

const rolesRoutes: Routes = [
    {path: '', component: RolesComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(rolesRoutes)
    ],
    declarations: [
        RolesComponent
    ]
})
export class RolesModule {
}
