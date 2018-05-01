import { Component, OnInit } from '@angular/core';

import { RolesService } from './roles.service';
import { Role } from './role.model';

import ColumnSettings from '../users/shared/models/layout.model';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    public roles: Array<Role>;
    public rolesSettings: Array<ColumnSettings> = [
        {
            primaryKey: 'title',
            header: 'Title'
        },
        {
            primaryKey: 'description',
            header: 'Description'
        }
    ];

    constructor(public rolesService: RolesService) {}

    ngOnInit() {
        this.rolesService.roles
            .subscribe((roles) => {
                this.roles = roles;
            });
    }
}
