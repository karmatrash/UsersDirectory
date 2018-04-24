import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss'],
    providers: [UsersService]
})
export class UsersListComponent implements OnInit {

    constructor(private http: HttpClient,
                private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.users.subscribe(users => {
            console.log('Subscription on Observable users');
            console.log(users);
        });
    }
}
