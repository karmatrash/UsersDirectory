import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/users.model';
import ColumnSettings from '../../shared/models/layout.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    public users: Array<User>;
    public usersSettings: Array<ColumnSettings> = [
        {
            primaryKey: 'first_name',
            header: 'Name'
        },
        {
            primaryKey: 'last_name',
            header: 'Surname'
        },
        {
            primaryKey: 'email',
            header: 'Email'
        },
        {
            primaryKey: 'phone',
            header: 'Phone'
        },
        {
            primaryKey: 'created',
            header: 'Registered'
        },
        {
            primaryKey: 'key',
            header: 'Actions'
        }
    ];

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService.users
            .subscribe((users) => {
                this.users = users;
            });
    }
}
