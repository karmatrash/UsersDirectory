import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IFullUserInfo } from '../../interfaces/user.interface';
import { User } from '../../models/users.model';
import { UserForms } from '../../user.forms';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    userForm: FormGroup;
    gender: Array<string> = environment.gender;

    /**
     * Input param target - defines the sense of submitting - 'create' | 'edit'
     * Input param data - defines the data to be displayed in form - User | none
     */
    @Input() target: string;
    @Input() data: Observable<User>;

    /**
     * Outputting event with two cases for both possible parents - UsersCreate | UsersDetails
     * @type {EventEmitter<any>}
     */
    @Output() formSubmitted = new EventEmitter();

    constructor(private forms: UserForms) {
    }

    ngOnInit() {
        this.userForm = this.forms.getUserForm();
        console.log(this.target);

        if (this.data) {
            this.data.subscribe((user) => {
                this.userForm.setValue(user);
            });
        }
    }

    onSubmitForm(v: IFullUserInfo) {
        console.log(v);
        switch (this.target) {
            case 'edit':
                v.updated = moment().format('HH:mm DD.MM.YYYY');
                break;
            case 'create':
                v.created = moment().format('HH:mm DD.MM.YYYY');
                break;
        }
        this.formSubmitted.emit(v);
    }
}
