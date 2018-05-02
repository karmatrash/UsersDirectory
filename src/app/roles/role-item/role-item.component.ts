import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Role } from '../role.model';

@Component({
    selector: 'app-role-item',
    templateUrl: './role-item.component.html',
    styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent implements OnInit {

    /**
     * Event for letting outer container with roleService instance know we submitted roleCreation
     * @type {EventEmitter<any>}
     */
    @Output() roleCreated = new EventEmitter();

    /**
     * Template driven form NgModel-ing object - Role
     */
    public role: Role = {
        title: '',
        description: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Submit button event passing THIS template driven object to parent
     */
    onCreateRole() {
        console.log(this.role);
        this.roleCreated.emit(this.role);
        this.role = {
            title: '',
            description: ''
        };
    }
}
