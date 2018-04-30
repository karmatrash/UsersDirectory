import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/users.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    public users: Array<User>;

    constructor(private usersService: UsersService) {}

    ngOnInit() {
        this.usersService.users
            .subscribe((users) => {
                this.users = users;
            });
    }
}
