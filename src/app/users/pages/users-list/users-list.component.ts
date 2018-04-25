import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    constructor(
        public readonly usersService: UsersService) {
    }

    ngOnInit() {}
}
