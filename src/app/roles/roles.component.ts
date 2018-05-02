import { Component, OnInit } from '@angular/core';

import { RolesService } from './roles.service';
import { Role } from './role.model';

import ColumnSettings from '../users/shared/models/layout.model';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    public roles: Array<Role>;
    public rolesSettings: Array<ColumnSettings> = environment.rolesSettings;

    constructor(public rolesService: RolesService) {}

    ngOnInit() {
        this.rolesService.roles
            .subscribe((roles) => {
                this.roles = roles;
            });
    }

    createRole(v: Role) {
        console.log('creation');
        console.log(v);
        this.rolesService.createRole(v);
    }
}
