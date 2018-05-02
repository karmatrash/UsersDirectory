import { Component, OnInit } from '@angular/core';

import { RolesService } from './roles.service';
import { Role } from './role.model';

import ColumnSettings from '../employee/shared/models/layout.model';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    /**
     * roles - async Array subscribed to roleDataService changes - Array<Role>
     * rolesSettings - table view params taken from environment - Array<ColumnSettings>
     */
    public roles: Array<Role>;
    public rolesSettings: Array<ColumnSettings> = environment.rolesSettings;

    constructor(public rolesService: RolesService) {}

    ngOnInit() {
        this.rolesService.roles
            .subscribe((roles) => {
                this.roles = roles;
            });
    }

    /**
     * Event we listen from child form creation of - Role
     * @param {Role} v
     */
    createRole(v: Role) {
        this.rolesService.createRole(v);
    }
}
