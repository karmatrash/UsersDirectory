import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../../models/users.model';
import { UserForms } from '../../user.forms';
import { Observable } from 'rxjs/Observable';
import { IFullUserInfo } from '../../interfaces/user.interface';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    @Input() target: string;
    @Input() data: Observable<User>;

    constructor(private forms: UserForms) {
    }

    ngOnInit() {
        this.userForm = this.forms.getUserForm();

        console.log('User-form component got next data:');
        console.log(this.target);

        if (this.data) {
            this.data.subscribe((user) => {
                this.userForm.setValue(user);
                console.log(this.userForm);
            });
        }
    }

    onSubmitForm(v: IFullUserInfo) {
        console.log(v);
    }
}
