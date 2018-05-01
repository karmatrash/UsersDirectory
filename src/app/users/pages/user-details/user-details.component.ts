import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/users.model';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    public userKey: string;

    public user: User;

    constructor(private route: ActivatedRoute,
                private users: UsersService) {
    }

    ngOnInit() {
        this.userKey = this.route.snapshot.params.key;
        console.log(this.userKey);
    }

    onUpdate() {
        this.users.updateUser(this.userKey, {
            key: this.userKey,
            id: 123,
            email: 'testEditEmail',
            gender: 'male',
            phone: '9512545021',
            first_name: 'test',
            last_name: 'editor',
        });
    }
}
