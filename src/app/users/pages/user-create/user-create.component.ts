import { Component, OnInit } from '@angular/core';

import { IFullUserInfo } from '../../shared/interfaces/user.interface';
import { UsersService } from '../../shared/users.service';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

    constructor(private usersService: UsersService) {}

    ngOnInit() {}

    createUser(v: IFullUserInfo) {
        console.log('creation');
        console.log(v);
        this.usersService.createUser(v);
    }
}
