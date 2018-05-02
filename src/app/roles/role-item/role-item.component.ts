import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Role } from '../role.model';

@Component({
    selector: 'app-role-item',
    templateUrl: './role-item.component.html',
    styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent implements OnInit {

    @Output() roleCreated = new EventEmitter();

    public role: Role = {
        title: '',
        description: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    onCreateRole() {
        console.log(this.role);
        this.roleCreated.emit(this.role);
        this.role = {
            title: '',
            description: ''
        };
    }
}
