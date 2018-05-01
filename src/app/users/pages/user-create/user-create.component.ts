import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UserForms } from '../../shared/user.forms';
import { UsersService } from '../../shared/users.service';
import { IFullUserInfo } from '../../shared/interfaces/user.interface';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

    constructor(private usersService: UsersService) {}

    ngOnInit() {}

    createUser(v: IFullUserInfo) {
        console.log(v);
        this.usersService.createUser(v);
    }
}
