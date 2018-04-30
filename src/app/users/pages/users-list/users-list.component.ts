import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/users.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    public users: Array<User>;

    constructor(private usersService: UsersService,
                private router: Router) {}

    ngOnInit() {
        this.usersService.users
            .subscribe((users) => {
                this.users = users;
            });
    }

    onCreateUser() {
        console.log('create');
        this.router.navigateByUrl('/users/new');
    }
}
