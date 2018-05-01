import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/users.model';
import { Observable } from 'rxjs/Observable';
import { IFullUserInfo } from '../../shared/interfaces/user.interface';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    public userKey: string;
    public user: Observable<User>;

    constructor(private route: ActivatedRoute,
                private usersService: UsersService) {
    }

    ngOnInit() {
        this.userKey = this.route.snapshot.params.key;
        this.user = this.usersService.getUserByUID(this.userKey);
    }

    // onUpdate() {
    //     this.users.updateUser(this.userKey, {
    //         key: this.userKey,
    //         email: 'testEditEmail',
    //         gender: 'male',
    //         phone: '9512545021',
    //         first_name: 'test',
    //         last_name: 'editor',
    //     });
    // }

    editUser(user: IFullUserInfo) {
        console.log('editing');
        console.log(user);
        this.usersService.updateUser(this.userKey, user);
    }
}
