import { Component, OnInit } from '@angular/core';

import { RolesService } from './roles.service';
import { Role } from './role.model';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    public roles: Array<Role>;

    constructor(public rolesService: RolesService) {}

    ngOnInit() {
        this.rolesService.roles
            .subscribe((roles) => {
                this.roles = roles;
            });
    }
}
