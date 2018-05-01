import { Component, OnInit } from '@angular/core';

import { RolesService } from './roles.service';
import { Role } from './role.model';

import ColumnSettings from '../users/shared/models/layout.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { environment } from '../../environments/environment';

import { RoleModalComponent } from './role-modal/role-modal.component';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    public bsModalRef: BsModalRef;
    public roles: Array<Role>;
    public rolesSettings: Array<ColumnSettings> = environment.rolesSettings;

    constructor(public rolesService: RolesService,
                private modalService: BsModalService) {}

    openModalWithComponent() {
        const initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(RoleModalComponent, {initialState});
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    ngOnInit() {
        this.rolesService.roles
            .subscribe((roles) => {
                this.roles = roles;
            });
    }
}
